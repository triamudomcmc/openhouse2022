import { FC } from "react"
import { Field, Form, Formik } from "formik"
import { motion } from "framer-motion"

import { IUserQuestionData } from "@ctypes/account"
import { filterNullProperties } from "@utilities/filterNullObjProperties"

export const FirstQA: FC<{
    setData?
    data?
    setPage?
}> = ({setData, data, setPage}) => {
    return (
        <div>
            <Formik
                initialValues={{
                    username: data.username,
                    prefix: data.prefix,
                    firstname: data.firstname,
                    lastname: data.lastname,
                    status: data.status,
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
            {({errors, values}) => (
              <Form className="" noValidate>
                <motion.div initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.4}}>
                  <label className="" htmlFor="username">
                    ชื่อผู้ใช้ (username)
                  </label>
                  <Field
                    className={
                      errors.username ? "border-red-400" : "border-white"
                    }
                    id="username"
                    name="username"
                    placeholder="ความยาวไม่เกิน 24 ตัวอักษร"
                    type="text"
                    maxLength="32"
                  />
                  {errors.username ? (
                    <p className="mt-1 text-red-400 mb-6">{errors.username}</p>
                  ) : (
                    <div className="h-6" aria-hidden></div>
                  )}
                </motion.div>
                <motion.div initial={{y: -20, opacity:0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.6}}>
                  <label className="" htmlFor="prefix">
                    คำนำหน้าชื่อ
                  </label>
                  <Field
                    className={
                      errors.prefix ? "border-red-400" : "border-white"
                    }
                    id="prefix"
                    name="prefix"
                    placeholder="ด.ช./ด.ญ."
                    type="text"
                  />
                  {errors.prefix ? (
                    <p className="mt-1 text-red-400 mb-6">{errors.prefix}</p>
                  ) : (
                    <div className="h-6" aria-hidden></div>
                  )}
                </motion.div>
                <motion.div initial={{y: -20, opacity:0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.6}}>
                  <label className="" htmlFor="firstname">
                    ชื่อ (ไม่ต้องมีคำนำหน้า)
                  </label>
                  <Field
                    className={
                      errors.firstname ? "border-red-400" : "border-white"
                    }
                    id="firstname"
                    name="firstname"
                    placeholder="เรียนเด่น"
                    type="text"
                  />
                  {errors.firstname ? (
                    <p className="mt-1 text-red-400 mb-6">{errors.firstname}</p>
                  ) : (
                    <div className="h-6" aria-hidden></div>
                  )}
                </motion.div>
                <motion.div initial={{y: -20, opacity:0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.8}}>
                  <label className="block my-1 text-white" htmlFor="lastname">
                    นามสกุล
                  </label>
                  <Field
                    className={
                      errors.lastname ? "border-red-400" : "border-white"
                    }
                    id="lastname"
                    name="lastname"
                    placeholder="เล่นดี"
                    type="text"
                  />
                  {errors.lastname ? (
                    <p className="mt-1 text-red-400 mb-6">{errors.lastname}</p>
                  ) : (
                    <div className="h-6" aria-hidden></div>
                  )}
                </motion.div>
                {/* <hr className="text-white my-2 h-4" /> */}
                <motion.div initial={{y: -20, opacity:0}} animate={{y: 0, opacity: 1}} transition={{delay: 1.0}}>
                  <p className="" id="status-group">
                    สถานภาพ
                  </p>
                  <div className="" role="group" aria-labelledby="status-group">
                    <label className="">
                      <Field
                        className=""
                        name="status"
                        type="radio"
                        value="student"
                      />
                      นักเรียน
                    </label>
                    <label className="">
                      <Field
                        className=""
                        name="status"
                        type="radio"
                        value="teacher"
                      />
                      ครู / บุคลากรโรงเรียน
                    </label>
                    <label className="">
                      <Field
                        className=""
                        name="status"
                        type="radio"
                        value="alumini"
                      />
                      นักเรียนเก่าโรงเรียนเตรียมฯ
                    </label>
                    <label className="">
                      <Field
                        className=""
                        name="status"
                        type="radio"
                        value="parent"
                      />
                      ผู้ปกครอง
                    </label>
                    <label className="">
                      <Field
                        className=""
                        name="status"
                        type="radio"
                        value="other"
                      />
                      อื่น ๆ
                    </label>
                  </div>
                  {errors.status ? (
                    <p className="mt-1 text-red-400 mb-6">{errors.status}</p>
                  ) : (
                    <div className="h-6" aria-hidden></div>
                  )}
                </motion.div>
                {["student", "teacher"].includes(values.status) && (
                  <>
                    {/* <hr className="text-white my-2 h-4" /> */}
                    <motion.div initial={{y: -20, opacity:0}} animate={{y: 0, opacity: 1}} layout="position">
                      <label className="block my-1 text-white" htmlFor="school">
                        โรงเรียน
                      </label>
                      <Field
                        className={
                          errors.school ? "border-red-400" : "border-white"
                        }
                        id="school"
                        name="school"
                        placeholder="โรงเรียนเตรียมอุดมศึกษา"
                        type="text"
                      />
                      {errors.school ? (
                        <p className="mt-1 text-red-400 mb-6">{errors.school}</p>
                      ) : (
                        <div className="h-6" aria-hidden></div>
                      )}
                    </motion.div>
                    {values.status === "student" && (
                      <motion.div initial={{y: -20, opacity:0}} animate={{y: 0, opacity: 1}} layout="position">
                        <label className="block my-1 text-white" htmlFor="grade">
                          ระดับชั้น
                        </label>
                        <Field
                          className={
                            errors.grade ? "border-red-400" : "border-white"
                          }
                          id="grade"
                          name="grade"
                          placeholder="ม.3"
                          type="text"
                        />
                        {errors.grade ? (
                          <p className="mt-1 text-red-400">{errors.grade}</p>
                        ) : (
                          <div className="h-6" aria-hidden></div>
                        )}
                      </motion.div>
                    )}
                  </>
                )}
                {/* <hr className="text-white h-4" /> */}
                {/* submit */}
                <motion.div initial={{y: -20, opacity:0}} animate={{y: 0, opacity: 1}} layout={"position"} className="pt-8 pb-6">
                  <button className="" type="submit">
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
  
    if (["teacher", "student"].includes(values.status) && !values.school) {
      errors.school = "จำเป็นต้องระบุ"
    }
  
    if (values.status === "student" && !values.grade) {
      errors.grade = "จำเป็นต้องระบุ"
    } else if (values.status === "student" && values.grade) {
      if (values.grade.length > 16) {
        errors.grade = "ความยาวต้องไม่เกิน 16 ตัวอักษร"
      }
    }
  
    return errors
}

const formatData: (data: any) => IUserQuestionData = (data) => {
    const _data: any = data
  
    // not status that requires school
    if (!["student", "teacher"].includes(data.status)) {
      _data.school = null
    }
  
    // not student
    if (data.status !== "student") {
      _data.grade = null
    }
  
    return filterNullProperties(_data) as IUserQuestionData
  }
