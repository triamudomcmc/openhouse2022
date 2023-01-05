import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  ExclamationIcon,
  LocationMarkerIcon,
  MapIcon,
  PencilAltIcon,
} from "@heroicons/react/outline"
import { LG, MD } from "@utilities/breakpoints"
import { useWindowDimensions } from "@utilities/useWindowDimensions"
import { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowCircleLeftIcon } from "@heroicons/react/solid"

interface IMilestoneData {
  date: string
  month: string
  event: string
}

const Milestone: FC<{ data: IMilestoneData; highlight?: boolean }> = ({ data, highlight }) => {
  return (
    <>
      <div className="relative w-[150px] h-[150px] rounded-full shadow-md bg-white bg-opacity-30 border border-white flex flex-col items-center justify-center">
        {highlight && (
          <div className="absolute py-2 px-4 rotate-3 right-[-14px] top-[-14px] bg-white text-[#534C8A] font-bold rounded-full">
            D-Day !
          </div>
        )}
        <p className="text-2xl font-bold">{data.date}</p>
        <p className="font-semibold">{data.month}</p>
        <p>{data.event}</p>
      </div>
    </>
  )
}

export default function Admission({ query }: any) {
  const { width } = useWindowDimensions()

  return (
    <main className="min-h-screen w-full flex flex-col pt-[6.5rem] pb-[2rem] justify-center items-center text-white bg-normal-gradient">
      <div className="px-4 mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl">
          พบกับกำหนดการสอบเข้าเร็วๆนี้...
        </h1>
        {/* <p className="mt-4 text-xl sm:text-2xl">โรงเรียนเตรียมอุดมศึกษา</p>
        <p className="mt-4 text-lg font-light">ปีการศึกษา 2565</p>
      </div>
      <div className="flex flex-col items-center w-full px-4 space-y-12 lg:px-12 ">
        <div className="bg-[#e9ceaf] max-w-[600px] rounded-2xl bg-opacity-40 px-8 py-8 flex flex-col items-center">
          <h2 className="mb-4 text-2xl font-semibold text-center">เกี่ยวกับโรงเรียนเตรียมอุดมศึกษา</h2>
          <p className="mb-6 leading-loose text-justify indent-4 font-texts">
            โรงเรียนเตรียมอุดมศึกษา เป็นโรงเรียนมัธยมปลายขนาดใหญ่พิเศษ มีทำเลที่ตั้งอยู่ใจกลางเมือง ติด BTS สถานีสยาม
            เดินทางสะดวก บรรยากาศโดยรอบโรงเรียนมีสีสัน
            รายล้อมไปด้วยห้างสรรพสินค้าและสถานที่สำหรับอ่านหนังสือที่สามารถมาได้ทุกเวลาหลังเลิกเรียน
            เรียกได้ว่าโรงเรียนเตรียมอุดมศึกษาเป็นโรงเรียนที่มีความพร้อมที่จะส่งเสริมศักยภาพของนักเรียนเตรียมฯ ในทุกด้าน
          </p>
          <Link passHref href="/directions">
            <a className="px-8 py-4 font-light transition-colors border border-white rounded-full text-md hover:bg-white hover:text-orange">
              การเดินทางมาโรงเรียนเตรียมฯ <LocationMarkerIcon className="inline w-5 h-5" />
            </a>
          </Link>
        </div> */}
        {/* <div className="flex flex-col w-full">
          <h2 className="mb-6 text-2xl font-semibold text-center">กำหนดการสอบเข้า</h2>
          <p className="text-center">รอติดตามข้อมูล</p>
          <div className={`flex flex-col items-center justify-center w-full space-y-4 ${width > LG ? "flex-row space-x-4 space-y-0" : ""}`}>
            <Milestone data={{ date: "19-23", month: "ก.พ. 65", event: "เปิดรับสมัคร" }} />
            {width > LG ? (
              <ArrowRightIcon className="w-5 h-5 text-white" />
            ) : (
              <ArrowDownIcon className="w-5 h-5 text-white" />
            )}
            <Milestone highlight data={{ date: "5", month: "มี.ค. 65", event: "วันสอบ" }} />
            {width > LG ? (
              <ArrowRightIcon className="w-5 h-5 text-white" />
            ) : (
              <ArrowDownIcon className="w-5 h-5 text-white" />
            )}
            <Milestone data={{ date: "12", month: "มี.ค. 65", event: "วันประกาศผล" }} />
            {width > LG ? (
              <ArrowRightIcon className="w-5 h-5 text-white" />
            ) : (
              <ArrowDownIcon className="w-5 h-5 text-white" />
            )}
            <Milestone data={{ date: "15", month: "มี.ค. 65", event: "รายงานตัว" }} />
            {width > LG ? (
              <ArrowRightIcon className="w-5 h-5 text-white" />
            ) : (
              <ArrowDownIcon className="w-5 h-5 text-white" />
            )}
            <Milestone data={{ date: "21", month: "มี.ค. 65", event: "วันมอบตัว" }} />
          </div>
        </div> */}
        {/* <div className="flex flex-col items-center justify-center w-full px-4 mt-4">
          <h2 className="mb-4 text-xl font-semibold text-center">
            รายละเอียดในการรับสมัครนักเรียนชั้นมัธยมศึกษาปีที่ 4 ปีการศึกษา 2565
          </h2>
          <p className="mb-6 text-sm font-light text-center sm:text-left">
            ท่านรองฯ ทรงเกียรติ เทพประเสนกล่าวถึงข้อมูลเกี่ยวกับการสอบเข้า, แนวทางการจัดการเรียนสอน, และอื่น ๆ อีกมากมาย
          </p>
          <div className="flex flex-col mb-6 space-x-0 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
            {"back" in query && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="px-10 py-4 font-light text-white transition-opacity border border-white rounded-full text-md hover:text-slate-700 hover:bg-white hover:opacity-90"
                href="https://triamudom.ac.th/website"
                rel="noreferrer"
                onClick={() => {
                  // @ts-ignore
                  window.gtag("event", "link_back", {
                    event_category: "back_to_school_website",
                    //   event_label: url,
                    // link: url,
                  })
                }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <ArrowCircleLeftIcon className="w-4 h-4" />
                  <span>กลับสู่เว็บไซต์โรงเรียน</span>
                </div>
              </motion.a>
            )}
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="px-12 py-4 font-light text-center transition-opacity bg-white rounded-full text-md text-blue-text hover:opacity-90"
              href="https://admission.triamudom.ac.th"
              rel="noreferrer"
            >
              สมัครสอบเลย !
            </motion.a>
          </div>
          <div className="">
            <iframe
              width="560"
              height="315"
              src={"https://youtube.com/embed/zHZ2wsXUt3A"}
              title="สัมภาษณ์สดท่านรองผู้อำนวยการ"
              className="rounded-lg aspect-video w-[90vw] sm:w-[75vw] lg:w-[600px] h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div> */}
        {/* <div className="flex flex-col itesm-center">
          <h2 className="mt-6 mb-4 text-2xl font-semibold text-center">การเดินทางมาสถานที่สอบ</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.768954036868!2d100.5455547146062!3d13.912753890243433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2830b0b06eef3%3A0x5ade5eb90113ca18!2sIMPACT!5e0!3m2!1sen!2sth!4v1642815661950!5m2!1sen!2sth"
            width="600"
            height="450"
            className="mx-auto rounded-lg aspect-square sm:aspect-video w-[90vw] sm:w-[75vw] lg:w-[600px] h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div> */}
        {/* <div className="flex flex-col items-center">
          <h2 className="mt-6 mb-4 text-2xl font-semibold text-center">ข้อมูลสายการเรียนที่เปิดรับ</h2>
          <article className="flex flex-col w-full max-w-[1260px] xl:space-x-8 xl:flex-row justify-center items-center">
            <div className="w-[300px] xl:w-[1024px] sm:min-w-[400px]">
              {/* <Chart className="w-full lg:w-[270px]" /> 
              <Image
                src="/assets/admission/chart.png"
                alt="programmes chart"
                width={449}
                height={658}
                className="w-full"
              />
            </div>
            <div className="flex flex-col mt-6 space-y-4">
              <div>
                <motion.a
                  href="https://www.triamudom.ac.th/website/images/65/02/Admission4-65.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#C0AFE9] rounded-full inline bg-opacity-40 px-6 py-2"
                >
                  <DocumentTextIcon className="inline w-5 h-5" /> อ่านข้อมูลเพิ่มเติมโดยละเอียด
                </motion.a>
              </div>
              <div className="bg-[#C0AFE9] rounded-xl inline bg-opacity-40 px-6 py-8">
                <span className="font-semibold">วิทย์-คณิต สอบ 5 วิขา :</span> คณิตศาสตร์ วิทยาศาสตร์ ภาษาไทย สังคมศึกษา
                ภาษาอังกฤษ
                <br />
                <span className="font-semibold">ภาษา-คณิต สอบ 4 วิขา :</span> คณิตศาสตร์ ภาษาไทย สังคมศึกษา ภาษาอังกฤษ
                <br />
                <span className="font-semibold">ภาษา-ภาษา สอบ 3 วิขา :</span> ภาษาไทย สังคมศึกษา ภาษาอังกฤษ
              </div>
              <div className="bg-[#C0AFE9] rounded-xl inline bg-opacity-40 px-6 py-8">
                <h3 className="mb-4 text-2xl font-bold">สิ่งที่ควรรู้ในวันสอบ</h3>
                <ul className="flex flex-col space-y-4 leading-loose">
                  <li>
                    <span className="text-lg font-semibold">
                      <LocationMarkerIcon className="inline w-8 h-8" /> สถานที่สอบ - อิมแพ็ค เมืองทองธานี จ.นนทบุรี
                    </span>
                  </li>
                  <li>
                    <span className="text-lg font-semibold">
                      <PencilAltIcon className="inline w-8 h-8" /> สิ่งที่สามารถนำเข้าห้องสอบได้
                    </span>
                    <div className="flex flex-col py-2 mt-2 ml-10 xl:flex-row xl:space-x-16">
                      <div className="flex flex-col space-y-6">
                        <ul>
                          <li>
                            <span className="font-light">
                              <CheckCircleIcon className="inline w-5 h-5" /> บัตรประจำตัวผู้สอบ
                            </span>
                          </li>
                          <li>
                            <span className="font-light">
                              <CheckCircleIcon className="inline w-5 h-5" /> บัตรประจำตัวประชาชน
                            </span>
                          </li>
                          <li>
                            <span className="font-light">
                              <CheckCircleIcon className="inline w-5 h-5" /> ดินสอ 2B
                            </span>
                          </li>
                          <li>
                            <span className="font-light">
                              <CheckCircleIcon className="inline w-5 h-5" /> ยางลบดินสอ
                            </span>
                          </li>
                          <li>
                            <span className="font-light">
                              <CheckCircleIcon className="inline w-5 h-5" /> กบเหลาดินสอ
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col space-y-6">
                        <ul>
                          <li>
                            <span className="font-light">
                              <CheckCircleIcon className="inline w-5 h-5" /> ปากกาสีน้ำเงิน
                            </span>
                          </li>
                          <li>
                            <span className="font-light">
                              <CheckCircleIcon className="inline w-5 h-5" /> เสื้อกันหนาว
                            </span>
                          </li>
                          <li>
                            <span className="font-light">
                              <CheckCircleIcon className="inline w-5 h-5" /> นาฬิกาชนิดเข็ม
                            </span>
                          </li>
                          <li>
                            <span className="font-light">
                              <CheckCircleIcon className="inline w-5 h-5" /> หน้ากากอนามัย
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <span className="font-light">
                        <ExclamationIcon className="inline w-5 h-5" /> นอกเหนือจากที่กล่าวไปข้างต้น
                        ไม่สามารถนำเข้าห้องสอบได้ เช่น เงิน อาหาร น้ำดื่ม ช้อน ลิขวิดเปเปอร์ ถุงพลาสติก วงเวียน
                        ไม้บรรทัด ปากกาหลากสียกเว้นสีน้ำเงิน หมวก แว่นดำ หน้ากากผ้าลวดลาย โทรศัพท์ ผ้าห่ม ผ้าพันคอ
                        นาฬิกาปลุกหรือนาฬิกาตั้งโต๊ะ ทิชชู่ กระดาษอย่างอื่นนอกเหนือจากบัตรประจำตัวสอบ และอื่น ๆ
                      </span>
                    </div>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </article>
        </div> */}
      </div>
    </main>
  )
}

// Admission.getInitialProps = ({ query }: any) => {
//   return { query, notFound: true };
// };

export async function getServerSideProps({ query }: any) {
  return {
    props: {
      query,
    },
    // notFound: true, // ! uncomment this line
  }
}
