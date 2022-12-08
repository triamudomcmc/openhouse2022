import { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'

import QuillEditor from '@components/common/QuillEditor'
import { useAuth } from '@lib/auth'
import { MainRenderer } from '@components/cms/mainRender'

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    return {
        props: {
            clubId: params?.clubId,
        },
    }
}

const ViewArticle = ({clubId}) => {
    const {user} = useAuth()
    const [ifPendArticle, setIfPendArticle] = useState<boolean>(false)
    const [info, setInfo] = useState({})
    const [contacts, setContacts] = useState({})
    const [clubArticle, setClubArticle] = useState('')
    const [clubArticleDes, setClubArticleDes] = useState('')
    const [advantage, setAdvantage] = useState('')
    const [advantageDes, setAdvantageDes] = useState('')
    const [work, setWork] = useState('')
    const [workDes, setWorkDes] = useState('')
    const [reviews, setReviews] = useState([])

    async function fetchInitialData() {
        const res = await fetch(`/api/${clubId}/prodcontent`)
        const clubFetch = await res?.json()
        if (clubFetch) {
            setInfo(clubFetch.Info != null ? clubFetch.Info : '')
            setContacts(clubFetch?.Contacts != null ? clubFetch.Contacts : {})
            setClubArticle(clubFetch?.ClubArticle)
            setClubArticleDes(clubFetch?.ClubArticleDes)
            setAdvantage(clubFetch?.Advantage)
            setAdvantageDes(clubFetch?.AdvantageDes)
            setWork(clubFetch?.Work)
            setWorkDes(clubFetch?.WorkDes)
            setReviews(clubFetch?.Reviews != null ? clubFetch.Reviews : [])
        }
    }

    useEffect(() => {
        fetchInitialData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function ifAppr() {
        const res = await fetch(`/api/${clubId}/clubApprArticle`,{
            method: 'POST',
            body: JSON.stringify({
                executerUid: user?.uid
            })
        })
        setIfPendArticle(false)
    }

    async function loadPending() {
        const res = await fetch(`/api/${clubId}/pendingcontent`, {
            method: 'POST',
            body: JSON.stringify({
                executerUid: user?.uid
            })
        })
        const pendFetch = await res?.json()
        if (!pendFetch.nonexisted) {
            setIfPendArticle(true)
            setInfo(pendFetch.Info != null ? pendFetch.Info : '')
            setContacts(pendFetch?.Contacts != null ? pendFetch.Contacts : {})
            setClubArticle(pendFetch?.ClubArticle)
            setClubArticleDes(pendFetch?.ClubArticleDes)
            setAdvantage(pendFetch?.Advantage)
            setAdvantageDes(pendFetch?.AdvantageDes)
            setWork(pendFetch?.Work)
            setWorkDes(pendFetch?.WorkDes)
            setReviews(pendFetch?.Reviews != null ? pendFetch.Reviews : [])
        }
    }

    if (!ifPendArticle && user?.roles?.hasOwnProperty('tucmc')) loadPending()
    if (info) return (
        <div className='flex flex-col max-lg:bg-gradient-edit lg:bg-cream'>
            <MainRenderer
                // editable={false}
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
    )

    return (
        <>
            <h3>{clubId} not appeared to have article</h3>
        </>
    )
}

export default ViewArticle
