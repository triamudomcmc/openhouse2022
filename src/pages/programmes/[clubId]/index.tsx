import { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useAuth } from '@lib/auth'
import { MainRenderer } from '@components/cms/mainRender'

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    return {
        props: {
            clubId: params?.clubId,
        },
    }
}

const LandingEdit = ({clubId}) => {
    const {user} = useAuth()
    const [info, setInfo] = useState<{[key: string]: string}>({})
    const [status, setStatus] = useState('')

    useEffect(() => {
        const fetchInitialData = async () => {
            const permBody = JSON.stringify({executerUid: user?.uid})
            let dataFetch
            if (user?.club == clubId || user?.roles?.hasOwnProperty('tucmc')) {
                const res = await fetch(`/api/${clubId}/handlers`, {
                method: 'POST',
                body: JSON.stringify({
                    executerUid: user?.uid,
                    act: 'pendingcontent'
                })
                })
                
                setStatus('Pending')
                dataFetch = await res?.json()
            }

            if (status == '') {
              const res = await fetch(`/api/${clubId}/handlers`, {
                method: 'POST',
                body: JSON.stringify({
                    executerUid: user?.uid,
                    act: 'prodcontent'
                })
              })
              dataFetch = await res?.json()
              setStatus('Approved')
            }
            
            dataFetch ? setInfo(dataFetch.Info != null ? dataFetch.Info : '') : null
        }
        fetchInitialData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [user?.uid, status])
  
    if ((user?.club == clubId || user?.roles.hasOwnProperty('tucmc')) && info ) return (
        <div>
            <div className='flex flex-col justify-center h-screen w-[310px] lg:w-[691px] mx-auto text-center'>
                <p className='text-[15.3px] leading-[18px] lg:text-[30px] lg:leading-[36px]'>ข้อมูลหน่วยงาน</p>
                <h1 className='text-[30px] leading-[36px] lg:text-[64px] lg:leading-[78px] font-[700] mt-[59.4px] lg:mt-[56px] text-blue-edit-300'>{info?.nameTH}</h1>
                <h1 className='text-[22.9px] leading-[28px] lg:text-[45px] lg:leading-[55px] mt-[3.23px] lg:mt-0 font-[500] opacity-60'>{info?.nameEN}</h1>
                <h1 className='text-[16.35px] leading-[20px] lg:text-[32px] lg:leading-[39px] mt-[4.7px] lg:mt-0 font-[500] opacity-60'>สายการเรียน {info?.member} คน</h1>
                <hr className="border-[0.96px] lg:border-[2px] mt-[23.6px] lg:mt-[42px]" />
                <div className='lg:flex lg:mt-[52px] lg:h-[116px]'>
                    <div className='flex flex-col justify-center text-center lg:text-left lg:w-[331px] mt-[37px] lg:mt-0'>
                        <h1 className='text-[20.7px] leading-[25px] lg:text-[34px] lg:leading-[41px] font-[400]'>แก้ไขข้อมูลหน่วยงาน</h1>
                        <p className='text-[15.2px] leading-[18.4px] lg:text-[25px] lg:leading-[30px] font-[400] lg:mt-[7px] text-[#5C5C5C] opacity-60'>ข้อมูลจะแสดงผลในหน้าเว็บไซต์</p>
                    </div>
                    <div className='border-[2px] border-[#5C5C5C] opacity-60 max-lg:hidden' />
                    <div className='lg:w-[362px] justify-center flex flex-col'>
                        <div className='relative flex flex-row justify-end max-lg:mt-[23.2px] max-lg:mx-auto'>
                            <Link href={`/programmes/${[clubId]}/edit`}>
                                <button className='w-[203.7px] h-[38.3px] lg:w-[335px] lg:h-[63px] bg-blue-edit-300 rounded-[13.4px] lg:rounded-[23.5px]'>
                                    <p className='text-center text-[19.4px] leading-[24px] lg:text-[32px] lg:leading-[39px] font-500 text-white'>แก้ไข</p>
                                </button>
                            </Link>
                        </div>
                        <div className='w-[220px] lg:w-[335px] ml-[54px] lg:ml-[29px]'>
                            <p className='text-left text-[16px] leading-[21px] lg:text-[24px] lg:leading-[30px] mt-[25.7px] lg:mt-[9px] text-[#5C5C5C] flex flex-row'>สถานะ : 
                            <span className={`ml-[5px] ${status == 'Approved'? 'text-[#19C57C]': status == 'Pending' ? 'text-[#FCB52B]': 'text-[#E80808]'} flex flex-row items-center`}> 
                            <svg className='max-lg:hidden' width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill={`${status == 'Approved'? '#19C57C': status == 'Pending' ? '#FCB52B': '#E80808'}`}/>
                            </svg>
                            <svg className='lg:hidden' width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill={`${status == 'Approved'? '#19C57C': status == 'Pending' ? '#FCB52B': '#E80808'}`}/>
                            </svg>
                            <p className='ml-[3px] lg:ml-[5px]'>{status == 'Approved'? 'ผ่านการตรวจสอบ': status == 'Pending' ? 'อยู่ระหว่างการตรวจสอบ': 'ไม่ผ่านการตรวจสอบ'}</p>
                            </span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    // if (info) return (
    //     <div className='flex flex-col max-lg:bg-gradient-edit lg:bg-cream'>
    //         <MainRenderer
    //             // editable={false}
    //             info={info}
    //             contacts={contacts}
    //             clubArticle={clubArticle}
    //             clubArticleDes={clubArticleDes}
    //             advantage={advantage}
    //             advantageDes={advantageDes}
    //             work={work}
    //             workDes={workDes}
    //             reviews={reviews}
    //         />
    //     </div>
    // )

    return (
        <>
            <h3>{clubId} not appeared to have article</h3>
        </>
    )
}

export default LandingEdit
