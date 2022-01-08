import {IData, ISecondPage} from "@pages/register/onboard"
import classNames from "classnames"
import {Field, Form, Formik} from "formik"
import {FC, useState} from "react"
import Link from "next/link"
import {filterNullProperties} from "@utils/filterNullObjProperties"
import {AnimateSharedLayout, motion} from "framer-motion"

const validate = (values: ISecondPage & { otherNews?: string; otherPurpose?: string }) => {
  const errors: any = {}

  if (values.news.length === 0) {
    errors.news = "จำเป็นต้องเลือกอย่างน้อย 1 ตัวเลือก"
  }

  if (values.purpose.length === 0) {
    errors.purpose = "จำเป็นต้องเลือกอย่างน้อย 1 ตัวเลือก"
  }

  if (values.news.includes("other") && values.otherNews) {
    if (!values.otherNews) {
      errors.otherNews = "จำเป็นต้องใส่"
    }
  }

  if (values.purpose.includes("other") && values.otherPurpose) {
    if (!values.otherPurpose) {
      errors.otherPurpose = "จำเป็นต้องใส่"
    }
  }

  return errors
}

const formatData: (data: any) => ISecondPage = (data) => {
  const _data: any = data

  // news includes other

  if (data.news.includes("other")) {
    _data.news = _data.news.filter((d: string) => d !== "other")
    _data.news = [..._data.news, data.otherNews]
    _data.otherNews = null
  }

  if (data.purpose.includes("other")) {
    _data.purpose = _data.purpose.filter((d: string) => d !== "other")
    _data.purpose = [..._data.purpose, data.otherPurpose]
    _data.otherPurpose = null
  }

  return filterNullProperties(_data) as ISecondPage
}

