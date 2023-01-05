import Router, { useRouter } from "next/router"
import { ArrowCircleLeftIcon } from "@heroicons/react/outline"
import { SearchIcon, UserIcon } from "@heroicons/react/solid"
import Image from "next/image"
import fs from "fs"
import { GetStaticProps } from "next"
import Link from "next/link"
import { AnimateSharedLayout } from "framer-motion"
import { useEffect, useState } from "react"
import { searchKeyword } from "@utilities/text"
import { useWindowDimensions } from "@utilities/useWindowDimensions"
import { SM } from "@utilities/breakpoints"

const Club = ({ data }: { data: any }) => {
  const { width } = useWindowDimensions()

  return (
    <Link passHref href={data.path}>
      <div
        // style={{
        //   background:
        //     "linear-gradient(241.39deg, rgba(255, 255, 255, 0.4) 18.81%, rgba(255, 255, 255, 0) 100.07%)",
        // }}
        className="bg-[#FFF6E8] text-[#2F24AE] text-center w-[300px] sm:w-[212px] cursor-pointer rounded-lg sm:mr-6 mt-6 backdrop-blur-lg backdrop-filter pb-[10px] border border-white border-opacity-20"
      >
        <div>
          <div className="relative">
            {/*<span className="absolute bottom-[12px] right-[6px] text-[10px] z-[2] text-gray-700 bg-white px-2 py-[0.6px] font-medium rounded-sm text-sm">12.10</span>*/}
            <Image
              alt={data.title}
              src={data.thumbnail}
              objectFit={"cover"}
              width={width > SM ? 212 : 350}
              height={width > SM ? 112 : 250}
              priority={true}
              className="w-full rounded-t-lg"
            />
          </div>
          <div className="px-2">
            <div className="flex items-start justify-center py-2 space-x-1">
              <h1 className="text-[15px] text-center font-light h-[45px]">{data.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = fs.readFileSync("./src/_data/_maps/clubsMap.json", {
    encoding: "utf8",
    flag: "r",
  })
  const obj = JSON.parse(data)
  const items = Object.values(obj) as [
    {
      englishName: string
      imageURL: Array<{ url: string; description: string }>
      thaiName: string
      id: string
    }
  ]

  const objContents = items.map((item) => {
    return {
      path: `clubs/${item.id}`,
      thumbnail: item.id !== "" ? item.imageURL[3]?.url ?? `/assets/images/all/${item.id}-thumbnail-default.jpg` : item.imageURL[3]?.url,
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
  const router = useRouter()
  const [searching, setSearching] = useState(false)

  const [searchContext, setSearchContext] = useState("")

  useEffect(() => {
    clearTimeout(query)
    setSearching(true)

    setQuery(
      setTimeout(() => {
        const escaped = searchContext.replace("ชมรม", "")
        if (escaped !== "") {
          const searchResult = searchKeyword(contents, escaped, (obj) => obj.title)
          setSorted(searchResult)
        } else {
          setSorted(contents)
        }
        setSearching(false)
      }, 400)
    )
  }, [searchContext, contents])

  return (
    <main className="text-white px-8 pt-[6.5rem] pb-[2rem] min-h-screen bg-normal-gradient">
      <div className="max-w-6xl mx-auto">
        <div
          onClick={() => {
            router.push("/")
          }}
          className="absolute flex items-center ml-3 -mt-16 space-x-2 cursor-pointer sm:mt-0"
        >
          <ArrowCircleLeftIcon className="w-7 h-7" />
          <span className="text-lg">ย้อนกลับ</span>
        </div>
        <div className="max-w-5xl mx-auto mt-16 mb-24">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl">ชมรม</h1>
            <div className="px-5 sm:px-10 w-full max-w-[500px]">
              <div className="relative mt-4">
                <div className="absolute top-0 left-0 flex items-center h-full ml-6">
                  <SearchIcon className="w-6 h-6" />
                </div>
                <input
                  onChange={(e) => {
                    setTimeout(() => setSearchContext(e.target.value))
                  }}
                  className="w-full py-2 pr-4 bg-white border rounded-full bg-opacity-20 placeholder:text-white pl-14 border-opacity-40"
                  placeholder="ค้นหาชมรม..."
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center ml-2 mt-14">
            {searching ? (
              <div className="h-[350px] flex justify-center items-center">
                <p>Loading...</p>
              </div>
            ) : (
              <AnimateSharedLayout>
                {sorted.map((e: any, i: number) => (
                  <Club key={`club-${i}`} data={e} />
                ))}
              </AnimateSharedLayout>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
