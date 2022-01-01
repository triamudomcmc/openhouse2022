import { IData, IFirstPage } from "@pages/register/onboard"
import { filterNullProperties } from "@utils/filterNullObjProperties"
import classNames from "classnames"
import { Field, Form, Formik } from "formik"
import { FC } from "react"

const validate = (values: IFirstPage) => {
  const errors: any = {}

  if (!values.username) {
    errors.username = "จำเป็นต้องใส่"
  } else if (values.username.length > 24) {
    errors.username = "ความยาวต้องไม่เกิน 24 ตัวอักษร"
  }

  if (!values.firstname) {
    errors.firstname = "จำเป็นต้องใส่"
  } else if (values.lastname.length > 32) {
    errors.firstname = "ความยาวต้องไม่เกิน 32 ตัวอักษร"
  }

  if (!values.lastname) {
    errors.lastname = "จำเป็นต้องใส่"
  } else if (values.lastname.length > 32) {
    errors.lastname = "ความยาวต้องไม่เกิน 32 ตัวอักษร"
  }

  if (!values.status) {
    errors.status = "จำเป็นต้องเลือกฐานะ"
  }

  if (["teacher", "student"].includes(values.status) && !values.school) {
    errors.school = "จำเป็นต้องใส่"
  }

  if (values.status === "student" && !values.grade) {
    errors.grade = "จำเป็นต้องใส่"
  } else if (values.status === "student" && values.grade) {
    if (values.grade.length > 16) {
      errors.grade = "ความยาวต้องไม่เกิน 16 ตัวอักษร"
    }
  }

  return errors
}

export const formatData: (data: any) => IFirstPage = (data) => {
  const _data: any = data

  // not status that requires school
  if (!["student", "teacher"].includes(data.status)) {
    _data.school = null
  }

  // not student
  if (data.status !== "student") {
    _data.grade = null
  }

  return filterNullProperties(_data) as IFirstPage
}

export const FirstPage: FC<{
  updateData: (data: IFirstPage) => void
  setPage: (page: number) => void
  data: IData
}> = ({ updateData, data, setPage }) => {
  return (
    <Formik
      initialValues={{
        username: data.username,
        firstname: data.firstname,
        lastname: data.lastname,
        status: data.status,
        school: data?.school ?? "",
        grade: data?.grade ?? "",
      }}
      validate={validate}
      onSubmit={(data) => {
        updateData(formatData(data))
        setPage(2)
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, values }) => (
        <Form className="py-4 px-4 text-sm w-[20rem] sm:w-[24rem] text-gray-700 font-display" noValidate>
          <>
            <label className="block my-1 text-white" htmlFor="username">
              ชื่อผู้ใช้ (username)
            </label>
            <Field
              className={classNames(
                "border block w-full bg-white p-3 focus:outline-none rounded-md",
                errors.username ? "border-red-400" : "border-white"
              )}
              id="username"
              name="username"
              placeholder="ความยาวไม่เกิน 32 ตัวอักษร"
              type="text"
              maxLength="32"
            />
            {errors.username ? (
              <p className="mt-1 text-red-400 mb-6">{errors.username}</p>
            ) : (
              <div className="h-6" aria-hidden></div>
            )}
          </>
          <>
            <label className="block my-1 text-white" htmlFor="firstname">
              ชื่อ (ไม่ต้องมีคำนำหน้า)
            </label>
            <Field
              className={classNames(
                "border block w-full bg-white p-3 focus:outline-none rounded-md",
                errors.firstname ? "border-red-400" : "border-white"
              )}
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
          </>
          <>
            <label className="block my-1 text-white" htmlFor="lastname">
              นามสกุล
            </label>
            <Field
              className={classNames(
                "border block w-full bg-white p-3 focus:outline-none rounded-md",
                errors.lastname ? "border-red-400" : "border-white"
              )}
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
          </>
          {/* <hr className="text-white my-2 h-4" /> */}
          <>
            <p className="w-full mb-4 text-white font-display" id="status-group">
              สถานภาพ
            </p>
            <div className="text-white flex flex-col space-y-4" role="group" aria-labelledby="status-group">
              <label className="flex items-center my-1 font-display">
                <Field
                  className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none"
                  name="status"
                  type="radio"
                  value="student"
                />
                นักเรียน
              </label>
              <label className="flex items-center my-1 font-display">
                <Field
                  className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none"
                  name="status"
                  type="radio"
                  value="teacher"
                />
                ครู / บุคลากรโรงเรียน
              </label>
              <label className="flex items-center my-1 font-display">
                <Field
                  className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none"
                  name="status"
                  type="radio"
                  value="alumini"
                />
                นักเรียนเก่าโรงเรียนเตรียมฯ
              </label>
              <label className="flex items-center my-1 font-display">
                <Field
                  className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none"
                  name="status"
                  type="radio"
                  value="parent"
                />
                ผู้ปกครอง
              </label>
              <label className="flex items-center my-1 font-display">
                <Field
                  className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none"
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
          </>
          {["student", "teacher"].includes(values.status) && (
            <>
              {/* <hr className="text-white my-2 h-4" /> */}
              <>
                <label className="block my-1 text-white" htmlFor="school">
                  โรงเรียน
                </label>
                <Field
                  className={classNames(
                    "border block w-full bg-white p-3 focus:outline-none rounded-md",
                    errors.school ? "border-red-400" : "border-white"
                  )}
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
              </>
              {values.status === "student" && (
                <>
                  <label className="block my-1 text-white" htmlFor="grade">
                    ระดับชั้น
                  </label>
                  <Field
                    className={classNames(
                      "border block w-full bg-white p-3 focus:outline-none rounded-md",
                      errors.grade ? "border-red-400" : "border-white"
                    )}
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
                </>
              )}
            </>
          )}
          {/* <hr className="text-white h-4" /> */}
          {/* submit */}
          <div className="pt-8 pb-6 text-white">
            <button className="w-full p-3 mb-3 bg-red-400 rounded-full" type="submit">
              ถัดไป
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
