import Link from "next/link"
import { IAuthContext, useAuth } from "@lib/auth"
import { FC, useState } from "react"
import { Field, Form, Formik } from "formik"
import classnames from "classnames"
import { ArrowLeftIcon } from "@heroicons/react/outline"
import { submitEmail } from "@services/submitEmail"
import { TUCMCLogo } from "@components/common/TUCMCLogo"

type TPages = "all" | "email"

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

const EmailForm: FC<{ auth: IAuthContext | null; setPage: (page: TPages) => void }> = ({ auth, setPage }) => {
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
          <Form className="py-4 text-sm text-gray-700 font-display" noValidate>
            <>
              <label className="block my-1 text-white" htmlFor="email">
                อีเมล
              </label>
              <Field
                className={classnames(
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
                className={classnames(
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

const AllMethods: FC<{ auth: IAuthContext | null; setPage: (page: TPages) => void }> = ({ auth, setPage }) => {
  return (
    <div>
      <button
        className="flex items-center justify-center mx-auto font-display bg-white hover:bg-gray-300 py-auto rounded-full w-80 py-3 mb-6"
        onClick={() => auth?.signinWithFacebook("/register/onboard")}
      >
        <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M35.0505 17.639C35.0505 8.0979 27.3164 0.36377 17.7752 0.36377C8.23413 0.36377 0.5 8.0979 0.5 17.639C0.5 26.2611 6.81756 33.4079 15.0769 34.7035V22.6333H10.6889V17.639H15.0769V13.8333C15.0769 9.5041 17.6543 7.11321 21.6017 7.11321C23.4916 7.11321 25.4679 7.45008 25.4679 7.45008V11.6998H23.2912C21.1439 11.6998 20.4754 13.0317 20.4754 14.3982V17.639H25.2658L24.5005 22.6316H20.4754V34.7035C28.7329 33.4079 35.0505 26.2611 35.0505 17.639Z"
            fill="#1877F2"
          />
        </svg>
        <p className="px-4 text-black">Sign up with Facebook</p>
      </button>
      <button
        className="flex items-center justify-center mx-auto font-display bg-white hover:bg-gray-300 py-auto rounded-full w-80 py-3 mb-6"
        onClick={() => auth?.signinWithGoogle("/register/onboard")}
      >
        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_582:964)">
            <path
              d="M6.86609 18.5478L5.84918 22.344L2.13242 22.4227C1.02165 20.3624 0.391602 18.0053 0.391602 15.5004C0.391602 13.0782 0.980679 10.794 2.02486 8.78271H2.02566L5.33463 9.38937L6.78415 12.6785C6.48077 13.5629 6.31541 14.5124 6.31541 15.5004C6.31553 16.5726 6.50976 17.6 6.86609 18.5478Z"
              fill="#FBBB00"
            />
            <path
              d="M29.3501 12.7715C29.5178 13.6551 29.6053 14.5676 29.6053 15.5003C29.6053 16.5461 29.4954 17.5662 29.2859 18.5501C28.5748 21.8985 26.7168 24.8223 24.1429 26.8914L24.1421 26.8906L19.9743 26.678L19.3845 22.9957C21.0923 21.994 22.4271 20.4266 23.1301 18.5501H15.3193V12.7715H23.2441H29.3501Z"
              fill="#518EF8"
            />
            <path
              d="M24.143 26.8907L24.1438 26.8915C21.6406 28.9036 18.4607 30.1075 14.9991 30.1075C9.43637 30.1075 4.59999 26.9983 2.13281 22.4227L6.86649 18.5479C8.10005 21.84 11.2759 24.1836 14.9991 24.1836C16.5994 24.1836 18.0987 23.751 19.3852 22.9958L24.143 26.8907Z"
              fill="#28B446"
            />
            <path
              d="M24.3219 4.25639L19.5899 8.13047C18.2584 7.2982 16.6845 6.81742 14.9983 6.81742C11.1908 6.81742 7.95553 9.26851 6.78376 12.6788L2.02521 8.78299H2.02441C4.45547 4.09588 9.35285 0.893555 14.9983 0.893555C18.5425 0.893555 21.7922 2.15604 24.3219 4.25639Z"
              fill="#F45D5D"
            />
          </g>
          <defs>
            <clipPath id="clip0_582:964">
              <rect width="29.2142" height="29.2142" fill="white" transform="translate(0.392578 0.893066)" />
            </clipPath>
          </defs>
        </svg>
        <p className="px-4 text-black">Sign up with Google</p>
      </button>
      <button
        className="flex items-center justify-center mx-auto font-display bg-white hover:bg-gray-300 py-auto rounded-full w-80 py-3 mb-6"
        onClick={() => setPage("email")}
      >
        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.95112 10.2724L17.877 17.2353L31.8031 10.2723C31.698 8.4431 30.1814 6.99219 28.326 6.99219H7.42826C5.57275 6.99219 4.05613 8.44315 3.95112 10.2724Z"
            fill="#1E002C"
          />
          <path
            d="M31.8089 14.1634L17.877 21.1294L3.94531 14.1635V24.4069C3.94531 26.3305 5.50468 27.8899 7.42826 27.8899H28.326C30.2495 27.8899 31.8089 26.3305 31.8089 24.4069V14.1634Z"
            fill="#1E002C"
          />
        </svg>
        <p className="px-4 text-black">Sign up with Email</p>
      </button>
    </div>
  )
}

const Register = () => {
  const auth = useAuth()
  const [page, setPage] = useState<TPages>("all")

  return (
    <>
      <main className="relative py-2 w-full min-h-screen bg-gray-900">
        <div className="flex flex-col items-center justify-center h-screen">
          <div>
            <p className="font-display text-3xl text-white text-center font-extrabold py-2">Register / ลงทะเบียน</p>
            <p className="font-display text-white text-center pb-8">
              Or{" "}
              <Link href="/login" passHref>
                <a className="text-red-400 hover:underline">login here</a>
              </Link>
            </p>
          </div>

          {page === "all" ? <AllMethods setPage={setPage} auth={auth} /> : <EmailForm auth={auth} setPage={setPage} />}
          <TUCMCLogo className="mt-4" />
        </div>
      </main>
    </>
  )
}

export default Register
