  
import { FC } from "react"

import QuillEditor from "@components/common/QuillEditor"

const ContactRenderer:FC<{
    rawData: any[]
    setContacts?: any
    editable: boolean
  }> = ({rawData, setContacts, editable}) => {
    return (
      <div>
        {rawData.map((ref, index) => {
          return (
            <div key={index}>
            <ReviewCard 
              index={index}
              first={ref.First ?? "IG: XXXXXXXXXXXXXXX"}
              second={ref.Second ?? "FB: XXXXXXXXXXXXXXX"}
              third={ref.Third ?? "อื่นๆ XXXXXXXXXXXXXXX"}
              setContacts={setContacts}
              editable={editable}
            />
            </div>
          )
        })}
  
      </div>
    )
  }
  
  const ReviewCard:FC<{
    index: number
    first: string
    second: string
    third: string
    setContacts: any
    editable: boolean
  }> = ({index, first, second, third, setContacts, editable}) => {
    return (
      <div>
        <h1
          contentEditable={editable}
          onKeyUpCapture={(e) => {
            setContacts((prev) => {
              const inp = e.target as HTMLElement;
              prev.First = inp.innerText
              return prev
            })
          }}
        >{first}</h1>
        <h1
          contentEditable={editable}
          onKeyUpCapture={(e) => {
            setContacts((prev) => {
              const inp = e.target as HTMLElement;
              prev.Second = inp.innerText
              return prev
            })
          }}
        >{second}</h1>
        <h1
          contentEditable={editable}
          onKeyUpCapture={(e) => {
            setContacts((prev) => {
              const inp = e.target as HTMLElement;
              prev.Third = inp.innerText
              return prev
            })
          }}
        >{third}</h1>
      </div>
    )
  }
  
  export default ContactRenderer
  