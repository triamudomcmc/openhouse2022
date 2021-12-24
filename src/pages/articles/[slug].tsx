import {NextPage} from "next";
import Image from "next/image";
import classnames from "classnames";
import Router from "next/router";
import {ArrowCircleLeftIcon} from "@heroicons/react/outline";
import {getAllPosts, getPostBySlug} from "@lib/api";
import markdownToHtml from "@lib/markdownToHTML";

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


const Page: NextPage<{ post: any }> = ({ post }) => {


  return (
    <section className={classnames("min-h-screen main-section color-slip-jeen")}>
      <div className="max-w-6xl px-8 mx-auto">
        <div
          onClick={() => {
            Router.back()
          }}
          className="absolute flex items-center space-x-2 -mt-16 sm:mt-0 cursor-pointer"
        >
          <ArrowCircleLeftIcon className="w-7 h-7" />
          <span className="text-lg">ย้อนกลับ</span>
        </div>
        <div className="mx-auto max-w-2xl mt-32 mb-24">
          <div className="flex flex-col items-start">
            <h1 className="text-5xl text-left">{post.title}</h1>
            <p className="text-xl">{post.author}</p>
          </div>
          <article className="prose text-white mt-4 leading-[30px] prose-invert article" dangerouslySetInnerHTML={{ __html: post.content }}>

          </article>
        </div>
      </div>
    </section>
  )
}

export default Page
