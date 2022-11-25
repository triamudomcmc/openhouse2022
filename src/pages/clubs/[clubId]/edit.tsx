import { useState, useEffect, useRef, FC } from 'react'
import { GetServerSideProps } from 'next'
import QuillEditor from '@components/common/QuillEditor'
import ReviewRenderer from '@components/cms/reviewsRender'
import ContactRenderer from '@components/cms/contactRender'
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
    const [info, setInfo] = useState({})
    const [contacts, setContacts] = useState([''])
    const [clubArticle, setClubArticle] = useState('')
    const [clubArticleDes, setClubArticleDes] = useState('')
    const [advantage, setAdvantage] = useState('')
    const [advantageDes, setAdvantageDes] = useState('')
    const [work, setWork] = useState('')
    const [workDes, setWorkDes] = useState('')
    const [reviews, setReviews] = useState([])
    
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
        
        //Mock Data
        // if (dataFetch.nonexisted) {
          dataFetch={
            Info: {
              nameTH: 'ชมรมคอนเท้นจ้อกจ้อก',
              nameEN: 'JokJok club',
              member: 50
            },
            Contacts: [''],
            ClubArticle: '',
            ClubArticleDes: '',
            Advantage: '',
            AdvantageDes: '',
            Work: '',
            WorkDes: '',
            Reviews: []
          }
        // }   

        setInfo(dataFetch.Info != null ? dataFetch.Info : '')
        setContacts(dataFetch?.Contacts != null ? dataFetch.Contacts : ['']);
        setClubArticle(dataFetch?.ClubArticle)
        setClubArticleDes(dataFetch?.ClubArticleDes)
        setAdvantage(dataFetch?.Advantage)
        setAdvantageDes(dataFetch?.AdvantageDes)
        setWork(dataFetch?.Work)
        setWork(dataFetch?.workDes)
        setReviews(dataFetch?.Reviews != null ? dataFetch.Reviews : [])
      }
      if (user?.uid && user?.club == clubId || user?.roles?.hasOwnProperty('tucmc')) fetchInitialData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user?.uid])

    async function publishToPending() {
      const res = await fetch(`/api/${clubId}/publishToPending`, {
        method: 'POST',
        body: JSON.stringify({
          executerUid: user?.uid,
          "Contacts": contacts,
          "ClubArticle": clubArticle,
          "ClubArticleDes": clubArticleDes,
          "Advantage": advantage,
          "AdvantageDes": advantageDes,
          "Work": work,
          "WorkDes": workDes,
          "Reviews": reviews
        })
      })
    }

    if (user?.club == clubId || user?.roles?.hasOwnProperty('tucmc')) return (
        <div>
          <div className='w-[1029px] mr-auto ml-auto'>
            <div className='ml-auto mr-auto w-[771px] mt-[150px]'>
              <div className='flex w-[771px] h-[240px] rounded-[31.18px] shadow-md '>
                <div className='w-[280px] h-[240px] bg-[#D9D9D9] rounded-[31.18px]'>
                  <input 
                   className='opacity-0 w-[280px] h-[240px]'
                  type='file' 
                  />
                </div>
                <div className='text-center w-[485px]'>
                  <div className='h-[120px] mt-[20px]'>
                    <h1 className='text-[28px] h-[38px]' > {info.nameTH}</h1>
                    <h1 className='text-[24px] h-[34px]'>{info.nameEN}</h1>
                    <h2 className='text-[20px] h-[30px]'>สมาชิก {info.member} คน</h2>
                  </div>
                  <ContactRenderer 
                    rawData={contacts}
                    setContacts={setContacts}
                    editable={true}
                  />
                </div>
              </div>
              <br />
              <div>
                <h1 className='text-[36px]'>ชมรมนี้ทำอะไร</h1>
                <div>
                  <div className='w-[771px] h-[420px] bg-[#D9D9D9] rounded-[14.76px]'>
                    <input className='opacity-0 w-[771px] h-[420px]' type='file' />
                  </div>
                  <div>
                  <QuillEditor 
                    placeholder='Image Description'
                    value={clubArticleDes}
                    onChange={(txt) => {
                      setClubArticleDes(txt.trim())
                    }}
                  /> 
                  </div>
                </div>
                <QuillEditor
                  value={clubArticle}
                  onChange={(txt) => {
                    setClubArticle(txt.trim())
                  }}
                />
              </div>
              <div>
                <h1 className='text-[36px]'>ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
                <div>
                <div className='w-[771px] h-[420px] bg-[#D9D9D9] rounded-[14.76px]'>
                    <input className='opacity-0 w-[771px] h-[420px]' type='file' />
                  </div>
                  <QuillEditor
                    placeholder='Image Description'
                    value={advantageDes}
                    onChange={(txt) => {
                    setAdvantageDes(txt.trim())
                    }}
                  />
                </div>
                <QuillEditor
                  value={advantage}
                  onChange={(txt) => {
                  setAdvantage(txt.trim())
                  }}
                />
              </div>
              <div>
                <h1 className='text-[36px]'>ผลงานของชมรม</h1>
                <div>
                <div className='w-[771px] h-[420px] bg-[#D9D9D9] rounded-[14.76px]'>
                    <input className='opacity-0 w-[771px] h-[420px]' type='file' />
                  </div>
                  <QuillEditor
                    placeholder='Image Description'
                    value={workDes}
                    onChange={(txt) => {
                    setWorkDes(txt.trim())
                    }}
                  />
                </div>
                <QuillEditor
                  value={work}
                  onChange={(txt) => {
                  setWork(txt.trim())
                  }}
                />
              </div>
              <br />
              <div>
                <h1 className='text-[36px]'>รีวิวจากรุ่นพี่</h1>
                  <ReviewRenderer
                    rawData={reviews}
                    setReviews={setReviews}
                    editable={true}
                  />
              </div>
              <br />
              <button className='px-4 py-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100' onClick={publishToPending} type="submit">Publish</button>
            </div>
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
