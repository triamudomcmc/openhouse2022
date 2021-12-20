import { filterNullProperties } from "@utils/filterNullObjProperties"
import classNames from "classnames"
import { Field, Form, Formik } from "formik"
import { NextPage } from "next"

const validate = (values: any) => {
  const errors = {}
  return errors
}

const Onboard: NextPage = () => {
  return (
    <main className="relative main-section w-full min-h-screen bg-gray-900">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4">
          <p className="font-display text-6xl text-white text-center font-medium py-2">ลงทะเบียน</p>
          <p className="before:content-['\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0'] before:line-through after:content-['\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0'] after:line-through font-display text-xl text-white text-center font-light py-2">
            <span className="px-2">กรอกข้อมูลผู้โดยสาร</span>
          </p>
        </div>
        <Formik
          initialValues={{
            username: "",
            firstname: "",
            lastname: "",
            status: "",
            school: null,
            grade: null,
          }}
          validate={validate}
          onSubmit={(data) => {
            const _data = filterNullProperties(data)
            // go to next page
          }}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ errors }) => (
            <Form className="py-4 text-sm w-[20rem] sm:w-[36rem] text-gray-700 font-display" noValidate>
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
                />
                {errors.username ? (
                  <p className="mt-1 text-red-400">{errors.username}</p>
                ) : (
                  <div className="h-6" aria-hidden></div>
                )}
              </>
              <>
                <label className="block my-1 text-white" htmlFor="username">
                  ชื่อผู้ใช้ (username)
                </label>
                <Field
                  className={classNames(
                    "border block w-full bg-white p-3 focus:outline-none rounded-md",
                    errors.firstname ? "border-red-400" : "border-white"
                  )}
                  id="username"
                  name="username"
                  placeholder="ความยาวไม่เกิน 32 ตัวอักษร"
                  type="text"
                />
                {errors.username ? (
                  <p className="mt-1 text-red-400">{errors.username}</p>
                ) : (
                  <div className="h-6" aria-hidden></div>
                )}
              </>
              <>
                <label className="block my-1 text-white" htmlFor="username">
                  ชื่อผู้ใช้ (username)
                </label>
                <Field
                  className={classNames(
                    "border block w-full bg-white p-3 focus:outline-none rounded-md",
                    errors.firstname ? "border-red-400" : "border-white"
                  )}
                  id="username"
                  name="username"
                  placeholder="ความยาวไม่เกิน 32 ตัวอักษร"
                  type="text"
                />
                {errors.username ? (
                  <p className="mt-1 text-red-400">{errors.username}</p>
                ) : (
                  <div className="h-6" aria-hidden></div>
                )}
              </>
              <hr className="text-white my-2 h-4" />
              <>
                <p className="w-full mb-4 text-white font-display">ขนาดเสื้อ</p>
                <div className="text-white" role="group" aria-labelledby="my-radio-group">
                  <label className="flex items-center my-1 font-display">
                    <Field
                      className="inline mr-3 text-black font-display focus:outline-none unc"
                      name="size"
                      type="radio"
                      value="S"
                    />
                    S (รอบอก 32 ความยาวตัว 25)
                  </label>
                  <label className="flex items-center my-1 font-display">
                    <Field
                      className="inline mr-3 text-black font-display focus:outline-none unc"
                      name="size"
                      type="radio"
                      value="M"
                    />
                    M (รอบอก 36 ความยาวตัว 27)
                  </label>
                  <label className="flex items-center my-1 font-display">
                    <Field
                      className="inline mr-3 text-black font-display focus:outline-none unc"
                      name="size"
                      type="radio"
                      value="L"
                    />
                    L (รอบอก 40 ความยาวตัว 29)
                  </label>
                  <label className="flex items-center my-1 font-display">
                    <Field
                      className="inline mr-3 text-black font-display focus:outline-none unc"
                      name="size"
                      type="radio"
                      value="XL"
                    />
                    XL (รอบอก 44 ความยาวตัว 31)
                  </label>
                </div>
                {errors.status ? (
                  <p className="mt-1 text-red-400">{errors.status}</p>
                ) : (
                  <div className="h-6" aria-hidden></div>
                )}
              </>
              <hr className="text-white my-2 h-4" />
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
                />
                {errors.username ? (
                  <p className="mt-1 text-red-400">{errors.username}</p>
                ) : (
                  <div className="h-6" aria-hidden></div>
                )}
              </>
              <>
                <label className="block my-1 text-white" htmlFor="username">
                  ชื่อผู้ใช้ (username)
                </label>
                <Field
                  className={classNames(
                    "border block w-full bg-white p-3 focus:outline-none rounded-md",
                    errors.firstname ? "border-red-400" : "border-white"
                  )}
                  id="username"
                  name="username"
                  placeholder="ความยาวไม่เกิน 32 ตัวอักษร"
                  type="text"
                />
                {errors.username ? (
                  <p className="mt-1 text-red-400">{errors.username}</p>
                ) : (
                  <div className="h-6" aria-hidden></div>
                )}
              </>
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
      </div>
    </main>
  )
}

export default Onboard
