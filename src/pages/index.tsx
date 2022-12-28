import { FC, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import { useAuth } from "@lib/auth";
import { CountDown } from "@components/common/Countdown";

import { MailIcon } from "@heroicons/react/solid";
import RomanTower from "@vectors/romanTower";
import GoogleIcon from "@vectors/icons/google";
import KorChor from "@vectors/icons/korchor";
import CountDownBg from "@vectors/background/countDown";
import TriamUdom from "@vectors/text/triamUdom";
import OpenHouse from "@vectors/text/openhouse";
import CountDownBgPhone from "@vectors/background/countDownBgPhone";
import { Navbar } from "@components/common/Nav/Navbar";
import RomanLanding from "@vectors/background/RomanLanding";
import StairPrograammes from "@vectors/background/StairProgramme";
import BigFrame from "@vectors/common/bigFrame";

const OpeningTime = +new Date(2023, 0, 13, 9, 0, 0, 0);

export default function Home() {
  const { user, signinWithGoogle, signout } = useAuth();
  const [timeLeft, setTimeLeft] = useState(null);

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
    <div className="w-screen overflow-x-hidden mt-[-68px]">
      {/* {user?.club
      ? <Navbar classname='bg-opacity-50 bg-cream backdrop-blur-none z-99' />
      : null} */}
      
      {/* Countdown */}
      {/* <main className="flex items-center justify-center h-screen overflow-hidden">
        <div className="fixed left-0 top-auto w-full -z-10 max-lg:hidden">
          <CountDownBg className="object-cover min-h-screen" />
        </div>
        <div className='fixed left-0 top-auto w-full -z-10 lg:hidden'>
          <CountDownBgPhone className="object-cover min-h-screen" />
        </div>
        <div className="mt-[-30px]">
          <TriamUdom classname="w-[316px] lg:w-[732px]" />
          <OpenHouse classname="w-[280px] lg:w-[557px] mt-[5px] lg:mt-[19px] mx-auto" />
          <div className="w-[240px] lg:w-[334px] bg-white bg-opacity-50 mx-auto mt-[46px] lg:mt-[92px] rounded-[17px] lg:rounded-[24px] backdrop-blur-[4.4px]">
            <p className="lg:text-[28px] lg:leading-[47px] text-[20px] leading-[34px] font-[600] items-center justify-center flex z-10">
              13-14 JANUARY 2023
            </p>
          </div>
          <CountDown timeLeft={timeLeft} />
        </div>
      </main> */}

      <main className="flex items-center justify-center w-screen">
        {/* <div className="flex items-center justify-center min-h-screen"> */}
          <div className="relative w-full -z-10 max-lg:hidden">
            <RomanLanding className="object-cover h-full min-h-screen overflow-x-hidden" />
          </div>
          <div className='relative left-0 top-auto w-full -z-10 lg:hidden'>
            <CountDownBgPhone className="object-cover h-full min-h-screen overflow-x-hidden" />
          </div>
          <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          {/* absolute -translate-x-1/2 top-1/2 left-1/2 */}
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

      <section className="relative flex items-center justify-center w-screen">
          <div className="relative w-full -z-10">
            <StairPrograammes className="object-cover h-full min-h-screen overflow-x-hidden bg-landing-programme" />
          </div>
          <div className="absolute lg:left-[82px] lg:top-[100px]">
            <BigFrame classname="lg:w-[282px]"/>
          </div>
      </section> 

      
      {/* <section className="relative flex items-center justify-center min-h-screen mt-auto bg-cream">
        <div>
          <div className="absolute top-0 left-0 w-full">
            <StairPrograammes className="object-cover bg-landing-programme -z-10" />
          </div>
          <div>
            <BigFrame classname="lg:w-[282px]"/>
          </div>
        </div>
        <div>
        </div>
      </section>  */}

      <section>

      </section>

    </div>
  );
}
