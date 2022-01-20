import { NextPage } from "next"
import Image from "next/image"
import classnames from "classnames"
import { getPostBySlug } from "@lib/api"
import markdownToHtml from "@lib/markdownToHTML"
import { UserIcon } from "@heroicons/react/solid"
import Link from "next/link"
import fs from "fs"
import { useState } from "react"
import { shuffle } from "@utils/arrays"
import Router from "next/router"
import { ArrowCircleLeftIcon } from "@heroicons/react/outline"

export async function getStaticPaths() {
  const data = fs.readFileSync("./src/_data/_maps/recordMap.json").toString()
  const posts = JSON.parse(data)

  const urls = posts.map((posts: any) => {
    return {
      params: {
        slug: posts.path.replace("/videos/", ""),
      },
    }
  })

  return {
    paths: urls,
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: any }) {
  const data = fs.readFileSync("./src/_data/_maps/recordMap.json").toString()
  const posts = JSON.parse(data)

  const suggestions = posts.map((i: any) => {
    return {
      path: i.path,
      title: i.title,
      thumbnail: i.thumbnail,
      duration: i.duration,
      author: i.author,
    }
  })

  const post = posts.find((p: any) => p.path.replace("/videos/", "") === params.slug)

  return {
    props: {
      post: {
        ...post,
        description: await markdownToHtml(post.description),
      },
      list: suggestions,
    },
  }
}

const Video = ({ data }: { data: any }) => {
  return (
    <Link passHref href={`${data.path}`}>
      <div
        style={{
          background: "linear-gradient(241.39deg, rgba(255, 255, 255, 0.4) 18.81%, rgba(255, 255, 255, 0) 100.07%)",
        }}
        className="w-[160px] sm:w-[170px] rounded-lg mr-3 mt-2 cursor-pointer backdrop-blur-lg backdrop-filter pb-[10px] border border-white border-opacity-20"
      >
        <div>
          <div className="relative">
            <span className="absolute bottom-[12px] right-[6px] text-[10px] z-[2] text-gray-700 bg-white px-2 py-[0.6px] font-medium rounded-sm text-sm shadow-md">
              {data.duration}
            </span>
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
            <h3 className="break-all text-[12px] h-[56px] font-light text-ellipsis">{data.title}</h3>
            <div className="flex items-center space-x-1">
              <UserIcon className="w-4 h-4 flex-shrink-0" />
              <p className="text-[10px] font-light truncate">{data.author}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

const Page: NextPage<{ post: any; list: any }> = ({ post, list }) => {
  const [suggest, setSuggestion] = useState(shuffle(list).slice(0, 8))

  return (
    <section className={classnames("min-h-screen main-section color-slip-jeen-top")}>
      <div
        onClick={() => {
          Router.back()
        }}
        className="absolute flex items-center space-x-2 left-4 sm:left-12 xl:left-2 mt-0 cursor-pointer"
      >
        <ArrowCircleLeftIcon className="w-7 h-7" />
        <span className="text-lg">ย้อนกลับ</span>
      </div>
      <div className="flex xl:flex-row flex-col items-center xl:items-start justify-between xl:justify-center mx-auto space-x-6 mt-12 mb-12">
        <div className="flex justify-center px-8">
          <div className="mb-2">
            <iframe
              width="560"
              height="315"
              src={post.video}
              title="YouTube video player"
              className="w-[90vw] h-[48vw] sm:w-[92vw] sm:h-[49vw] lg:w-[841px] lg:h-[473px]"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="w-[90vw] h-[48vw] sm:w-[92vw] sm:h-[49vw] lg:w-[841px] lg:h-[473px]">
              <div className="border-b mt-5 pb-5 mb-6">
                <h1>{post.title}</h1>
                <div className="flex space-x-2 mt-2">
                  <UserIcon className="w-5 h-5" />
                  <span className="font-light">{post.author}</span>
                </div>
              </div>
              <div>
                <article
                  className="prose-p:leading-relaxed prose-hr:my-4 prose-hr:w-[50px]"
                  dangerouslySetInnerHTML={{ __html: post.description }}
                ></article>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 xl:mt-0">
          <h2 className="text-lg">วิดีโออื่น ๆ</h2>
          <div className="flex xl:flex-row flex-col md:flex">
            <div className="flex xl:flex-col flex-wrap justify-center">
              {suggest.slice(0, 4).map((i, index: number) => (
                <Video data={i} key={`suggestion-1-${index}`} />
              ))}
            </div>
            <div className="flex xl:flex-col flex-wrap justify-center">
              {suggest.slice(4, 8).map((i, index: number) => (
                <Video data={i} key={`suggestion-1-${index}`} />
              ))}
            </div>
          </div>
          <div className="flex xl:flex-row flex-col md:hidden">
            <div className="flex xl:flex-col flex-wrap justify-center">
              {suggest.map((i, index: number) => (
                <Video data={i} key={`suggestion-1-${index}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
