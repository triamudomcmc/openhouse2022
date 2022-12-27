/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef, FC } from 'react'
import { GetServerSideProps } from 'next'
import QuillEditor from '@components/common/QuillEditor'
import ReviewRenderer from '@components/cms/reviewsRender'
import ContactRenderer from '@components/cms/contactRender'
import { useAuth } from '@lib/auth'
import { toBase64 } from 'src/utilities/imgToBase'
import Image from 'next/image'
import { ArrowCircleLeftIcon, InformationCircleIcon } from '@heroicons/react/outline'
import ImageUploader from '@components/cms/imageDisplayUploader'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"
import Tooltip from '@components/common/tooltip'
import { Navbar } from '@components/common/Nav/Navbar'


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
    const [admission, setAdmission] = useState('')
    const [admissionDes, setAdmissionDes] = useState('')
    const [extendedClass, setExtendedClass] = useState('')
    const [extendedClassDes, setExtendedClassDes] = useState('')
    const [interest, setInterest] = useState('')
    const [interestDes, setInterestDes] = useState('')
    const [reviews, setReviews] = useState([])
    // const [status, setStatus] = useState()
    // const [isHover, setHover] = useState(false);

    const [status, setStatus] = useState<string>()

    const [imagesName, setImagesName] = useState([])
    const [imagesLink, setImagesLink] = useState<{[key: string]: string}>({})
    const [reviewImagesLink, setReviewImagesLink] = useState({})
    
    useEffect(() => {
      const fetchInitialData = async () => {
        const permBody = JSON.stringify({executerUid: user?.uid})
        const res = await fetch(`/api/${clubId}/handlers`, {
          method: 'POST',
          body: JSON.stringify({
            executerUid: user?.uid,
            act: 'pendingcontent'
          })
        })

        setStatus('Pending')

        let dataFetch = await res?.json()

        if (dataFetch.nonexisted) {
          const res = await fetch(`/api/${clubId}/handlers`, {
            method: 'POST',
            body: JSON.stringify({
              executerUid: user?.uid,
              act: 'prodcontent'
            })
          })
          dataFetch = await res?.json()
          setStatus('Approved')
        }

        setReviewImagesLink(dataFetch?.reviewImageUrl ?? {})
        setImagesLink(dataFetch?.imageUrl ?? {})
        setInfo(dataFetch.Info != null ? dataFetch.Info : '')
        setContacts(dataFetch?.Contacts != null ? dataFetch.Contacts : {})
        setAdmission(dataFetch?.ClubArticle)
        setAdmissionDes(dataFetch?.ClubArticleDes)
        setExtendedClass(dataFetch?.Advantage)
        setExtendedClassDes(dataFetch?.AdvantageDes)
        setInterest(dataFetch?.Work)
        setInterestDes(dataFetch?.WorkDes)
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
          "ClubArticle": admission,
          "ClubArticleDes": admissionDes,
          "Advantage": extendedClass,
          "AdvantageDes": extendedClassDes,
          "Work": interest,
          "WorkDes": interestDes,
          "Reviews": reviews,
        })
      })
    }

    const doUpload = async (e, purpose: string) => {
      const ogFile = e.target.files[0]
      const data = await toBase64(ogFile)

      const getGCPPolicy = await fetch(`/api/${clubId}/handlers`, {
        method: 'POST',
        body: JSON.stringify({
          executerUid: user?.uid,
          act: 'getPolicy',
          purpose: purpose,
          fileName: ogFile.name,
          "Info": info,
          "Contacts": contacts,
          "ClubArticle": admission,
          "ClubArticleDes": admissionDes,
          "Advantage": extendedClass,
          "AdvantageDes": extendedClassDes,
          "Work": interest,
          "WorkDes": interestDes,
          "Reviews": reviews,
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

      const getGCPPolicy = await fetch(`/api/${clubId}/handlers`, {
        method: 'POST',
        body: JSON.stringify({
          executerUid: user?.uid,
          act: 'getPolicy',
          purpose: purpose,
          fileName: ogFile.name,
          ReviewIndex: index,
          "Info": info,
          "Contacts": contacts,
          "ClubArticle": admission,
          "ClubArticleDes": admissionDes,
          "Advantage": extendedClass,
          "AdvantageDes": extendedClassDes,
          "Work": interest,
          "WorkDes": interestDes,
          "Reviews": reviews,
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
        <div className='relative'>
          <Navbar classname='bg-gray-300 bg-opacity-50 backdrop-blur-none' />
            <div className='mx-auto pt-[104px] w-[311px] lg:w-[1000px] lg:pt-[178px]'>
              <Link href={`/programmes/${[clubId]}`}>
                <button className='flex'>
                  <ArrowCircleLeftIcon className='h-[15px] w-[15px] lg:h-[30px] lg:w-[30px]' />
                  <p className='text-xs leading-[15px] ml-[3.68px] lg:ml-[7.25px] lg:text-xl lg:leading-[29px]'>ย้อนกลับ</p>
                </button>
              </Link>
              <div className='lg:flex justify-between w-[225px] lg:w-[978px] mx-auto mt-[18px] lg:mt-[41px]'>
                {/* <p className='w-[108px] text-[14px] leading-[16px] lg:w-[290px] lg:text-xl'>สถานะ: {status} </p> */}
                <div className='w-[220px] lg:w-[335px] lg:ml-[29px]'>
                  <p className='text-left text-[16px] leading-[21px] lg:text-[24px] lg:leading-[30px] mt-[25.7px] lg:mt-[9px] text-[#5C5C5C] flex flex-row'>สถานะ : 
                    <span className={`ml-[5px] ${status == 'Approved'? 'text-[#19C57C]': status == 'Pending' ? 'text-[#FCB52B]': 'text-[#E80808]'} flex flex-row items-center`}> 
                    <svg className='max-lg:hidden' width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill={`${status == 'Approved'? '#19C57C': status == 'Pending' ? '#FCB52B': '#E80808'}`}/>
                    </svg>
                    <svg className='lg:hidden' width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill={`${status == 'Approved'? '#19C57C': status == 'Pending' ? '#FCB52B': '#E80808'}`}/>
                    </svg>
                  <p className='ml-[3px] lg:ml-[5px]'>{status == 'Approved'? 'ผ่านการตรวจสอบ': status == 'Pending' ? 'อยู่ระหว่างการตรวจสอบ': 'ไม่ผ่านการตรวจสอบ'}</p>
                  </span> </p>
                </div>              
                <div className='mt-[16px] flex justify-between'>
                  <Link href={`/programmes/${[clubId]}/preview`}><button className='w-[106.8px] h-[28.8px] lg:w-[192px] lg:h-[52px] border-blue-edit-300 box-border border-[1.2px] lg:border-[2px] rounded-[112px] lg:rounded-[200px]'><p className='text-center text-[14px] leading-[17px] lg:text-xl font-500 text-blue-edit-300'>Preview</p></button></Link>
                  <button className='w-[108px] h-[30px] lg:w-[192px] lg:h-[52px] border-blue-edit-300 box-border border-2 rounded-[112px] lg:rounded-[200px] text-[24px] font-[400] bg-blue-edit-300  ml-[19px] ' onClick={publishToPending}><p className='text-center text-[14px] leading-[16.94px] lg:leading-[48px] lg:text-xl text-white'>ส่งการแก้ไข</p></button>
                </div>
              </div>
            </div>
            <div className='mx-auto mt-[18px] w-[330px] lg:w-[771px] lg:mt-[27px]'>
              <div className='w-[328px] h-[330px] rounded-[27px] flex flex-col lg:flex-row lg:w-[771px] lg:h-[240px] lg:rounded-[31.18px] shadow-[2px_2px_4px_rgba(0,0,0,0.3)] mt-[27px] justify-center items-center'>
                <div className='text-center lg:w-[485px]'>
                  <div className='lg:h-[92px] mt-[20px] lg:mt-[29px]'>
                    <h1 className='h-[29px] text-xl lg:h-[34px] lg:text-[28px] lg:leading-[34px]' > {info.nameTH}</h1>
                    <h2 className='h-[24px] lg:h-[29px] font-[400px] text-md lg:text-xl text-gray-500 mt-[1px]'>{info.nameEN}</h2>
                    <h2 className='h-[21px] text-[17px] leading-[21px] lg:h-[24px] lg:text-[20px] leading-md lg:mt-[5px] text-gray-500 mt-[3px]'>สายการเรียน {info.member} คน</h2>
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
                <div className='flex mt-[63px] lg:mt-[90px] relative'>
                  <h1 className='font-display font-[800]'>การรับสมัครและการสอบเข้า</h1>
                  <div className='z-10'>
                    <Tooltip
                    className='top-[25px] lg:top-[50px] right-0 mx-[5px] lg:mx-[10px] bg-white bg-opacity-90'
                    text='ใช้ภาษาทางการหรือกึ่งทางการ เน้นเข้าใจง่าย
                    งดใช้คําลงท้าย เช่น นะคะ นะครับ ค่ะ ครับ นะ จ้ะ นะจ๊ะ เป็นต้น
                    งดใช้ข้อความเชิญชวน เช่น อย่าลืมมาสมัครสายเราเยอะ ๆ นะ เป็นต้น
                    งดใช้อิโมจิหรืออิโมติคอน เช่น ^_^ หรือ 🥺
                    เนื้อความในหัวข้อที่ 1. และ 2. ต้องอธิบายรายละเอียดไม่ตํ่ากว่า 150 คำ' />
                  </div>
                </div>
                <div className='w-full mx-auto'>
                  <div className='mt-[21px] lg:w-[771px] lg:h-[420px] w-full h-[168px] bg-[#D9D9D9] lg:mt-[62px] rounded-[6px] lg:rounded-[15px]'>
                    <ImageUploader 
                    editable={true}
                    className='rounded-[6px] lg:rounded-[15px]'
                    uploadFunction={doUpload}
                    purpose='first'
                    link={imagesLink ?? false ? (imagesLink['first'] ?? null) : null}
                    />
                  </div>
                  <input type='text' className='w-full text-xs text-center border-hidden mt-[4px] lg:text-sm lg:mt-[14px]' 
                  placeholder='คำอธิบายรูปภาพ' 
                  value={admissionDes} 
                  onChange={(txt) => {setAdmissionDes(txt.target.value)}
                  }/>
                </div >
                <div className='border-[1px] lg:border-2 border-gray-500 rounded-[20.5px] lg:rounded-[22px] w-full  mt-[16px] lg:mt-[41px]'>
                  <QuillEditor
                    value={admission}
                    onChange={(txt) => {
                      setAdmission(txt.trim())
                    }}
                  />
                </div>
              </div>
              <div>
                <div className='flex mt-[63px] lg:mt-[90px] relative'>
                  <h1 className='font-display font-[800]'>วิชาหรือหลักสูตรเพิ่มเติมที่เรียน</h1>
                  <div className='z-10'>
                    <Tooltip 
                    className='top-[25px] lg:top-[50px] right-0 mx-[5px] lg:mx-[10px] bg-white bg-opacity-90'
                    text='ใช้ภาษาทางการหรือกึ่งทางการ เน้นเข้าใจง่าย
                    งดใช้คําลงท้าย เช่น นะคะ นะครับ ค่ะ ครับ นะ จ้ะ นะจ๊ะ เป็นต้น
                    งดใช้ข้อความเชิญชวน เช่น อย่าลืมมาสมัครสายเราเยอะ ๆ นะ เป็นต้น
                    งดใช้อิโมจิหรืออิโมติคอน เช่น ^_^ หรือ 🥺
                    เนื้อความในหัวข้อที่ 1. และ 2. ต้องอธิบายรายละเอียดไม่ตํ่ากว่า 150 คำ' />
                  </div>
                </div>
                <div className='w-full mx-auto'>
                  <div className='mt-[21px] lg:w-[771px] lg:h-[420px] w-full h-[168px] bg-[#D9D9D9] rounded-[6px] lg:rounded-[15px] lg:mt-[62px]'>
                  <ImageUploader 
                  editable={true}
                  className='rounded-[6px] lg:rounded-[15px]'
                  uploadFunction={doUpload}
                  purpose='second'
                  link={imagesLink ?? false ? (imagesLink['second'] ?? null) : null}
                  />
                  </div>
                  <input type='text' className='w-full text-xs text-center border-hidden mt-[4px] lg:text-sm lg:mt-[14px]' 
                  placeholder='คำอธิบายรูปภาพ' 
                  value={extendedClassDes} 
                  onChange={(txt) => {setExtendedClassDes(txt.target.value)}
                  }/>
                </div >
                <div className='border-[1px] lg:border-2 border-gray-500 rounded-[22px] w-full  mt-[16px] lg:mt-[41px] text-sm'>
                  <QuillEditor
                    className='text-sm'
                    value={extendedClass}
                    onChange={(txt) => {
                      setExtendedClass(txt.trim())
                    }}
                  />
                </div>
              </div>
              <div>
                <div className='flex mt-[63px] lg:mt-[90px] relative'>
                  <h1 className='font-display font-[800]'>ความน่าสนใจของสายการเรียน</h1>
                   <div className='z-10'>
                    <Tooltip 
                    className='top-[25px] lg:top-[50px] right-0 mx-[5px] lg:mx-[10px] bg-white bg-opacity-90'
                    text='ใช้ภาษาทางการหรือกึ่งทางการ เน้นเข้าใจง่าย
                    งดใช้คําลงท้าย เช่น นะคะ นะครับ ค่ะ ครับ นะ จ้ะ นะจ๊ะ เป็นต้น
                    งดใช้ข้อความเชิญชวน เช่น อย่าลืมมาสมัครสายเราเยอะ ๆ นะ เป็นต้น
                    งดใช้อิโมจิหรืออิโมติคอน เช่น ^_^ หรือ 🥺
                    เนื้อความในหัวข้อที่ 1. และ 2. ต้องอธิบายรายละเอียดไม่ตํ่ากว่า 150 คำ' />
                  </div>
                </div>
                <div className='w-full mx-auto'>
                  <div className='mt-[21px] lg:w-[771px] lg:h-[420px] w-full h-[168px] bg-[#D9D9D9] rounded-[6px] lg:rounded-[15px] lg:mt-[62px]'>
                  <ImageUploader 
                  editable={true}
                  className='rounded-[6px] lg:rounded-[15px]'
                  uploadFunction={doUpload}
                  purpose='third'
                  link={imagesLink ?? false ? (imagesLink['third'] ?? null) : null}
                  />
                  </div>
                  <input type='text' className='w-full text-xs text-center border-hidden mt-[4px] lg:text-sm lg:mt-[14px]' 
                  placeholder='คำอธิบายรูปภาพ' 
                  value={interestDes} 
                  onChange={(txt) => {setInterestDes(txt.target.value)}
                  }/>
                </div >
                <div className='border-[1px] lg:border-2 border-gray-500 rounded-[22px] w-full  mt-[16px] lg:mt-[41px] text-sm'>
                  <QuillEditor
                    className='text-sm'
                    value={interest}
                    onChange={(txt) => {
                      setInterest(txt.trim())
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='mx-auto w-[325px] lg:w-[901px]'>
                <div className='flex mt-[35px] lg:mt-[85px] relative'>
                  <h1 className='font-display font-[800]'>รีวิวจากรุ่นพี่</h1>
                  <div className='z-10 '>
                    <Tooltip 
                     className='top-[25px] lg:top-[50px] right-0 mx-[5px] lg:mx-[10px] bg-white bg-opacity-90'
                     text='ไม่จําเป็นต้องใช้ภาษาทางการ ระบุรุ่นและช่องทางการติดตามรุ่นพี่ เช่น Facebook Instagram แนบภาพถ่ายบุคคลอัตราส่วน 1:1 พร้อมข้อความรีวิว
                     รีวิวจากรุ่นพี่มีได้อย่างน้อย 1 คน และรวมทั้งหมดไม่เกิน 3 คน' />
                  </div>
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
