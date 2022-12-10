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
}> = ({info, contacts, clubArticle, clubArticleDes, advantage, advantageDes, work, workDes, reviews}) => {
    return (
          <div className='mb-[86px]'>
            <div className='mx-auto mt-[18px] w-[308px] lg:w-[771px] lg:mt-[27px]'>
                <div className='text-center lg:mb-[41px]'>
                  <div className='mt-[20px] lg:mt-[29px]'>
                    <h1 className='text-xl lg:text-[64px] lg:leading-[77.45px] text-blue-text' > {info.nameTH}</h1>
                    <h2 className='font-[400px] text-md lg:text-[45px] lg:leading-[54.5px] text-black opacity-60'>{info.nameEN}</h2>
                    <h2 className='text-[17px] leading-[21px] lg:text-[32px] lg:leading-[38px] lg:mt-0 text-black opacity-60 mt-[3px]'>สมาชิก {info.member} คน</h2>
                  </div>
                  <ContactRenderer 
                    classname="mt-[3px] ml-[44px] mb-[22px] w-[207px] lg:w-[280px] lg:mx-auto lg:mt-[5px] text-gray-500"
                    rawData={contacts}
                    editable={false}
                  />
                </div>
              <hr className='border-gray-500 lg:border-[1px]'/>
              <div>
                <div className='flex mt-[45px] lg:mt-[55px] ml-[-15px] lg:ml-[-50px] w-[194px] h-[39px] lg:w-[346px] lg:h-[68px] bg-white rounded-r-[21.5px] lg:rounded-r-[36.5px] shadow-[1.175px_2.35px_2.35px_rgba(0,0,0,0.25)]'>
                  <svg width="41" height="41" viewBox="0 0 41 41" className='ml-[-20.5px] lg:hidden' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6921 0.952503C19.8719 0.0732477 21.1281 0.0732422 21.3079 0.952497L24.379 15.9783C24.4452 16.3019 24.6981 16.5548 25.0217 16.621L40.0475 19.6921C40.9268 19.8719 40.9268 21.1281 40.0475 21.3079L25.0217 24.379C24.6981 24.4452 24.4452 24.6981 24.379 25.0217L21.3079 40.0475C21.1281 40.9268 19.8719 40.9268 19.6921 40.0475L16.621 25.0217C16.5548 24.6981 16.3019 24.4452 15.9783 24.379L0.952503 21.3079C0.0732477 21.1281 0.0732422 19.8719 0.952497 19.6921L15.9783 16.621C16.3019 16.5548 16.5548 16.3019 16.621 15.9783L19.6921 0.952503Z" fill="#F06A23"/>
                  </svg>
                  <svg width="70" height="70" viewBox="0 0 41 41" className='ml-[-35px] max-lg:hidden' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6921 0.952503C19.8719 0.0732477 21.1281 0.0732422 21.3079 0.952497L24.379 15.9783C24.4452 16.3019 24.6981 16.5548 25.0217 16.621L40.0475 19.6921C40.9268 19.8719 40.9268 21.1281 40.0475 21.3079L25.0217 24.379C24.6981 24.4452 24.4452 24.6981 24.379 25.0217L21.3079 40.0475C21.1281 40.9268 19.8719 40.9268 19.6921 40.0475L16.621 25.0217C16.5548 24.6981 16.3019 24.4452 15.9783 24.379L0.952503 21.3079C0.0732477 21.1281 0.0732422 19.8719 0.952497 19.6921L15.9783 16.621C16.3019 16.5548 16.5548 16.3019 16.621 15.9783L19.6921 0.952503Z" fill="#F06A23"/>
                  </svg>
                  <h1 className='font-display font-[800] text-blue-text ml-[10px] my-auto'>ชมรมนี้ทำอะไร</h1>
                  <p className='text-[23px] leading-[28px] lg:text-[40px] lg:leading-[48.5px] font-[900] text-blue-text ml-[9px] lg:ml-[18px] my-auto'>?</p>
                </div>
                <div className='w-full mx-auto'>
                  <div className='lg:w-[771px] lg:h-[420px] w-[308px] h-[168px] bg-[#D9D9D9] rounded-[6px] lg:rounded-[15px] mx-auto mt-[21px] lg:mt-[36px]'>
                  </div>
                  <p className='text-center font-texts font-[300] text-xs lg:text-sm lg:leading-[20px] mt-[4px]'>{clubArticleDes}</p>
                </div >
                <QuillEditor
                    className='lg:mt-[46px] mt-[21px]'
                    value={clubArticle}
                    readOnly={true}
                  />
              </div>
              <div>
              <div className='flex mt-[45px] lg:mt-[55px] ml-[-15px] lg:ml-[-50px] w-[319px] h-[39px] lg:w-[576px] lg:h-[68px] bg-white rounded-r-[21.5px] lg:rounded-r-[36.5px] shadow-[1.175px_2.35px_2.35px_rgba(0,0,0,0.25)]'>
                  <svg width="41" height="41" viewBox="0 0 41 41" className='ml-[-20.5px] lg:hidden' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6921 0.952503C19.8719 0.0732477 21.1281 0.0732422 21.3079 0.952497L24.379 15.9783C24.4452 16.3019 24.6981 16.5548 25.0217 16.621L40.0475 19.6921C40.9268 19.8719 40.9268 21.1281 40.0475 21.3079L25.0217 24.379C24.6981 24.4452 24.4452 24.6981 24.379 25.0217L21.3079 40.0475C21.1281 40.9268 19.8719 40.9268 19.6921 40.0475L16.621 25.0217C16.5548 24.6981 16.3019 24.4452 15.9783 24.379L0.952503 21.3079C0.0732477 21.1281 0.0732422 19.8719 0.952497 19.6921L15.9783 16.621C16.3019 16.5548 16.5548 16.3019 16.621 15.9783L19.6921 0.952503Z" fill="#F06A23"/>
                  </svg>
                  <svg width="70" height="70" viewBox="0 0 41 41" className='ml-[-35px] max-lg:hidden' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6921 0.952503C19.8719 0.0732477 21.1281 0.0732422 21.3079 0.952497L24.379 15.9783C24.4452 16.3019 24.6981 16.5548 25.0217 16.621L40.0475 19.6921C40.9268 19.8719 40.9268 21.1281 40.0475 21.3079L25.0217 24.379C24.6981 24.4452 24.4452 24.6981 24.379 25.0217L21.3079 40.0475C21.1281 40.9268 19.8719 40.9268 19.6921 40.0475L16.621 25.0217C16.5548 24.6981 16.3019 24.4452 15.9783 24.379L0.952503 21.3079C0.0732477 21.1281 0.0732422 19.8719 0.952497 19.6921L15.9783 16.621C16.3019 16.5548 16.5548 16.3019 16.621 15.9783L19.6921 0.952503Z" fill="#F06A23"/>
                  </svg>
                  <h1 className='font-display font-[800] text-blue-text ml-[10px] my-auto'>ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
                </div>
                <div className='w-full mx-auto'>
                  <div className='lg:w-[771px] lg:h-[420px] w-[308px] h-[168px] bg-[#D9D9D9] rounded-[6px] lg:rounded-[15px] mx-auto mt-[21px] lg:mt-[36px]'>
                  </div>
                  <p className='text-center font-texts font-[300] text-xs lg:text-sm lg:leading-[20px] mt-[4px]'>{advantageDes}</p>
                </div >
                <QuillEditor
                    className='lg:mt-[46px] mt-[21px]'
                    value={advantage}
                    readOnly={true}
                  />
              </div>
              <div>
              <div className='flex mt-[45px] ml-[-15px] lg:ml-[-50px] lg:mt-[55px] w-[195px] h-[39px] lg:w-[352px] lg:h-[68px] bg-white rounded-r-[21.5px] lg:rounded-r-[36.5px] shadow-[1.175px_2.35px_2.35px_rgba(0,0,0,0.25)]'>
                  <svg width="41" height="41" viewBox="0 0 41 41" className='ml-[-20.5px] lg:hidden' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6921 0.952503C19.8719 0.0732477 21.1281 0.0732422 21.3079 0.952497L24.379 15.9783C24.4452 16.3019 24.6981 16.5548 25.0217 16.621L40.0475 19.6921C40.9268 19.8719 40.9268 21.1281 40.0475 21.3079L25.0217 24.379C24.6981 24.4452 24.4452 24.6981 24.379 25.0217L21.3079 40.0475C21.1281 40.9268 19.8719 40.9268 19.6921 40.0475L16.621 25.0217C16.5548 24.6981 16.3019 24.4452 15.9783 24.379L0.952503 21.3079C0.0732477 21.1281 0.0732422 19.8719 0.952497 19.6921L15.9783 16.621C16.3019 16.5548 16.5548 16.3019 16.621 15.9783L19.6921 0.952503Z" fill="#F06A23"/>
                  </svg>
                  <svg width="70" height="70" viewBox="0 0 41 41" className='ml-[-35px] max-lg:hidden' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6921 0.952503C19.8719 0.0732477 21.1281 0.0732422 21.3079 0.952497L24.379 15.9783C24.4452 16.3019 24.6981 16.5548 25.0217 16.621L40.0475 19.6921C40.9268 19.8719 40.9268 21.1281 40.0475 21.3079L25.0217 24.379C24.6981 24.4452 24.4452 24.6981 24.379 25.0217L21.3079 40.0475C21.1281 40.9268 19.8719 40.9268 19.6921 40.0475L16.621 25.0217C16.5548 24.6981 16.3019 24.4452 15.9783 24.379L0.952503 21.3079C0.0732477 21.1281 0.0732422 19.8719 0.952497 19.6921L15.9783 16.621C16.3019 16.5548 16.5548 16.3019 16.621 15.9783L19.6921 0.952503Z" fill="#F06A23"/>
                  </svg>
                  <h1 className='font-display font-[800] text-blue-text ml-[10px] my-auto'>ผลงานของชมรม</h1>
                </div>
                <div className='w-full mx-auto'>
                  <div className='lg:w-[771px] lg:h-[420px] w-[308px] h-[168px] bg-[#D9D9D9] rounded-[6px] lg:rounded-[15px] mx-auto mt-[21px] lg:mt-[36px]'>
                  </div>
                  <p className='text-center font-texts font-[300] text-xs lg:text-sm lg:leading-[20px] mt-[4px]'>{workDes}</p>
                </div >
                <QuillEditor
                    className='lg:mt-[46px] mt-[21px]'
                    value={work}
                    readOnly={true}
                  />
              </div>
            </div>
            <div className='mx-auto w-[325px] lg:w-[901px]'>
            <div className='flex mt-[45px] lg:mt-[55px] w-[153px] h-[39px] lg:w-[292px] lg:h-[68px] bg-white rounded-r-[21.5px] lg:rounded-r-[36.5px] shadow-[1.175px_2.35px_2.35px_rgba(0,0,0,0.25)]'>
                  <svg width="41" height="41" viewBox="0 0 41 41" className='ml-[-20.5px] lg:hidden' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6921 0.952503C19.8719 0.0732477 21.1281 0.0732422 21.3079 0.952497L24.379 15.9783C24.4452 16.3019 24.6981 16.5548 25.0217 16.621L40.0475 19.6921C40.9268 19.8719 40.9268 21.1281 40.0475 21.3079L25.0217 24.379C24.6981 24.4452 24.4452 24.6981 24.379 25.0217L21.3079 40.0475C21.1281 40.9268 19.8719 40.9268 19.6921 40.0475L16.621 25.0217C16.5548 24.6981 16.3019 24.4452 15.9783 24.379L0.952503 21.3079C0.0732477 21.1281 0.0732422 19.8719 0.952497 19.6921L15.9783 16.621C16.3019 16.5548 16.5548 16.3019 16.621 15.9783L19.6921 0.952503Z" fill="#F06A23"/>
                  </svg>
                  <svg width="70" height="70" viewBox="0 0 41 41" className='ml-[-35px] max-lg:hidden' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6921 0.952503C19.8719 0.0732477 21.1281 0.0732422 21.3079 0.952497L24.379 15.9783C24.4452 16.3019 24.6981 16.5548 25.0217 16.621L40.0475 19.6921C40.9268 19.8719 40.9268 21.1281 40.0475 21.3079L25.0217 24.379C24.6981 24.4452 24.4452 24.6981 24.379 25.0217L21.3079 40.0475C21.1281 40.9268 19.8719 40.9268 19.6921 40.0475L16.621 25.0217C16.5548 24.6981 16.3019 24.4452 15.9783 24.379L0.952503 21.3079C0.0732477 21.1281 0.0732422 19.8719 0.952497 19.6921L15.9783 16.621C16.3019 16.5548 16.5548 16.3019 16.621 15.9783L19.6921 0.952503Z" fill="#F06A23"/>
                  </svg>
                  <h1 className='font-display font-[800] text-blue-text ml-[10px] my-auto'>รีวิวจากรุ่นพี่</h1>
                </div>
                  <ReviewRenderer
                    rawData={reviews}
                    editable={false}
                  />
            </div>
          </div> 
    )
}
