import { Nav } from "@components/common/Nav"
import { ArrowCircleLeftIcon } from "@heroicons/react/outline"
import { Footer } from "@components/common/Footer"
import Image from "next/image"
import Router from "next/router"
import fs from "fs"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import markdownToHtml from "@lib/markdownToHTML"
import classnames from "classnames"

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const file = fs.readFileSync(`./src/_data/_maps/programmesMap.json`, { encoding: "utf8", flag: "r" })
  const obj = JSON.parse(file)

  const fname: string = params ? (params.name as string) : ""
  const keys = Object.keys(obj)

  const reviewItems = await Promise.all(
    obj[fname].reviews.map(async (item: any, index: number) => {
      return {
        content: await markdownToHtml(item.description),
        profileData: item.profileContent,
        profileURL:
          obj[fname].reviewURL.length >= index + 1
            ? obj[fname].reviewURL[index]
            : "data:image/png;base64,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",
      }
    })
  )

  let random = []
  while (random.length < 6) {
    let r = Math.floor(Math.random() * 12)
    if (random.indexOf(r) === -1 && r !== keys.indexOf(fname)) random.push(r)
  }

  const suggestion = random.map((index) => {
    return {
      path: `/programmes/${obj[keys[index]].englishName}`,
      thumbnail: obj[keys[index]].imageURL.length >= 1 ? obj[keys[index]].imageURL[0].url : "/assets/nok.png",
      title: obj[keys[index]].thaiName,
    }
  })

  const content = {
    isGifted: fname.includes("gifted"),
    thaiName: obj[fname].thaiName,
    englishName: obj[fname].englishName,
    count: obj[fname].count,
    admission: await markdownToHtml(obj[fname].admission),
    exsubject: await markdownToHtml(obj[fname].exsubject),
    interest: await markdownToHtml(obj[fname].interest),
    pictures: obj[fname].imageURL,
    reviews: reviewItems,
  }

  return {
    props: {
      contents: content,
      suggestion: suggestion,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const file = fs.readFileSync(`./src/_data/_maps/programmesMap.json`, { encoding: "utf8", flag: "r" })
  const obj = JSON.parse(file)

  return {
    paths: Object.keys(obj).map((post) => {
      return {
        params: {
          name: post,
        },
      }
    }),
    fallback: false,
  }
}

const Page: NextPage<{ contents: any; suggestion: any }> = ({ contents, suggestion }) => {
  const loadPicture = (index: number) => {
    return contents.pictures.length >= index + 1 ? (
      <div>
        <Image src={contents.pictures[index].url} width={672} height={378} objectFit={"cover"} />
        <p className="text-center font-texts mt-2">{contents.pictures[index].description}</p>
      </div>
    ) : (
      <></>
    )
  }

  return (
    <section
      className={classnames("min-h-screen main-section", contents.isGifted ? "color-gifted" : "color-slip-jeen")}
    >
      <div className="max-w-6xl px-8 mx-auto">
        <div
          onClick={() => {
            Router.back()
          }}
          className="absolute flex items-center space-x-2 -mt-16 md:mt-0 cursor-pointer"
        >
          <ArrowCircleLeftIcon className="w-7 h-7" />
          <span className="text-lg">ย้อนกลับ</span>
        </div>
        <div className="mx-auto max-w-2xl mt-12 mb-24">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl text-center">{contents.thaiName}</h1>
            <p className="text-xl">สายการเรียน | {contents.count} คน</p>
          </div>
          <div className="mt-10 space-y-20">
            {loadPicture(0)}
            <div>
              <h2 className="text-4xl">การรับสมัครและการสอบเข้า</h2>
              <article
                className="prose text-white text-justify font-texts mt-4 leading-[30px] article prose-inverted"
                dangerouslySetInnerHTML={{ __html: contents.admission }}
              ></article>
            </div>
            {loadPicture(1)}
            <div>
              <h2 className="text-4xl">วิชาหรือหลักสูตรเพิ่มเติมที่เรียน</h2>
              <article
                className="prose text-white text-justify font-texts mt-4 prose-p:inline leading-[30px] article prose-inverted"
                dangerouslySetInnerHTML={{ __html: contents.exsubject }}
              ></article>
            </div>
            {loadPicture(2)}
            <div>
              <h2 className="text-4xl">ความน่าสนใจของสายการเรียน</h2>
              <article
                className="prose text-white text-justify mt-4 font-texts prose-p:inline leading-[30px] article prose-inverted"
                dangerouslySetInnerHTML={{ __html: contents.interest }}
              ></article>
            </div>
          </div>
        </div>
        <div className="mt-24 max-w-[50rem] mx-auto mb-24">
          <h2 className="text-4xl mb-14">รีวิวจากรุ่นพี่</h2>
          <div className="space-y-12">
            {contents.reviews.map((reviewItem: any, i: number) => (
              <div key={`rev-${i}`} className="flex flex-col-reverse sm:flex-row sm:space-x-3">
                <div className="flex-shrink-0 flex sm:flex-col flex-row items-start sm:space-x-0 space-x-2 mt-4 sm:mt-0">
                  <Image
                    width={85}
                    height={85}
                    src={reviewItem.profileURL}
                    className="rounded-2xl"
                    objectFit={"cover"}
                  />
                  <div>
                    <h1 className="text-white font-semibold text-2xl">{reviewItem.profileData.name}</h1>
                    <p className="text-xs">เตรียมอุดม {reviewItem.profileData.year}</p>
                    <p className="text-xs">IG: {reviewItem.profileData.contact}</p>
                  </div>
                </div>
                <div className="bg-white bg-opacity-20 border border-white border-opacity-60 w-full rounded-lg px-6 pt-4">
                  <span className="w-full font-light text-8xl">“</span>
                  <article
                    className="prose text-white text-justify font-texts -mt-10 px-2 sm:px-8 article prose-inverted"
                    dangerouslySetInnerHTML={{ __html: reviewItem.content }}
                  ></article>
                  <p className="w-full font-light text-8xl text-right -mb-10">”</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
