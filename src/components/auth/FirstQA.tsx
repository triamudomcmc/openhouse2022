import { FC } from "react"
import { Field, Form, Formik } from "formik"
import { motion } from "framer-motion"

import { IUserQuestionData } from "@ctypes/account"
import { filterNullProperties } from "@utilities/filterNullObjProperties"

export const FirstQA: FC<{
  setData?
  data?
  setPage?
}> = ({ setData, data, setPage }) => {
  return (
    <div>
      <Formik
        initialValues={{
          username: data.username,
          prefix: data.prefix,
          firstname: data.firstname,
          lastname: data.lastname,
          status: data.status,
          otherStatus: data?.otherStatus ?? '',
          school: data?.school ?? "",
          grade: data?.grade ?? "",
        }}
        validate={validate}
        onSubmit={(data) => {
          setData(formatData(data))
          setPage(2)
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors, values }) => (
          <Form className="py-4 px-4 text-sm w-[20rem] sm:w-[24rem] font-display" noValidate>
            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
              <label className="block my-1 text-blue-text" htmlFor="username">
                ชื่อผู้ใช้ (username)
              </label>
              <Field
                className={`
                      ${errors.username ? "border-orange" : "border-white"}
                      border block w-full bg-white p-3 focus:outline-none rounded-md
                    `}
                id="username"
                name="username"
                placeholder="ความยาวไม่เกิน 24 ตัวอักษร"
                type="text"
                maxLength="32"
              />
              {errors.username ? (
                <p className="mt-1 text-orange mb-6">{errors.username}</p>
              ) : (
                <div className="h-6" aria-hidden></div>
              )}
            </motion.div>
            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
              <label className="block my-1 text-blue-text" htmlFor="prefix">
                คำนำหน้าชื่อ
              </label>
              <Field
                className={`
                      ${errors.prefix ? "border-orange" : "border-white"}
                      border block w-full bg-white p-3 focus:outline-none rounded-md
                    `}
                component='select'
                id="prefix"
                name="prefix"
                placeholder="ด.ช./ด.ญ."
                type="text"
              >
                <option value="ด.ช.">เด็กชาย</option>
                <option value="ด.ญ.">เด็กหญิง</option>
                <option value="นาย">นาย</option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
              </Field>
              {errors.prefix ? (
                <p className="mt-1 text-orange mb-6">{errors.prefix}</p>
              ) : (
                <div className="h-6" aria-hidden></div>
              )}
            </motion.div>
            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
              <label className="block my-1 text-blue-text" htmlFor="firstname">
                ชื่อ (ไม่ต้องมีคำนำหน้า)
              </label>
              <Field
                className={`
                      ${errors.firstname ? "border-orange" : "border-white"}
                      border block w-full bg-white p-3 focus:outline-none rounded-md
                    `}
                id="firstname"
                name="firstname"
                placeholder="เรียนเด่น"
                type="text"
              />
              {errors.firstname ? (
                <p className="mt-1 text-orange mb-6">{errors.firstname}</p>
              ) : (
                <div className="h-6" aria-hidden></div>
              )}
            </motion.div>
            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}>
              <label className="block my-1 text-blue-text" htmlFor="lastname">
                นามสกุล
              </label>
              <Field
                className={`
                      ${errors.lastname ? "border-orange" : "border-white"}
                      border block w-full bg-white p-3 focus:outline-none rounded-md
                    `}
                id="lastname"
                name="lastname"
                placeholder="เล่นดี"
                type="text"
              />
              {errors.lastname ? (
                <p className="mt-1 text-orange mb-6">{errors.lastname}</p>
              ) : (
                <div className="h-6" aria-hidden></div>
              )}
            </motion.div>
            {/* <hr className="text-white my-2 h-4" /> */}
            <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.0 }}>
              <p className="block my-1 text-blue-text" id="status-group">
                สถานภาพ
              </p>
              <div className="text-cyan-text flex flex-col space-y-4" role="group" aria-labelledby="status-group">
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none"
                    name="status"
                    type="radio"
                    value="Student"
                  />
                  นักเรียน
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none"
                    name="status"
                    type="radio"
                    value="Teacher"
                  />
                  ครู / บุคลากรโรงเรียน
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none"
                    name="status"
                    type="radio"
                    value="Alumni"
                  />
                  นักเรียนเก่าโรงเรียนเตรียมฯ
                </label>
                <label className="flex items-center my-1 font-display">
                  <Field
                    className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none"
                    name="status"
                    type="radio"
                    value="Parent"
                  />
                  ผู้ปกครอง
                </label>
                <label className="flex items-center my-1 font-display">
                <div>
                    <Field
                      className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] cursor-pointer focus:outline-none "
                      name="status"
                      type="radio"
                      value="other"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <span>อื่น ๆ โปรดระบุ :</span>
                    {values.status?.includes("other") && (
                        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                          <Field
                            className={`
                                ${errors.status ? "border-orange" : "border-white"}
                                border block w-full bg-white p-3 focus:outline-none rounded-md
                              `}
                            id="otherStatus"
                            name="otherStatus"
                            type="text"
                            placeholder="ระบุสถานภาพของท่าน"
                          />
                        </motion.div>
                    )}
                  </div>
                </label>
              </div>
              {errors.otherStatus ? (
                <p className="mt-1 text-orange mb-6">{errors.status}</p>
              ) : (
                <div className="h-6" aria-hidden></div>
              )}
            </motion.div>
            {["Student", "Teacher"].includes(values.status) && (
              <>
                {/* <hr className="text-white my-2 h-4" /> */}
                <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} layout="position">
                  <label className="block my-1 text-blue-text" htmlFor="school">
                    โรงเรียน
                  </label>
                  <Field
                    className={`
                          ${errors.school ? "border-orange" : "border-white"}
                          border block w-full bg-white p-3 focus:outline-none rounded-md
                        `}
                    id="school"
                    name="school"
                    placeholder="โรงเรียนเตรียมอุดมศึกษา"
                    type="text"
                  />
                  {errors.school ? (
                    <p className="mt-1 text-orange mb-6">{errors.school}</p>
                  ) : (
                    <div className="h-6" aria-hidden></div>
                  )}
                </motion.div>
                {values.status === "Student" && (
                  <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} layout="position">
                    <label className="block my-1 text-blue-text" htmlFor="grade">
                      ระดับชั้น
                    </label>
                    <Field
                      className={`
                            ${errors.grade ? "border-orange" : "border-white"}
                            border block w-full bg-white p-3 focus:outline-none rounded-md
                          `}
                      id="grade"
                      name="grade"
                      placeholder="ม.3"
                      type="text"
                    />
                    {errors.grade ? (
                      <p className="mt-1 text-orange">{errors.grade}</p>
                    ) : (
                      <div className="h-6" aria-hidden></div>
                    )}
                  </motion.div>
                )}
              </>
            )}
            {/* <hr className="text-white h-4" /> */}
            {/* submit */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              layout={"position"}
              className="pt-8 pb-6"
            >
              <button className="w-full p-3 mb-3 text-white bg-blue-text rounded-full" type="submit">
                ถัดไป
              </button>
            </motion.div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

const validate = (values: IUserQuestionData) => {
  const errors: any = {}

  if (!values.username) {
    errors.username = "จำเป็นต้องระบุ"
  } else if (values.username.length > 24) {
    errors.username = "ความยาวต้องไม่เกิน 24 ตัวอักษร"
  }

  if (!values.firstname) {
    errors.firstname = "จำเป็นต้องระบุ"
  } else if (values.lastname.length > 32) {
    errors.firstname = "ความยาวต้องไม่เกิน 32 ตัวอักษร"
  }

  if (!values.lastname) {
    errors.lastname = "จำเป็นต้องระบุ"
  } else if (values.lastname.length > 32) {
    errors.lastname = "ความยาวต้องไม่เกิน 32 ตัวอักษร"
  }

  if (!values.status) {
    errors.status = "จำเป็นต้องเลือกสถานะ"
  }

  if (["Teacher", "Student"].includes(values.status) && !values.school) {
    errors.school = "จำเป็นต้องระบุ"
  }

  if (values.status === "Student" && !values.grade) {
    errors.grade = "จำเป็นต้องระบุ"
  } else if (values.status === "Student" && values.grade) {
    if (values.grade.length > 16) {
      errors.grade = "ความยาวต้องไม่เกิน 16 ตัวอักษร"
    }
  }

  if (values.status?.includes("other")) {
    if (!values.otherStatus) {
      errors.otherStatus = "จำเป็นต้องระบุ"
    }
  }

  return errors
}

const formatData: (data: any) => IUserQuestionData = (data) => {
  const _data: any = data

  // not status that requires school
  if (!["Student", "Teacher"].includes(data.status)) {
    _data.school = null
  }

  // not student
  if (data.status !== "Student") {
    _data.grade = null
  }

  if (data.status.includes("other")) {
    _data.status = data.otherStatus
    _data.otherStatus = null
  }

  return filterNullProperties(_data) as IUserQuestionData
}
