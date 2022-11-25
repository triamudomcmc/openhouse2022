import { FC } from "react"

import QuillEditor from "@components/common/QuillEditor"

const MAX_REVIEWS = 3

const ReviewRenderer:FC<{
    rawData: any[]
    setReviews?: any
    editable: boolean
  }> = ({rawData, setReviews, editable}) => {
    return (
      <div>
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
  
        {rawData.length < MAX_REVIEWS && (
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
              className="flex items-center justify-center px-6 py-3 space-x-2 bg-white rounded-full shadow-md cursor-pointer"
            >
              <p>Add Review</p>
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
        <h1
          contentEditable={editable}
          onKeyUpCapture={(e) => {
            setReviews((prev) => {
              const inp = e.target as HTMLElement;
              prev[index].Name = inp.innerText
              return prev
            })
          }}
        >{name}</h1>
        <h1>เตรียมอุดม
        <h1
          contentEditable={editable}
          onKeyUpCapture={(e) => {
            setReviews((prev) => {
              const inp = e.target as HTMLElement;
              prev[index].Year = inp.innerText
              return prev
            })
          }}
        >{year}</h1></h1>
        <h1
          contentEditable={editable}
          onKeyUpCapture={(e) => {
            setReviews((prev) => {
              const inp = e.target as HTMLElement;
              prev[index].Social = inp.innerText
              return prev
            })
          }}
        >{social}</h1>
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
        <br />
        {editable
        ? <div
              onClick={() => {
                setReviews((prev) => {
                  const after = [...prev]
                  if (index >= 0) after.splice(index, 1)
                  return after
                })
              }}
              className="flex justify-center py-1 mt-2 bg-red-100 rounded-md shadow-md cursor-pointer"
            >
            <h3><u>Delete</u></h3>
          </div>
        : null}
        <br />
      </div>
    )
  }
  
  export default ReviewRenderer
  