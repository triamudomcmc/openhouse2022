import Router from "next/router"
import { ArrowCircleLeftIcon } from "@heroicons/react/outline"
import { SearchIcon, UserIcon } from "@heroicons/react/solid"
import Image from "next/image"
import { GetStaticProps } from "next"
import Link from "next/link"
import { getAllPosts } from "@lib/api"
import { useEffect, useState } from "react"
import { searchKeyword } from "@utils/text"
import { AdaptiveBg } from "@components/common/AdaptiveBg"
import classnames from "classnames"
import markdownToHtml from "@lib/markdownToHTML"

const Blog = ({ data }: { data: any }) => {
  return (
    <Link href={`articles/${data.slug}`}>
      <div
        style={{
          background: "linear-gradient(265.95deg, rgba(255, 255, 255, 0.3) 33.14%, rgba(255, 255, 255, 0) 100%)",
        }}
        className="border h-[375px] sm:h-[198px] border-white rounded-lg border-opacity-40 items-center flex flex-col sm:flex-row justify-between backdrop-filter backdrop-blur-lg snap-center cursor-pointer"
      >
        <div className="flex flex-col justify-between px-6 py-4">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold leading-[20px] h-[40px] overflow-hidden">{data.title}</h2>
            <span
              dangerouslySetInnerHTML={{ __html: `${data.content}...` }}
              className="font-light overflow-hidden h-[56px] pt-2"
            ></span>
          </div>
          <span className="text-sm font-light">{data.author}</span>
        </div>
        <div className="flex-shrink-0">
          <Image
            width={317}
            height={197}
            objectFit={"cover"}
            src={data.thumbnail}
            className="flex-shrink-0 rounded-lg sm:rounded-r-lg"
          />
          {/* <div className="w-[317px] h-[197px] bg-gray-400 bg-opacity-25 border border-white rounded-r-lg flex-shrink-0"></div> */}
        </div>
      </div>
    </Link>
  )
}

const Club = ({ data }: { data: any }) => {
  return (
    <Link href={`articles/${data.slug}`}>
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
            <h1 className="break-all text-[12px] h-[56px] font-light text-ellipsis">{data.title}</h1>
            <div className="flex items-center space-x-1">
              <UserIcon className="w-4 h-4 flex-shrink-0" />
              <h1 className="text-[10px] font-light truncate">{data.author}</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
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
      contents: mapped,
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
    <main className="color-violet-blue py-2" id="articles">
      {/* <AdaptiveBg
        primary={{ background: "/images/backgrounds/clubs.jpg", height: "2048px", expandTo: "100%" }}
        secondary={{ background: "/images/backgrounds/clubs-mobile.jpg", height: "926px" }}
        mobile={{ background: "/images/backgrounds/clubs-mobile-default.jpg", height: "926px" }}
        id="articles"
      > */}
      <div className="max-w-6xl mx-auto mt-40">
        <div
          onClick={() => {
            Router.back()
          }}
          className="absolute flex items-center space-x-2 -mt-16 ml-6 sm:mt-0 cursor-pointer hover:underline"
        >
          <ArrowCircleLeftIcon className="w-7 h-7" />
          <span className="text-lg">ย้อนกลับ</span>
        </div>
        <div className="mx-auto max-w-5xl mt-16 mb-24">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl">บทความ</h1>
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
                  placeholder="ค้นหาบทความ..."
                />
              </div>
            </div>
          </div>
          <div className="mt-12 max-w-4xl mx-auto px-6">
            <div className={classnames("relative space-y-6 snap-y")}>
              {contents.map((data: any, index: number) => (
                <Blog key={`blog-${index}`} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*</AdaptiveBg>*/}
    </main>
  )
}

export default Page
