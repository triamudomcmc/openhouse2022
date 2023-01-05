import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { useAuth } from "@lib/auth"
import { MainRenderer } from "@components/cms/mainRender"
import { PencilIcon } from "@heroicons/react/solid"
import { ArrowCircleLeftIcon } from "@heroicons/react/outline"
import { ArticleBackground } from "@vectors/background/articlebg"
import { motion } from "framer-motion"

import fs from 'fs'
import { GetServerSideProps, GetStaticProps, GetStaticPaths } from "next"

export const getStaticPaths: GetStaticPaths = async ({ }) => {
  const raw = JSON.parse(fs.readFileSync(`./src/_data/_maps/allMap.json`, {encoding: 'utf-8'}))
  let tmp = []
  for (let key of Object.keys(raw)) {
    tmp.push({params: {clubId: key}})
  }

  return {
      paths: tmp,
      fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const clubId = params?.clubId as string
  const raw = JSON.parse(fs.readFileSync(`./src/_data/_maps/allMap.json`, {encoding: 'utf-8'}))
  let finalData = {}

  finalData['Info'] = {nameTH: raw[clubId].thaiName, nameEN: raw[clubId].englishName, member: raw[clubId].count} ?? {}
  finalData['Contacts'] = raw[clubId].contacts ?? {}
  finalData['ClubArticle'] = raw[clubId].activity ?? ''
  finalData['Advantage'] = raw[clubId].benefit ?? ''
  finalData['Work'] = raw[clubId].portfolio ?? ''
  finalData['ClubArticleDes'] = raw[clubId].imageURL[0]?.description ?? ''
  finalData['AdvantageDes'] = raw[clubId].imageURL[1]?.description ?? ''
  finalData['WorkDes'] = raw[clubId].imageURL[2]?.description ?? ''
  finalData['Reviews'] = raw[clubId].reviews ?? []
  finalData['reviewImageUrl'] = raw[clubId].reviewURL ?? {}
  finalData['imageUrl'] = {
    'first': raw[clubId].imageURL[0]?.url ?? `/assets/images/all/${clubId}-first-default.jpg`,
    'second': raw[clubId].imageURL[1]?.url ?? `/assets/images/all/${clubId}-second-default.jpg`,
    'third': raw[clubId].imageURL[2]?.url ?? `/assets/images/all/${clubId}-third-default.jpg`,
    'thumbnail': raw[clubId].imageURL[3]?.url ?? `/assets/images/all/${clubId}-thumbnail-default.jpg`
  }

  if (Object.keys(finalData).length != 0) return { props: { finalData } }
  else return { props: { nonexisted: true } }
}

const LandingEdit = ({ clubId, finalData }) => {
  const router = useRouter()
  const { user } = useAuth()
  // const [load, setLoad] = useState<boolean>(true)
  const [info, setInfo] = useState<{ [key: string]: string }>({})
  const [contacts, setContacts] = useState({})
  const [clubArticle, setClubArticle] = useState("")
  const [clubArticleDes, setClubArticleDes] = useState("")
  const [advantage, setAdvantage] = useState("")
  const [advantageDes, setAdvantageDes] = useState("")
  const [work, setWork] = useState("")
  const [workDes, setWorkDes] = useState("")
  const [reviews, setReviews] = useState([])

  const [imagesLink, setImagesLink] = useState<{ [key: string]: string }>({})
  const [reviewImagesLink, setReviewImagesLink] = useState({})

  useEffect(() => {
    // const fetchInitialData = async () => {

    //     // const res = await fetch(`/api/${clubId}/handlers`, {
    //     //   method: "POST",
    //     //   body: JSON.stringify({
    //     //     executerUid: user?.uid,
    //     //     act: "getContent",
    //     //   }),
    //     // })
    //     // const dataFetch = await res?.json()

    //   // setReviewImagesLink(dataFetch?.reviewImageUrl ?? {})
    //   // setImagesLink(dataFetch?.imageUrl ?? {})
    //   // setInfo(dataFetch.Info != null ? dataFetch.Info : "")
    //   // setContacts(dataFetch?.Contacts != null ? dataFetch.Contacts : {})
    //   // setClubArticle(dataFetch?.ClubArticle)
    //   // setClubArticleDes(dataFetch?.ClubArticleDes)
    //   // setAdvantage(dataFetch?.Advantage)
    //   // setAdvantageDes(dataFetch?.AdvantageDes)
    //   // setWork(dataFetch?.Work)
    //   // setWorkDes(dataFetch?.WorkDes)
    //   // setReviews(dataFetch?.Reviews != null ? dataFetch.Reviews : [])
    // }
    // fetchInitialData()
    setReviewImagesLink(finalData?.reviewImageUrl ?? {})
    setImagesLink(finalData?.imageUrl ?? {})
    setInfo(finalData.Info != null ? finalData.Info : "")
    setContacts(finalData?.Contacts != null ? finalData.Contacts : {})
    setClubArticle(finalData?.ClubArticle)
    setClubArticleDes(finalData?.ClubArticleDes)
    setAdvantage(finalData?.Advantage)
    setAdvantageDes(finalData?.AdvantageDes)
    setWork(finalData?.Work)
    setWorkDes(finalData?.WorkDes)
    setReviews(finalData?.Reviews != null ? finalData.Reviews : [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.uid])

  if (info) return (
      <div className='flex flex-col overflow-hidden max-lg:bg-gradient-edit lg:bg-cream'>
          <ArticleBackground classname='max-lg:hidden' />
          <div className='mx-auto mt-[104px] w-[311px] lg:w-[1000px] lg:mt-[175px] flex max-[1080px]:ml-[30px] z-10 '>
              <Link href={`/`}>
                  <button className='flex'>
                      <ArrowCircleLeftIcon className='h-[15px] w-[15px] lg:h-[30px] lg:w-[30px]' />
                      <p className='text-xs leading-[15px] ml-[3.68px] lg:ml-[7.25px] lg:text-xl lg:leading-[29px]'>ย้อนกลับ</p>
                  </button>
              </Link>
          </div>
          
          <MainRenderer
              // editable={false}
              type="programmes"
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
