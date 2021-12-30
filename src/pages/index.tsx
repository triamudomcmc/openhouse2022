import Router from "next/router"
import { motion } from "framer-motion"
import { Flask, Math } from "@vectors/index/gifted"
import { AdaptiveBg } from "@components/common/AdaptiveBg"
import Image from "next/image"
import { LogoWhite } from "@vectors/Logo"
import { ArrowCircleRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { UserIcon } from "@heroicons/react/solid"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import { useEffect, useRef } from "react"
import classnames from "classnames"
import { GetStaticProps } from "next"
import { getAllPosts } from "@lib/api"
import markdownToHtml from "@lib/markdownToHTML"

const Blog = ({ data }: { data: any }) => {
  return (
    <Link href={`articles/${data.slug}`}>
      <div
        style={{
          background: "linear-gradient(265.95deg, rgba(255, 255, 255, 0.3) 33.14%, rgba(255, 255, 255, 0) 100%)",
        }}
        className="border h-[198px] border-white rounded-lg border-opacity-40 flex justify-between backdrop-filter backdrop-blur-lg snap-center cursor-pointer"
      >
        <div className="flex flex-col justify-between px-6 py-4">
          <div className="space-y-2">
            <h1 className="text-lg">{data.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: `${data.content}...` }} className="font-light"></p>
          </div>
          <span className="text-sm font-light">{data.author}</span>
        </div>
        <div className="flex-shrink-0">
          <Image
            width={317}
            height={197}
            objectFit={"cover"}
            src={data.thumbnail}
            className="flex-shrink-0 rounded-r-lg"
          />
        </div>
      </div>
    </Link>
  )
}

const Video = () => {
  return (
    <Link href={"/"}>
      <div
        style={{
          background: "linear-gradient(241.39deg, rgba(255, 255, 255, 0.4) 18.81%, rgba(255, 255, 255, 0) 100.07%)",
        }}
        className="w-[170px] rounded-lg mt-3 cursor-pointer backdrop-blur-lg backdrop-filter pb-[10px] border border-white border-opacity-20"
      >
        <div>
          <div className="relative">
            <span className="absolute bottom-[12px] right-[6px] text-[10px] z-[2] text-gray-700 bg-white px-2 py-[0.6px] font-medium rounded-sm text-sm">
              12.10
            </span>
            <Image
              src={"/images/placeholders/clubs.jpg"}
              objectFit={"cover"}
              width={170}
              height={98}
              priority={true}
              className="rounded-t-lg"
            />
          </div>
          <div className="px-2">
            <h1 className="break-all text-[12px] h-[56px] font-light text-ellipsis">
              ชื่อวิดีโอยาววววววววววววววววววววววววววววววววววว
            </h1>
            <div className="flex items-center space-x-1">
              <UserIcon className="w-4 h-4 flex-shrink-0" />
              <h1 className="text-[10px] font-light truncate">งานกิจกรรมพัฒนาผู้เรียน</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

const Programme = ({ name, thainame }: { name: string; thainame: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        Router.push("/programmes/" + name)
      }}
      className="text-center cursor-pointer w-[100px] sm:w-[160px]"
    >
      <div className="w-[100px] sm:w-[160px]">
        <Image width={160} height={160} src={`/images/branches/${name}.png`} />
      </div>
      <h1 className="font-light">{thainame}</h1>
    </motion.div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const fetchedData = getAllPosts(["slug", "title", "author", "thumbnail", "content"], "_articles")
  let cleaned = fetchedData.filter((item) => Object.keys(item).length > 1)
  if (!cleaned) {
    return {
      notFound: true,
    }
  }

  let mapped = []

  for (let i of cleaned) {
    const e = await markdownToHtml(
      i.content
        .replace(/\!.+?\)/g, "")
        .replace(/\[.+?\)/g, "")
        .replace(new RegExp("\n> ", "g"), "")
        .replace(/\n/g, " ") || ""
    )
    mapped.push({ ...i, content: e.substr(0, 120) })
  }

  return {
    props: {
      articles: mapped,
    },
  }
}

