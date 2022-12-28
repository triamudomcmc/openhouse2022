import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useAuth } from '@lib/auth'
import { MainRenderer } from '@components/cms/mainRender'
import { CheckIcon, XIcon } from '@heroicons/react/outline'
import { HamburgerButton } from '@components/common/Nav/Hamburger'
import { Navbar } from '@components/common/Nav/Navbar'

export default function AdminIndex() {
    const {user} = useAuth()
    const [load, setLoad] = useState<boolean>(true)
    const [pendingArticleList, setPendingArticleList] = useState<Array<{[key: string]: string}>>([])
    const [focusClub, setFocusClub] = useState<string>('')
    const [sus, setSus] = useState(false)
    const [name, setName] = useState('')
    const [focusType, setFocusType] = useState('')

    const [type, setType] = useState<string>('')
    const [info, setInfo] = useState<{[key: string]: string}>({})
    const [contacts, setContacts] = useState({})
    const [clubArticle, setClubArticle] = useState('')
    const [clubArticleDes, setClubArticleDes] = useState('')
    const [advantage, setAdvantage] = useState('')
    const [advantageDes, setAdvantageDes] = useState('')
    const [work, setWork] = useState('')
    const [workDes, setWorkDes] = useState('')
    const [reviews, setReviews] = useState([])

    const [imagesLink, setImagesLink] = useState<{[key: string]: string}>({})
    const [reviewImagesLink, setReviewImagesLink] = useState({})

    const panel = useRef(null)
    const [reveal, setReveal] = useState(false)
    const variants = {
        close: {
            opacity: 0,
          },
        open: {
          opacity: 1,
        },
      }


    useEffect(() => {
        const fetchPendingArticleList = async () => {
            if (user?.uid) {
                const res = await fetch(`/api/admin/getClubPendArticleList`, {
                    method: 'POST',
                    body: JSON.stringify({
                        executerUid: user?.uid
                    })
                })
                const val = await res.json()
                setPendingArticleList(val?.value)
                setLoad(false)
            }
        }
        if (user?.uid && user?.roles?.hasOwnProperty('tucmc')) fetchPendingArticleList()
    }, [user?.roles, user?.uid])

    useEffect(() => {
        const fetchClubInfo = async () => {

            if (user?.uid && focusClub != '') {
                const res = await fetch(`/api/${focusClub}/handlers`, {
                    method: 'POST',
                    body: JSON.stringify({
                      executerUid: user?.uid,
                      act: 'pendingcontent'
                    })
                  })
                const dataFetch = await res.json()

                if (dataFetch.nonexisted) setSus(true)
                if (!sus) {
                    setInfo(dataFetch.Info != null ? dataFetch.Info : '')
                    setContacts(dataFetch?.Contacts != null ? dataFetch.Contacts : {})
                    setClubArticle(dataFetch?.ClubArticle)
                    setClubArticleDes(dataFetch?.ClubArticleDes)
                    setAdvantage(dataFetch?.Advantage)
                    setAdvantageDes(dataFetch?.AdvantageDes)
                    setWork(dataFetch?.Work)
                    setWorkDes(dataFetch?.WorkDes)
                    setReviews(dataFetch?.Reviews != null ? dataFetch.Reviews : [])
                    setType(dataFetch?.type ?? '')
                    setReviewImagesLink(dataFetch?.reviewImageUrl ?? {})
                    setImagesLink(dataFetch?.imageUrl ?? {})
                }
            }
        }
        fetchClubInfo()
    }, [focusClub, sus, user?.uid])

    async function queryClubInfo(clubId: string) {
        if(focusClub != clubId) {
            setFocusClub(clubId)
        }
        else {
            setFocusClub('')
        }
    }

    async function approve(clubId: string) {
        const approve = async () => {
            const res = await fetch(`/api/${focusClub}/clubApprArticle`, {
                method: 'POST',
                body: JSON.stringify({
                    executerUid: user?.uid
                })
            })
        }
        approve()
    }

    async function decline(clubId: string, key: number) {
        const decline = async () => {
            const res = await fetch(`/api/${focusClub}/clubDecArticle`, {
                method: 'POST',
                body: JSON.stringify({
                    executerUid: user?.uid
                })
            })
        }
        decline()
        pendingArticleList.splice(key, 1)
        setFocusClub('')
    }

    if (user?.roles?.hasOwnProperty('tucmc')) return (
        <div className='flex justify-center mb-[100px]'>
            <div className='mt-[150px] lg:mt-[249px] max-w-[1151px] w-full mx-[100px]'>
                <div className='relative'>
                    <h1 className='lg:text-[36px] font-[700] text-center'>ตรวจสอบข้อมูลหน่วยงานบนเว็บไซต์</h1>
                    <div className='lg:mt-[103px] mt-[50px] flex justify-between'>
                        <div className='lg:text-[30px] font-[500] flex'>
                            <svg className='mr-4 ' width="23" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill='#FCB52B'/>
                            </svg>
                            <p>หน่วยงานที่มีสถานะรอการตรวจสอบ</p>
                        </div>
                        <div className='flex'>
                            <p className='text-[26px] leading-[45px] mx-[20px]'>{focusType == 'club' ? 'ชมรม' : focusType == 'organization' ? 'องค์กรนักเรียน': focusType == 'programmes' ? 'สายการเรียน' : 'all'}</p>
                            <HamburgerButton
                            classname='text-black'
                            reveal={reveal}
                            toggle={() => {
                            setReveal(!reveal)
                            }}
                            />
                        </div>
                    </div>
                        <motion.nav
                        ref={panel}
                        animate={reveal ? "open" : "close"}
                        variants={variants}
                        className="absolute z-[99] right-0"
                         >
                            <div className={`flex flex-col w-full text-black bg-white bg-opacity-90 font-display text-center`}>
                                <div className='text-[20px] font-[500] px-[20px] py-[5px]'>
                                    <button className='hover:underline' onClick={()=>setFocusType('')}>all</button>
                                </div>
                                <div className='text-[20px] font-[500] px-[20px] py-[5px]'>
                                    <button className='hover:underline' onClick={()=>setFocusType('club')}>ชมรม</button>
                                </div>
                                <div className='text-[20px] font-[500] px-[20px] py-[5px]'>
                                    <button className='hover:underline' onClick={()=>setFocusType('programmes')}>สายการเรียน</button>
                                </div>
                                <div className='text-[20px] font-[500] px-[20px] py-[5px]'>
                                    <button className='hover:underline' onClick={()=>setFocusType('organization')}>องค์กรนักเรียน</button>
                                </div>
                            </div>
                        </motion.nav>
                </div>
                <hr className='lg:border-[1px] lg:mt-[23px]'/>
                {load
                ? <div>Loading...</div>
                : null}
                {pendingArticleList.map((val, key) => {
                if((val.type == focusType || focusType == '') && val.id != 'ก30930'){
                return (
                    <div key={val.id} className='mt-6'>
                            <div className='flex items-center lg:h-[106px] border-2 border-gray-300 rounded-[20px]'>
                                <div className='flex justify-between w-full'>
                                    <div className='ml-[45px] flex'>
                                        {val.type == 'club' &&
                                            <div className='flex'>
                                                <h5 className='lg:text-[25px] lg:leading-[50px]'>{val.id}</h5>
                                                <p className='mx-[10px] lg:text-[25px] lg:leading-[50px]'>-</p>
                                            </div>
                                        }
                                        <h5 className='lg:text-[25px] lg:leading-[50px]'>{val.nameTH}</h5>
                                    </div>
                                    <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='lg:w-[228px] h-[50px] rounded-xl bg-blue-edit-300 active:bg-blue-text text-center mr-[25px] '
                                    onClick={() => queryClubInfo(val.id)}>
                                        <p className='text-white lg:text-[20px] lg:leading-[50px]'>ดูข้อมูลหน่วยงาน</p>
                                    </motion.div>
                                </div>
                            </div>
                            {!sus && (val.id==focusClub)
                            ?<motion.div
                            >
                             <div className='mt-6 border-2 border-gray-500 rounded-[22px] mx-[-50px]'>
                                <div className='flex items-center lg:h-[106px] bg-[#3A3A3A] rounded-[20px] mb-[100px]'>
                                    <div className='flex justify-between w-full'>
                                        <div className='ml-[45px]'><h5 className='lg:text-[25px] lg:leading-[50px] text-white'>{val.nameTH}</h5></div>
                                        <div className='mr-[50px]'>
                                            <motion.button 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => approve(val.id)} className='w-[52px] h-[52px] bg-[#19C57C] rounded-xl mx-3'><CheckIcon className='w-[30px] mx-auto text-white'/></motion.button>
                                            <motion.button 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => decline(val.id, key)} className='w-[52px] h-[52px] bg-[#E80808] rounded-xl mx-3'><XIcon className='w-[30px] mx-auto text-white'/></motion.button>
                                        </div>
                                    </div>
                                </div>
                                <MainRenderer
                                    type={val.type}
                                    page={'admin'}
                                    info={info}
                                    contacts={contacts}
                                    clubArticle={clubArticle}
                                    clubArticleDes={clubArticleDes}
                                    advantage={advantage}
                                    advantageDes={advantageDes}
                                    work={work}
                                    workDes={workDes}
                                    reviews={reviews}
                                    reviewImagesLink={reviewImagesLink}
                                    imagesLink={imagesLink}
                                />
                            </div>
                            </motion.div>
                            : null}
                    </div>
                    )}
                })}
            </div>
        </div>
    )

    return (
        <><h1>Permission Denied</h1></>
    )
}
