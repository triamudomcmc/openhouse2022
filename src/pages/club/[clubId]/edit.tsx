import { useState, useEffect, useRef } from 'react'
import { GetServerSideProps } from 'next'

import QuillEditor from '@components/common/QuillEditor'
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

    async function fetchInitialData() {
      const res = await fetch(`/api/${clubId}/pendingcontent`)
      const clubFetch = await res?.json()
      if (clubFetch.nonexisted) {
        const res = await fetch(`/api/${clubId}/prodcontent`)
        const prodFetch = await res?.json()
        setDescription(prodFetch?.Description)
        setMainArticle(prodFetch?.MainArticle)
      }
      else {
        setDescription(clubFetch?.Description)
        setMainArticle(clubFetch?.MainArticle)
      }
    }

    async function publishToPending() {
      const res = await fetch(`/api/${clubId}/publishToPending`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          "Description": description,
          "MainArticle": mainArticle
        })
      })
    }

    useEffect(() => {
      fetchInitialData()
    }, [])

    if (user?.club == clubId) return (
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
