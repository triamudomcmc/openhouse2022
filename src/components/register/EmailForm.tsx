import { ArrowLeftIcon } from "@heroicons/react/outline"
import { IAuthContext } from "@lib/auth"
import type { TPages } from "@pages/register"
import { submitEmail } from "@services/submitEmail"
import classNames from "classnames"
import { Field, Form, Formik } from "formik"
import type { FC } from "react"

const validate = (values: any) => {
  const errors: any = {}
  if (
    !values.email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  )
    errors.email = "อีเมลไม่ถูกต้อง"

  if (values.email !== values.verify) {
    errors.verify = "อีเมลไม่ตรงกับอีเมลยืนยัน"
  }

  return errors
}
export const EmailForm: FC<{ auth: IAuthContext | null; setPage: (page: TPages) => void }> = ({ auth, setPage }) => {
  return (
    <div>
      <a
        className="font-display text-white text-center pb-2 hover:opacity-80 transition-opacity cursor-pointer"
        onClick={() => setPage("all")}
      >
        <ArrowLeftIcon className="w-4 h-4 text-white inline mr-2" />
        ย้อนกลับ
      </a>
      <Formik
        initialValues={{
          email: "",
          verify: "",
        }}
        validate={validate}
        onSubmit={(data) => {
          submitEmail(auth, data.email)
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors }) => (
          <Form className="py-4 text-sm w-[20rem] sm:w-[24rem] text-gray-700 font-display" noValidate>
            <>
              <label className="block my-1 text-white" htmlFor="email">
                อีเมล
              </label>
              <Field
                className={classNames(
                  "border block w-full bg-white p-3 focus:outline-none rounded-md",
                  errors.email ? "border-red-400" : "border-white"
                )}
                id="email"
                name="email"
                placeholder="mail@example.com"
                type="email"
              />
              {errors.email ? (
                <p className="mt-1 text-red-400">{errors.email}</p>
              ) : (
                <div className="h-6" aria-hidden></div>
              )}
            </>
            <>
              <label className="block my-1 font-display text-white" htmlFor="verify">
                ยืนยันอีเมล
              </label>
              <Field
                className={classNames(
                  "border block w-full bg-white p-3 focus:outline-none rounded-md",
                  errors.verify ? "border-red-400" : "border-white"
                )}
                id="verify"
                name="verify"
                placeholder="mail@example.com"
                type="email"
              />
              {errors.verify ? (
                <p className="mt-1 text-red-400">{errors.verify}</p>
              ) : (
                <div className="h-6" aria-hidden></div>
              )}
            </>
            {/* submit */}
            <div className="py-6 text-white">
              <button className="w-full p-3 mb-3 bg-red-400 rounded-full" type="submit">
                ยืนยันอีเมล
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
