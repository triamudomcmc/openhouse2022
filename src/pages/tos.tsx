import React, { FC } from "react"
import fs from "fs"
import { join } from "path"
import markdownToHtml from "@lib/markdownToHTML"
import { NextPage } from "next"

const TOS: NextPage<{ content: string }> = ({ content }) => {
  return (
    <>
      <div className="flex flex-col items-center color-slip-jeen justify-center flex-1 w-full h-full px-8 main-section">
        <h1 className="text-xl mt-4 mb-4 font-bold text-white md:text-4xl">ข้อตกลงและเงื่อนไขในการใช้งาน</h1>

        <div
          className="prose lg:prose-xl leading-6 text-white prose-p:inline font-texts"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const tos = join(process.cwd(), "/src/_data/tos.md")
  const fileContents = fs.readFileSync(tos, "utf8")

  const content = await markdownToHtml(fileContents || "")

  return {
    props: {
      content,
    },
  }
}

export default TOS
