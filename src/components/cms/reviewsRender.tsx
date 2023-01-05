/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useRef, useState } from "react"
import ImageUploader from "@components/cms/imageDisplayUploader"
import QuillEditor from "@components/common/QuillEditor"
import { TrashIcon } from "@heroicons/react/outline"

import { motion } from "framer-motion"
import { toBase64 } from "src/utilities/imgToBase"

const MAX_REVIEWS = 3

const ReviewRenderer: FC<{
  rawData: any[]
  setReviews?: any
  reviewImagesLink?: { [key: number]: string }
  reviewDoUpload?: (e: any, purpose: string, index: number) => Promise<void>
  editable: boolean
}> = ({ rawData, setReviews, reviewImagesLink, editable, reviewDoUpload }) => {
  return (
    <div className="lg:mt-[64px] mb-[60px] ">
      {rawData.map((ref, index) => {
        return (
          <div key={index}>
            <ReviewCard
              index={index}
              name={ref.Name}
              year={ref.Year}
              social={ref.Social}
              setReviews={setReviews}
              review={ref.Review}
              reviewImagesLink={reviewImagesLink}
              reviewDoUpload={reviewDoUpload}
              editable={editable}
            />
          </div>
        )
      })}

      {rawData.length < MAX_REVIEWS && editable == true && (
        <div
          onClick={() => {
            setReviews((prev) => [
              ...prev,
              {
                Name: "ชื่อ",
                Year: "85",
                Social: "IG: instagram",
                Review: "",
              },
            ])
          }}
          className="flex mx-auto items-center justify-center space-x-2 bg-white rounded-full shadow-[0_1.7px_2.3px_rgba(0,0,0,0.25)] cursor-pointer mt-[34px] w-[160px] h-[36px] lg:w-[277px] lg:h-[62px]"
        >
          <p className="text-[14px] font-[400] text-blue-edit-300 lg:text-xl">+ เพิ่มรีวิวจากรุ่นพี่</p>
        </div>
      )}
    </div>
  )
}

