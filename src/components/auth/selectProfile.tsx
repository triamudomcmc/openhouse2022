import Image from "next/image"
import { FC, useEffect, useState } from "react"
import classnames from "classnames"
import { IUserQuestionData } from "@ctypes/account"

const Pillar = () => {
  return (
    <svg width="226" height="984" viewBox="0 0 226 984" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50.4917 0V0.58328C22.4678 1.47355 0 24.6514 0 53.2323C0 81.8132 23.3482 105.943 52.1312 105.943C59.9949 105.943 67.4336 104.131 74.1132 100.969V982.588L225.133 982.802V0.245599L50.4613 0.0307057L50.4917 0Z"
        fill="url(#paint0_linear_915_2568)"
      />
      <path
        d="M81.8862 46.0487C75.6013 40.2772 67.3125 37.7292 58.5379 38.8651C46.1503 40.4614 36.7988 50.3159 36.7988 61.7666C36.7988 73.2174 46.2414 82.1816 58.7505 82.1816V79.1116C47.972 79.1116 39.835 71.6518 39.835 61.7666C39.835 51.8815 48.0327 43.3165 58.9326 41.9043C66.7963 40.8912 74.2349 43.163 79.8519 48.3204C85.985 53.9384 89.3855 62.4727 89.1426 71.7439C88.8693 82.4579 83.131 92.0974 74.1135 97.4084V100.969C84.9223 95.3515 91.8448 84.2077 92.1788 71.8053C92.452 61.6438 88.7175 52.2499 81.9165 46.018L81.8862 46.0487Z"
        fill="#D7915C"
      />
      <path
        d="M74.9326 192.422V983.201H97.6129V238.563C97.6129 233.467 101.681 229.353 106.721 229.353C111.762 229.353 115.83 233.467 115.83 238.563V983.201H141.182V238.563C141.182 233.467 145.251 229.353 150.291 229.353C155.331 229.353 159.399 233.467 159.399 238.563V983.201H183.507V238.563C183.507 233.467 187.575 229.353 192.615 229.353C197.655 229.353 201.724 233.467 201.724 238.563V983.201H225.649V192.422H74.9326V192.422Z"
        fill="url(#paint1_linear_915_2568)"
      />
      <path
        d="M225.072 144.163H76.846C63.8207 144.163 53.2852 154.816 53.2852 167.986C53.2852 181.156 63.8207 191.808 76.846 191.808H225.072"
        fill="#EDC8A8"
      />
      <defs>
        <linearGradient
          id="paint0_linear_915_2568"
          x1="112.551"
          y1="264.903"
          x2="112.551"
          y2="8.38086"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E3AA86" />
          <stop offset="0.34" stopColor="#E3AB88" />
          <stop offset="0.48" stopColor="#E5B28F" />
          <stop offset="0.58" stopColor="#E9BC9B" />
          <stop offset="0.64" stopColor="#EDC8A8" />
          <stop offset="0.69" stopColor="#EFCCAD" />
          <stop offset="0.82" stopColor="#F5D5B9" />
          <stop offset="0.95" stopColor="#F7D9BE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_915_2568"
          x1="150.807"
          y1="315.741"
          x2="149.751"
          y2="852.976"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E3AA86" />
          <stop offset="0.02" stopColor="#E4AD89" />
          <stop offset="0.11" stopColor="#E9BC9A" />
          <stop offset="0.22" stopColor="#ECC5A4" />
          <stop offset="0.35" stopColor="#EDC8A8" />
          <stop offset="0.59" stopColor="#ECC5A5" />
          <stop offset="0.76" stopColor="#E9BD9B" />
          <stop offset="0.91" stopColor="#E4AF8B" />
          <stop offset="0.95" stopColor="#E3AA86" />
        </linearGradient>
      </defs>
    </svg>
  )
}

