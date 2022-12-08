/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef, FC } from 'react'
import { GetServerSideProps } from 'next'
import QuillEditor from '@components/common/QuillEditor'
import ReviewRenderer from '@components/cms/reviewsRender'
import ContactRenderer from '@components/cms/contactRender'
import { useAuth } from '@lib/auth'
import { toBase64 } from 'src/utilities/imgToBase'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowCircleLeftIcon, InformationCircleIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import ImageUploader from '@components/cms/imageDisplayUploader'

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  return {
    props: {
      clubId: params?.clubId,
    }
  }
}

const Editor = ({clubId}) => {
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

    const [status, setStatus] = useState<string>()

    const [imagesName, setImagesName] = useState([])
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

        setReviewImagesLink(dataFetch?.reviewImageUrl)
        setImagesLink(dataFetch?.imageUrl)
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

    async function publishToPending() {
      const pub = await fetch(`/api/${clubId}/publishToPending`, {
        method: 'POST',
        body: JSON.stringify({
          executerUid: user?.uid,
          fileName: imagesName,
          "Info": info,
          "Contacts": contacts,
          "ClubArticle": clubArticle,
          "ClubArticleDes": clubArticleDes,
          "Advantage": advantage,
          "AdvantageDes": advantageDes,
          "Work": work,
          "WorkDes": workDes,
          "Reviews": reviews,
        })
      })
    }

    const doUpload = async (e, purpose: string) => {
      const ogFile = e.target.files[0]
      const data = await toBase64(ogFile)

      const getGCPPolicy = await fetch(`/api/${clubId}/getPolicy`, {
        method: 'POST',
        body: JSON.stringify({
          executerUid: user?.uid,
          purpose: purpose,
          fileName: ogFile.name
        })
      })

      let {url, fields} = await getGCPPolicy.json()

      const formData = new FormData()
      setImagesName((prev) => [...prev, fields.key])

      Object.entries({ ...fields, file: ogFile }).forEach(([key, value]) => {
        // @ts-ignore
        formData.append(key, value)
      })

      const upload = await fetch(url, {
        mode: 'cors',
        method: 'POST',
        body: formData,
      }) 
    }

    const reviewDoUpload = async (e, purpose: string) => {
      const ogFile = e.target.files[0]
      let index: number
      if (purpose.includes('profile-')) {
        const tmp = purpose.split('-')
        index = Number(tmp[1])
      }

      const getGCPPolicy = await fetch(`/api/${clubId}/getPolicy`, {
        method: 'POST',
        body: JSON.stringify({
          executerUid: user?.uid,
          purpose: purpose,
          fileName: ogFile.name,
          ReviewIndex: index,
          Reviews: reviews
        })
      })

      let {url, fields} = await getGCPPolicy.json()

      const formData = new FormData()
      setReviews((prev) => {
        prev[index].Image = fields.key
        return prev
      })

      Object.entries({ ...fields, file: ogFile }).forEach(([key, value]) => {
        // @ts-ignore
        formData.append(key, value)
      })

      const upload = await fetch(url, {
        mode: 'cors',
        method: 'POST',
        body: formData,
      }) 
    }
    
    if ((user?.club == clubId || user?.roles?.hasOwnProperty('tucmc')) && status) return (
        <div>
            <div className='mx-auto pt-[104px] w-[311px] lg:w-[1000px] lg:pt-[178px]'>
              <button className='flex'>
                  <ArrowCircleLeftIcon className='h-[15px] w-[15px] lg:h-[30px] lg:w-[30px]' />
                  <p className='text-xs leading-[15px] ml-[3.68px] lg:ml-[7.25px] lg:text-xl lg:leading-[29px]'>ย้อนกลับ</p>
              </button>
              <div className='lg:flex justify-between w-[225px] lg:w-[978px] mx-auto mt-[18px] lg:mt-[41px]'>
                <p className='w-[108px] text-[14px] leading-[16px] lg:w-[290px] lg:text-xl'>สถานะ: {status} </p>
                <div className='mt-[16px] flex justify-between'>
                  <Link href={`/clubs/${[clubId]}/preview`}><button className='w-[106.8px] h-[28.8px] lg:w-[192px] lg:h-[52px] border-blue-edit-300 box-border border-[1.2px] lg:border-[2px] rounded-[112px] lg:rounded-[200px]'><p className='text-center text-[14px] leading-[17px] lg:text-xl font-500 text-blue-edit-300'>Preview</p></button></Link>
                  <button className='w-[108px] h-[30px] lg:w-[192px] lg:h-[52px] border-blue-edit-300 box-border border-2 rounded-[112px] lg:rounded-[200px] text-[24px] font-[400] bg-blue-edit-300  ml-[19px] ' onClick={publishToPending}><p className='text-center text-[14px] leading-[16.94px] lg:leading-[48px] lg:text-xl text-white'>ส่งการแก้ไข</p></button>
                </div>
              </div>
            </div>
            <div className='mx-auto mt-[18px] w-[330px] lg:w-[771px] lg:mt-[27px]'>
              <div className='w-[328px] h-[330px] rounded-[27px] flex flex-col lg:flex-row lg:w-[771px] lg:h-[240px] lg:rounded-[31.18px] shadow-[2px_2px_4px_rgba(0,0,0,0.3)] mt-[27px]'>
                <div className='w-[149px] h-[125.34px] rounded-[15px] mx-auto lg:mx-0 mt-[16px] lg:w-[280px] lg:h-[240px] lg:mt-0 bg-[#d9d9d9] lg:rounded-[31.18px]'>
                  <ImageUploader  
                  className='rounded-[15.5px] lg:rounded-[31.2px]'
                  uploadFunction={doUpload}
                  purpose='thumbnail'
                  link={imagesLink.hasOwnProperty('thumbnail') ? imagesLink['thumbnail'] : null}
                  />
                </div>
                <div className='text-center lg:w-[485px]'>
                  <div className='lg:h-[92px] mt-[20px] lg:mt-[29px]'>
                    <h1 className='h-[29px] text-xl lg:h-[34px] lg:text-[28px] lg:leading-[34px]' > {info.nameTH}</h1>
                    <h2 className='h-[24px] lg:h-[29px] font-[400px] text-md lg:text-xl text-gray-500 mt-[1px]'>{info.nameEN}</h2>
                    <h2 className='h-[21px] text-[17px] leading-[21px] lg:h-[24px] lg:text-[20px] leading-md lg:mt-[5px] text-gray-500 mt-[3px]'>สมาชิก {info.member} คน</h2>
                  </div>
                  <ContactRenderer 
                    classname="mt-[3px] ml-[44px] mb-[22px] w-[207px] lg:w-[243px] lg:mx-auto lg:mt-[5px]"
                    rawData={contacts}
                    setContacts={setContacts}
                    editable={true}
                  />
                </div>
              </div>
              <div>
                <div className='flex mt-[63px] lg:mt-[90px]'>
                  <h1 className='font-display font-[800]'>ชมรมนี้ทำอะไร</h1>
                  <InformationCircleIcon className='w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] ml-[12px] lg:ml-[25px] my-auto text-orange' />
                </div>
                <div className='w-full mx-auto'>
                  <div className='mt-[21px] lg:w-[771px] lg:h-[420px] w-full h-[168px] bg-[#D9D9D9] lg:mt-[62px] rounded-[6px] lg:rounded-[15px]'>
                    <ImageUploader 
                    className='rounded-[6px] lg:rounded-[15px]'
                    uploadFunction={doUpload}
                    purpose='first'
                    link={imagesLink.hasOwnProperty('first') ? imagesLink['first'] : null}
                    />
                  </div>
                  <input type='text' className='w-full text-xs text-center border-hidden mt-[4px] lg:text-sm lg:mt-[14px]' placeholder='คำอธิบายรูปภาพ' value={clubArticleDes} onChange={(txt) => {console.log(txt.target.innerText);setClubArticleDes(txt.target.innerText)}}/>
                </div >
                <div className='border-[1px] lg:border-2 border-gray-500 rounded-[20.5px] lg:rounded-[22px] w-full  mt-[16px] lg:mt-[41px]'>
                  <QuillEditor
                    value={clubArticle}
                    onChange={(txt) => {
                      setClubArticle(txt.trim())
                    }}
                  />
                </div>
              </div>
              <div>
                <div className='flex mt-[63px] lg:mt-[90px]'>
                  <h1 className='font-display font-[800]'>ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
                  <InformationCircleIcon className='w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] ml-[12px] lg:ml-[25px] my-auto text-orange' />
                </div>
                <div className='w-full mx-auto'>
                  <div className='mt-[21px] lg:w-[771px] lg:h-[420px] w-full h-[168px] bg-[#D9D9D9] rounded-[6px] lg:rounded-[15px] lg:mt-[62px]'>
                  <ImageUploader 
                  className='rounded-[6px] lg:rounded-[15px]'
                  uploadFunction={doUpload}
                  purpose='second'
                  link={imagesLink.hasOwnProperty('second') ? imagesLink['second'] : null}
                  />
                  </div>
                  <input type='text' className='w-full text-xs text-center border-hidden mt-[4px] lg:text-sm lg:mt-[14px]' placeholder='คำอธิบายรูปภาพ' value={advantageDes} onChange={(txt) => {setAdvantageDes(txt.target.innerText)}}/>
                </div >
                <div className='border-[1px] lg:border-2 border-gray-500 rounded-[22px] w-full  mt-[16px] lg:mt-[41px] text-sm'>
                  <QuillEditor
                    className='text-sm'
                    value={advantage}
                    onChange={(txt) => {
                      setAdvantage(txt.trim())
                    }}
                  />
                </div>
              </div>
              <div>
                <div className='flex mt-[63px] lg:mt-[90px]'>
                  <h1 className='font-display font-[800]'>ผลงานของชมรม</h1>
                  <InformationCircleIcon className='w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] ml-[12px] lg:ml-[25px] my-auto text-orange' />
                </div>
                <div className='w-full mx-auto'>
                  <div className='mt-[21px] lg:w-[771px] lg:h-[420px] w-full h-[168px] bg-[#D9D9D9] rounded-[6px] lg:rounded-[15px] lg:mt-[62px]'>
                  <ImageUploader 
                  className='rounded-[6px] lg:rounded-[15px]'
                  uploadFunction={doUpload}
                  purpose='third'
                  link={imagesLink.hasOwnProperty('third') ? imagesLink['third'] : null}
                  />
                  </div>
                  <input type='text' className='w-full text-xs text-center border-hidden mt-[4px] lg:text-sm lg:mt-[14px]' placeholder='คำอธิบายรูปภาพ' value={workDes} onChange={(txt) => {setWorkDes(txt.target.innerText)}}/>
                </div >
                <div className='border-[1px] lg:border-2 border-gray-500 rounded-[22px] w-full  mt-[16px] lg:mt-[41px] text-sm'>
                  <QuillEditor
                    className='text-sm'
                    value={work}
                    onChange={(txt) => {
                      setWork(txt.trim())
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='mx-auto w-[325px] lg:w-[901px]'>
                <div className='flex mt-[35px] lg:mt-[85px]'>
                  <h1 className='font-display font-[800]'>รีวิวจากรุ่นพี่</h1>
                  <InformationCircleIcon className='w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] ml-[12px] lg:ml-[25px] my-auto text-orange' />
                </div>
                  <ReviewRenderer
                    rawData={reviews}
                    setReviews={setReviews}
                    reviewImagesLink={reviewImagesLink}
                    reviewDoUpload={reviewDoUpload}
                    editable={true}
                  />
            </div>
        </div> 
      )

      return (
        <>
          <h1>Permission Denied</h1>
        </>
      )
}

export default Editor
