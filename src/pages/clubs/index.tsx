import Router from "next/router"
import { ArrowCircleLeftIcon } from "@heroicons/react/outline"
import { SearchIcon, UserIcon } from "@heroicons/react/solid"
import Image from "next/image"
import fs from "fs"
import { GetStaticProps } from "next"
import Link from "next/link"
import { AnimateSharedLayout } from "framer-motion"
import { useEffect, useState } from "react"
import { searchKeyword } from "@utils/text"

const Clube = ({ data }: { data: any }) => {
  return (
    <div
      style={{
        background: "linear-gradient(241.39deg, rgba(255, 255, 255, 0.4) 18.81%, rgba(255, 255, 255, 0) 100.07%)",
      }}
      className="w-[170px] rounded-lg mr-3 mt-3 cursor-pointer backdrop-blur-lg backdrop-filter pb-[10px] border border-white border-opacity-20"
    >
      <div>
        <div className="relative">
          {/*<span className="absolute bottom-[12px] right-[6px] text-[10px] z-[2] text-gray-700 bg-white px-2 py-[0.6px] font-medium rounded-sm text-sm">12.10</span>*/}
          <Image
            src={data.thumbnail}
            objectFit={"cover"}
            width={170}
            height={98}
            priority={true}
            className="rounded-t-lg"
          />
        </div>
        <div className="px-2">
          <h1 className="break-all text-[12px] h-[56px] font-light">{data.title}</h1>
          <div className="flex items-center space-x-1">
            <UserIcon className="w-4 h-4" />
            <h1 className="text-[10px] font-light">งานกิจกรรมพัฒนาผู้เรียน</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

const Club = ({ data }: { data: any }) => {
  return (
    <Link href={data.path}>
      <div
        style={{
          background: "linear-gradient(241.39deg, rgba(255, 255, 255, 0.4) 18.81%, rgba(255, 255, 255, 0) 100.07%)",
        }}
        className="w-[170px] cursor-pointer rounded-lg mr-3 mt-3 backdrop-blur-lg backdrop-filter pb-[10px] border border-white border-opacity-20"
      >
        <div>
          <div className="relative">
            {/*<span className="absolute bottom-[12px] right-[6px] text-[10px] z-[2] text-gray-700 bg-white px-2 py-[0.6px] font-medium rounded-sm text-sm">12.10</span>*/}
            <Image
              src={data.thumbnail}
              objectFit={"cover"}
              width={170}
              height={98}
              priority={true}
              className="rounded-t-lg"
            />
          </div>
          <div className="px-2">
            <div className="flex items-start space-x-1">
              <UserIcon className="w-4 h-4 flex-shrink-0" />
              <h1 className="text-[14px] font-light h-[60px]">{data.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = fs.readFileSync("./src/_data/_maps/clubsMap.json", { encoding: "utf8", flag: "r" })
  const obj = JSON.parse(data)
  const items = Object.values(obj) as [
    { englishName: string; imageURL: Array<{ url: string; description: string }>; thaiName: string; id: string }
  ]

  const objContents = items.map((item) => {
    return {
      path: `clubs/${item.englishName}`,
      thumbnail: item.id !== "" ? `/assets/clubs/_thumbnails/${item.id.replace("ก", "")}.jpg` : item.imageURL[0].url,
      title: item.thaiName,
    }
  })

  return {
    props: {
      contents: objContents,
    },
  }
}

const Page = ({ contents }: { contents: any }) => {
  const [sorted, setSorted] = useState(contents)
  const [query, setQuery] = useState(setTimeout(() => {}, 10))

  const [searchContext, setSearchContext] = useState("")

  useEffect(() => {
    clearTimeout(query)

    setQuery(
      setTimeout(() => {
        const escaped = searchContext.replace("ชมรม", "")
        if (escaped !== "") {
          const searchResult = searchKeyword(contents, escaped, (obj) => obj.title)
          setSorted(searchResult)
        } else {
          setSorted(contents)
        }
      }, 900)
    )
  }, [searchContext, contents])

  return (
    <div
      style={{
        background: "url('images/backgrounds/clubs.jpg')  #C188BB",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "2024px",
        backgroundPosition: "center",
      }}
      className="overflow-x-hidden min-h-screen text-white main-section"
    >
      <div className="max-w-6xl mx-auto">
        {/* <div
          onClick={() => {
            Router.back()
          }}
          className="absolute flex items-center space-x-2 -mt-16 ml-6 sm:mt-0 cursor-pointer"
        >
          <ArrowCircleLeftIcon className="w-7 h-7" />
          <span className="text-lg">ย้อนกลับ</span>
        </div> */}
        <div className="mx-auto max-w-5xl mt-16 mb-24">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl">ชมรม</h1>
            <div className="px-10 w-full max-w-[500px]">
              <div className="relative mt-4">
                <div className="absolute top-0 left-0 h-full flex items-center ml-6">
                  <SearchIcon className="w-6 h-6" />
                </div>
                <input
                  onChange={(e) => {
                    setSearchContext(e.target.value)
                  }}
                  className="border bg-white bg-opacity-20 rounded-full placeholder:text-white py-2 pl-14 w-full border-opacity-40 pr-4"
                  placeholder="ค้นหาชมรม..."
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-wrap mt-14 ml-2">
            <AnimateSharedLayout>
              {sorted.map((e: any, i: number) => (
                <Club key={`club-${i}`} data={e} />
              ))}
            </AnimateSharedLayout>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page