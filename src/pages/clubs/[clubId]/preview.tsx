import { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import QuillEditor from '@components/common/QuillEditor'
import { useAuth } from '@lib/auth'
import { MainRenderer } from '@components/cms/mainRender'
import { ArrowCircleLeftIcon } from "@heroicons/react/outline"
import Link from 'next/link'
import Tooltip from '@components/common/tooltip'
import ArticleBackground from 'public/asset/background/article'

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
        <div className='flex flex-col max-lg:bg-gradient-edit lg:bg-cream bg-article'>
            {/* <ArticleBackground classname=''/> */}
            <div className='mx-auto mt-[104px] w-[311px] lg:w-[1000px] lg:mt-[178px] flex '>
                <Link href={`/clubs/${[clubId]}/edit`}>
                    <button className='flex'>
                        <ArrowCircleLeftIcon className='h-[15px] w-[15px] lg:h-[30px] lg:w-[30px]' />
                        <p className='text-xs leading-[15px] ml-[3.68px] lg:ml-[7.25px] lg:text-xl lg:leading-[29px]'>ย้อนกลับ</p>
                    </button>
                </Link>
                {/* <p className='flex items-center justify-center'> preview</p> */}
            </div>
            <p className='flex justify-center text-[14px] lg:text-[24px] text-blue-edit-300'> preview</p>
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
