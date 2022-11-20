import { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'

import QuillEditor from '@components/common/QuillEditor'
import { useAuth } from '@lib/auth'
import { MainRenderer } from '@components/cms/mainRender'

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    return {
        props: {
            clubId: params.clubId,
        },
      }
}

const ViewArticle = ({clubId}) => {
    const {user} = useAuth()
    const [ifPendArticle, setIfPendArticle] = useState<boolean>(false)
    const [description, setDescription] = useState('')
    const [mainArticle, setMainArticle] = useState('')
    const [reviews, setReviews] = useState({})

    async function fetchInitialData() {
        const res = await fetch(`/api/${clubId}/prodcontent`)
        const clubFetch = await res?.json()
        if (clubFetch) {
            setDescription(clubFetch?.Description)
            setMainArticle(clubFetch?.MainArticle)
            setReviews(clubFetch?.Reviews)
        }
    }

    useEffect(() => {
        fetchInitialData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [description, mainArticle])

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
            setDescription(pendFetch.Description)
            setMainArticle(pendFetch.MainArticle)
            setReviews(pendFetch?.Reviews)
        }
    }

    if (!ifPendArticle && user?.roles['tucmc']) loadPending()
    if (description || mainArticle || reviews) return (
            <div>
                <MainRenderer 
                    description={description}
                    mainArticle={mainArticle}
                    reviews={reviews}
                />
                
                {ifPendArticle}
                {ifPendArticle && user?.roles['tucmc']
                ? <button className='bg-lime hover:bg-green-100 text-green-800 font-semibold py-2 px-4 border border-green-400 rounded shadow' onClick={ifAppr} type='submit'>Approve</button>
                : null
                }
            </div>
        )

    return (
        <>
            <h3>{clubId} not appeared to have article</h3>
        </>
    )
}

export default ViewArticle
