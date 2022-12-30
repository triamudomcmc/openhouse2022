import { FC, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import { useAuth } from "@lib/auth";
import { CountDown } from "@components/common/Countdown";

import TriamUdom from "@vectors/text/triamUdom";
import OpenHouse from "@vectors/text/openhouse";
import CountDownBgPhone from "@vectors/background/countDownBgPhone";
import RomanLanding from "@vectors/background/RomanLanding";
// import StairPrograammes from "@vectors/background/StairProgramme";
// import BigFrame from "@vectors/common/bigFrame";
// import StairProgrammePhone from "@vectors/background/PhoneStairProgramme";
// import SciMath from "@vectors/icons/programmes/sci-math";
// import ArtsMath from "@vectors/icons/programmes/arts-math";
// import ArtsChinese from "@vectors/icons/programmes/arts-chinese";
// import ArtsJapanese from "@vectors/icons/programmes/arts-japanese";
// import ArtsKorean from "@vectors/icons/programmes/arts-korean";
// import ArtsFrench from "@vectors/icons/programmes/arts-french";
// import ArtsEspanol from "@vectors/icons/programmes/arts-espanol";
// import ArtsGerman from "@vectors/icons/programmes/arts-german";
import { Footer } from "@components/common/Footer";
import {AIC, Organization, OrganizationPhone, TUCMC, TUPRO, TUSC, WinkWink} from "@vectors/common/organization";
import { LG, MD } from "@utilities/breakpoints";
import { useWindowDimensions } from "@utilities/useWindowDimensions";


const OpeningTime = +new Date(2023, 0, 13, 9, 0, 0, 0);

export default function Home() {
  const { user, signinWithGoogle, signout } = useAuth();
  const [timeLeft, setTimeLeft] = useState(null);
  const width = useWindowDimensions().width

  useEffect(() => {
    const calTimeLeft = () => {
      const diff = OpeningTime - +new Date();

      if (diff > 0)
        return {
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
          total: diff,
        };
      else return null;
    };
    const timer = setInterval(() => {
      setTimeLeft(calTimeLeft);
    }, 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);
  
  return (
    <div className="w-screen overflow-x-hidden">

      <main className="relative flex items-center justify-center w-screen">
        {/* <div className="flex items-center justify-center min-h-screen"> */}
          <div className="relative w-full -z-10 max-lg:hidden">
            <RomanLanding className="object-cover h-full min-h-screen overflow-x-hidden" />
          </div>
          <div className='relative left-0 top-auto w-full -z-10 lg:hidden'>
            <CountDownBgPhone className="object-cover h-full min-h-screen overflow-x-hidden" />
          </div>
          <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="flex flex-col items-center">
              <TriamUdom classname="w-[316px] xs:w-[490px] lg:w-[732px]" />
              <OpenHouse classname="w-[260px] xs:w-[409px] lg:w-[557px] mt-[5px] lg:mt-[19px] mx-auto" />
              {!user &&
                <Link href={`/auth`}>
                <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-[50px] lg:w-[373px] w-[280px] mt-[40px] lg:mt-[50px] register-button ">
                  <p className="lg:text-[44px] text-[32px] leading-[60px] lg:leading-[80px] text-center text-white font-[700]">ลงทะเบียน</p>
                </motion.button>
              </Link>}
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

      {/* <section className="relative flex items-center justify-center w-screen">
          <div className="relative w-full -z-10 -left-1/4 lg:left-0">
            <StairPrograammes className="object-cover h-full min-h-screen overflow-x-hidden bg-landing-programme" />
          </div>
          <div className="absolute left-[20px] lg:left-[82px] top-[20px] lg:top-[50px]">
            <BigFrame classname="lg:w-[282px] w-[190px]"/>
          </div>
      </section>  */}

  
      {/* <section className="relative bg-[#F9DBC4] min-h-screen h-full">
          <div>
            <SciMath classname="w-[50px]" />
            <ArtsMath classname="w-[50px]"/>
            <ArtsChinese classname="w-[50px]"/>
            <ArtsJapanese classname="w-[50px]"/>
            <ArtsKorean classname="w-[50px]"/>
            <ArtsFrench classname="w-[50px]"/>
            <ArtsEspanol classname="w-[50px]"/>
            <ArtsGerman classname="w-[50px]"/>
          </div>
      </section> */}

      <section className="relative bg-[#1D0C55] min-h-screen">
        {width >= LG ? (
          <div className="w-[1000px] h-[559px] absolute bottom-0 -translate-x-1/2 left-1/2">
              <div className="w-[636px] bg-[#BCC2EB] mx-auto">
                <p className="organization-text text-white text-center font-[600] text-[60px] leading-[84px] ">หน่วยงานนักเรียน</p>
              </div>
              <Organization classname="absolute -z-20" />
              <WinkWink classname="absolute -z-10 w-[150px] -right-8 top-8"/>
              <Link href={'/organization/tucmc'}>
                <button><TUCMC classname="w-[236px] hover:w-[240px] absolute left-[70px] hover:left-[68px] top-[120px]" /></button>
              </Link>
              <Link href={'/organization/tusc'}>
                <button><TUSC classname="w-[150px] hover:w-[154px] absolute left-[372px] hover:left-[370px] top-[100px]" /></button>
              </Link>
              <Link href={'/organization/tupro'}>
                <button><TUPRO classname="w-[190px] hover:w-[194px] absolute left-[580px] hover:left-[578px] top-[145px]" /></button>
              </Link>
              <Link href={'/organization/aic'}>
                <button><AIC classname="w-[140px] hover:w-[144px] absolute left-[795px] hover:left-[793px] top-[107px]" /></button>
              </Link>
          </div>
        ) : (
          <div className="w-[325px] mx-auto relative pt-[150px]">
            <div className="w-[333px] bg-[#BCC2EB]">
              <p className="organization-text text-center font-[600] text-[34px] leading-[47px] ">หน่วยงานนักเรียน</p>
            </div>
            <div className="mt-[50px] h-[1006px]">
              <OrganizationPhone />
              <Link href={'/organization/tucmc'}>
                <button><TUCMC classname="w-[179px] pr-[27px] active:w-[175px] absolute left-1/2 -translate-x-1/2 top-[290px]" /></button>
              </Link>
              <Link href={'/organization/tusc'}>
                <button><TUSC classname="w-[100px] active:w-[96px] absolute left-1/2 -translate-x-1/2 top-[505px]" /></button>
              </Link>
              <Link href={'/organization/tupro'}>
                <button><TUPRO classname="w-[155px] active:w-[151px] absolute left-1/2 -translate-x-1/2 top-[728px]" /></button>
              </Link>
              <Link href={'/organization/aic'}>
                <button><AIC classname="w-[100px] active:w-[96px] absolute left-1/2 -translate-x-1/2 top-[950px]" /></button>
              </Link>
            </div>
          </div>
        )
        }
      </section>

      <Footer/>

    </div>
  );
}
