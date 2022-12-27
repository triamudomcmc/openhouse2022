import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from "framer-motion"
import { CountDown } from '@components/common/Countdown'
import { MailIcon } from '@heroicons/react/solid'
import RomanTower from 'src/vectors/romanTower'
import { useAuth } from '@lib/auth'
import GoogleIcon from 'src/vectors/icons/google'
import KorChor from 'src/vectors/icons/korchor'
import { Navbar } from '@components/common/Nav/Navbar'

export default function Auth() {
  const router = useRouter()
  const {user, signinWithGoogle, signout} = useAuth()
  // const Router = useRouter()
  // if (user ?? false ? user?.club : false) return Router.push(`/clubs/${user?.club}`)
  // else if (user ?? false ? user : false) return Router.push('/account')

  // if (user?.club) {
  //   if (user?.club.includes('ก')) router.push(`/clubs/${[user?.club]}`)
  //   else if (user?.club.includes('sci') || user?.club.includes('arts') || user?.club.includes('gifted')) router.push(`/programmes/${user?.club}`)
  //   else if (user?.club.includes('tu') || user?.club.includes('aic')) router.push(`/organization/${user?.club}`)
  // }
  
  return (
    <div>
      {user?.club || user?.roles?.hasOwnProperty('tucmc') 
      ? <Navbar classname='bg-opacity-50 bg-cream backdrop-blur-none' />
      : null}

      <section className='relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-login-edit'>
        <div className=''>
          <RomanTower classname='absolute top-0 left-[-60px] min-[700px]:left-[-30px] lg:left-0 h-screen transform -scale-x-100' />
          <RomanTower classname='absolute top-0 h-screen -right-[60px] min-[700px]:right-[-30px] lg:right-0' />
        </div>
        { user?.uid
        ? <div>
            <p className='text-[28px] lg:text-[40px] font-[700] text-[#37498B]'>Sign out / ออกจากระบบ</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
              >
              <button 
                  onClick={signout}
                  className='w-[200px] h-[40px] lg:w-[340px] lg:h-[65px] bg-cream rounded-[112px] lg:rounded-[53px] mt-[15px] lg:mt-[30px] shadow-[2px_4px_4px_rgba(0,0,0,0.25)]'>
                  <div className='flex flex-row mx-auto w-[155px] lg:w-[225px] relative items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="w-9 h-9">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                      </svg>
                      <p className='text-[24px] ml-[20px] lg:ml-[40px] lg:text-[30px] font-500 text-[orange]'>Sign out</p>
                  </div>
              </button>
              </motion.div>
          </div>
        : <div>
            <p className='text-[28px] lg:text-[40px] font-[700] text-[#37498B]'>Register / ลงทะเบียน</p> 
                <motion.div
                whileHover={{ scale: 1.05 }}
                >
                    <button 
                      onClick={() => signinWithGoogle('/done')}
                      className='w-[200px] h-[40px] lg:w-[340px] lg:h-[65px] bg-white rounded-[112px] lg:rounded-[53px] mt-[15px] lg:mt-[30px] shadow-[2px_4px_4px_rgba(0,0,0,0.25)]'>
                      <div className='flex flex-row mx-auto w-[155px] lg:w-[225px] relative items-center'>
                        <GoogleIcon classname='max-lg:hidden' width='30' height='30'/>
                        <GoogleIcon classname='lg:hidden' width='24' height='24'/>
                        <p className='text-[14px] ml-[10px] lg:ml-[20px] lg:text-[20px] font-500 text-[#37498B]'>Sign up with Google</p>
                      </div>
                    </button>
                </motion.div>
            </div> }

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