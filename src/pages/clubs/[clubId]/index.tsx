import { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useAuth } from '@lib/auth'

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
          const res = await fetch(`/api/${clubId}/pendingcontent`, {
            method: 'POST',
            body: permBody
          })

          setStatus('Pending')
          
          let dataFetch = await res?.json()
          if (dataFetch.nonexisted) {
            const res = await fetch(`/api/${clubId}/prodcontent`, {
              method: 'POST',
              body: permBody
            })
            dataFetch = await res?.json()

            setStatus('Approved')
          }
  
          setInfo(dataFetch.Info != null ? dataFetch.Info : '')
        }
        if (user?.uid && user?.club == clubId || user?.roles?.hasOwnProperty('tucmc')) fetchInitialData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [user?.uid])
  
    if ((user?.club == clubId || user?.roles.hasOwnProperty('tucmc')) && info ) return (
        <div>
            <div className='flex flex-col justify-center h-screen w-[310px] lg:w-[691px] mx-auto text-center'>
                <p className='text-[15.3px] leading-[18px] lg:text-[30px] lg:leading-[36px]'>ข้อมูลหน่วยงาน</p>
                <h1 className='text-[30px] leading-[36px] lg:text-[64px] lg:leading-[78px] font-[700] mt-[59.4px] lg:mt-[56px] text-blue-edit-300'>{info?.nameTH}</h1>
                <h1 className='text-[22.9px] leading-[28px] lg:text-[45px] lg:leading-[55px] mt-[3.23px] lg:mt-0 font-[500] opacity-60'>{info?.nameEN}</h1>
                <h1 className='text-[16.35px] leading-[20px] lg:text-[32px] lg:leading-[39px] mt-[4.7px] lg:mt-0 font-[500] opacity-60'>ชมรม {info?.member} คน</h1>
                <hr className="border-[0.96px] lg:border-[2px] mt-[23.6px] lg:mt-[42px]" />
                <div className='lg:flex lg:mt-[52px] lg:h-[116px]'>
                    <div className='flex flex-col justify-center text-center lg:text-left lg:w-[331px] mt-[37px] lg:mt-0'>
                        <h1 className='text-[20.7px] leading-[25px] lg:text-[34px] lg:leading-[41px] font-[400]'>แก้ไขข้อมูลหน่วยงาน</h1>
                        <p className='text-[15.2px] leading-[18.4px] lg:text-[25px] lg:leading-[30px] font-[400] lg:mt-[7px] text-[#5C5C5C] opacity-60'>ข้อมูลจะแสดงผลในหน้าเว็บไซต์</p>
                    </div>
                    <div className='border-[2px] border-[#5C5C5C] opacity-60 max-lg:hidden' />
                    <div className='lg:w-[362px] justify-center flex flex-col'>
                        <div className='relative flex flex-row justify-end max-lg:mt-[23.2px] max-lg:mx-auto'>
                            <Link href={`/clubs/${[clubId]}/edit`}>
                                <button className='w-[203.7px] h-[38.3px] lg:w-[335px] lg:h-[63px] bg-blue-edit-300 rounded-[13.4px] lg:rounded-[23.5px]'>
                                    <p className='text-center text-[19.4px] leading-[24px] lg:text-[32px] lg:leading-[39px] font-500 text-white'>แก้ไข</p>
                                </button>
                            </Link>
                        </div>
                        <div className='lg:w-[335px] ml-[54px] lg:ml-[29px]'>
                            <p className='text-left text-[17px] leading-[21px] lg:text-[28px] lg:leading-[33px] mt-[25.7px] lg:mt-[9px] text-[#5C5C5C]'>สถานะ : {status}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <>
            <h3>{clubId} not appeared to have article</h3>
        </>
    )
}

export default LandingEdit
