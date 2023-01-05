import Head from "next/head"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { Field, Form, Formik } from "formik"

import { useAuth } from "@lib/auth"

import { ArrowLeftIcon, MailIcon } from "@heroicons/react/solid"
import { Navbar } from "@components/common/Nav/Navbar"
import KorChor from "@vectors/icons/korchor"
import RomanTower from "@vectors/romanTower"
import RomanTowerRegist from "@vectors/romanTower"
import GoogleIcon from "@vectors/icons/google"
import { IUserQuestionData } from "@ctypes/account"
import { FirstQA } from "@components/auth/FirstQA"
import { SecondQA } from "@components/auth/SecondQA"
import { sendSignInLinkToEmail } from "firebase/auth"
import { SelectProfile } from "@components/auth/selectProfile"

function combineObjects(obj1: Record<string, any>, obj2: Record<string, any>) {
  return { ...obj1, ...obj2 }
}

export default function Auth() {
  const router = useRouter()
  const auth = useAuth()
  const { user, signinWithGoogle, signinWithEmail, signout } = useAuth()

  const [data, setData] = useState<IUserQuestionData>({
    username: "",
    prefix: "",
    firstname: "",
    lastname: "",
    status: "Student",
    school: "",
    grade: "",
    news: [],
    purpose: [],
  })
  const [page, setPage] = useState<Number>(1)
  const [method, setMethod] = useState<string>("all")

  const submitData = async (submittedData) => {
    submittedData.executerUid = user?.uid

    // omit otherPurpose
    if (data.purpose.includes("other")) {
      submittedData.purpose = submittedData.purpose.filter((d: string) => d !== "other")
      submittedData.purpose = [...submittedData.purpose, data.otherPurpose]
      submittedData.otherPurpose = null
    }

    const res = await fetch(`/api/auth/qa`, {
      method: "POST",
      body: JSON.stringify(submittedData),
    })
    if (res) router.push("/account")
  }

  const submitEmail = async (email: string) => {
    await auth?.sendSigninWithEmail(
      email,
      `${window.location.protocol}//${window.location.host}/register/email/confirm`
    )
    router.push("/register/email/sent")
  }

  if (user?.qa ?? false) {
    return (
      <section className="relative flex flex-col items-center justify-center w-screen overflow-hidden pt-[6.5rem] pb-[2rem] bg-login-edit">
        <div className="">
          <RomanTowerRegist classname="absolute top-0 mt-[68px] h-full left-[-60px] min-[700px]:left-[-30px] lg:left-0 transform -scale-x-100 max-lg:hidden" />
          <RomanTowerRegist classname="absolute top-0 mt-[68px] h-full -right-[60px] min-[700px]:right-[-30px] lg:right-0 max-lg:hidden" />
        </div>
        {page === 1 && (
          <FirstQA
            setData={(_data: IUserQuestionData) => setData(combineObjects(data, _data))}
            data={data}
            setPage={setPage}
          />
        )}
        {page === 2 && (
          <SecondQA
            setData={(_data: IUserQuestionData) => setData(combineObjects(data, _data))}
            data={data}
            setPage={setPage}
          />
        )}
        {page === 3 && (
          <SelectProfile
            setData={(_data: IUserQuestionData) => setData(combineObjects(data, _data))}
            data={data}
            setPage={setPage}
            submitData={(_data: IUserQuestionData) => submitData(combineObjects(data, _data))}
          />
        )}
      </section>
    )
  }

  return (
    <div>
      {/* {user?.club || user?.roles?.hasOwnProperty('tucmc') 
      ? <Navbar classname='bg-opacity-50 bg-cream backdrop-blur-none' />
      : null} */}

      <section className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-login-edit">
        <div className="">
          <RomanTower classname="absolute top-0 left-[-60px] min-[700px]:left-[-30px] lg:left-0 h-screen transform -scale-x-100" />
          <RomanTower classname="absolute top-0 h-screen -right-[60px] min-[700px]:right-[-30px] lg:right-0" />
        </div>
        {user?.uid ? (
          <div>
            <p className="text-[28px] lg:text-[40px] font-[700] text-[#37498B]">Sign out / ออกจากระบบ</p>
            <motion.div 
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}>
              <button
                onClick={signout}
                className="w-[200px] h-[40px] lg:w-[340px] lg:h-[65px] bg-cream rounded-[112px] lg:rounded-[53px] mt-[15px] lg:mt-[30px] shadow-[2px_4px_4px_rgba(0,0,0,0.25)]"
              >
                <div className="flex flex-row mx-auto w-[155px] lg:w-[225px] relative items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="orange"
                    className="w-9 h-9"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                  <p className="text-[24px] ml-[20px] lg:ml-[40px] lg:text-[30px] font-500 text-[orange]">Sign out</p>
                </div>
              </button>
            </motion.div>
          </div>
        ) : (
          <div>
            <p className="text-[28px] text-center lg:text-[40px] font-[700] text-[#37498B]">Register / ลงทะเบียน</p>
            {method == "all" ? (
              <div>
                <div><p className=" text-orange text-center lg:mt-[30px] mt-[15px] text-sm px-[50px] lg:text-xl">* หมายเหตุ : แนะนำให้ลงทะเบียนด้วยบัญชี Google &#40;Sign up with Google&#41; *</p></div>
                <motion.div 
                className="flex justify-center"
                whileHover={{ scale: 1.05 }}>
                  <button
                    onClick={() => signinWithGoogle("/account")}
                    className="w-[200px] h-[40px] lg:w-[340px] lg:h-[65px] bg-white rounded-[112px] lg:rounded-[53px] mt-[15px] lg:mt-[30px] shadow-[2px_4px_4px_rgba(0,0,0,0.25)]"
                  >
                    <div className="flex flex-row mx-auto w-[170px] lg:w-[240px] relative items-center">
                      <GoogleIcon classname="max-lg:hidden" width="30" height="30" />
                      <GoogleIcon classname="lg:hidden" width="24" height="24" />
                      <p className="text-[14px] ml-[10px] lg:ml-[20px] lg:text-[20px] font-500 text-[#37498B]">
                        Sign up with Google
                      </p>
                    </div>
                  </button>
                </motion.div>

                <motion.div 
                className="flex justify-center"
                whileHover={{ scale: 1.05 }}>
                  <button
                    onClick={() => setMethod("email")}
                    className="w-[200px] h-[40px] lg:w-[340px] lg:h-[65px] bg-white rounded-[112px] lg:rounded-[53px] mt-[15px] lg:mt-[30px] shadow-[2px_4px_4px_rgba(0,0,0,0.25)]"
                  >
                    <div className="flex flex-row mx-auto w-[165px] lg:w-[225px]  relative items-center">
                      <MailIcon className="max-lg:hidden" width="30" height="30" />
                      <MailIcon className="lg:hidden" width="24" height="24" />
                      <p className="text-[14px] ml-[10px] lg:ml-[20px] lg:text-[20px] font-500 text-[#37498B]">
                        Sign up with Email
                      </p>
                    </div>
                  </button>
                </motion.div>
                <div className="text-blue-text text-center w-full font-display mt-[25px]">
                  <p className="leading-2 px-[50px]">
                    การลงทะเบียนถือว่ายอมรับ
                    <Link href="/privacy-policy" passHref>
                      <a target="_blank" className="mx-1 underline text-orange whitespace-nowrap">
                        นโยบายความเป็นส่วนตัว
                      </a>
                    </Link>
                    <br />
                    และ
                    <Link href="/tos" passHref>
                      <a target="_blank" className="mx-1 underline text-orange">
                        ข้อตกลงการใช้งาน
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <a
                  className="pb-2 text-center text-black transition-opacity cursor-pointer font-display hover:opacity-80"
                  onClick={() => setMethod("all")}
                >
                  <ArrowLeftIcon className="inline w-4 h-4 mr-2 text-black" />
                  ย้อนกลับ
                </a>
                <Formik
                  initialValues={{
                    email: "",
                    verify: "",
                  }}
                  validate={validate}
                  onSubmit={(data) => {
                    submitEmail(data.email)
                  }}
                  validateOnChange={false}
                  validateOnBlur={false}
                >
                  {({ errors }) => (
                    <Form className="py-4 text-sm w-[20rem] sm:w-[24rem] text-gray-700 font-display" noValidate>
                      <>
                        <label className="block my-1 text-[22px] text-blue-text" htmlFor="email">
                          อีเมล
                        </label>
                        <Field
                          className={`
                                ${errors.email ? "border-orange" : "border-white"}
                                border block w-full bg-white p-3 focus:outline-none rounded-md
                              `}
                          id="email"
                          name="email"
                          placeholder="mail@example.com"
                          type="email"
                        />
                        {errors.email ? (
                          <p className="mt-1 text-orange">{errors.email as string}</p>
                        ) : (
                          <div className="h-6" aria-hidden></div>
                        )}
                      </>
                      <>
                        <label className="block my-1 font-display text-[22px] text-blue-text" htmlFor="verify">
                          ยืนยันอีเมล
                        </label>
                        <Field
                          className={`
                                ${errors.verify ? "border-orange" : "border-white"}
                                border block w-full bg-white p-3 focus:outline-none rounded-md
                              `}
                          id="verify"
                          name="verify"
                          placeholder="mail@example.com"
                          type="email"
                        />
                        {errors.verify ? (
                          <p className="mt-1 text-orange">{errors.verify as string}</p>
                        ) : (
                          <div className="h-6" aria-hidden></div>
                        )}
                      </>
                      {/* submit */}
                      <div className="py-6 text-white">
                        <button className="w-full p-3 mb-3 rounded-full bg-orange" type="submit">
                          ยืนยันอีเมล
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            )}
          </div>
        )}

        {/* <motion.div
        whileHover={{ scale: 1.05 }}
        >
          <Link href={`/auth`}>
            <button className='w-[200px] h-[40px] lg:w-[340px] lg:h-[65px] bg-white rounded-[112px] lg:rounded-[53px] mt-[10px] lg:mt-[15px] shadow-[2px_4px_4px_rgba(0,0,0,0.25)]'>
              <div className='flex flex-row mx-auto w-[155px] lg:w-[225px] relative items-center'>
                <MailIcon className='text-[#37498B] ml-[-3px] lg:ml-[-4px] lg: w-[30px] h-[30px] lg:w-[42px] lg:h-[42px]'/>
                <p className='text-[14px] ml-[7px] lg:ml-[16px] lg:text-[20px] font-500 text-[#37498B]'>Sign up with Email</p>
              </div>
            </button>
          </Link>
        </motion.div> */}
        <KorChor classname="max-lg:hidden absolute bottom-[100px]" width="190" height="28" />
        <KorChor classname="lg:hidden absolute bottom-[100px]" width="100" />
      </section>
    </div>
  )
}

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