const ReviewCard: FC<{
  index: number
  name: string
  year: string
  social: string
  setReviews?: any
  review: string
  reviewImagesLink?: { [key: number]: string }
  reviewDoUpload?: (e: any, purpose: string, index: number) => Promise<void>
  editable: boolean
}> = ({ index, name, year, social, setReviews, review, reviewImagesLink, reviewDoUpload, editable }) => {
  const reviewerpic = useRef(null)
  const [reviewImages, setReviewImages] = useState(null)

  // Local component state, cus ReviewCard rendered on index
  async function onUpLoad(e): Promise<void> {
    const data = await toBase64(e.target.files[0])
    setReviewImages(data)
  }

  return (
    <div className="lg:flex mt-[26px] lg:mt-[41px] max-w-[850px] w-full">
      {index % 2 == 0 ? (
        <div className="max-lg:hidden">
          <div className="flex lg:flex-col mt-[30px] lg:mt-0 ">
            <div className="flex lg:flex-col lg:w-[170px]">
              <div className="">
                {/* <ImageUploader
                  editable={false}
                  className="rounded-[9.2px] lg:rounded-[24.3px]"
                  // uploadFunction={reviewDoUpload}
                  // purpose={`profile-${index}`}
                  link={reviewImagesLink ?? false ? reviewImagesLink[index] ?? null : null}
                /> */}
                <img width="768" height="432" src={reviewImagesLink[index]} className="w-[51px] h-[51px] rounded-[7px] lg:h-[135px] lg:w-[135px] lg:rounded-[27px]" />
              </div>
              <div className="ml-[7px] lg:ml-0 lg:mt-[21px] w-[190px]">
                <p
                  className="text-[15px] leading-[18.15px] font-[900] font-display lg:text-xl"
                  suppressContentEditableWarning={true}
                  contentEditable={editable}
                  onKeyUpCapture={(e) => {
                    setReviews((prev) => {
                      const inp = e.target as HTMLElement
                      prev[index].Name = inp.innerText
                      return prev
                    })
                  }}
                >
                  {name}
                </p>
                <div className="flex font-display text-xs font-[400] lg:text-md">
                  <p>เตรียมอุดม</p>
                  <p
                    suppressContentEditableWarning={true}
                    contentEditable={editable}
                    onKeyUpCapture={(e) => {
                      setReviews((prev) => {
                        const inp = e.target as HTMLElement
                        prev[index].Year = inp.innerText
                        return prev
                      })
                    }}
                  >
                   {year}
                  </p>
                </div>
                <p
                  className="font-display text-xs font-[400] lg:text-md"
                  suppressContentEditableWarning={true}
                  contentEditable={editable}
                  onKeyUpCapture={(e) => {
                    setReviews((prev) => {
                      const inp = e.target as HTMLElement
                      prev[index].Social = inp.innerText
                      return prev
                    })
                  }}
                >
                  {social}
                </p>
              </div>
            </div>
            {editable ? (
              <div
                onClick={() => {
                  setReviews((prev) => {
                    const after = [...prev]
                    if (index >= 0) after.splice(index, 1)
                    return after
                  })
                }}
                className="flex justify-center mt-2 rounded-[34.6px] lg:rounded-[46px] w-[34.6px] h-[34.6px] lg:w-[46px] lg:h-[46px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] cursor-pointer ml-[20px]"
              >
                <TrashIcon className="w-[18.5px] h-[18.5px] lg:w-[24px] lg:h-[24px] my-auto text-[#F68D55]" />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
      <div
        className={` ${
          editable == false ? " border-white bg-white bg-opacity-50 backdrop-blur-md" : ""
        } border border-1 rounded-[22.55px] lg:rounded-[28.84px] w-full max-w-[703px]`}
      >
        <QuillEditor
          value={review}
          onChange={(txt) => {
            setReviews
              ? setReviews((prev) => {
                  prev[index].Review = txt.trim()
                  return prev
                })
              : null
          }}
          readOnly={!editable}
        />
      </div>
      {index % 2 == 1 ? (
        <div className="max-lg:hidden">
          <div className="flex lg:flex-col mt-[30px] lg:mt-0 lg:ml-[30px] ">
            <div className="flex lg:flex-col lg:w-[170px]">
              <div className="">
                {/* <ImageUploader
                  editable={editable}
                  className="rounded-[9.2px] lg:rounded-[24.3px]"
                  uploadFunction={reviewDoUpload}
                  purpose={`profile-${index}`}
                  link={reviewImagesLink ?? false ? reviewImagesLink[index] ?? null : null}
                /> */}
                <img width="768" height="432" src={reviewImagesLink[index]} className="w-[51px] h-[51px] rounded-[7px] lg:h-[135px] lg:w-[135px] lg:rounded-[27px]" />
              </div>
              <div className="ml-[7px] lg:ml-0 lg:mt-[21px] w-[190px]">
                <p
                  className="text-[15px] leading-[18.15px] font-[900] font-display lg:text-xl"
                  suppressContentEditableWarning={true}
                  contentEditable={editable}
                  onKeyUpCapture={(e) => {
                    setReviews((prev) => {
                      const inp = e.target as HTMLElement
                      prev[index].Name = inp.innerText
                      return prev
                    })
                  }}
                >
                  {name}
                </p>
                <div className="flex font-display text-xs font-[400] lg:text-md">
                  <p>เตรียมอุดม</p>
                  <p
                    suppressContentEditableWarning={true}
                    contentEditable={editable}
                    onKeyUpCapture={(e) => {
                      setReviews((prev) => {
                        const inp = e.target as HTMLElement
                        prev[index].Year = inp.innerText
                        return prev
                      })
                    }}
                  >
                   {year}
                  </p>
                </div>
                <p
                  className="font-display text-xs font-[400] lg:text-md"
                  suppressContentEditableWarning={true}
                  contentEditable={editable}
                  onKeyUpCapture={(e) => {
                    setReviews((prev) => {
                      const inp = e.target as HTMLElement
                      prev[index].Social = inp.innerText
                      return prev
                    })
                  }}
                >
                  {social}
                </p>
              </div>
            </div>
            {editable ? (
              <div
                onClick={() => {
                  setReviews((prev) => {
                    const after = [...prev]
                    if (index >= 0) after.splice(index, 1)
                    return after
                  })
                }}
                className="flex justify-center mt-2 rounded-[34.6px] lg:rounded-[46px] w-[34.6px] h-[34.6px] lg:w-[46px] lg:h-[46px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] cursor-pointer ml-[20px]"
              >
                <TrashIcon className="w-[18.5px] h-[18.5px] lg:w-[24px] lg:h-[24px] my-auto text-[#F68D55]" />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="lg:hidden">
        <div className="flex lg:flex-col mt-[30px] lg:mt-0 ">
          <div className="flex lg:flex-col lg:w-[170px]">
            <div className="">
              {/* <ImageUploader
                editable={editable}
                className="rounded-[9.2px] lg:rounded-[24.3px]"
                uploadFunction={reviewDoUpload}
                purpose={`profile-${index}`}
                link={reviewImagesLink ?? false ? reviewImagesLink[index] ?? null : null}
              /> */}
                <img width="768" height="432" src={reviewImagesLink[index]} className="w-[51px] h-[51px] rounded-[7px] lg:h-[135px] lg:w-[135px] lg:rounded-[27px]" />
            </div>
            <div className="ml-[7px] lg:ml-0 lg:mt-[21px] w-[190px]">
              <p
                className="text-[15px] leading-[18.15px] font-[900] font-display lg:text-xl"
                suppressContentEditableWarning={true}
                contentEditable={editable}
                onKeyUpCapture={(e) => {
                  setReviews((prev) => {
                    const inp = e.target as HTMLElement
                    prev[index].Name = inp.innerText
                    return prev
                  })
                }}
              >
                {name}
              </p>
              <div className="flex font-display text-xs font-[400] lg:text-md">
                <p>เตรียมอุดม</p>
                <p
                  suppressContentEditableWarning={true}
                  contentEditable={editable}
                  onKeyUpCapture={(e) => {
                    setReviews((prev) => {
                      const inp = e.target as HTMLElement
                      prev[index].Year = inp.innerText
                      return prev
                    })
                  }}
                >
                 {year}
                </p>
              </div>
              <p
                className="font-display text-xs font-[400] lg:text-md"
                suppressContentEditableWarning={true}
                contentEditable={editable}
                onKeyUpCapture={(e) => {
                  setReviews((prev) => {
                    const inp = e.target as HTMLElement
                    prev[index].Social = inp.innerText
                    return prev
                  })
                }}
              >
                {social}
              </p>
            </div>
          </div>
          {editable ? (
            <div
              onClick={() => {
                setReviews((prev) => {
                  const after = [...prev]
                  if (index >= 0) after.splice(index, 1)
                  return after
                })
              }}
              className="flex justify-center mt-2 rounded-[34.6px] lg:rounded-[46px] w-[34.6px] h-[34.6px] lg:w-[46px] lg:h-[46px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] cursor-pointer ml-[20px]"
            >
              <TrashIcon className="w-[18.5px] h-[18.5px] lg:w-[24px] lg:h-[24px] my-auto text-[#F68D55]" />
            </div>
          ) : null}
        </div>
      </div>

      {/* {!editable && 
          <div className="flex lg:flex-col lg:w-[170px]">
          <div className="bg-gray-300 w-[51px] h-[51px] rounded-[7px] lg:h-[135px] lg:w-[135px] lg:rounded-[27px]">
            <ImageUploader 
              editable={false}
              className="rounded-[9.2px] lg:rounded-[24.3px]"
              uploadFunction={reviewDoUpload}
              purpose={`profile-${index}`}
              // link={index in reviewImagesLink ? reviewImagesLink[index] : null}
            />
          </div>
          <div className="ml-[7px] lg:ml-0 lg:mt-[21px] w-[190px]">
            <p
              className='text-[15px] leading-[18.15px] font-[900] font-display lg:text-xl'
              suppressContentEditableWarning={true}
              contentEditable={editable}
              onKeyUpCapture={(e) => {
                setReviews((prev) => {
                  const inp = e.target as HTMLElement
                  prev[index].Name = inp.innerText
                  return prev
                })
              } }
            >{name}</p>
            <div className="flex font-display text-xs font-[400] lg:text-md">
              <p>เตรียมอุดม</p>
              <p
                suppressContentEditableWarning={true}
                contentEditable={editable}
                onKeyUpCapture={(e) => {
                  setReviews((prev) => {
                    const inp = e.target as HTMLElement
                    prev[index].Year = inp.innerText
                    return prev
                  })
                } }
              >:  {year}</p>
            </div>
            <p className="font-display text-xs font-[400] lg:text-md"
              suppressContentEditableWarning={true}
              contentEditable={editable}
              onKeyUpCapture={(e) => {
                setReviews((prev) => {
                  const inp = e.target as HTMLElement
                  prev[index].Social = inp.innerText
                  return prev
                })
              } }
            >{social}</p>
          </div>
        </div> */}
      {/* } */}
    </div>
  )
}

export default ReviewRenderer
