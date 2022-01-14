import {useEffect, useState} from "react"
import {useAuth} from "@lib/auth";
import {GetStaticProps} from "next";
import {getDb} from "@lib/firebase-admin";

const findCurrent = (sc: Array<any>) => {
  const time = new Date().getTime()
  const fil = sc.filter((e: any) => (e.start * 1000 < time))
  const file = sc.filter((e: any) => (e.start * 1000 > time))
  return {now: fil[fil.length - 1], next: file[0]}
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getDb().collection("schedule").doc("GSUnaiZv85XPHPWiZOzf").get()
  const schedule = data.get("15").map((e: any) => {

    return {
      name: e.name,
      start: e.start._seconds
    }
  })


  return {
    props: {
      schedule: schedule
    },
  }
}

const zeroPad = (num: number, places: number) => String(num).padStart(places, '0')

const Stream = ({schedule}: any) => {
  const [current, setCurrent] = useState(findCurrent(schedule).now)
  const auth = useAuth()

  const next = () => {
    if (findCurrent(schedule).now) {
      setTimeout(() => {
        setCurrent(findCurrent(schedule).now)
        next()
      }, findCurrent(schedule).now.start * 1000 - new Date().getTime())
    }
  }

  useEffect(() => {
    next()
  })
  const [question, setQuestion] = useState("")

  return (
    <div
      style={{background: "linear-gradient(180deg, #0D0835 0%, #33103F 21.35%, #1C174D 48.96%, #2B2353 72.4%)"}}
      className="min-h-screen pt-24"
    >
      <div className="flex lg:flex-row justify-center flex-col mx-auto lg:space-y-0 space-y-4 space-x-0 lg:space-x-8 pt-[30px]">
        <div className="my-auto">
          <div className="mb-4 ml-6">
            <h2 className="flex items-center space-x-3">
                <span
                  className="text-white bg-red-500 font-semibold tracking-[3px] leading-[21px] sm:text-md text-sm rounded-sm px-[3px]">
                  LIVE
                </span>{" "}
              <span
                className="text-2xl sm:text-3xl w-[90vw] sm:w-[82vw] lg:w-[841px]">{current?.name || ""}</span>
            </h2>
            {/*<div>*/}
            {/*   <span className="font-light sm:text-md text-sm">ชื่อชมรมร้องเพลงปิ่นหทัย | 10.30-11.35 น.</span>*/}
            {/*</div>*/}
          </div>
          <iframe
            className="bg-black w-[90vw] h-[48vw] sm:w-[82vw] mx-auto sm:h-[46vw] lg:w-[841px] lg:h-[483px] border border-white border-opacity-50 rounded-xl"
            src="https://player.twitch.tv/?channel=TriamUdomOPH&parent=openhouse.triamudom.ac.th"
            frameBorder="0"
            allowFullScreen={true}
            scrolling="no"
            height="378"
            width="620"
          ></iframe>
        </div>
        <div className="xl:block md:hidden block">
          <div className="text-[#C898CC] mt-[10px] mb-[20px] px-6">
            <p className="font-light text-sm">LIVE SCHEDULE</p>
            <p className="font-black text-2xl mt-[-6px]">15 JANUARY 2022</p>
          </div>
          <div className="min-w-[300px] max-w-[400px] sm:min-w-[380px] mx-auto">
            <div className="max-w-[400px] max-h-[440px] overflow-y-auto space-y-4 mx-auto">
              {
                schedule.map((item: any, index: any) => {
                  return (
                    <div key={`e-${index}`}
                         className="border border-white rounded-lg flex space-x-3 px-6 py-2 w-full">
                      <div className="w-[60px]">
                        <p
                          className="font-semibold text-xl sm:text-2xl">{zeroPad(new Date(item.start * 1000).getHours(), 2)}:{zeroPad(new Date(item.start * 1000).getMinutes(), 2)}</p>
                      </div>
                      <div>
                        <p className="text-md sm:text-lg">{item.name}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            {/*<Link href="/schedule">*/}
            {/*    <motion.a*/}
            {/*        whileHover={{ scale: 1.02 }}*/}
            {/*        className="underline cursor-pointer text-md sm:text-lg border border-white rounded-lg bg-white flex justify-center space-x-3 px-6 py-4 w-full text-[#2E2D56]"*/}
            {/*    >*/}
            {/*        ดูตารางรายการสดทั้งหมด*/}
            {/*    </motion.a>*/}
            {/*</Link>*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stream
