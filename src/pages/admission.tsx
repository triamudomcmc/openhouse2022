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
import { MD } from "@utils/breakpoints"
import { useWindowDimensions } from "@utils/useWindowDimensions"
import { Chart } from "@vectors/Chart"
import { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

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

const Admission = () => {
  const { width } = useWindowDimensions()

  return (
    <main
      className="min-h-screen w-full flex flex-col main-section items-center"
      style={{ background: "linear-gradient(90deg, #143476 0%, #3B498A 21.87%, #855187 79.69%, #905386 100%)" }}
    >
      <div className="text-center mb-8 px-4">
        <h1 className="font-semibold text-4xl">การสอบเข้าศึกษาต่อระดับมัธยมศึกษาปีที่ 4 </h1>
        <p className="font-semibold mt-4 text-4xl">โรงเรียนเตรียมอุดมศึกษา</p>
        <p className="font-light mt-4 text-lg">ปีการศึกษา 2565</p>
      </div>
      <div className="px-4 md:px-12 lg:px-48 flex flex-col space-y-12 w-full items-center">
        <div className="bg-[#C0AFE9] max-w-[600px] rounded-2xl bg-opacity-40 px-8 py-8 flex flex-col items-center">
          <h2 className="font-semibold text-2xl mb-4 text-center">เกี่ยวกับโรงเรียนเตรียมอุดมศึกษา</h2>
          <p className="indent-4 mb-6 leading-loose font-texts text-justify">
            โรงเรียนเตรียมอุดมศึกษา เป็นโรงเรียนมัธยมปลายขนาดใหญ่พิเศษ มีทำเลที่ตั้งอยู่ใจกลางเมือง ติด BTS สถานีสยาม
            เดินทางสะดวก บรรยากาศโดยรอบโรงเรียนมีสีสัน
            รายล้อมไปด้วยห้างสรรพสินค้าและสถานที่สำหรับอ่านหนังสือที่สามารถมาได้ทุกเวลาหลังเลิกเรียน
            เรียกได้ว่าโรงเรียนเตรียมอุดมศึกษาเป็นโรงเรียนที่มีความพร้อมที่จะส่งเสริมศักยภาพของนักเรียนเตรียมฯ ในทุกด้าน
          </p>
          <Link passHref href="/directions">
            <a className="font-light text-md border border-white hover:bg-white hover:text-slate-600 transition-colors px-8 py-4 rounded-full">
              การเดินทางมาโรงเรียนเตรียมฯ <LocationMarkerIcon className="w-5 h-5 inline" />
            </a>
          </Link>
        </div>
        <div className="flex flex-col w-full">
          <h2 className="font-semibold text-2xl mb-6 text-center">กำหนดการสอบเข้า</h2>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 w-full items-center justify-center">
            <Milestone data={{ date: "19-23", month: "ก.พ. 65", event: "เปิดรับสมัคร" }} />
            {width > MD ? (
              <ArrowRightIcon className="w-5 h-5 text-white" />
            ) : (
              <ArrowDownIcon className="w-5 h-5 text-white" />
            )}
            <Milestone highlight data={{ date: "5", month: "มี.ค. 65", event: "วันสอบ" }} />
            {width > MD ? (
              <ArrowRightIcon className="w-5 h-5 text-white" />
            ) : (
              <ArrowDownIcon className="w-5 h-5 text-white" />
            )}
            <Milestone data={{ date: "12", month: "มี.ค. 65", event: "วันประกาศผล" }} />
            {width > MD ? (
              <ArrowRightIcon className="w-5 h-5 text-white" />
            ) : (
              <ArrowDownIcon className="w-5 h-5 text-white" />
            )}
            <Milestone data={{ date: "15", month: "มี.ค. 65", event: "รายงานตัว" }} />
            {width > MD ? (
              <ArrowRightIcon className="w-5 h-5 text-white" />
            ) : (
              <ArrowDownIcon className="w-5 h-5 text-white" />
            )}
            <Milestone data={{ date: "21", month: "มี.ค. 65", event: "วันมอบตัว" }} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-4 mb-4 mt-4 w-full">
          <h2 className="font-semibold text-2xl mb-4 text-center">
            พบปะท่านรองกลุ่มบริหารวิชาการ : นายทรงเกียรติ เทพประเสน
          </h2>
          <p className="mb-4">
            ท่านรองฯ ทรงเกียรติ เทพประเสนกล่าวถึงข้อมูลเกี่ยวกับการสอบเข้า, แนวทางการจัดการเรียนสอน, และอื่น ๆ อีกมากมาย
          </p>
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
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-semibold text-2xl mt-6 mb-4 text-center">ข้อมูลสายการเรียนที่เปิดรับ</h2>
          <article className="flex flex-col w-full max-w-[1260px] xl:space-x-8 xl:flex-row justify-center items-center">
            <div className="w-[300px] xl:w-[1024px] sm:min-w-[400px]">
              {/* <Chart className="w-full lg:w-[270px]" /> */}
              <Image
                src="/assets/admission/chart.png"
                alt="programmes chart"
                width={449}
                height={658}
                className="w-full"
              />
            </div>
            <div className="mt-6 flex flex-col space-y-4">
              {/* <div>
                <motion.a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#C0AFE9] rounded-full inline bg-opacity-40 px-6 py-2"
                >
                  <DocumentTextIcon className="inline w-5 h-5" /> อ่านข้อมูลเพิ่มเติมโดยละเอียด
                </motion.a>
              </div> */}
              <div className="bg-[#C0AFE9] rounded-xl inline bg-opacity-40 px-6 py-8">
                <span className="font-semibold">วิทย์-คณิต สอบ 5 วิขา :</span> คณิตศาสตร์ วิทยาศาสตร์ ภาษาไทย สังคมศึกษา
                ภาษาอังกฤษ
                <br />
                <span className="font-semibold">ศิลป์-คำนวณ สอบ 4 วิขา :</span> คณิตศาสตร์ ภาษาไทย สังคมศึกษา ภาษาอังกฤษ
                <br />
                <span className="font-semibold">ศิลป์-ภาษา สอบ 3 วิขา :</span> ภาษาไทย สังคมศึกษา ภาษาอังกฤษ
              </div>
              <div className="bg-[#C0AFE9] rounded-xl inline bg-opacity-40 px-6 py-8">
                <h3 className="text-2xl font-bold mb-4">สิ่งที่ควรรู้ในวันสอบ</h3>
                <ul className="leading-loose flex flex-col space-y-4">
                  <li>
                    <span className="font-semibold text-lg">
                      <LocationMarkerIcon className="inline w-8 h-8" /> สถานที่สอบ - อิมแพ็ค เมืองทองธานี จ.นนทบุรี
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold text-lg">
                      <PencilAltIcon className="inline w-8 h-8" /> สิ่งที่สามารถนำเข้าห้องสอบได้
                    </span>
                    <div className="flex flex-col xl:flex-row xl:space-x-16 ml-10 mt-2 py-2">
                      <div className="flex flex-col space-y-6">
                        <ul>
                          <li>
                            <span className="font-light">
                              <CheckCircleIcon className="w-5 h-5 inline" /> บัตรประจำตัวผู้สอบ
                            </span>
                          </li>
                          <li>
                            <span className="font-light">
                              <CheckCircleIcon className="w-5 h-5 inline" /> บัตรประจำตัวประชาชน
                            </span>
                          </li>
                          <li>
                            <span className="font-light">
                              <CheckCircleIcon className="w-5 h-5 inline" /> ดินสอ 2B
                            </span>
                          </li>
                          <li>
                            <span className="font-light">
                              <CheckCircleIcon className="w-5 h-5 inline" /> ยางลบดินสอ
                            </span>
                          </li>
                          <li>
                            <span className="font-light">
                              <CheckCircleIcon className="w-5 h-5 inline" /> กบเหลาดินสอ
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col space-y-6">
                        <ul>
                          <li>
                            <span className="font-light">
                              <CheckCircleIcon className="w-5 h-5 inline" /> ปากกาสีน้ำเงิน
                            </span>
                          </li>
                          <li>
                            <span className="font-light">
                              <CheckCircleIcon className="w-5 h-5 inline" /> เสื้อกันหนาว
                            </span>
                          </li>
                          <li>
                            <span className="font-light">
                              <CheckCircleIcon className="w-5 h-5 inline" /> นาฬิกาชนิดเข็ม
                            </span>
                          </li>
                          <li>
                            <span className="font-light">
                              <CheckCircleIcon className="w-5 h-5 inline" /> หน้ากากอนามัย
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <span className="font-light">
                        <ExclamationIcon className="w-5 h-5 inline" /> นอกเหนือจากที่กล่าวไปข้างต้น
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
        </div>
      </div>
    </main>
  )
}

export default Admission
