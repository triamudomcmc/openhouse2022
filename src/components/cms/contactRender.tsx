import { FC } from "react"

const ContactRenderer: FC<{
  classname: string
  rawData: { [key: string]: string }
  setContacts?: any
  editable: boolean
}> = ({ classname, rawData, setContacts, editable }) => {
  return (
    <div className={classname}>
      <ContactCard
        first={rawData.First ?? ""}
        second={rawData.Second ?? ""}
        third={rawData.Third ?? ""}
        setContacts={setContacts}
        editable={editable}
      />
    </div>
  )
}

const ContactCard: FC<{
  first: string
  second: string
  third: string
  setContacts: any
  editable: boolean
}> = ({ first, second, third, setContacts, editable }) => {
  return (
    <div
      className={
        editable == false
          ? "lg:text-xl text-left text-[17px] leading-[21px]"
          : "lg:text-[20px] lg:leading-[24.2px] text-left text-[17px]"
      }
    >
      <p
        className=""
        suppressContentEditableWarning={true}
        contentEditable={editable}
        onKeyUpCapture={(e) => {
          setContacts((prev) => {
            const inp = e.target as HTMLElement
            prev.First = inp.innerText
            return prev
          })
        }}
      >
        {first}
      </p>
      <p
        className=""
        suppressContentEditableWarning={true}
        contentEditable={editable}
        onKeyUpCapture={(e) => {
          setContacts((prev) => {
            const inp = e.target as HTMLElement
            prev.Second = inp.innerText
            return prev
          })
        }}
      >
        {second}
      </p>
      <p
        className=""
        suppressContentEditableWarning={true}
        contentEditable={editable}
        onKeyUpCapture={(e) => {
          setContacts((prev) => {
            const inp = e.target as HTMLElement
            prev.Third = inp.innerText
            return prev
          })
        }}
      >
        {third}
      </p>
    </div>
  )
}

export default ContactRenderer
