import { useState, useEffect, useRef, FC } from 'react'
import { GetServerSideProps } from 'next'

import QuillEditor from '@components/common/QuillEditor'
import ReviewRenderer from '@components/cms/reviewsRender'
import { useAuth } from '@lib/auth'

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  return {
    props: {
      clubId: params.clubId,
    }
  }
}

const Editor = ({clubId}) => {
    const {user} = useAuth()
    const [description, setDescription] = useState('')
    const [mainArticle, setMainArticle] = useState('')
    const [reviews, setReviews] = useState([])

    useEffect(() => {
      const fetchInitialData = async () => {
        const permBody = JSON.stringify({executerUid: user?.uid})
        const res = await fetch(`/api/${clubId}/pendingcontent`, {
          method: 'POST',
          body: permBody
        })
        const clubFetch = await res?.json()
        if (clubFetch.nonexisted) {
          const res = await fetch(`/api/${clubId}/prodcontent`, {
            method: 'POST',
            body: permBody
          })
          const prodFetch = await res?.json()
          setDescription(prodFetch?.Description)
          setMainArticle(prodFetch?.MainArticle)
          setReviews(prodFetch?.Reviews)
        }
        else {
          setDescription(clubFetch?.Description)
          setMainArticle(clubFetch?.MainArticle)
          setReviews(clubFetch?.Reviews)
        }
      }
      if (user?.uid && user?.club == clubId || user?.roles?.hasOwnProperty('tucmc')) fetchInitialData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user?.uid])

    async function publishToPending() {
      const res = await fetch(`/api/${clubId}/publishToPending`, {
        method: 'POST',
        body: JSON.stringify({
          executerUid: user?.uid,
          "Description": description,
          "MainArticle": mainArticle,
          "Reviews": reviews
        })
      })
    }

    if (user?.club == clubId || user?.roles?.hasOwnProperty('tucmc')) return (
        <div className="rounded-xl bg-white px-6 shadow-lg md:px-16 md:pt-12 md:pb-16">
          <h1>Description</h1>
          <QuillEditor
            value={description}
            onChange={(txt) => {
                setDescription(txt.trim())
            }}
          />
          <br />
          <h1>MainArticle</h1>
          <QuillEditor
            value={mainArticle}
            onChange={(txt) => {
              setMainArticle(txt.trim())
            }}
          />
          <br />
          <h1>Reviews</h1>
          <ReviewRenderer
            rawData={reviews}
            setReviews={setReviews}
            editable={true}
          />
          <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={publishToPending} type="submit">Publish</button>
        </div>
      )

      return (
        <>
          <h1>Permission Denied</h1>
        </>
      )
}

export default Editor
