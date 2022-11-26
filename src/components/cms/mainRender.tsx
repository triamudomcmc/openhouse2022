import QuillEditor from '@components/common/QuillEditor'
import { FC } from 'react'
import ContactRenderer from './contactRender'
import ReviewRenderer from './reviewsRender'

export const MainRenderer:FC<{
    info?: {[key: string]: string}
    contacts?: {[key: string]: string}
    clubArticle?: string
    clubArticleDes?: string
    advantage?: string
    advantageDes?: string
    work?: string
    workDes?: string
    reviews?: any[]
    editable: boolean
}> = ({info, contacts, clubArticle, clubArticleDes, advantage, advantageDes, work, workDes, reviews, editable}) => {
    return (
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
                    editable={!editable}
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
                    readOnly={!editable}
                  /> 
                  </div>
                </div>
                <QuillEditor
                  value={clubArticle}
                  readOnly={!editable}
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
                    readOnly={!editable}
                  />
                </div>
                <QuillEditor
                  value={advantage}
                  readOnly={!editable}
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
                    readOnly={!editable}
                  />
                </div>
                <QuillEditor
                  value={work}
                  readOnly={!editable}
                />
              </div>
              <br />
              <div>
                <h1 className='text-[36px]'>รีวิวจากรุ่นพี่</h1>
                  <ReviewRenderer
                    rawData={reviews}
                    editable={editable}
                  />
              </div>
            </div>
          </div> 
        </div>
    )
}
