import QuillEditor from "@components/common/QuillEditor"
import { FC } from "react"
import WinkWInk from "src/vectors/icons/winkWink"
import ContactRenderer from "./contactRender"
import ReviewRenderer from "./reviewsRender"
// import ImageUploader from "./imageDisplayUploader"
// import classNames from "classnames"
import Image from "next/image"

export const MainRenderer: FC<{
  // text?: string[]
  // width: Number[]
  // widthLg: Number[]
  page?: string
  type?: string
  info: { [key: string]: string }
  contacts?: { [key: string]: string }
  clubArticle?: string
  clubArticleDes?: string
  advantage?: string
  advantageDes?: string
  work?: string
  workDes?: string
  reviews?: any[]
  reviewImagesLink?: { [key: string]: string }
  imagesLink?: { [key: string]: string }
}> = ({
  type,
  page,
  info,
  contacts,
  clubArticle,
  clubArticleDes,
  advantage,
  advantageDes,
  work,
  workDes,
  reviews,
  reviewImagesLink,
  imagesLink,
}) => {
  let text
  if (type == "organization") {
    text = ["องค์กรนี้ทำอะไร ?", "ตำแหน่งหน้าที่", "ผลงานขององค์กร"]
  } else if (type == "programmes") {
  text = ["การรับสมัครและการสอบเข้า", "วิชาหรือหลักสูตรเพิ่มเติมที่เรียน", "ความน่าสนใจของสายการเรียน"]
  } else {
    text = ["ชมรมนี้ทำอะไร ?", "ประโยชน์ที่ได้รับจากการเข้าชมรม", "ผลงานของชมรม"]
  }

  // const loadPicture = (order: string) => {
  //   return info ? (
  //     <div>
  //       <Image
  //         src={imagesLink ?? false ? imagesLink["first"] ?? null : null}
  //         alt={clubArticleDes}
  //         width={672}
  //         height={378}
  //         objectFit={"cover"}
  //       />
  //       <p className="mt-2 text-center font-texts">{clubArticleDes}</p>
  //     </div>
  //   ) : (
  //     <></>
  //   )
  // }

  return (
    <div className="z-10 w-screen">
      <div className="mx-auto mt-[18px] max-w-[750px] px-8 lg:mt-[27px]">
        <div className="text-center lg:mb-[41px]">
          <div className="mt-[20px] lg:mt-[29px]">
            <h1 className="text-xl lg:text-[64px] lg:leading-[77.45px] text-blue-text"> {info.nameTH}</h1>
            {/* <h2 className="font-[400px] text-md lg:text-[45px] lg:leading-[54.5px] text-black opacity-60">
              {info.nameEN}
            </h2> */}
            {info?.nameEN?.includes("AIC") ||
            info?.nameEN?.includes("TUCMC") ||
            info?.nameEN?.includes("TUSC") ||
            info?.nameEN?.includes("TUPRO") ? null : (
              <h2 className="text-[17px] leading-[21px] lg:text-[32px] lg:leading-[38px] lg:mt-0 text-black opacity-60 mt-[3px]">
                สมาชิก {info?.member} คน
              </h2>
            )}
          </div>
          <ContactRenderer
            classname="mt-[3px] mx-auto mb-[22px] w-[207px] sm:w-[280px] lg:mt-[5px] text-gray-500"
            rawData={contacts}
            editable={false}
          />
        </div>
        <hr className="border-gray-500 lg:border-[1px]" />
        <div>
          <div
            className={`flex mt-[45px] lg:mt-[55px] -ml-3 lg:-ml-6 
                ${
                  page == "admin"
                    ? ""
                    : type == "organization"
                    ? "w-[194px] lg:w-[346px] shadow-[1.175px_2.35px_2.35px_rgba(0,0,0,0.25)]"
                    : type == "programmes"
                    ? "w-[279px] lg:w-[504px] shadow-[1.175px_2.35px_2.35px_rgba(0,0,0,0.25)]"
                    : "w-[194px] lg:w-[346px] shadow-[1.175px_2.35px_2.35px_rgba(0,0,0,0.25)]"
                } h-[39px] l lg:h-[68px] bg-white rounded-r-[21.5px] lg:rounded-r-[36.5px] `}
          >
            {page != "admin" && (
              <div>
                <WinkWInk width="41" height="41" classname="ml-[-20.5px] lg:hidden" />
                <WinkWInk width="70" height="70" classname="ml-[-35px] max-lg:hidden" />
              </div>
            )}
            <h1 className="font-display lg:text-[36px] font-[800] text-blue-text ml-[10px] my-auto">{text[0]}</h1>
            {/* <p className='text-[23px] leading-[28px] lg:text-[40px] lg:leading-[48.5px] font-[900] text-blue-text ml-[9px] lg:ml-[18px] my-auto'>?</p> */}
          </div>
          <div className="w-full mx-auto">
            <div className="sm:max-w-[771px] w-full rounded-[6px] lg:rounded-[15px] mx-auto mt-[21px] lg:mt-[36px]">
              {/* <ImageUploader
                editable={false}
                className="rounded-[15.5px] lg:rounded-[31.2px]"
                purpose="thumbnail"
                link={imagesLink ?? false ? imagesLink["first"] ?? null : null}
              /> */}
              <div>
                <Image
                  src={imagesLink["first"]}
                  alt={clubArticleDes}
                  width={771}
                  height={420}
                  objectFit={"cover"}
                  className="rounded-[15.5px] lg:rounded-[31.2px]"
                />
                <p className="text-center font-texts font-[300] text-xs lg:text-sm lg:leading-[20px] mt-[4px]">{clubArticleDes}</p>
              </div> 
            </div>
            {/* <p className="text-center font-texts font-[300] text-xs lg:text-sm lg:leading-[20px] mt-[4px]">
              {clubArticleDes}
            </p> */}
          </div>
          <QuillEditor className="mt-[21px] lg:backdrop-blur-[4px]" value={clubArticle} readOnly={true} />
        </div>
        <div>
          <div
            className={`flex mt-[45px] lg:mt-[55px] ml-[-15px] lg:-ml-6
                ${
                  page == "admin"
                    ? ""
                    : type == "organization"
                    ? "w-[194px] lg:w-[346px] shadow-[1.175px_2.35px_2.35px_rgba(0,0,0,0.25)]"
                    : type == "programmes"
                    ? "w-[279px] lg:w-[504px] shadow-[1.175px_2.35px_2.35px_rgba(0,0,0,0.25)]"
                    : "w-[325px] lg:w-[576px] shadow-[1.175px_2.35px_2.35px_rgba(0,0,0,0.25)]"
                } h-[39px] l lg:h-[68px] bg-white rounded-r-[21.5px] lg:rounded-r-[36.5px] `}
          >
            {page != "admin" && (
              <div>
                <WinkWInk width="41" height="41" classname="ml-[-20.5px] lg:hidden" />
                <WinkWInk width="70" height="70" classname="ml-[-35px] max-lg:hidden" />
              </div>
            )}
            <h1 className="font-display lg:text-[36px] font-[800] text-blue-text ml-[10px] my-auto">{text[1]}</h1>
          </div>
          <div className="w-full mx-auto">
            <div className="sm:max-w-[771px] w-full rounded-[6px] lg:rounded-[15px] mx-auto mt-[21px] lg:mt-[36px]">
              {/* <ImageUploader
                editable={false}
                className="rounded-[15.5px] lg:rounded-[31.2px]"
                purpose="thumbnail"
                link={imagesLink ?? false ? imagesLink["second"] ?? null : null}
              /> */}
              <div>
                <Image
                  src={imagesLink["second"]}
                  alt={advantage}
                  width={771}
                  height={420}
                  objectFit={"cover"}
                  className="rounded-[15.5px] lg:rounded-[31.2px]"
                />
                <p className="text-center font-texts font-[300] text-xs lg:text-sm lg:leading-[20px] mt-[4px]">{advantageDes}</p>
              </div> 
            </div>
            {/* <p className="text-center font-texts font-[300] text-xs lg:text-sm lg:leading-[20px] mt-[4px]">
              {advantageDes}
            </p> */}
          </div>
          <QuillEditor className=" mt-[21px] lg:backdrop-blur-[4px]" value={advantage} readOnly={true} />
        </div>
        <div>
          <div
            className={`flex mt-[45px] lg:mt-[55px] ml-[-15px] lg:-ml-6
                ${
                  page == "admin"
                    ? ""
                    : type == "organization"
                    ? "w-[194px] lg:w-[346px] shadow-[1.175px_2.35px_2.35px_rgba(0,0,0,0.25)]"
                    : type == "programmes"
                    ? "w-[279px] lg:w-[504px] shadow-[1.175px_2.35px_2.35px_rgba(0,0,0,0.25)]"
                    : "w-[194px] lg:w-[346px] shadow-[1.175px_2.35px_2.35px_rgba(0,0,0,0.25)]"
                } h-[39px] l lg:h-[68px] bg-white rounded-r-[21.5px] lg:rounded-r-[36.5px] `}
          >
            {page != "admin" && (
              <div>
                <WinkWInk width="41" height="41" classname="ml-[-20.5px] lg:hidden" />
                <WinkWInk width="70" height="70" classname="ml-[-35px] max-lg:hidden" />
              </div>
            )}
            <h1 className="font-display lg:text-[36px] font-[800] text-blue-text ml-[10px] my-auto">{text[2]}</h1>
          </div>
          <div className="w-full mx-auto">
            <div className="lg:max-w-[771px] w-full rounded-[6px] lg:rounded-[15px] mx-auto mt-[21px] lg:mt-[36px]">
              {/* <ImageUploader
                editable={false}
                className="rounded-[15.5px] lg:rounded-[31.2px]"
                purpose="thumbnail"
                link={imagesLink ?? false ? imagesLink["third"] ?? null : null}
              /> */}
              <div>
                <Image
                  src={imagesLink["third"]}
                  alt={workDes}
                  width={771}
                  height={420}
                  objectFit={"cover"}
                  className="rounded-[15.5px] lg:rounded-[31.2px]"
                />
                <p className="text-center font-texts font-[300] text-xs lg:text-sm lg:leading-[20px] mt-[4px]">{workDes}</p>
              </div> 
            </div>
            {/* <p className="text-center font-texts font-[300] text-xs lg:text-sm lg:leading-[20px] mt-[4px]">{workDes}</p> */}
          </div>
          <QuillEditor className="mt-[21px] lg:backdrop-blur-[4px]" value={work} readOnly={true} />
        </div>
      </div>
      <div className="mx-auto w-full px-10 max-w-[901px]">
        <div
          className={`flex mt-[45px] lg:mt-[55px] ml-[-15px] lg:-ml-6
                ${
                  page == "admin" ? "" : "shadow-[1.175px_2.35px_2.35px_rgba(0,0,0,0.25)]"
                } flex mt-[45px] lg:mt-[55px] w-[153px] h-[39px] lg:w-[292px] lg:h-[68px] bg-white rounded-r-[21.5px] lg:rounded-r-[36.5px]`}
        >
          {/* <div className=' shadow-[1.175px_2.35px_2.35px_rgba(0,0,0,0.25)]'> */}
          {page != "admin" && (
            <div>
              <WinkWInk width="41" height="41" classname="ml-[-20.5px] lg:hidden" />
              <WinkWInk width="70" height="70" classname="ml-[-35px] max-lg:hidden" />
            </div>
          )}
          <h1 className="font-display lg:text-[36px] font-[800] text-blue-text ml-[10px] my-auto">รีวิวจากรุ่นพี่</h1>
        </div>
        <ReviewRenderer rawData={reviews} reviewImagesLink={reviewImagesLink} editable={false} />
      </div>
    </div>
    // <div className="max-w-6xl px-8 mx-auto">
    //     <div className="max-w-2xl mx-auto mt-12 mb-24">
    //       <div className="flex flex-col items-center">
    //         <h1 className="text-5xl text-center">{info.nameTH}</h1>
    //         <p className="text-xl">ชมรม | {info.member} คน</p>
    //       </div>
    //       <div className="mt-10 space-y-20">
    //         {/* {loadPicture(0)} */}
    //         <div>
    //           <h1 className="text-4xl">ชมรมนี้ทำอะไร</h1>
    //           <article
    //             className="prose text-white font-texts mt-4 leading-[30px] text-justify article prose-inverted"
    //           >{clubArticle}</article>
    //         </div>
    //         {/* {loadPicture(1)} */}
    //         <div>
    //           <h1 className="text-4xl">ประโยชน์ที่ได้รับจากการเข้าชมรม</h1>
    //           <article
    //             className="prose text-white font-texts mt-4 leading-[30px] text-justify article prose-inverted"
    //             // dangerouslySetInnerHTML={{ __html: contents.benefit }}
    //           >{advantage}</article>
    //         </div>
    //         {/* {loadPicture(2)} */}
    //         <div>
    //           <h1 className="text-4xl">ผลงานของชมรม</h1>
    //           <article
    //             className="prose text-white font-texts mt-4 leading-[30px] text-justify article prose-inverted"
    //             // dangerouslySetInnerHTML={{ __html: contents.portfolio }}
    //           >{work}</article>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="mt-24 max-w-[50rem] mx-auto mb-24">
    //       <h1 className="text-4xl mb-14">รีวิวจากรุ่นพี่</h1>
    //       <div className="space-y-12">
    //         {/* {contents.reviews.map((reviewItem: any, i: number) => (
    //           <div key={`rev-${i}`} className="flex flex-col-reverse sm:flex-row sm:space-x-3">
    //             <div className="flex flex-row items-start flex-shrink-0 mt-4 space-x-2 sm:flex-col sm:space-x-0 sm:mt-0">
    //               {reviewItem.profileURL && (
    //                 <Image
    //                   alt={reviewItem.profileData.name}
    //                   width={85}
    //                   height={85}
    //                   src={reviewItem.profileURL}
    //                   className="rounded-2xl"
    //                   objectFit={"cover"}
    //                 />
    //               )}
    //               <div>
    //                 <h1 className="text-2xl font-semibold text-white">{reviewItem.profileData.name}</h1>
    //                 <p className="text-xs">เตรียมอุดม {reviewItem.profileData.year}</p>
    //                 <p className="text-xs">
    //                   {reviewItem.profileData.contact.startsWith("FB: ") ||
    //                   reviewItem.profileData.contact.startsWith("Twitter: ")
    //                     ? reviewItem.profileData.contact
    //                     : reviewItem.profileData.contact.startsWith("IG: ")
    //                     ? reviewItem.profileData.contact
    //                     : `IG: ${reviewItem.profileData.contact}`}
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="w-full px-6 pt-4 bg-white border border-white rounded-lg bg-opacity-20 border-opacity-60">
    //               <span className="w-full font-light text-8xl">“</span>
    //               <article
    //                 className="px-8 -mt-10 prose text-justify text-white font-texts article prose-inverted"
    //                 dangerouslySetInnerHTML={{ __html: reviewItem.content }}
    //               ></article>
    //               <p className="w-full -mb-10 font-light text-right text-8xl">”</p>
    //             </div>
    //           </div>
    //         ))} */}
    //       </div>
    //     </div>
    //   </div>
  )
}
