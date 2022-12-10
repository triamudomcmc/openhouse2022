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

const landingEdit = ({clubId}) => {
    const {user} = useAuth()
    const [ifPendArticle, setIfPendArticle] = useState<boolean>(false)
    const [info, setInfo] = useState({})

    useEffect(() => {
        const fetchInitialData = async () => {
          const permBody = JSON.stringify({executerUid: user?.uid})
          const res = await fetch(`/api/${clubId}/pendingcontent`, {
            method: 'POST',
            body: permBody
          })
  
          let dataFetch = await res?.json()
          if (dataFetch.nonexisted) {
            const res = await fetch(`/api/${clubId}/prodcontent`, {
              method: 'POST',
              body: permBody
            })
            dataFetch = await res?.json()
          }
  
          setInfo(dataFetch.Info != null ? dataFetch.Info : '')
        }
        if (user?.uid && user?.club == clubId || user?.roles?.hasOwnProperty('tucmc')) fetchInitialData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [user?.uid])
  
    if (info) return (
        <div>
            <div className='mx-auto lg:w-[1151px]'>
                <h1 className='text-center'>ตรวจสอบข้อมูลหน่วยงานบนเว็บไซต์</h1>
            </div>
        </div>
    )

    return (
        <>
            <h3>{clubId} not appeared to have article</h3>
        </>
    )
}

export default landingEdit
