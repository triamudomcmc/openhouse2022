import { FC } from "react"
import ImageUploader from "./imageDisplayUploader"
import QuillEditor from "@components/common/QuillEditor"
import { TrashIcon } from "@heroicons/react/outline"

const MAX_REVIEWS = 3

const ReviewRenderer:FC<{
    rawData: any[]
    setReviews?: any
    editable: boolean
  }> = ({rawData, setReviews, editable}) => {
    return (
      <div className="lg:mt-[64px]">
        {rawData.map((ref, index) => {
          return (
            <div key={index}>
            <ReviewCard 
              index={index}
              name={ref.Name}
              year={ref.Year}
              social={ref.Social}
              review={ref.Review}
              setReviews={setReviews}
              editable={editable}
            />
            </div>
          )
        })}
  
        {(rawData.length < MAX_REVIEWS && editable == true) && (
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
  
  const ReviewCard:FC<{
    index: number
    name: string
    year: string
    social: string
    review: string
    profilepic?: string
    setReviews?: any
    editable: boolean
  }> = ({index, name, year, social, review, profilepic, setReviews, editable}) => {
    return (
      <div>
        <div className="lg:flex mt-[26px] lg:mt-[41px]">
        <div className={ editable == false? "border border-1 border-white bg-white bg-opacity-50 rounded-[22.55px] lg:rounded-[28.84px] w-[325px] lg:w-[703px]" : "border border-1 rounded-[22.55px] lg:rounded-[28.84px] w-[325px] lg:w-[703px]"}>
              <QuillEditor
                value={review}
                onChange={(txt) => {
                  setReviews((prev) => {
                    prev[index].Review = txt.trim()
                    return prev
                  })
                }}
                readOnly={!editable}
              />
          </div>
          <div className="flex lg:flex-col mt-[30px] lg:mt-0 lg:ml-[50px]">
            <div  className="flex lg:flex-col lg:w-[170px]">
              <div className="bg-gray-300 w-[51px] h-[51px] rounded-[7px] lg:h-[135px] lg:w-[135px] lg:rounded-[27px]">
                <ImageUploader className="rounded-[9.2px] lg:rounded-[24.3px]" />
              </div>
              <div className="ml-[7px] lg:ml-0 lg:mt-[21px] w-[190px]">
                <p
                  className='text-[15px] leading-[18.15px] font-[900] font-display lg:text-xl'
                  suppressContentEditableWarning={true}
                  contentEditable={editable}
                  onKeyUpCapture={(e) => {
                    setReviews((prev) => {
                      const inp = e.target as HTMLElement;
                      prev[index].Name = inp.innerText
                      return prev
                    })
                  }}
                >{name}</p>
                <div className="flex font-display text-xs font-[400] lg:text-md">
                  <p>เตรียมอุดม</p>
                  <p 
                    suppressContentEditableWarning={true}
                    contentEditable={editable}
                    onKeyUpCapture={(e) => {
                      setReviews((prev) => {
                        const inp = e.target as HTMLElement;
                        prev[index].Year = inp.innerText
                        return prev
                      })
                    }}
                  >:  {year}</p>
                </div>
                <p className="font-display text-xs font-[400] lg:text-md"
                  suppressContentEditableWarning={true}
                  contentEditable={editable}
                  onKeyUpCapture={(e) => {
                    setReviews((prev) => {
                      const inp = e.target as HTMLElement;
                      prev[index].Social = inp.innerText
                      return prev
                    })
                  }}
                >{social}</p>
              </div>
            </div>
              {editable
              ? <div
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
              : null}
          </div>
          {/* <div className="border border-1 rounded-[22.55px] lg:rounded-[28.84px] w-[246px] lg:w-[703px] hidden">
              <QuillEditor
                value={review}
                onChange={(txt) => {
                  setReviews((prev) => {
                    prev[index].Review = txt.trim()
                    return prev
                  })
                }}
                readOnly={!editable}
              />
            </div> */}
        </div>
      </div>
    )
  }
  
  export default ReviewRenderer
  