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
    }, [focusClub, sus, user?.uid])

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
        <div>
            <h1><b>Pending approval</b></h1>
            {pendingArticleList.map((val, key) => {
                return (
                    <div key={val}>
                        <h5>{val}</h5>
                        <button onClick={() => queryClubInfo(val)}>ดูข้อมูลหน่วยงาน</button>
                        {!sus && (val==focusClub)
                        ? <div>
                            <button onClick={() => approve(val)}><b>APPR</b></button>
                            <MainRenderer
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
    )

    return (
        <><h1>Permission Denied</h1></>
    )
}
