import { IData, ISecondPage } from "@pages/register/onboard"
import classNames from "classnames"
import { Field, Form, Formik } from "formik"
import { FC } from "react"
import Link from "next/link"

const validate = (values: ISecondPage) => {
  const errors = {}
  return errors
}

export const SecondPage: FC<{
  updateData: (data: ISecondPage) => void
  setPage: (page: number) => void
  data: IData
}> = ({ updateData, data, setPage }) => {
  return (
    <Formik
      initialValues={{
        news: data.news,
        purpose: data.purpose,
      }}
      validate={validate}
      onSubmit={(data) => {
        // remove fields
        // const _data = filterNullProperties(data)
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, values }) => (
        <Form className="py-4 px-4 text-sm w-[20rem] sm:w-[24rem] text-gray-700 font-display" noValidate>
          <>
            <p className="w-full text-lg font-semibold mb-4 text-white font-display" id="news-group">
              ได้รับข่าวสารของ Triam Udom Online
              <br />
              Open House 2022 จากที่ใดบ้าง
              <br />
              <span className="text-sm font-light">(ตอบได้มากกว่า 1 ข้อ)</span>
            </p>
            <div className="text-white flex flex-col space-y-4" role="group" aria-labelledby="news-group">
              <label className="flex items-center my-1 font-display">
                <Field
                  className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none unc"
                  name="news"
                  type="checkbox"
                  value="facebook"
                />
                Facebook Page: Triam Udom Open House
              </label>
              <label className="flex items-center my-1 font-display">
                <Field
                  className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none unc"
                  name="news"
                  type="checkbox"
                  value="instagram"
                />
                Instagram: @triamudom.oph / @tucmc_official
              </label>
              <label className="flex items-center my-1 font-display">
                <Field
                  className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none unc"
                  name="news"
                  type="checkbox"
                  value="triam student"
                />
                นักเรียนโรงเรียนเตรียมฯ
              </label>
              <label className="flex items-center my-1 font-display">
                <Field
                  className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none unc"
                  name="news"
                  type="checkbox"
                  value="friends"
                />
                เพื่อน
              </label>
              <label className="flex items-center my-1 font-display">
                <Field
                  className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none unc"
                  name="news"
                  type="checkbox"
                  value="parents"
                />
                ผู้ปกครอง
              </label>
              <label className="flex items-center my-1 font-display">
                <Field
                  className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none unc"
                  name="news"
                  type="checkbox"
                  value="school"
                />
                โรงเรียน
              </label>
            </div>
            {errors.news ? <p className="mt-1 text-red-400">{errors.news}</p> : <div className="h-6" aria-hidden></div>}
          </>

          <hr className="text-white my-2 h-4" />

          <>
            <p className="w-full text-lg font-semibold mb-4 text-white font-display" id="purpose-group">
              จุดประสงค์ในการเข้าร่วม Triam Udom Online
              <br />
              Open House 2022 จากที่ใดบ้าง
              <br />
              <span className="text-sm font-light">(ตอบได้มากกว่า 1 ข้อ)</span>
            </p>
            <div className="text-white flex flex-col space-y-4" role="group" aria-labelledby="purpose-group">
              <label className="flex items-center my-1 font-display">
                <Field
                  className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none unc"
                  name="purpose"
                  type="checkbox"
                  value="find info"
                />
                หาข้อมูลการสอบเข้าโรงเรียนเตรียมฯ
              </label>
              <label className="flex items-center my-1 font-display">
                <Field
                  className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none unc"
                  name="purpose"
                  type="checkbox"
                  value="watch live"
                />
                ดู LIVE
              </label>
              <label className="flex items-center my-1 font-display">
                <Field
                  className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none unc"
                  name="purpose"
                  type="checkbox"
                  value="find info (considers joining)"
                />
                หาข้อมูลเกี่ยวกับโรงเรียนเตรียมฯ เพื่อประกอบการตัดสินใจ
              </label>
              <label className="flex items-center my-1 font-display">
                <Field
                  className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none unc"
                  name="purpose"
                  type="checkbox"
                  value="inspiration"
                />
                หาแรงบันดาลใจ
              </label>
              <label className="flex items-center my-1 font-display">
                <Field
                  className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none unc"
                  name="purpose"
                  type="checkbox"
                  value="other"
                />
                อื่น ๆ
              </label>
            </div>
            {errors.purpose ? (
              <p className="mt-1 text-red-400">{errors.purpose}</p>
            ) : (
              <div className="h-6" aria-hidden></div>
            )}
          </>

          <hr className="text-white h-4" />
          {/* submit */}
          <div className="py-6 text-white flex justify-center space-x-2">
            <button
              className="w-36 p-3 mb-3 bg-transparent border border-white rounded-full transition-colors hover:bg-gray-800"
              onClick={() => setPage(1)}
            >
              ย้อนกลับ
            </button>
            <button className="w-36 p-3 mb-3 bg-red-400 rounded-full" type="submit">
              ลงทะเบียน
            </button>
          </div>

          <div className="text-white text-center w-full font-display">
            <p className="leading-6">
              การลงทะเบียนถือว่ายอมรับ
              <Link href="/privacy-policy">
                <a className="text-red-400 mx-1 hover:underline">นโยบายความเป็นส่วนตัว</a>
              </Link>
              <br />
              และ
              <Link href="/tos">
                <a className="text-red-400 mx-1 hover:underline">ข้อตกลงการใช้งาน</a>
              </Link>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  )
}
