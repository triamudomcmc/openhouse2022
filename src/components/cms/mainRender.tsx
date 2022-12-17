import QuillEditor from '@components/common/QuillEditor'
import { FC } from 'react'
import WinkWInk from 'src/vectors/icons/winkWink'
import ContactRenderer from './contactRender'
import ReviewRenderer from './reviewsRender'
import ImageUploader from './imageDisplayUploader'
import classNames from 'classnames';

export const MainRenderer:FC<{
    text: string[]
    // width: Number[]
    // widthLg: Number[]
    type: string
    info: {[key: string]: string}
    contacts?: {[key: string]: string}
    clubArticle?: string
    clubArticleDes?: string
    advantage?: string
    advantageDes?: string
    work?: string
    workDes?: string
    reviews?: any[]
    reviewImagesLink?: {[key: string]: string}
    imagesLink?: {[key: string]: string}
}> = ({text,type,  info, contacts, clubArticle, clubArticleDes, advantage, advantageDes, work, workDes, reviews, reviewImagesLink, imagesLink}) => {
  
  return (
          <div className='mb-[86px] z-10'>
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
                <div className={`flex mt-[45px] lg:mt-[55px] ml-[-15px] lg:ml-[-50px] 
                ${type == 'organization'? 'w-[194px] lg:w-[346px]': type == 'programmes'?'w-[279px] lg:w-[504px]':'w-[194px] lg:w-[346px]'} h-[39px] l lg:h-[68px] bg-white rounded-r-[21.5px] lg:rounded-r-[36.5px] shadow-[1.175px_2.35px_2.35px_rgba(0,0,0,0.25)]`}>
                  <WinkWInk width="41" height="41" classname='ml-[-20.5px] lg:hidden'/>
                  <WinkWInk width="70" height="70" classname='ml-[-35px] max-lg:hidden'/>
                  <h1 className='font-display font-[800] text-blue-text ml-[10px] my-auto'>{text[0]}</h1>
                  {/* <p className='text-[23px] leading-[28px] lg:text-[40px] lg:leading-[48.5px] font-[900] text-blue-text ml-[9px] lg:ml-[18px] my-auto'>?</p> */}
                </div>
                <div className='w-full mx-auto'>
                  <div className='lg:w-[771px] lg:h-[420px] w-[308px] h-[168px] rounded-[6px] lg:rounded-[15px] mx-auto mt-[21px] lg:mt-[36px]'>
                    <ImageUploader  
                      editable={false}
                      className='rounded-[15.5px] lg:rounded-[31.2px]'
                      purpose='thumbnail'
                      link={imagesLink ?? false ? (imagesLink['first'] ?? null) : null}
                    />
                  </div>
                  <p className='text-center font-texts font-[300] text-xs lg:text-sm lg:leading-[20px] mt-[4px]'>{clubArticleDes}</p>
                </div >
                <QuillEditor
                    className='lg:mt-[46px] mt-[21px] lg:backdrop-blur-[4px]'
                    value={clubArticle}
                    readOnly={true}
                  />
              </div>
              <div>
              <div className={`flex mt-[45px] lg:mt-[55px] ml-[-15px] lg:ml-[-50px] 
              ${type == 'organization'? 'w-[319px] lg:w-[576px]': type == 'programmes'?'w-[311px] lg:w-[558px]':'w-[319px] lg:w-[576px]'} lg:h-[68px] bg-white rounded-r-[21.5px] lg:rounded-r-[36.5px] shadow-[1.175px_2.35px_2.35px_rgba(0,0,0,0.25)]`}>
                  <WinkWInk width="41" height="41" classname='ml-[-20.5px] lg:hidden'/>
                  <WinkWInk width="70" height="70" classname='ml-[-35px] max-lg:hidden'/>
                  <h1 className='font-display font-[800] text-blue-text ml-[10px] my-auto'>{text[1]}</h1>
                </div>
                <div className='w-full mx-auto'>
                  <div className='lg:w-[771px] lg:h-[420px] w-[308px] h-[168px] rounded-[6px] lg:rounded-[15px] mx-auto mt-[21px] lg:mt-[36px]'>
                    <ImageUploader  
                      editable={false}
                      className='rounded-[15.5px] lg:rounded-[31.2px]'
                      purpose='thumbnail'
                      link={imagesLink ?? false ? (imagesLink['second'] ?? null) : null}
                    />
                  </div>
                  <p className='text-center font-texts font-[300] text-xs lg:text-sm lg:leading-[20px] mt-[4px]'>{advantageDes}</p>
                </div >
                <QuillEditor
                    className='lg:mt-[46px] mt-[21px] lg:backdrop-blur-[4px]'
                    value={advantage}
                    readOnly={true}
                  />
              </div>
              <div>
              <div className={`flex mt-[45px] lg:mt-[55px] ml-[-15px] lg:ml-[-50px]
                ${type == 'organization'? 'w-[195px] lg:w-[352px]': type == 'programmes'?'w-[200px] lg:w-[548px]':'w-[195px] lg:w-[352px]'} lg:h-[68px] bg-white rounded-r-[21.5px] lg:rounded-r-[36.5px] shadow-[1.175px_2.35px_2.35px_rgba(0,0,0,0.25)]`}>
                  <WinkWInk width="41" height="41" classname='ml-[-20.5px] lg:hidden'/>
                  <WinkWInk width="70" height="70" classname='ml-[-35px] max-lg:hidden'/>
                  <h1 className='font-display font-[800] text-blue-text ml-[10px] my-auto'>{text[2]}</h1>
                </div>
                <div className='w-full mx-auto'>
                  <div className='lg:w-[771px] lg:h-[420px] w-[308px] h-[168px] rounded-[6px] lg:rounded-[15px] mx-auto mt-[21px] lg:mt-[36px]'>
                    <ImageUploader  
                      editable={false}
                      className='rounded-[15.5px] lg:rounded-[31.2px]'
                      purpose='thumbnail'
                      link={imagesLink ?? false ? (imagesLink['third'] ?? null) : null}
                    />
                  </div>
                  <p className='text-center font-texts font-[300] text-xs lg:text-sm lg:leading-[20px] mt-[4px]'>{workDes}</p>
                </div >
                <QuillEditor
                    className='lg:mt-[46px] mt-[21px] lg:backdrop-blur-[4px]'
                    value={work}
                    readOnly={true}
                  />
              </div>
            </div>
            <div className='mx-auto w-[325px] lg:w-[901px]'>
            <div className='flex mt-[45px] lg:mt-[55px] w-[153px] h-[39px] lg:w-[292px] lg:h-[68px] bg-white rounded-r-[21.5px] lg:rounded-r-[36.5px] shadow-[1.175px_2.35px_2.35px_rgba(0,0,0,0.25)]'>
                  <WinkWInk width="41" height="41" classname='ml-[-20.5px] lg:hidden'/>
                  <WinkWInk width="70" height="70" classname='ml-[-35px] max-lg:hidden'/>
                  <h1 className='font-display font-[800] text-blue-text ml-[10px] my-auto'>รีวิวจากรุ่นพี่</h1>
                </div>
                  <ReviewRenderer
                    rawData={reviews}
                    reviewImagesLink={reviewImagesLink}
                    editable={false}
                  />
            </div>
          </div> 
    )
}
