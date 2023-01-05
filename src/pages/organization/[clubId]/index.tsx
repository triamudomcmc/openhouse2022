import { useState, useEffect } from "react"
import { GetServerSideProps } from "next"
import Link from "next/link"
import { useAuth } from "@lib/auth"
import { MainRenderer } from "@components/cms/mainRender"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { ArticleBackground } from "@vectors/background/articlebg"
import { ArrowCircleLeftIcon } from "@heroicons/react/outline"

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      clubId: params?.clubId,
    },
  }
}

const LandingEdit = ({ clubId }) => {
  const { user } = useAuth()
  const [load, setLoad] = useState<boolean>(true)
  const [info, setInfo] = useState<{ [key: string]: string }>({})
  const [contacts, setContacts] = useState({})
  const [clubArticle, setClubArticle] = useState("")
  const [clubArticleDes, setClubArticleDes] = useState("")
  const [advantage, setAdvantage] = useState("")
  const [advantageDes, setAdvantageDes] = useState("")
  const [work, setWork] = useState("")
  const [workDes, setWorkDes] = useState("")
  const [reviews, setReviews] = useState([])
  // const [status, setStatus] = useState()

  // const topic = ["ชมรมนี้ทำอะไร","ประโยชน์ที่ได้รับจากการเข้าชมรม","ผลงานของชมรม"]

  const [imagesLink, setImagesLink] = useState<{ [key: string]: string }>({})
  const [reviewImagesLink, setReviewImagesLink] = useState({})

  useEffect(() => {
    const fetchInitialData = async () => {

        const res = await fetch(`/api/${clubId}/handlers`, {
          method: "POST",
          body: JSON.stringify({
            executerUid: user?.uid,
            act: "getContent",
          }),
        })
        const dataFetch = await res?.json()

      setReviewImagesLink(dataFetch?.reviewImageUrl ?? {})
      setImagesLink(dataFetch?.imageUrl ?? {})
      setInfo(dataFetch.Info != null ? dataFetch.Info : "")
      setContacts(dataFetch?.Contacts != null ? dataFetch.Contacts : {})
      setClubArticle(dataFetch?.ClubArticle)
      setClubArticleDes(dataFetch?.ClubArticleDes)
      setAdvantage(dataFetch?.Advantage)
      setAdvantageDes(dataFetch?.AdvantageDes)
      setWork(dataFetch?.Work)
      setWorkDes(dataFetch?.WorkDes)
      setReviews(dataFetch?.Reviews != null ? dataFetch.Reviews : [])
    }
    fetchInitialData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.uid])

  if (info) return (
    <div className='flex flex-col overflow-hidden max-lg:bg-gradient-edit lg:bg-cream'>
        <ArticleBackground classname='max-lg:hidden' />
        <div className='mx-auto mt-[104px] w-[311px] lg:w-[1000px] lg:mt-[175px] flex max-[1080px]:ml-[30px] z-10 '>
            <Link href={`/clubs`}>
                <button className='flex'>
                    <ArrowCircleLeftIcon className='h-[15px] w-[15px] lg:h-[30px] lg:w-[30px]' />
                    <p className='text-xs leading-[15px] ml-[3.68px] lg:ml-[7.25px] lg:text-xl lg:leading-[29px]'>ย้อนกลับ</p>
                </button>
            </Link>
        </div>
        
        <MainRenderer
            // editable={false}
            type="organization"
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

export default LandingEdit
