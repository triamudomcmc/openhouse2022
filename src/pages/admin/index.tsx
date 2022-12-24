import { useEffect, useState } from 'react'
import Link from 'next/link'

import { useAuth } from '@lib/auth'
import { MainRenderer } from '@components/cms/mainRender'

export default function AdminIndex() {
    const {user} = useAuth()
    const [pendingArticleList, setPendingArticleList] = useState<Array<string>>([])
    const [focusClub, setFocusClub] = useState<string>()
    const [sus, setSus] = useState(false)

    const [info, setInfo] = useState<{[key: string]: string}>({})
    const [contacts, setContacts] = useState({})
    const [clubArticle, setClubArticle] = useState('')
    const [clubArticleDes, setClubArticleDes] = useState('')
    const [advantage, setAdvantage] = useState('')
    const [advantageDes, setAdvantageDes] = useState('')
    const [work, setWork] = useState('')
    const [workDes, setWorkDes] = useState('')
    const [reviews, setReviews] = useState([])

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
            }
        }
        if (user?.uid && user?.roles?.hasOwnProperty('tucmc')) fetchPendingArticleList()
    }, [user?.roles, user?.uid])

    useEffect(() => {
        const fetchClubInfo = async () => {
            if (user?.uid) {
                const res = await fetch(`/api/${focusClub}/pendingcontent`, {
                    method: 'POST',
                    body: JSON.stringify({
                        executerUid: user?.uid
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
                }
            }
        }
        fetchClubInfo()
    }, [focusClub])

    async function queryClubInfo(clubId: string) {
        setFocusClub(clubId)
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

    if (user?.roles?.hasOwnProperty('tucmc')) return (
        <div className='flex justify-center'>
            <div className='mt-[150px] lg:mt-[249px] max-w-[1151px] w-full mx-[100px]'>
                <div>
                    <h1 className='lg:text-[36px] font-[700] text-center'>ตรวจสอบข้อมูลหน่วยงานบนเว็บไซต์</h1>
                    <div className='lg:mt-[103px] mt-[50px] lg:text-[30px] font-[500]'><p>หน่วยงานที่มีสถานะรอการตรวจสอบ</p></div>
                    <hr className='lg:border-[1px] lg:mt-[23px]'/>
                </div>
                {pendingArticleList.map((val, key) => {
                return (
                    <div key={val} className='mt-6 border-2 border-gray-300 rounded-[20px] lg:min-h-[106px] '>
                            <div className='flex items-center lg:h-[106px] lg:mx-[25px]'>
                                <div className='flex justify-between w-full'>
                                    <div><h5 className='lg:text-[25px] lg:leading-[50px]'>{val}</h5></div>
                                    <div className='lg:w-[228px] h-[50px] rounded-xl bg-blue-edit-300 text-center '>
                                        <button onClick={() => queryClubInfo(val)}><p className='text-white lg:text-[20px] lg:leading-[50px]'>ดูข้อมูลหน่วยงาน</p></button>
                                    </div>
                                </div>
                            </div>
                            {!sus && (val==focusClub)
                            ? <div>
                                <button onClick={() => approve(val)}><b>APPR</b></button>
                                <MainRenderer
                                    text={['','','']}
                                    info={info}
                                    contacts={contacts}
                                    clubArticle={clubArticle}
                                    clubArticleDes={clubArticleDes}
                                    advantage={advantage}
                                    advantageDes={advantageDes}
                                    work={work}
                                    workDes={workDes}
                                    reviews={reviews}
                                />
                            </div>
                            : null}
                    </div>
                    )
                })}
            </div>
        </div>
    )

    return (
        <><h1>Permission Denied</h1></>
    )
}