export const SecondPage: FC<{
  submitData: (data: ISecondPage) => void
  updateData: (data: ISecondPage) => void
  setPage: (page: number) => void
  data: IData
}> = ({updateData, data, setPage, submitData}) => {

  const [animated, setAnimated] = useState(false)

  return (
    <AnimateSharedLayout>
      <Formik
        initialValues={{
          news: data.news,
          purpose: data.purpose,
          otherNews: "",
          otherPurpose: "",
        }}
        validate={validate}
        onSubmit={(data) => {
          updateData(formatData(data))
          submitData(data)
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({errors, values}) => (
          <Form className="py-4 px-4 text-sm w-[20rem] sm:w-[24rem] text-gray-700 font-display" noValidate>
            <motion.div layout={"position"} initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: animated ? 0 :0.2}} className="mb-4">
              <p className="w-full text-lg font-semibold mb-4 text-white font-display" id="news-group">
                ได้รับข่าวสารของ Triam Udom Online
                <br/>
                Open House 2022 จากที่ใดบ้าง
                <br/>
                <span className="text-sm font-light">(ตอบได้มากกว่า 1 ข้อ)</span>
              </p>
              <div className="text-white flex flex-col space-y-4" role="group" aria-labelledby="news-group">
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="news"
                    type="checkbox"
                    value="facebook"
                  />
                  Facebook Page: Triam Udom Open House
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none unc"
                    name="news"
                    type="checkbox"
                    value="instagram"
                  />
                  Instagram: @triamudom.oph / @tucmc_official
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="news"
                    type="checkbox"
                    value="triam student"
                  />
                  นักเรียนโรงเรียนเตรียมฯ
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="news"
                    type="checkbox"
                    value="friends"
                  />
                  เพื่อน
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="news"
                    type="checkbox"
                    value="parents"
                  />
                  ผู้ปกครอง
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="news"
                    type="checkbox"
                    value="school"
                  />
                  โรงเรียน
                </label>
                <label
                  className={classNames(
                    "flex whitespace-nowrap my-1 font-display",
                    values.news.includes("other") ? "items-start" : "items-center"
                  )}
                >
                  <div>
                    <Field
                      className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none "
                      name="news"
                      type="checkbox"
                      value="other"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <span>อื่น ๆ โปรดระบุ:</span>
                    {values.news.includes("other") && (
                      <motion.div initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}}>
                        <Field
                          className="text-white bg-transparent w-full px-0.5 py-4 border-b border-white font-display h-[1.15rem] focus:outline-none"
                          name="otherNews"
                          type="text"
                          placeholder="ระบุช่องทางเพิ่มเติม"
                        />
                      </motion.div>
                    )}
                  </div>
                </label>
              </div>
              {errors.news ? <p className="mt-1 text-red-400">{errors.news}</p> : <div className="h-6" aria-hidden></div>}
            </motion.div>

            {/* <hr className="text-white my-2 h-4" /> */}

            <motion.div layout={"position"} initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: animated ? 0 :0.4}}>
              <p className="w-full text-lg font-semibold mb-4 text-white font-display" id="purpose-group">
                จุดประสงค์ในการเข้าร่วม Triam Udom Online
                <br/>
                Open House 2022 จากที่ใดบ้าง
                <br/>
                <span className="text-sm font-light">(ตอบได้มากกว่า 1 ข้อ)</span>
              </p>
              <div className="text-white flex flex-col space-y-4" role="group" aria-labelledby="purpose-group">
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="purpose"
                    type="checkbox"
                    value="find info"
                  />
                  หาข้อมูลการสอบเข้าโรงเรียนเตรียมฯ
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="purpose"
                    type="checkbox"
                    value="watch live"
                  />
                  ดู LIVE
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="purpose"
                    type="checkbox"
                    value="find info (considers joining)"
                  />
                  หาข้อมูลเกี่ยวกับโรงเรียนเตรียมฯ เพื่อประกอบการตัดสินใจ
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="purpose"
                    type="checkbox"
                    value="inspiration"
                  />
                  หาแรงบันดาลใจ
                </label>
                <label
                  className={classNames(
                    "flex whitespace-nowrap my-1 font-display",
                    values.purpose.includes("other") ? "items-start" : "items-center"
                  )}
                >
                  <div>
                    <Field
                      className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none "
                      name="purpose"
                      type="checkbox"
                      value="other"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <span>อื่น ๆ โปรดระบุ:</span>
                    {values.purpose.includes("other") && (
                      <motion.div initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}}>
                        <Field
                          className="text-white bg-transparent w-full px-0.5 py-4 border-b border-white font-display h-[1.15rem] focus:outline-none"
                          name="otherPurpose"
                          type="text"
                          placeholder="ระบุเหตุผลเพิ่มเติม"
                        />
                      </motion.div>
                    )}
                  </div>
                </label>
              </div>
              {errors.purpose ? (
                <p className="mt-1 text-red-400">{errors.purpose}</p>
              ) : (
                <div className="h-6" aria-hidden></div>
              )}
            </motion.div>

            {/* <hr className="text-white h-4" /> */}
            {/* submit */}
            <motion.div layout={"position"} initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: animated ? 0 :0.6}}
                        className="py-6 text-white flex justify-center space-x-2">
              <button
                className="w-36 p-3 mb-3 bg-transparent border border-white rounded-full transition-colors hover:bg-white hover:text-gray-600"
                onClick={() => {
                  updateData(formatData(values))
                  setPage(1)
                }}
              >
                ย้อนกลับ
              </button>
              <button className="w-36 p-3 mb-3 bg-red-400 rounded-full" type="submit">
                ลงทะเบียน
              </button>
            </motion.div>

            <motion.div onAnimationComplete={() => {setAnimated(true)}} layout={"position"} initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: animated ? 0 :0.8}}
                        className="text-white text-center w-full font-display">
              <p className="leading-6">
                การลงทะเบียนถือว่ายอมรับ
                <Link href="/privacy-policy">
                  <a className="text-red-400 mx-1 hover:underline whitespace-nowrap">นโยบายความเป็นส่วนตัว</a>
                </Link>
                <br/>
                และ
                <Link href="/tos">
                  <a className="text-red-400 mx-1 hover:underline">ข้อตกลงการใช้งาน</a>
                </Link>
              </p>
            </motion.div>
          </Form>
        )}
      </Formik>
    </AnimateSharedLayout>
  )
}
