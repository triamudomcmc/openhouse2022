import {NextPage} from "next";
import Image from "next/image";
import classnames from "classnames";
import Router from "next/router";
import {ArrowCircleLeftIcon} from "@heroicons/react/outline";
import {getAllPosts, getPostBySlug} from "@lib/api";
import markdownToHtml from "@lib/markdownToHTML";
import {UserIcon} from "@heroicons/react/solid";
import Link from "next/link";

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'], '_articles')

  const urls = posts.map(posts => {
    return {
      params: {
        slug: posts.slug
      }
    }
  })

  urls.push({
    params: {
      slug: 'statistic'
    }
  })

  urls.push({
    params: {
      slug: 'admission'
    }
  })

  return {
    paths: urls,
    fallback: false
  }
}

export async function getStaticProps({ params }: {params: any}) {
  if (params.slug === 'statistic') {
    return {
      props: {
        post: 'loadstat'
      }
    }
  } else if (params.slug === 'admission') {
    return {
      props: {
        post: 'loadadmission'
      }
    }
  } else {
    const post = getPostBySlug(
      params.slug,
      ['title', 'author', 'content', 'coverImage'],
      '_articles'
    )

    const content = await markdownToHtml(post.content || '')
    return {
      props: {
        post: {
          ...post,
          content
        }
      }
    }
  }
}

const Video = ({data}: { data: any }) => {

  return (
    <Link href={`articles/${data.slug}`}>
      <div style={{background: "linear-gradient(241.39deg, rgba(255, 255, 255, 0.4) 18.81%, rgba(255, 255, 255, 0) 100.07%)"}}
           className="w-[170px] rounded-lg mr-3 mt-2 cursor-pointer backdrop-blur-lg backdrop-filter pb-[10px] border border-white border-opacity-20">
        <div>
          <div className="relative">
            <span className="absolute bottom-[12px] right-[6px] text-[10px] z-[2] text-gray-700 bg-white px-2 py-[0.6px] font-medium rounded-sm text-sm shadow-md">12.10</span>
            <Image src={"/images/placeholders/clubs.jpg"} objectFit={"cover"} width={170} height={98} priority={true} className="rounded-t-lg"/>
          </div>
          <div className="px-2">
            <h1 className="break-all text-[12px] h-[56px] font-light text-ellipsis">{data.title}</h1>
            <div className="flex items-center space-x-1">
              <UserIcon className="w-4 h-4 flex-shrink-0"/>
              <h1 className="text-[10px] font-light truncate">{data.author}</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

const Page: NextPage<{ post: any }> = ({ post }) => {

  return (
    <section className={classnames("min-h-screen main-section color-slip-jeen-top")}>
      <div className="flex max-w-[1250px] justify-between mx-auto space-x-6 mt-12">
        <div className="flex justify-center max-w-[841px] px-8">
          <div className="mb-2">
            <div className="bg-black w-[90vw] h-[48vw] sm:w-[82vw] sm:h-[46vw] lg:w-[841px] lg:h-[473px]">
            </div>
            <div className="">
              <div className="border-b mt-5 pb-5 mb-6">
                <h1>ชื่อวิดีโอชื่อวิดีโอชื่อวิดีโอชื่อวิดีโอชื่อวิดีโอชื่อวิดีโอชื่อวิดีโอชื่อวิดีโอชื่อวิดีโอชื่อวิดีโอชื่อวิดีโอชื่อวิดีโอ</h1>
                <div className="flex space-x-2 mt-2">
                  <UserIcon className="w-5 h-5"/>
                  <span className="font-light">งานกิจกรรมพัฒนาผู้เรียน</span>
                </div>
              </div>
              <div>
                <p>มาบอกสูตรเด็ดของอาหารคลีนกันอีกแล้วจ้าอาหารคลีนไม่มีวันเอาท์แน่นอนสำหรับสาวๆที่รักสุขภาพต้องการห่างไกลจากเมนูที่ทำร้ายร่างกายแต่อะไรที่ไม่ดีต่อสุขภาพมักจะอร่อยอยู่เสมอๆอย่างเมนูผัดกะเพราที่ต้องเจอทุกมื้อกลางวันแต่สาวกอาหารคลีนไม่ต้องห่วงว่าจะอดกินกะเพราวันนี้มาแนะนำเมนูกะเพราไก่ไข่ดาวแบบฉบับอาหารคลีนเตรียมตัวเข้าครัวกันได้เลยมาบอกสูตรเด็ดของอาหารคลีนกันอีกแล้วจ้าอาหารคลีนไม่มีวันเอาท์แน่นอนสำหรับสาวๆที่รักสุขภาพต้องการห่างไกลจากเมนูที่ทำร้ายร่างกายแต่อะไรที่ไม่ดีต่อสุขภาพมักจะอร่อยอยู่เสมอๆอย่างเมนูผัดกะเพราที่ต้องเจอทุกมื้อกลางวันแต่สาวกอาหารคลีนไม่ต้องห่วงว่าจะอดกินกะเพราวันนี้มาแนะนำเมนูกะเพราไก่ไข่ดาวแบบฉบับอาหารคลีนเตรียมตัวเข้าครัวกันได้เลยที่รักสุขภาพต้องการห่างไกลจากเมนูที่ทำร้ายร่างกายแต่อะไรที่ไม่ดีต่อสุขภาพมักจะอร่อยอยู่เสมอๆอย่างเมนูผัดกะเพราที่ต้องเจอทุกมื้อกลางวันแต่สาวกอาหารคลีนไม่ต้องห่วงว่าจะอดกินกะเพราวันนี้มาแนะนำเมนูกะเพราไก่ไข่ดาวแบบฉบับอาหารคลีนเตรียมตัวเข้าครัวกันได้เลยวกอาหารคลีนไม่ต้องห่วงว่าจะอดกินกะเพราวันนี้มาแนะนำเมนูกะเพราไก่ไข่ดาวแบบฉบับอาหารคลีนเตรียมตัวเข้าครัวกันได้เลยดาวแบบฉบับอาหารคลีนเตรียมตัวเข้าครัวกันได้เลย</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-lg">วิดีโออื่น ๆ</h1>
          <div className="flex">
            <div>
              <Video data={{}}/>
              <Video data={{}}/>
              <Video data={{}}/>
              <Video data={{}}/>
            </div>
            <div>
              <Video data={{}}/>
              <Video data={{}}/>
              <Video data={{}}/>
              <Video data={{}}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
