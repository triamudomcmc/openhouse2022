import { AdaptiveBg } from "@components/common/AdaptiveBg"
import { FirstPage } from "@components/onboard/FirstPage"
import { SecondPage } from "@components/onboard/SecondPage"
import { useAuth } from "@lib/auth"
import { submitRegister } from "@services/submitRegister"
import { NextPage } from "next"
import { useState } from "react"

export interface IFirstPage {
  username: string
  firstname: string
  lastname: string
  status: "student" | "teacher" | "parent" | "alumini" | "other"
  school?: string
  grade?: string
}

export interface ISecondPage {
  news: Array<string>
  purpose: Array<string>
}

export interface IData extends IFirstPage, ISecondPage {}

const Onboard: NextPage = () => {
  const [data, setData] = useState<IData>({
    username: "",
    firstname: "",
    lastname: "",
    status: "student",
    school: "",
    grade: "",
    news: [],
    purpose: [],
  })
  const [page, setPage] = useState<number>(1)
  const auth = useAuth()

  return (
    <AdaptiveBg
      primary={{ background: "url('/images/backgrounds/register.jpg')", height: "1024px" }}
      secondary={{ background: "url('/images/backgrounds/register-mobile.jpg')", height: "926px" }}
      mobile={{ background: "url('/images/backgrounds/register-mobile-default.jpg')", height: "926px" }}
      classname="relative main-section w-full min-h-screen"
      element="main"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4">
          <p className="font-display text-6xl text-white text-center font-medium py-2">ลงทะเบียน</p>
          <p className="before:content-['\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0'] before:line-through after:content-['\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0'] after:line-through font-display text-xl text-white text-center font-light py-2">
            <span className="px-2">กรอกข้อมูลผู้โดยสาร</span>
          </p>
        </div>
        {page === 1 && (
          <FirstPage updateData={(_data: IFirstPage) => setData({ ...data, ..._data })} setPage={setPage} data={data} />
        )}
        {page === 2 && (
          <SecondPage
            updateData={(_data: ISecondPage) => setData({ ...data, ..._data })}
            submitData={(_data: ISecondPage) => submitRegister(auth, { ...data, ..._data } as IData)}
            setPage={setPage}
            data={data}
          />
        )}
      </div>
    </AdaptiveBg>
  )
}

export default Onboard
