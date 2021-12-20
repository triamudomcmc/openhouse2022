import { IData, IFirstPage } from "@pages/register/onboard"
import classNames from "classnames"
import { Field, Form, Formik } from "formik"
import { FC } from "react"

const validate = (values: IFirstPage) => {
  const errors = {}
  return errors
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
        school: data.school,
        grade: data.grade,
      }}
      validate={validate}
      onSubmit={(data) => {
        // remove fields
        // const _data = filterNullProperties(data)
        // go to next page
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
              <p className="mt-1 text-red-400">{errors.username}</p>
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
              <p className="mt-1 text-red-400">{errors.firstname}</p>
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
              <p className="mt-1 text-red-400">{errors.lastname}</p>
            ) : (
              <div className="h-6" aria-hidden></div>
            )}
          </>
          <hr className="text-white my-2 h-4" />
          <>
            <p className="w-full mb-4 text-white font-display" id="status-group">
              สถานภาพ
            </p>
            <div className="text-white flex flex-col space-y-4" role="group" aria-labelledby="status-group">
              <label className="flex items-center my-1 font-display">
                <Field
                  className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none unc"
                  name="status"
                  type="radio"
                  value="student"
                />
                นักเรียน
              </label>
              <label className="flex items-center my-1 font-display">
                <Field
                  className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none unc"
                  name="status"
                  type="radio"
                  value="teacher"
                />
                ครู / บุคลากรโรงเรียน
              </label>
              <label className="flex items-center my-1 font-display">
                <Field
                  className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none unc"
                  name="status"
                  type="radio"
                  value="parent"
                />
                ผู้ปกครอง
              </label>
              <label className="flex items-center my-1 font-display">
                <Field
                  className="inline mr-3 text-black font-display w-[1.15rem] h-[1.15rem] focus:outline-none unc"
                  name="status"
                  type="radio"
                  value="other"
                />
                อื่น ๆ
              </label>
            </div>
            {errors.status ? (
              <p className="mt-1 text-red-400">{errors.status}</p>
            ) : (
              <div className="h-6" aria-hidden></div>
            )}
          </>
          {["student", "teacher"].includes(values.status) && (
            <>
              <hr className="text-white my-2 h-4" />
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
                  <p className="mt-1 text-red-400">{errors.school}</p>
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
          <hr className="text-white h-4" />
          {/* submit */}
          <div className="py-6 text-white">
            <button className="w-full p-3 mb-3 bg-red-400 rounded-full" type="submit">
              ถัดไป
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
