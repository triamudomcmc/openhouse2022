import { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import QuillEditor from '@components/common/QuillEditor'
import { useAuth } from '@lib/auth'
import { MainRenderer } from '@components/cms/mainRender'
import { ArrowCircleLeftIcon } from "@heroicons/react/outline"
import Link from 'next/link'
import Tooltip from '@components/common/tooltip'
import { ArticleBackground } from '@vectors/background/articlebg'

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    return {
        props: {
            clubId: params?.clubId,
        },
    }
}

const ViewArticle = ({clubId}) => {
    const {user} = useAuth()
    const [info, setInfo] = useState<{[key: string]: string}>({})
    const [contacts, setContacts] = useState({})
    const [clubArticle, setClubArticle] = useState('')
    const [clubArticleDes, setClubArticleDes] = useState('')
    const [advantage, setAdvantage] = useState('')
    const [advantageDes, setAdvantageDes] = useState('')
    const [work, setWork] = useState('')
    const [workDes, setWorkDes] = useState('')
    const [reviews, setReviews] = useState([])
        // const [status, setStatus] = useState()
    // const [isHover, setHover] = useState(false);

    const [status, setStatus] = useState<string>()


    // const topic = ["ชมรมนี้ทำอะไร","ประโยชน์ที่ได้รับจากการเข้าชมรม","ผลงานของชมรม"]

    const [imagesLink, setImagesLink] = useState<{[key: string]: string}>({})
    const [reviewImagesLink, setReviewImagesLink] = useState({})
    
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

        setReviewImagesLink(dataFetch?.reviewImageUrl ?? {})
        setImagesLink(dataFetch?.imageUrl ?? {})
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
      if (user?.uid && user?.club == clubId || user?.roles?.hasOwnProperty('tucmc')) fetchInitialData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user?.uid])

    if ((user?.club == clubId || user?.roles?.hasOwnProperty('tucmc')) && info) return (
        <div className='flex flex-col overflow-hidden max-lg:bg-gradient-edit lg:bg-cream'>
            <ArticleBackground classname='max-lg:hidden' />
            <div className='mx-auto mt-[104px] w-[311px] lg:w-[1000px] lg:mt-[305px] flex max-[1080px]:ml-[30px] z-10 '>
                <Link href={`/clubs/${[clubId]}/edit`}>
                    <button className='flex'>
                        <ArrowCircleLeftIcon className='h-[15px] w-[15px] lg:h-[30px] lg:w-[30px]' />
                        <p className='text-xs leading-[15px] ml-[3.68px] lg:ml-[7.25px] lg:text-xl lg:leading-[29px]'>ย้อนกลับ</p>
                    </button>
                </Link>
                {/* <p className='flex items-center justify-center'> preview</p> */}
            </div>
            <p className='flex justify-center text-[14px] lg:text-[24px] text-blue-edit-300 z-10'> preview</p>
            <MainRenderer
                // editable={false}
                first='องค์กรนี้ทำอะไร'
                second=''
                third=''
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
    )

    return (
        <>
            <h3>{clubId} not appeared to have article</h3>
        </>
    )
}

export default ViewArticle
