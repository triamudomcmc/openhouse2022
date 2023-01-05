import { FC } from "react"
import { Field, Form, Formik } from "formik"
import { motion } from "framer-motion"
import Link from "next/link"

import { IUserQuestionData } from "@ctypes/account"
import { filterNullProperties } from "@utilities/filterNullObjProperties"
import classNames from "classnames"

export const SecondQA: FC<{
  setData?
  data?
  setPage?
}> = ({ setData, data, setPage }) => {
  return (
    <div>
      <Formik
        initialValues={{
          news: data.news,
          purpose: data.purpose,
          // otherNews: "",
          otherPurpose: data.otherPurpose ?? "",
        }}
        validate={validate}
        onSubmit={(data) => {
          setData(formatData(data))
          setPage(3)
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors, values }) => (
          <Form className="py-4 px-4 text-sm w-[20rem] sm:w-[24rem] text-blue-text font-display" noValidate>
            <motion.div
              layout={"position"}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{}}
              className="mb-4"
            >
              <p className="w-full text-lg font-semibold mb-4 text-deep-turquoise font-display" id="news-group">
                ได้รับข่าวสารของ Triam Udom
                <br />
                Open House 2023 จากที่ใดบ้าง
                <br />
                <span className="text-sm font-light">(ตอบได้มากกว่า 1 ข้อ)</span>
              </p>
              <div className=" flex flex-col space-y-4" role="group" aria-labelledby="news-group">
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="shrink-0 inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="news"
                    type="checkbox"
                    value="facebook"
                  />
                  Facebook Page: Triam Udom Open House
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="shrink-0 inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none unc"
                    name="news"
                    type="checkbox"
                    value="instagram"
                  />
                  Instagram: @triamudom.oph / @tucmc_official
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="shrink-0 inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none unc"
                    name="news"
                    type="checkbox"
                    value="twitter"
                  />
                  Twitter: @triamudomoph
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="shrink-0 inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none unc"
                    name="news"
                    type="checkbox"
                    value="tiktok"
                  />
                  TikTok: @triamudom.oph
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="shrink-0 inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="news"
                    type="checkbox"
                    value="studygram"
                  />
                  เพจ studygram
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="shrink-0 inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="news"
                    type="checkbox"
                    value="education pages"
                  />
                  เว็บและเพจข่าวสารการศึกษา
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="shrink-0 inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="news"
                    type="checkbox"
                    value="triam student"
                  />
                  นักเรียนโรงเรียนเตรียมอุดมศึกษา
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="shrink-0 inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="news"
                    type="checkbox"
                    value="friends"
                  />
                  เพื่อน
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="shrink-0 inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="news"
                    type="checkbox"
                    value="parents"
                  />
                  ผู้ปกครอง
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="shrink-0 inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="news"
                    type="checkbox"
                    value="school"
                  />
                  โรงเรียน
                </label>
              </div>
              {errors.news ? (
                <p className="mt-1 text-orange">{errors.news}</p>
              ) : (
                <div className="h-6" aria-hidden></div>
              )}
            </motion.div>

            <hr className="text-deep-turquoise my-2 h-4" />

            <motion.div
              layout={"position"}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{}}
            >
              <p className="w-full text-lg font-semibold mb-4 text-deep-turquoise font-display" id="purpose-group">
                จุดประสงค์ในการเข้าร่วม Triam Udom
                <br />
                Open House 2023
                <br />
                <span className="text-sm font-light">(ตอบได้มากกว่า 1 ข้อ)</span>
              </p>
              <div className=" flex flex-col space-y-4" role="group" aria-labelledby="purpose-group">
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="shrink-0 inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="purpose"
                    type="checkbox"
                    value="find info"
                  />
                  หาข้อมูลการสอบเข้าโรงเรียนเตรียมฯ
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="shrink-0 inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="purpose"
                    type="checkbox"
                    value="watch activity"
                  />
                  เข้าชมกิจกรรมการแสดง
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="shrink-0 inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="purpose"
                    type="checkbox"
                    value="watch booth"
                  />
                  เข้าชมซุ้มกิจกรรม
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="shrink-0 inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="purpose"
                    type="checkbox"
                    value="find info (considers joining)"
                  />
                  หาข้อมูลเกี่ยวกับโรงเรียนเตรียมอุดมศึกษา เพื่อประกอบการตัดสินใจ
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="shrink-0 inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="purpose"
                    type="checkbox"
                    value="inspiration"
                  />
                  หาแรงบันดาลใจในการสอบเข้าโรงเรียนเตรียมอุดมศึกษา
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="shrink-0 inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="purpose"
                    type="checkbox"
                    value="consultation"
                  />
                  ขอคำปรึกษาเกี่ยวกับการสอบเข้าโรงเรียนเตรียมอุดมศึกษา
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="shrink-0 inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none"
                    name="purpose"
                    type="checkbox"
                    value="watch view"
                  />
                  ชมบรรยากาศของโรงเรียน
                </label>
                <label
                  className={classNames("flex", values.purpose?.includes("other") ? "items-start" : "items-center")}
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
                    <span>อื่น ๆ โปรดระบุ :</span>
                    {values.purpose?.includes("other") && (
                      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                        <Field
                          className=" bg-transparent px-0.5 py-4 border-b border-white font-display h-[1.15rem] w-full rounded-md block focus:outline-none"
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
                <p className="mt-1 text-orange">{errors.purpose}</p>
              ) : (
                <div className="h-6" aria-hidden></div>
              )}
            </motion.div>

            <hr className="text-deep-turquoise my-2 h-4" />
            {/* submit */}
            <motion.div
              layout={"position"}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{}}
              className="py-6 flex justify-center space-x-2"
            >
              <button
                className="w-36 p-3 mb-3 bg-transparent border border-blue-text text-blue-text rounded-full transition-colors hover:bg-blue-text hover:text-white"
                onClick={() => {
                  setData(formatData(values))
                  setPage(1)
                }}
              >
                ย้อนกลับ
              </button>
              <button className="w-36 p-3 mb-3 bg-blue-text text-white rounded-full" type="submit">
                ถัดไป
              </button>
            </motion.div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

const validate = (values: IUserQuestionData & { otherNews?: string; otherPurpose?: string }) => {
  const errors: any = {}

  if (values.news.length === 0) {
    errors.news = "จำเป็นต้องเลือกอย่างน้อย 1 ตัวเลือก"
  }

  if (values.purpose.length === 0) {
    errors.purpose = "จำเป็นต้องเลือกอย่างน้อย 1 ตัวเลือก"
  }

  if (values.news?.includes("other") && values.otherNews) {
    if (!values.otherNews) {
      errors.otherNews = "จำเป็นต้องใส่"
    }
  }

  if (values.purpose?.includes("other") && values.otherPurpose) {
    if (!values.otherPurpose) {
      errors.otherPurpose = "จำเป็นต้องใส่"
    }
  }

  return errors
}

const formatData: (data: any) => IUserQuestionData = (data) => {
  const _data: any = data

  // news includes other

  // if (data.news.includes("other")) {
  //   _data.news = _data.news.filter((d: string) => d !== "other");
  //   _data.news = [..._data.news, data.otherNews];
  //   _data.otherNews = null;
  // }

  // if (data.purpose.includes("other")) {
  //   _data.purpose = _data.purpose.filter((d: string) => d !== "other");
  //   _data.purpose = [..._data.purpose, data.otherPurpose];
  //   _data.otherPurpose = null;
  // }

  return filterNullProperties(_data) as IUserQuestionData
}
