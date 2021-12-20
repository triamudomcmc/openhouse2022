import { Navigation } from "@components/common/Navigation"
import { ArrowCircleLeftIcon } from "@heroicons/react/outline"
import { Footer } from "@components/common/Footer"
import Router from "next/router"
import fs from "fs"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import markdownToHtml from "@lib/markdownToHTML"

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
        profileURL: obj[fname].reviewURL.length >= index + 1 ? obj[fname].reviewURL[index] : "",
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
  return (
    <div className="font-display text-white">
      <div className="color-slip-jeen min-h-screen">
        <Navigation />
        <div className="max-w-6xl px-8 mx-auto">
          <div
            onClick={() => {
              Router.back()
            }}
            className="absolute flex items-center space-x-2 -mt-16 sm:mt-0"
          >
            <ArrowCircleLeftIcon className="w-7 h-7" />
            <span className="text-lg">ย้อนกลับ</span>
          </div>
          <div className="mx-auto max-w-2xl mt-32 mb-24">
            <div className="flex flex-col items-center">
              <h1 className="text-5xl">{contents.thaiName}</h1>
              <p className="text-xl">สายการเรียน | {contents.count} คน</p>
            </div>
            <div className="mt-10 space-y-20">
              <div>
                <div className="bg-gray-400 w-full h-[400px]" />
                <p className="text-center mt-2">ภาพบรรยากาศในชมรม</p>
              </div>
              <div>
                <h1 className="text-4xl">สายนี้เรียนอะไร</h1>
                <p className="mt-4 leading-[30px]">
                  มาบอกสูตรเด็ดของอาหารคลีนกันอีกแล้วจ้าอาหารคลีนไม่มีวันเอาท์แน่นอนสำหรับสาวๆที่รักสุขภาพต้องการห่างไกลจากเมนูที่ทำร้ายร่างกายแต่อะไรที่ไม่ดีต่อสุขภาพมักจะอร่อยอยู่เสมอๆอย่างเมนูผัดกะเพราที่ต้องเจอทุกมื้อกลางวันแต่สาวกอาหารคลีนไม่ต้องห่วงว่าจะอดกินกะเพราวันนี้มาแนะนำเมนูกะเพราไก่ไข่ดาวแบบฉบับอาหารคลีนเตรียมตัวเข้าครัวกันได้เลย
                </p>
              </div>
              <div>
                <div className="bg-gray-400 w-full h-[400px]" />
                <p className="text-center mt-2">ภาพบรรยากาศในชมรม</p>
              </div>
              <div>
                <h1 className="text-4xl">น่าสนใจอย่างไร</h1>
                <p className="mt-4 leading-[30px]">
                  มาบอกสูตรเด็ดของอาหารคลีนกันอีกแล้วจ้าอาหารคลีนไม่มีวันเอาท์แน่นอนสำหรับสาวๆที่รักสุขภาพต้องการห่างไกลจากเมนูที่ทำร้ายร่างกายแต่อะไรที่ไม่ดีต่อสุขภาพมักจะอร่อยอยู่เสมอๆอย่างเมนูผัดกะเพราที่ต้องเจอทุกมื้อกลางวันแต่สาวกอาหารคลีนไม่ต้องห่วงว่าจะอดกินกะเพราวันนี้มาแนะนำเมนูกะเพราไก่ไข่ดาวแบบฉบับอาหารคลีนเตรียมตัวเข้าครัวกันได้เลยมาบอกสูตรเด็ดของอาหารคลีนกันอีกแล้วจ้าอาหารคลีนไม่มีวันเอาท์แน่นอนสำหรับสาวๆที่รักสุขภาพต้องการห่างไกลจากเมนูที่ทำร้ายร่างกายแต่อะไรที่ไม่ดีต่อสุขภาพมักจะอร่อยอยู่เสมอๆอย่างเมนูผัดกะเพราที่ต้องเจอทุกมื้อกลางวันแต่สาวกอาหารคลีนไม่ต้องห่วงว่าจะอดกินกะเพราวันนี้มาแนะนำเมนูกะเพราไก่ไข่ดาวแบบฉบับอาหารคลีนเตรียมตัวเข้าครัวกันได้เลย
                </p>
              </div>
            </div>
          </div>
          <div className="mt-24 max-w-[50rem] mx-auto mb-24">
            <h1 className="text-4xl mb-14">รีวิวจากรุ่นพี่</h1>
            <div className="space-y-12">
              <div className="flex flex-col-reverse sm:flex-row sm:space-x-3">
                <div className="flex-shrink-0 flex sm:flex-col flex-row items-start sm:space-x-0 space-x-2 mt-4 sm:mt-0">
                  <img src="/images/placeholders/shawn.jpg" className="rounded-2xl" />
                  <div>
                    <h1 className="text-white font-semibold text-2xl">ณอน</h1>
                    <p className="text-xs">เตรียมอุดม 83</p>
                    <p className="text-xs">IG: tucmc_official</p>
                  </div>
                </div>
                <div className="bg-white bg-opacity-20 border border-white border-opacity-60 w-full rounded-lg px-6 pt-4">
                  <span className="w-full font-light text-8xl">“</span>
                  <p className="-mt-10 px-8">
                    มาบอกสูตรเด็ดของอาหารคลีนกันอีกแล้วจ้าาอาหารคลีนไม่มีวันเอาท์แน่นอนสำหรับสาวๆที่รักสุขภาพต้องการห่างไกลจากเมนูที่ทำร้ายร่างกายแต่อะไรที่ไม่ดีต่อสุขภาพมักจะอร่อยอยู่เสมอๆอย่างเมนูผัดกะเพราที่ต้องเจอทุกมื้อกลางวันมาบอกสูตรเด็ดของอาหารคลีนกันอีกแล้วจ้าาอาหารคลีนไม่มีวันเอาท์แน่นอนสำหรับสาวๆที่รักสุขภาพต้องการห่างไกลจากเมนูที่ทำร้ายร่างกายแต่อะไรที่ไม่ดีต่อสุขภาพมักจะอร่อยอยู่เสมอๆอย่างเมนูผัดกะเพราที่ต้องเจอทุกมื้อกลางวันแน่นอนสำหรับสาวๆที่รักสุขภาพต้องการห่างไกลจากเมนูที่ทำร้ายร่างกาย
                  </p>
                  <p className="w-full font-light text-8xl text-right -mb-10">”</p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:flex-row sm:space-x-3">
                <div className="flex-shrink-0 flex sm:flex-col flex-row items-start sm:space-x-0 space-x-2 mt-4 sm:mt-0">
                  <img src="/images/placeholders/shawn.jpg" className="rounded-2xl" />
                  <div>
                    <h1 className="text-white font-semibold text-2xl">ณอน</h1>
                    <p className="text-xs">เตรียมอุดม 83</p>
                    <p className="text-xs">IG: tucmc_official</p>
                  </div>
                </div>
                <div className="bg-white bg-opacity-20 border border-white border-opacity-60 w-full rounded-lg px-6 pt-4">
                  <span className="w-full font-light text-8xl">“</span>
                  <p className="-mt-10 px-8">
                    มาบอกสูตรเด็ดของอาหารคลีนกันอีกแล้วจ้าาอาหารคลีนไม่มีวันเอาท์แน่นอนสำหรับสาวๆที่รักสุขภาพต้องการห่างไกลจากเมนูที่ทำร้ายร่างกายแต่อะไรที่ไม่ดีต่อสุขภาพมักจะอร่อยอยู่เสมอๆอย่างเมนูผัดกะเพราที่ต้องเจอทุกมื้อกลางวันมาบอกสูตรเด็ดของอาหารคลีนกันอีกแล้วจ้าาอาหารคลีนไม่มีวันเอาท์แน่นอนสำหรับสาวๆที่รักสุขภาพต้องการห่างไกลจากเมนูที่ทำร้ายร่างกายแต่อะไรที่ไม่ดีต่อสุขภาพมักจะอร่อยอยู่เสมอๆอย่างเมนูผัดกะเพราที่ต้องเจอทุกมื้อกลางวันแน่นอนสำหรับสาวๆที่รักสุขภาพต้องการห่างไกลจากเมนูที่ทำร้ายร่างกาย
                  </p>
                  <p className="w-full font-light text-8xl text-right -mb-10">”</p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:flex-row sm:space-x-3">
                <div className="flex-shrink-0 flex sm:flex-col flex-row items-start sm:space-x-0 space-x-2 mt-4 sm:mt-0">
                  <img src="/images/placeholders/shawn.jpg" className="rounded-2xl" />
                  <div>
                    <h1 className="text-white font-semibold text-2xl">ณอน</h1>
                    <p className="text-xs">เตรียมอุดม 83</p>
                    <p className="text-xs">IG: tucmc_official</p>
                  </div>
                </div>
                <div className="bg-white bg-opacity-20 border border-white border-opacity-60 w-full rounded-lg px-6 pt-4">
                  <span className="w-full font-light text-8xl">“</span>
                  <p className="-mt-10 px-8">
                    มาบอกสูตรเด็ดของอาหารคลีนกันอีกแล้วจ้าาอาหารคลีนไม่มีวันเอาท์แน่นอนสำหรับสาวๆที่รักสุขภาพต้องการห่างไกลจากเมนูที่ทำร้ายร่างกายแต่อะไรที่ไม่ดีต่อสุขภาพมักจะอร่อยอยู่เสมอๆอย่างเมนูผัดกะเพราที่ต้องเจอทุกมื้อกลางวันมาบอกสูตรเด็ดของอาหารคลีนกันอีกแล้วจ้าาอาหารคลีนไม่มีวันเอาท์แน่นอนสำหรับสาวๆที่รักสุขภาพต้องการห่างไกลจากเมนูที่ทำร้ายร่างกายแต่อะไรที่ไม่ดีต่อสุขภาพมักจะอร่อยอยู่เสมอๆอย่างเมนูผัดกะเพราที่ต้องเจอทุกมื้อกลางวันแน่นอนสำหรับสาวๆที่รักสุขภาพต้องการห่างไกลจากเมนูที่ทำร้ายร่างกาย
                  </p>
                  <p className="w-full font-light text-8xl text-right -mb-10">”</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Page
