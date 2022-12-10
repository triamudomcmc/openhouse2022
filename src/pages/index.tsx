import Head from 'next/head'
import Link from 'next/link'
import { motion } from "framer-motion"
import { CountDown } from '@components/common/Countdown'
import { MailIcon } from '@heroicons/react/solid'
import RomanTower from 'src/vectors/romanTower'
import { useAuth } from '@lib/auth'
import GoogleIcon from 'src/vectors/icons/google'
import KorChor from 'src/vectors/icons/korchor'

export default function Home() {
  const {user, signinWithGoogle, signout} = useAuth()

  return (
    <div className=''>

      {/* Countdown */}
      {/* <main className='main'>
        <h1 className='title'>
          Countdown
        </h1>
        <CountDown until={+new Date(2023, 0, 14, 9, 0, 0, 0)} />
      </main> */}
      
      <section className='relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-login-edit'>
        <div className=''>
          <RomanTower classname='absolute top-0 left-[-60px] min-[700px]:left-[-30px] lg:left-0 h-screen transform -scale-x-100' />
          <RomanTower classname='absolute top-0 h-screen -right-[60px] min-[700px]:right-[-30px] lg:right-0' />
        </div>
        <p className='text-[28px] lg:text-[40px] font-[700] text-[#37498B]'>Register / ลงทะเบียน</p>
        <motion.div
        whileHover={{ scale: 1.05 }}
        >
            <button 
              onClick={() => signinWithGoogle('/account')}
              className='w-[200px] h-[40px] lg:w-[340px] lg:h-[65px] bg-white rounded-[112px] lg:rounded-[53px] mt-[15px] lg:mt-[30px] shadow-[2px_4px_4px_rgba(0,0,0,0.25)]'>
              <div className='flex flex-row mx-auto w-[155px] lg:w-[225px] relative items-center'>
                <GoogleIcon classname='max-lg:hidden' width='30' height='30'/>
                <GoogleIcon classname='lg:hidden' width='24' height='24'/>
                <p className='text-[14px] ml-[10px] lg:ml-[20px] lg:text-[20px] font-500 text-[#37498B]'>Sign up with Google</p>
              </div>
            </button>
        </motion.div>

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
        <KorChor classname='max-lg:hidden absolute bottom-[100px]' width="190" height="28" />
        <KorChor classname='lg:hidden absolute bottom-[100px]' width="100"/>
      </section>
    </div>
  )
}