export default function Home({ articles }: any) {
  const videoLeft = useRef(null)
  const videoRight = useRef(null)

  return (
    <div className="font-display">
      <div>
        <AdaptiveBg
          primary={{ background: "url('images/backgrounds/landing.jpg')", height: "1024px" }}
          secondary={{ background: "url('images/backgrounds/landing-mobile.jpg')", height: "926px" }}
          mobile={{ background: "url('images/backgrounds/landing-mobile-default.jpg')", height: "926px" }}
          classname="flex items-center"
        >
          <div className="flex flex-col items-start sm:items-center w-full px-8">
            <h1 className="text-[64px] xl:text-[116px] leading-[64px] xl:leading-[156px] font-black tracking-[14px] xl:tracking-[30px]">
              TRIAM UDOM
            </h1>
            <h1 className="text-[40px] xl:text-[70px] tracking-[8px] xl:tracking-[13px] font-light mt-[10px] xl:mt-[-26px]">
              ONLINE OPEN HOUSE 2022
            </h1>
            <h1 className="text-[20px] md:text-[30px] font-thin tracking-[8px] md:tracking-[10px] mt-10">
              14-15 JANUARY
            </h1>
            <div className="flex flex-col items-center">
              <div
                className="text-xl font-thin px-16 rounded-full py-3 mt-[50px] md:mt-[80px]"
                style={{ background: "linear-gradient(267.68deg, #A1677D 4.3%, #EFBB8B 94.12%)" }}
              >
                <h1>เข้าสู่ระบบ</h1>
              </div>
              <LogoWhite className="w-[174px] mt-6 md:mt-16" />
            </div>
          </div>
        </AdaptiveBg>
        <AdaptiveBg
          primary={{ background: "url('images/backgrounds/live.jpg')", height: "1024px" }}
          secondary={{ background: "url('images/backgrounds/live-mobile.jpg')", height: "926px" }}
          mobile={{ background: "url('images/backgrounds/live-mobile-default.jpg')", height: "926px" }}
          classname="flex items-center"
        >
          <div className="flex lg:flex-row flex-col mx-auto lg:space-y-0 space-y-4 space-x-0 lg:space-x-8 pt-[30px]">
            <div className="my-auto">
              <div className="mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-white bg-red-500 font-semibold tracking-[3px] leading-[21px] sm:text-md text-sm rounded-sm px-[3px]">
                    LIVE
                  </span>{" "}
                  <span className="text-2xl sm:text-3xl">ร้องเพลงปิ่นหทัย</span>
                </div>
                <div>
                  <span className="font-light sm:text-md text-sm">ชื่อชมรมร้องเพลงปิ่นหทัย | 10.30-11.35 น.</span>
                </div>
              </div>
              <div className="bg-black w-[90vw] h-[48vw] sm:w-[82vw] sm:h-[46vw] lg:w-[841px] lg:h-[483px] border border-white border-opacity-50 rounded-xl"></div>
            </div>
            <div className="xl:block md:hidden block">
              <div className="text-[#C898CC] mt-[10px] mb-[20px] px-6">
                <h1 className="font-light text-sm">LIVE SCHEDULE</h1>
                <h1 className="font-black text-2xl mt-[-6px]">14 JANUARY 2022</h1>
              </div>
              <div className="min-w-[300px] sm:min-w-[380px] space-y-4 mx-auto">
                <div className="border border-white rounded-lg flex space-x-3 px-6 py-2 w-full">
                  <div className="w-[60px]">
                    <h1 className="font-semibold text-xl sm:text-2xl">10.00</h1>
                  </div>
                  <div>
                    <h1 className="text-md sm:text-lg">จตุรกิฟต์ทอล์ก</h1>
                    <h1 className="sm:text-md text-sm text-gray-400 mt-[-2px]">รุ่นพี่จากโครงการพิเศษ</h1>
                  </div>
                </div>
                <div className="border border-white rounded-lg flex space-x-3 px-6 py-2 w-full">
                  <div className="w-[60px]">
                    <h1 className="font-semibold text-xl sm:text-2xl">10.00</h1>
                  </div>
                  <div>
                    <h1 className="text-md sm:text-lg">จตุรกิฟต์ทอล์ก</h1>
                    <h1 className="sm:text-md text-sm text-gray-400 mt-[-2px]">รุ่นพี่จากโครงการพิเศษ</h1>
                  </div>
                </div>
                <div className="border border-white rounded-lg flex space-x-3 px-6 py-2 w-full">
                  <div className="w-[60px]">
                    <h1 className="font-semibold text-xl sm:text-2xl">10.00</h1>
                  </div>
                  <div>
                    <h1 className="text-md sm:text-lg">จตุรกิฟต์ทอล์ก</h1>
                    <h1 className="sm:text-md text-sm text-gray-400 mt-[-2px]">รุ่นพี่จากโครงการพิเศษ</h1>
                  </div>
                </div>
                <div className="border border-white rounded-lg flex space-x-3 px-6 py-2 w-full">
                  <div className="w-[60px]">
                    <h1 className="font-semibold text-xl sm:text-2xl">10.00</h1>
                  </div>
                  <div>
                    <h1 className="text-md sm:text-lg">จตุรกิฟต์ทอล์ก</h1>
                    <h1 className="sm:text-md text-sm text-gray-400 mt-[-2px]">รุ่นพี่จากโครงการพิเศษ</h1>
                  </div>
                </div>
                <div className="border border-white rounded-lg flex space-x-3 px-6 py-2 w-full">
                  <div className="w-[60px]">
                    <h1 className="font-semibold text-xl sm:text-2xl">10.00</h1>
                  </div>
                  <div>
                    <h1 className="text-md sm:text-lg">จตุรกิฟต์ทอล์ก</h1>
                    <h1 className="sm:text-md text-sm text-gray-400 mt-[-2px]">รุ่นพี่จากโครงการพิเศษ</h1>
                  </div>
                </div>
                <Link href="/schedule">
                  <div className="border border-white rounded-lg bg-white flex justify-center space-x-3 px-6 py-4 w-full text-[#2E2D56]">
                    <h1 className="underline text-md sm:text-lg">ดูตารางรายการสดทั้งหมด</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </AdaptiveBg>
        <AdaptiveBg
          primary={{ background: "url('images/backgrounds/branches.jpg')", height: "1771px" }}
          secondary={{ background: "url('images/backgrounds/branches-mobile.jpg')", height: "1385px" }}
          mobile={{ background: "url('images/backgrounds/branches-mobile-default.jpg')", height: "926px" }}
        >
          <div className="pl-0 sm:pl-[200px] mx-auto w-max sm:h-[760px]">
            <div className="mt-[130px] sm:mt-[300px] relative w-max">
              <h1 className="text-5xl sm:text-6xl font-semibold leading-[60px] sm:leading-[80px] z-[10] relative w-max">
                มาตามหา
                <br />
                สายการเรียน
                <br />
                ที่คุณอยากจะ
                <br />
                ทำความรู้จักกัน !
              </h1>
              <div className="w-[300px] sm:w-[394px] h-[78px] sm:h-[96px] absolute border-[5px] border-yellow-500 rounded-[50%] rotate-[-6deg] top-[50px] sm:top-[74px] left-[-34px] z-[2]" />
              <h1 className="font-light text-lg sm:text-xl tracking-wider mt-10 w-max">
                คลิกที่ดวงดาวเพื่ออ่านข้อมูลสายการเรียน
              </h1>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center mx-auto justify-evenly max-w-[1440px] mt-10 sm:mt-0">
            <div className="flex flex-row sm:flex-col space-y-0 sm:space-y-20 flex-shrink-0 sm:space-x-0 space-x-6">
              <Programme name={"sci-math"} thainame={"วิทย์-คณิต"} />
              <Programme name={"arts-french"} thainame={"ภาษา-ภาษาฝรั่งเศส"} />
            </div>
            <div className="flex flex-row sm:flex-col space-y-0 sm:space-y-20 sm:mt-20 flex-shrink-0 sm:space-x-0 space-x-6">
              <Programme name={"arts-math"} thainame={"ภาษา-คณิต"} />
              <Programme name={"arts-chinese"} thainame={"ภาษา-ภาษาจีน"} />
            </div>
            <div className="flex flex-row sm:flex-col space-y-0 sm:space-y-20 flex-shrink-0 sm:space-x-0 space-x-6">
              <Programme name={"arts-german"} thainame={"ภาษา-ภาษาเยอรมัน"} />
              <Programme name={"arts-japanese"} thainame={"ภาษา-ภาษาญี่ปุ่น"} />
            </div>
            <div className="flex flex-row sm:flex-col space-y-0 sm:space-y-20 sm:mt-20 flex-shrink-0 sm:space-x-0 space-x-6">
              <Programme name={"arts-espanol"} thainame={"ภาษา-ภาษาสเปน"} />
              <Programme name={"arts-korean"} thainame={"ภาษา-ภาษาเกาหลี"} />
            </div>
          </div>
        </AdaptiveBg>
        <AdaptiveBg
          primary={{ background: "url('images/backgrounds/gifted.jpg')", height: "1124px" }}
          secondary={{ background: "url('images/backgrounds/gifted-mobile.jpg')", height: "926px" }}
          mobile={{ background: "url('images/backgrounds/gifted-mobile-default.jpg')", height: "926px" }}
        >
          <div className="flex lg:flex-row flex-col items-center lg:items-start justify-center space-x-2 lg:mt-[340px] mt-20">
            <div className="relative">
              <h1 className="relative z-[10] text-[48px] font-light tracking-[14px] leading-[54px]">
                Explore
                <br />
                our
                <br />
                <span className="font-semibold">Gifted</span>
                <br />
                programs.
              </h1>
              <div className="w-[214px] h-[67px] absolute border-[3.6px] border-[#DD598F] rounded-[50%] rotate-[-8deg] top-[100px] left-[-10px] z-[2]" />
            </div>
            <div className="space-y-16 lg:mt-0 mt-20">
              <div className="flex flex-row md:space-x-16 space-x-4 items-center md: items-start">
                <div
                  onClick={() => {
                    Router.push("/programmes/gifted-science")
                  }}
                  className="relative bg-white w-[140px] h-[140px] sm:w-[195px] sm:h-[195px] rounded-[31.84px] shadow-md cursor-pointer"
                >
                  <div
                    className="absolute top-[-30px] right-[-30px] w-[90px] h-[90px] sm:w-[126px] sm:h-[126px] rounded-full flex justify-center items-center z-[20]"
                    style={{
                      background: "linear-gradient(214.7deg, #6EB6F8 21.34%, #3144A9 92.79%, #4C97DD 93.46%)",
                      boxShadow: "0px 3.35119px 3.35119px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <Flask className="h-[54px] w-[54px] sm:h-[80px] sm:w-[80px]" />
                  </div>
                  <h1 className="absolute bottom-[20px] left-[26px] text-[20px] sm:text-[24.67px] font-semibold text-black">
                    GIFTED-
                    <br />
                    SCIENCE
                  </h1>
                </div>
                <div
                  onClick={() => {
                    Router.push("/programmes/gifted-math")
                  }}
                  className="relative bg-white w-[140px] h-[140px] sm:w-[195px] sm:h-[195px] rounded-[31.84px] shadow-md cursor-pointer"
                >
                  <div
                    className="absolute top-[-30px] right-[-30px] w-[90px] h-[90px] sm:w-[126px] sm:h-[126px] rounded-full flex justify-center items-center"
                    style={{
                      background: "linear-gradient(147.81deg, #379E7F 6.47%, #89C9AA 58.72%, #FFE459 102.08%)",
                      boxShadow: "0px 3.35119px 3.35119px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <Math className="h-[54px] w-[54px] sm:h-[80px] sm:w-[80px]" />
                  </div>
                  <h1 className="absolute bottom-[20px] left-[26px] text-[20px] sm:text-[24.67px] font-semibold text-black">
                    GIFTED-
                    <br />
                    MATH
                  </h1>
                </div>
              </div>
              <div className="flex flex-row md:space-x-16 space-x-4 items-center md: items-start">
                <div
                  onClick={() => {
                    Router.push("/programmes/gifted-english")
                  }}
                  className="relative bg-white w-[140px] h-[140px] sm:w-[195px] sm:h-[195px] rounded-[31.84px] shadow-md cursor-pointer"
                >
                  <div
                    className="absolute top-[-30px] right-[-30px] w-[90px] h-[90px] sm:w-[126px] sm:h-[126px] rounded-full flex justify-center items-center z-[20]"
                    style={{
                      background: "linear-gradient(213.77deg, #BA3269 8.06%, #FC81B3 51.26%, #FFDB7D 88.91%)",
                      boxShadow: "0px 3.35119px 3.35119px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <span className="text-[60px] sm:text-[73px] font-black">A</span>
                  </div>
                  <h1 className="absolute bottom-[20px] left-[26px] text-[20px] sm:text-[24.67px] font-semibold text-black">
                    GIFTED-
                    <br />
                    ENGLISH
                  </h1>
                </div>
                <div
                  onClick={() => {
                    Router.push("/programmes/gifted-thai")
                  }}
                  className="relative bg-white w-[140px] h-[140px] sm:w-[195px] sm:h-[195px] rounded-[31.84px] shadow-md cursor-pointer"
                >
                  <div
                    className="absolute top-[-30px] right-[-30px] w-[90px] h-[90px] sm:w-[126px] sm:h-[126px] rounded-full flex justify-center items-center"
                    style={{
                      background: "linear-gradient(308.56deg, #B2A0F1 14.77%, #46BECE 86.58%, #8129A0 86.59%)",
                      boxShadow: "0px 3.35119px 3.35119px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <span className="text-[70px] sm:text-[88px] font-black">ก</span>
                  </div>
                  <h1 className="absolute bottom-[20px] left-[26px] text-[20px] sm:text-[24.67px] font-semibold text-black">
                    GIFTED-
                    <br />
                    THAI
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </AdaptiveBg>
        <AdaptiveBg
          primary={{ background: "url('images/backgrounds/clubs-index.jpg')", height: "1124px" }}
          secondary={{ background: "url('images/backgrounds/clubs-index-mobile.jpg')", height: "926px" }}
          mobile={{ background: "url('images/backgrounds/clubs-index-mobile-default.jpg')", height: "926px" }}
          classname="flex flex-col justify-center items-center"
        >
          <div className="flex items-center md:flex-row flex-col space-x-4 lg:space-x-12">
            <div className="relative w-max flex-shrink-0">
              <div className="w-[300px] sm:w-[381px]">
                <Image src="/images/clubs/clubs-circle.png" width={381} height={381} />
              </div>
              <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
                <h1 className="text-[70px] sm:text-[84px] font-black">ชมรม</h1>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end space-y-8 mt-[30px] md:mt-[100px]">
              <h1 className="text-[30px] lg:text-[34px] leading-[40px] lg:leading-[48px] text-center md:text-right font-medium">
                เราจะพาทุกคนไปทำความรู้จัก
                <br />
                กับชมรมของโรงเรียนเรา
                <br />
                ที่มีมากกว่า 60 ชมรมกัน !
              </h1>
              <div className="text-[#112D55] bg-white px-12 rounded-full text-lg py-2.5">ดูชมรมทั้งหมด</div>
            </div>
          </div>
        </AdaptiveBg>
        <AdaptiveBg
          primary={{ background: "url('images/backgrounds/clubs.jpg')", height: "2048px" }}
          secondary={{ background: "url('images/backgrounds/clubs-mobile.jpg')", height: "926px" }}
          mobile={{ background: "url('images/backgrounds/clubs-mobile-default.jpg')", height: "926px" }}
        >
          <div className="max-w-[900px] mx-auto px-6">
            <div className="mt-[200px] mb-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-5xl">วิดีโอ</h1>
                <div
                  onClick={() => {
                    Router.push("/videos")
                  }}
                  className="flex space-x-1 mr-10 cursor-pointer"
                >
                  <span className="font-light">ดูทั้งหมด</span>
                  <ArrowCircleRightIcon className="w-6 h-6" />
                </div>
              </div>
              <p className="font-light text-lg leading-[24px]">
                วิดีโอจากรุ่นพี่สายการเรียนและชมรมต่าง ๆ <br /> ที่ทางเราจะนำมานำเสนอให้ทุกคนได้รับชมอย่างเต็มที่ !
              </p>
            </div>
            <div className="relative">
              <Splide
                options={{
                  fixedWidth: 170,
                  gap: 12,
                  perMove: 1,
                  arrows: false,
                  classes: { pagination: "splide__pagination custom-pagination", track: "splide__track z-[2]" },
                }}
                onMounted={() => {
                  if (document && document.getElementsByClassName("splide__track").length >= 1) {
                    // @ts-ignore
                    document.getElementsByClassName("splide__track")[0].style["z-index"] = 2
                  }
                }}
                renderControls={() => {
                  return (
                    <div className="splide__arrows absolute top-0 z-[1] w-full h-full">
                      <div
                        style={{ left: "-50px" }}
                        className="splide__arrow--prev absolute h-full z-[20] flex items-center hover:bg-white hover:bg-opacity-20 rounded-md cursor-pointer"
                      >
                        <ChevronRightIcon className="w-6 h-6" />
                      </div>
                      <div
                        style={{ right: "-40px" }}
                        className="splide__arrow--next absolute h-full z-[20] flex items-center hover:bg-white hover:bg-opacity-20 rounded-md cursor-pointer"
                      >
                        <ChevronRightIcon className="w-6 h-6" />
                      </div>
                    </div>
                  )
                }}
              >
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
              </Splide>
            </div>
            <div className="mt-[200px] mb-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-5xl">บทความ</h1>
                <div
                  onClick={() => {
                    Router.push("/articles")
                  }}
                  className="flex space-x-1 mr-10 cursor-pointer"
                >
                  <span className="font-light">ดูทั้งหมด</span>
                  <ArrowCircleRightIcon className="w-6 h-6" />
                </div>
              </div>
              <p className="font-light text-lg leading-[24px]">
                บทความจากรุ่นพี่สายการเรียนและชมรมต่าง ๆ <br />
                ที่ทางเราจะนำมานำเสนอให้ทุกคนได้อ่านอย่างเต็มที่ !
              </p>
            </div>
            <div className="block lg:hidden relative">
              <Splide
                options={{
                  fixedWidth: 170,
                  gap: 12,
                  perMove: 1,
                  arrows: false,
                  classes: { pagination: "splide__pagination custom-pagination", track: "splide__track z-[2]" },
                }}
                onMounted={() => {
                  if (document && document.getElementsByClassName("splide__track").length >= 1) {
                    // @ts-ignore
                    document.getElementsByClassName("splide__track")[0].style["z-index"] = 2
                  }
                }}
                renderControls={() => {
                  return (
                    <div className="splide__arrows absolute top-0 z-[1] w-full h-full">
                      <div
                        style={{ left: "-50px" }}
                        className="splide__arrow--prev absolute h-full z-[20] flex items-center hover:bg-white hover:bg-opacity-20 rounded-md cursor-pointer"
                      >
                        <ChevronRightIcon className="w-6 h-6" />
                      </div>
                      <div
                        style={{ right: "-40px" }}
                        className="splide__arrow--next absolute h-full z-[20] flex items-center hover:bg-white hover:bg-opacity-20 rounded-md cursor-pointer"
                      >
                        <ChevronRightIcon className="w-6 h-6" />
                      </div>
                    </div>
                  )
                }}
              >
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div>
                    <Video />
                    <Video />
                  </div>
                </SplideSlide>
              </Splide>
            </div>
            <div className="lg:block hidden">
              <div className={classnames("relative space-y-6 max-h-[621px] overflow-y-scroll snap-y scroll")}>
                {articles.map((data: any, index: number) => (
                  <Blog key={`blog-${index}`} data={data} />
                ))}
              </div>
            </div>
          </div>
        </AdaptiveBg>
        <AdaptiveBg
          primary={{ background: "url('images/backgrounds/additional.jpg')", height: "1124px" }}
          secondary={{ background: "url('images/backgrounds/additional-mobile.jpg')", height: "926px" }}
          mobile={{ background: "url('images/backgrounds/additional-mobile-default.jpg')", height: "926px" }}
          classname="flex items-center"
        >
          <div className="mx-auto">
            <h1 className="font-black text-[46px] md:text-[85px] text-center">ข้อมูลเพิ่มเติมน่ารู้</h1>
            <p className="text-[20px] md:text-[26px] font-light text-center mt-2">
              มาดูข้อมูลและสถิติการสอบเข้าของปีก่อน ๆ รวมถึงเอกสารที่ต้องใช้ในการสอบเข้ากันเถอะ
              <br />
              หรือถ้าใครอยากรู้จักโรงเรียนเรามากขึ้นก็คลิกเลย !
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0 mt-16">
              <div className="bg-white rounded-full text-[#11052C] py-3 px-10 shadow-md">การสอบเข้า</div>
              <div
                onClick={() => {
                  Router.push("/directions")
                }}
                className="bg-white rounded-full text-[#11052C] py-3 px-10 shadow-md cursor-pointer"
              >
                เกี่ยวกับโรงเรียนเตรียมฯ
              </div>
            </div>
          </div>
        </AdaptiveBg>
      </div>
    </div>
  )
}