const ExtendablePillarTop = () => {
  return (
    <div>
      <svg width="151" height="215" viewBox="0 0 151 215" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M149.866 215H0V14.2508H149.866V215Z"
          fill="url(#paint0_linear_920_2556)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.6803 215H0V0H150.716V215H126.791V46.6659C126.791 41.5119 122.723 37.3514 117.682 37.3514C112.642 37.3514 108.574 41.5119 108.574 46.6659V215H84.4666V46.6659C84.4666 41.5119 80.3981 37.3514 75.3581 37.3514C70.318 37.3514 66.2495 41.5119 66.2495 46.6659V215H40.8974V46.6659C40.8974 41.5119 36.8289 37.3514 31.7888 37.3514C26.7488 37.3514 22.6803 41.5119 22.6803 46.6659V215Z"
          fill="url(#paint1_linear_920_2556)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_920_2556"
            x1="74.9331"
            y1="618.341"
            x2="74.9331"
            y2="172.512"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CC7754" />
            <stop offset="0.44" stopColor="#CE886F" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_920_2556"
            x1="75.8742"
            y1="124.722"
            x2="74.7947"
            y2="668.071"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E3AA86" />
            <stop offset="0.02" stopColor="#E4AD89" />
            <stop offset="0.11" stopColor="#E9BC9A" />
            <stop offset="0.22" stopColor="#ECC5A4" />
            <stop offset="0.35" stopColor="#EDC8A8" />
            <stop offset="0.59" stopColor="#ECC5A5" />
            <stop offset="0.76" stopColor="#E9BD9B" />
            <stop offset="0.91" stopColor="#E4AF8B" />
            <stop offset="0.95" stopColor="#E3AA86" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

const ExtendablePillarBottom = () => {
  return (
    <svg width="151" height="3168" viewBox="0 0 151 3168" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 0V3080.51H149.866V0H0Z" fill="url(#paint0_linear_920_2568)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V3168H22.6803V0H0ZM40.8974 0V3168H66.2495V0H40.8974ZM84.4666 0V3168H108.574V0H84.4666ZM126.791 0V3168H150.716V0H126.791Z"
        fill="url(#paint1_linear_920_2568)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_920_2568"
          x1="74.9331"
          y1="2103.41"
          x2="74.9331"
          y2="-321.982"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC7754" />
          <stop offset="0.44" stopColor="#CE886F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_920_2568"
          x1="75.8743"
          y1="-504.442"
          x2="43.9287"
          y2="2451.15"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E3AA86" />
          <stop offset="0.02" stopColor="#E4AD89" />
          <stop offset="0.11" stopColor="#E9BC9A" />
          <stop offset="0.22" stopColor="#ECC5A4" />
          <stop offset="0.35" stopColor="#EDC8A8" />
          <stop offset="0.59" stopColor="#ECC5A5" />
          <stop offset="0.76" stopColor="#E9BD9B" />
          <stop offset="0.91" stopColor="#E4AF8B" />
          <stop offset="0.95" stopColor="#E3AA86" />
        </linearGradient>
      </defs>
    </svg>
  )
}
export const SelectProfile: FC<{
  setData?
  data?
  setPage?
  submitData?
}> = ({ setData, data, setPage, submitData }) => {
  const [profile, setProfile] = useState<string>("1")

  const ProfileSelection = ({ id }) => {
    return (
      <div
        onClick={() => {
          setProfile(id)
        }}
        className={classnames(
          "flex items-center cursor-pointer justify-center pb-2 rounded-2xl w-[124px] h-[124px] shadow-md mr-4 mt-2",
          profile === id ? "bg-gray-300" : "bg-white"
        )}
      >
        <Image src={`/assets/images/profile/${id}.png`} width={120} height={120} />
      </div>
    )
  }

  const onSubmit = () => {
    setData(formatData(data, profile))
    submitData(formatData(data, profile))
  }

  return (
    <div
      style={{ background: "linear-gradient(360deg, #F4CBA5 -0.18%, #FFF6E8 102.34%)" }}
      className="py-24 min-h-screen"
    >
      {/* <div className="fixed top-0 right-0 min-h-screen z-[1]">
      <Pillar/>
      <div className="absolute top-[193px] right-0 min-h-screen">
        <ExtendablePillarTop/>
        <ExtendablePillarBottom/>
      </div>
    </div>
    <div style={{transform: "scale(-1,1)"}} className="fixed top-0 left-0 min-h-screen z-[1]">
      <Pillar/>
      <div className="absolute top-[193px] right-0 min-h-screen">
        <ExtendablePillarTop/>
        <ExtendablePillarBottom/>
      </div>
    </div> */}
      <div className="flex flex-col items-center relative z-[1] px-6">
        <span className="text-2xl text-blue-text font-bold">ลงทะเบียน</span>
        <div className="mt-14">
          <span className="text-[20px] text-deep-turquoise font-semibold">เลือกตัวละครของคุณ</span>
          <div>
            <div
              style={{ background: "linear-gradient(90.95deg, #FFA16F 12.94%, #4461AD 114.9%)" }}
              className="rounded-full text-white px-4 mt-5 font-semibold text-[18px] py-0.5 w-full"
            >
              <span>น้องแมว</span>
            </div>
            <div className="flex flex-wrap mt-2">
              <ProfileSelection id={"1"} />
              <ProfileSelection id={"2"} />
              <ProfileSelection id={"3"} />
            </div>
          </div>
          <div className="mt-9">
            <div
              style={{ background: "linear-gradient(90.95deg, #FFA16F 12.94%, #4461AD 114.9%)" }}
              className="rounded-full text-white px-4 mt-5 font-semibold text-[18px] py-0.5 w-full"
            >
              <span>น้องหมา</span>
            </div>
            <div className="flex flex-wrap mt-2">
              <ProfileSelection id={"4"} />
              <ProfileSelection id={"5"} />
              <ProfileSelection id={"6"} />
            </div>
          </div>
          <div className="mt-9">
            <div
              style={{ background: "linear-gradient(90.95deg, #FFA16F 12.94%, #4461AD 114.9%)" }}
              className="rounded-full text-white px-4 mt-5 font-semibold text-[18px] py-0.5 w-full"
            >
              <span>น้องเป็ด</span>
            </div>
            <div className="flex flex-wrap mt-2">
              <ProfileSelection id={"7"} />
              <ProfileSelection id={"8"} />
              <ProfileSelection id={"9"} />
            </div>
          </div>
          <div className="flex justify-center space-x-2 mt-14">
            <button
              onClick={() => {
                setPage(2)
              }}
              className="border border-blue-text text-blue-text rounded-full text-[14px] py-2 w-[130px] hover:bg-blue-text hover:text-white"
            >
              ย้อนกลับ
            </button>
            <button onClick={onSubmit} className="bg-bright-orange text-white rounded-full text-[14px] py-2 w-[130px]">
              ลงทะเบียน
            </button>
          </div>
          <p className="text-center mt-5 text-deep-turquoise">
            การลงทะเบียนถือว่ายอมรับ
            <span className="text-bright-orange hover:underline cursor-pointer">นโยบายความเป็นส่วนตัว</span>
            <br />
            และ<span className="text-bright-orange hover:underline cursor-pointer">ข้อตกลงการใช้งาน</span>
          </p>
        </div>
      </div>
    </div>
  )
}

const formatData: (data: any, profile: string) => IUserQuestionData = (data, profile) => {
  const _data: any = data
  _data.profileIcon = profile

  return _data as IUserQuestionData
}
