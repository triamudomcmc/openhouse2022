import { FC, useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

import { useAuth } from "@lib/auth"
import { CountDown } from "@components/common/Countdown"

import TriamUdom from "@vectors/text/triamUdom"
import OpenHouse from "@vectors/text/openhouse"
import CountDownBgPhone from "@vectors/background/countDownBgPhone"
import RomanLanding from "@vectors/background/RomanLanding"
import StairPrograammes from "@vectors/background/StairProgramme"
import BigFrame from "@vectors/common/bigFrame"
import { Footer } from "@components/common/Footer"
import {
  AIC,
  Organization,
  OrganizationPhone,
  TUCMC,
  TUPRO,
  TUSC,
  WinkWink,
} from "@vectors/common/organization";
import { LG, MD } from "@utilities/breakpoints"
import { useWindowDimensions } from "@utilities/useWindowDimensions"
// import { ArtsChinese, ArtsEspanol, ArtsFrench, ArtsGerman, ArtsJapanese, ArtsKorean, ArtsMath, SciMath } from "@vectors/icons/programmes";
import { Programme } from "@components/programme";
import RomanTower, { RomanTowerClubs } from "@vectors/romanTower";
import { ClubsBg, ClubsGate, Sun } from "@vectors/background/clubsGate";
import { MoreInfoBg, MoreInfoFlag, MoreInfoRight } from "@vectors/background/MoreInfo";
import { GiftedBg, GiftedEng, GiftedMath, GiftedSci, GiftedSciMath, GiftedThai, Student } from "@vectors/icons/gifted"

const OpeningTime = +new Date(2023, 0, 13, 9, 0, 0, 0)

export default function Home() {
  const { user, signinWithGoogle, signout } = useAuth()
  const [timeLeft, setTimeLeft] = useState(null)
  const width = useWindowDimensions().width

  useEffect(() => {
    const calTimeLeft = () => {
      const diff = OpeningTime - +new Date()

      if (diff > 0)
        return {
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
          total: diff,
        }
      else return null
    }
    const timer = setInterval(() => {
      setTimeLeft(calTimeLeft)
    }, 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="w-screen overflow-x-hidden">
      <main className="relative flex items-center justify-center w-screen">
        {/* <div className="flex items-center justify-center min-h-screen"> */}
        <div className="relative w-full -z-10 max-lg:hidden">
          <RomanLanding className="object-cover h-full min-h-screen overflow-x-hidden" />
        </div>
        <div className="relative left-0 top-auto w-full -z-10 lg:hidden">
          <CountDownBgPhone className="object-cover h-full min-h-screen overflow-x-hidden" />
        </div>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <div className="flex flex-col items-center">
            <TriamUdom classname="w-[316px] xs:w-[490px] lg:w-[732px]" />
            <OpenHouse classname="w-[260px] xs:w-[409px] lg:w-[557px] mt-[5px] lg:mt-[19px] mx-auto" />
            {!user && (
              <Link href={`/auth`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-[50px] lg:w-[373px] w-[280px] mt-[40px] lg:mt-[50px] register-button "
                >
                  <p className="lg:text-[44px] text-[32px] leading-[60px] lg:leading-[80px] text-center text-white font-[700]">
                    ลงทะเบียน
                  </p>
                </motion.button>
              </Link>
            )}
            <div className="w-[240px] lg:w-[334px] bg-white bg-opacity-50 mx-auto mt-[16px] lg:mt-[52px] rounded-[17px] lg:rounded-[24px] backdrop-blur-[4.4px]">
              <p className="lg:text-[28px] lg:leading-[47px] text-[20px] leading-[34px] font-[600] items-center justify-center flex z-10">
                13-14 JANUARY 2023
              </p>
            </div>
            <CountDown timeLeft={timeLeft} />
          </div>
          {/* </div> */}
        </div>
      </main>

      <section className="relative flex items-center justify-center w-screen">
          <div className="relative w-full -z-10 -left-1/3 lg:left-0">
            <StairPrograammes className="object-cover h-full min-h-screen overflow-x-hidden bg-landing-programme" />
          </div>
          <div className="absolute flex left-[20px] lg:left-[82px] top-[100px]">
            <BigFrame classname="lg:w-[282px] w-[190px]"/>
            <div className="font-[700] text-[50px] leading-[55px] lg:text-[85px] lg:leading-[90px] mt-[50px] lg:mt-[50px] text-[#404E81]">
              <p>สาย</p>
              <p>การ</p>
              <p>เรียน</p>
            </div>
          </div>
      </section> 

  
      <section className="relative min-h-screen bg-[#F9DBC4]" >
        {/* <div className="min-h-screen ">
          <RomanTowerClubs classname="h-full -translate-x-1/3 lg:translate-x-0 "/>
        </div>
        <div className="flex flex-col items-center w-3/4 lg:w-10/12 lg:justify-evenly lg:items-start lg:flex-row lg:mt-[20px] xl:mb-[100px] ">
          <div className="flex flex-row w-full justify-evenly mt-[10px] lg:flex-col lg:space-y-20 lg:mt-20 lg:space-x-0">
            <Programme width="220" height="280" className="z-10 mx-auto" name={"sci-math"} thainame={"วิทย์-คณิต"} />
            <Programme width="244" height="253" className="z-10 mx-auto" name={"arts-math"} thainame={"ภาษา-คณิต"} />
          </div>
          <div className="flex flex-row w-full justify-evenly mt-[10px] lg:flex-col lg:space-y-20 lg:space-x-0">
            <Programme width="327" height="176" className="z-10 mx-auto mt-[10px] lg:mt-0" name={"arts-chinese"} thainame={"ภาษา-ภาษาจีน"} />
            <Programme width="235" height="303" className="z-10 mx-auto mt-[-20px] lg:mt-0" name={"arts-espanol"} thainame={"ภาษา-ภาษาสเปน"} />
          </div>
          <div className="flex flex-row w-full justify-evenly mt-[10px] lg:flex-col lg:space-y-20 lg:space-x-0">
            <Programme width="241" height="290" className="z-10 mx-auto mt-[-60px] lg:mt-0" name={"arts-japanese"} thainame={"ภาษา-ภาษาญี่ปุ่น"} />
            <Programme width="385" height="212" className="z-10 mx-auto" name={"arts-french"} thainame={"ภาษา-ภาษาฝรั่งเศส"} />
          </div>
          <div className="flex flex-row w-full justify-evenly mt-[10px] lg:flex-col lg:space-y-20 lg:mt-20 lg:space-x-0">
            <Programme width="247" height="208" className="z-10 mx-auto" name={"arts-korean"} thainame={"ภาษา-ภาษาเกาหลี"} />
            <Programme width="235" height="354" className="z-10 mx-auto mt-[-20px] lg:mt-0" name={"arts-german"} thainame={"ภาษา-ภาษาเยอรมัน"} />
          </div>
        </div> */}
        {width >= LG ? (
        <div className="relative min-h-screen w-screen bg-[#F9DBC4] flex justify-between">
          <div className="min-h-screen ">
            <RomanTowerClubs classname="h-full translate-x-0 "/>
          </div>
          <div className="flex w-11/12 justify-evenly items-start min-h-screen ml-[-50px] flex-row xl:mb-[100px] ">
            <div className="flex flex-col w-full mt-20 space-x-0 space-y-20 justify-evenly">
              <Programme width="220" height="280" className="z-10 mx-auto" name={"sci-math"} thainame={"วิทย์-คณิต"} />
              <Programme width="244" height="253" className="z-10 mx-auto" name={"arts-math"} thainame={"ภาษา-คณิต"} />
            </div>
            <div className="flex flex-col w-full mt-20 space-x-0 space-y-20 justify-evenly">
              <Programme width="327" height="176" className="z-10 mx-auto mt-[10px] lg:mt-0" name={"arts-chinese"} thainame={"ภาษา-ภาษาจีน"} />
              <Programme width="235" height="303" className="z-10 mx-auto mt-[-20px] lg:mt-0" name={"arts-espanol"} thainame={"ภาษา-ภาษาสเปน"} />
            </div>
            <div className="flex flex-col w-full mt-20 space-x-0 space-y-20 justify-evenly">
              <Programme width="241" height="290" className="z-10 mx-auto mt-[-60px] lg:mt-0" name={"arts-japanese"} thainame={"ภาษา-ภาษาญี่ปุ่น"} />
              <Programme width="385" height="212" className="z-10 mx-auto" name={"arts-french"} thainame={"ภาษา-ภาษาฝรั่งเศส"} />
            </div>
            <div className="flex flex-col w-full mt-20 space-x-0 space-y-20 justify-evenly">
              <Programme width="247" height="208" className="z-10 mx-auto" name={"arts-korean"} thainame={"ภาษา-ภาษาเกาหลี"} />
              <Programme width="235" height="354" className="z-10 mx-auto mt-[-20px] lg:mt-0" name={"arts-german"} thainame={"ภาษา-ภาษาเยอรมัน"} />
            </div>
          </div> 
        </div>
        ):(
          <div className="relative min-h-screen w-screen bg-[#F9DBC4] flex justify-between">
            <div className="min-h-screen ">
              <RomanTowerClubs classname="h-full -translate-x-1/3 "/>
            </div>
            <div className="flex flex-col items-center w-3/4 mt-[20px]">
              <div className="flex flex-row w-full justify-evenly mt-[10px]">
                <Programme width="220" height="280" className="z-10 mx-auto" name={"sci-math"} thainame={"วิทย์-คณิต"} />
                <Programme width="244" height="253" className="z-10 mx-auto" name={"arts-math"} thainame={"ภาษา-คณิต"} />
              </div>
              <div className="flex flex-row w-full justify-evenly mt-[10px]">
                <Programme width="327" height="176" className="z-10 mx-auto mt-[10px] " name={"arts-chinese"} thainame={"ภาษา-ภาษาจีน"} />
                <Programme width="235" height="303" className="z-10 mx-auto mt-[-20px] " name={"arts-espanol"} thainame={"ภาษา-ภาษาสเปน"} />
              </div>
              <div className="flex flex-row w-full justify-evenly mt-[10px]">
                <Programme width="241" height="290" className="z-10 mx-auto mt-[-60px]" name={"arts-japanese"} thainame={"ภาษา-ภาษาญี่ปุ่น"} />
                <Programme width="385" height="212" className="z-10 mx-auto" name={"arts-french"} thainame={"ภาษา-ภาษาฝรั่งเศส"} />
              </div>
              <div className="flex flex-row w-full justify-evenly mt-[10px]">
                <Programme width="247" height="208" className="z-10 mx-auto" name={"arts-korean"} thainame={"ภาษา-ภาษาเกาหลี"} />
                <Programme width="235" height="354" className="z-10 mx-auto mt-[-20px]" name={"arts-german"} thainame={"ภาษา-ภาษาเยอรมัน"} />
              </div>
            </div> 
          </div>
        )}
        <div className="absolute bottom-0">
          <Student classname="w-screen" />
        </div>
      </section>
      
      <section className="relative w-screen ">
        <div className=" min-w-screen">
          <GiftedBg classname="absolute -z-10" />
        </div>
        <div className="">
        <div className=" flex items-center justify-center rounded-[6px] w-[125px] h-[40px] lg:w-[333px] lg:h-[111px] gifted mx-auto">
          <div className="text-[15px] lg:text-[40px] text-[#332B73]  font-[700] text-center">
            <p>Gifted</p>
            <p>Program</p>
          </div>
        </div>

        <div className="lg:flex lg:items-end lg:min-h-screen lg:w-screen ">
          <div className="flex mx-auto lg:w-1/2 ">
            <div className="flex items-end w-screen">
              <Link href={'/programmes/gifted-science'}>
                <motion.button 
                className="w-1/2 "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} >
                <GiftedSci classname="w-full " />
                </motion.button>
              </Link>
              <Link href={'/programmes/gifted-math'}>
                <motion.button 
                className="w-1/2 "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} >
                <GiftedMath classname="w-full" />
                </motion.button>
              </Link>
            </div>
          </div>

          <div className="flex mx-auto lg:w-1/2 ">
            <div className="flex w-screen">
              <Link href={'/programmes/gifted-english'}>
                <motion.button 
                className="w-1/2 "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} >
                <GiftedEng classname="w-full" />
                </motion.button>
              </Link>
              <Link href={'/programmes/gifted-thai'}>
                <motion.button 
                className="w-1/2 "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} >
                <GiftedThai classname="w-full" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="relative flex justify-center w-screen h-screen bg-clubs">
        <div className="relative w-full max-sm:hidden">
          <ClubsBg classname="object-cover h-full min-h-screen overflow-x-hidden bg-clubs " />
        </div>
        <div className="absolute flex items-end justify-center h-full">
          <ClubsGate classname="h-5/6 sm:h-screen" />
        </div>
        <div className="absolute flex items-center justify-center w-screen h-screen">
          <Link href={"/clubs"}>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Sun classname="w-[350px] sm:w-[500px]" />
            </motion.button>
          </Link>
          <div className="absolute z-10 text-center text-white text-[14px] sm:text-[20px] mt-[300px] sm:mt-[400px]">
            <p>คลิกชมรม</p>
            <p>เพื่ออ่านข้อมูลชมรมที่สนใจ</p>
          </div>
        </div>
      </section>

      <section className="relative bg-[#1D0C55] min-h-screen">
        {width >= LG ? (
          <div className="w-[1000px] h-[559px] absolute bottom-0 -translate-x-1/2 left-1/2">
            <div className="w-[636px] bg-[#BCC2EB] mx-auto">
              <p className="organization-text text-white text-center font-[600] text-[60px] leading-[84px] ">
                หน่วยงานนักเรียน
              </p>
            </div>
            <Organization classname="absolute -z-20" />
            <WinkWink classname="absolute -z-10 w-[150px] -right-8 top-8" />
            <Link href={"/organization/tucmc"}>
              <button>
                <TUCMC classname="w-[236px] hover:w-[240px] absolute left-[70px] hover:left-[68px] top-[120px]" />
              </button>
            </Link>
            <Link href={"/organization/tusc"}>
              <button>
                <TUSC classname="w-[150px] hover:w-[154px] absolute left-[372px] hover:left-[370px] top-[106px]" />
              </button>
            </Link>
            <Link href={"/organization/tupro"}>
              <button>
                <TUPRO classname="w-[190px] hover:w-[194px] absolute left-[580px] hover:left-[578px] top-[145px]" />
              </button>
            </Link>
            <Link href={"/organization/aic"}>
              <button>
                <AIC classname="w-[140px] hover:w-[144px] absolute left-[795px] hover:left-[793px] top-[107px]" />
              </button>
            </Link>
          </div>
        ) : (
          <div className="w-[325px] mx-auto relative pt-[150px]">
            <div className="w-[333px] bg-[#BCC2EB]">
              <p className="organization-text text-center font-[600] text-[34px] leading-[47px] ">หน่วยงานนักเรียน</p>
            </div>
            <div className="mt-[50px] h-[1006px]">
              <OrganizationPhone />
              <Link href={"/organization/tucmc"}>
                <button>
                  <TUCMC classname="w-[179px] pr-[27px] active:w-[175px] absolute left-1/2 -translate-x-1/2 top-[290px]" />
                </button>
              </Link>
              <Link href={"/organization/tusc"}>
                <button>
                  <TUSC classname="w-[100px] active:w-[96px] absolute left-1/2 -translate-x-1/2 top-[505px]" />
                </button>
              </Link>
              <Link href={"/organization/tupro"}>
                <button>
                  <TUPRO classname="w-[155px] active:w-[151px] absolute left-1/2 -translate-x-1/2 top-[728px]" />
                </button>
              </Link>
              <Link href={"/organization/aic"}>
                <button>
                  <AIC classname="w-[100px] active:w-[96px] absolute left-1/2 -translate-x-1/2 top-[950px]" />
                </button>
              </Link>
            </div>
          </div>
        )}
      </section>

      <section className="relative h-full min-h-screen bg-moreInfo">
        <div className="z-0" >
          <MoreInfoBg classname="absolute right-0 h-full min-h-screen xl:left-0"/>
          <MoreInfoRight classname="absolute right-0 -translate-y-1/2 h-4/6 top-1/2 max-[1024px]:hidden" />
        </div>
        <div className="flex justify-center w-screen h-screen ">
          <div className="relative top-0 z-10 h-3/4">
            <MoreInfoFlag classname="w-full h-full" />
            {/* <div className="h-full text-center -translate-y-1/2 absolue top-1/2">
              <p>More</p>
              <p>Info</p>
            </div> */}
          <div className="z-10 text-white lg:text-[30px] text-[24px] my-auto lg:leading-[65px] leading-[43px] text-center mt-[40px] min-[1025px]:hidden">
            <div>
                  <Link href={'/admission'}>
                    <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }} 
                    className="lg:w-[324px] w-[218px] rounded-[45px] moreInfo-button"><p className="">การสอบเข้าม.4</p></motion.button></Link>
                </div>
                <div className="mt-[20px]">
                  <Link href={'/directions'}>
                    <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }} 
                    className="lg:w-[460px] w-[350px] rounded-[45px] moreInfo-button"><p>การเดินทางมาโรงเรียน</p></motion.button></Link>
                </div>
            </div>
        </div>
        <div className="z-10 flex items-center h-sceen">
          <div className="z-10 text-white lg:text-[30px] text-[24px] lg:leading-[65px] leading-[43px] text-center my-auto max-[1025px]:hidden">
              <div>
                <Link href={'/admission'}>
                  <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }} 
                  className="lg:w-[324px] w-[218px] rounded-[45px] moreInfo-button"><p className="">การสอบเข้าม.4</p></motion.button></Link>
              </div>
              <div className="mt-[20px]">
                <Link href={'/directions'}>
                  <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }} 
                  className="lg:w-[460px] w-[350px] rounded-[45px] moreInfo-button"><p>การเดินทางมาโรงเรียน</p></motion.button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
