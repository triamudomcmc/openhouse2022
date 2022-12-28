import React, { FC } from "react";
import fs from "fs";
import { join } from "path";
import markdownToHtml from "@lib/markdownToHTML";
import { NextPage } from "next";

const TOS: NextPage<{ content: string }> = ({ content }) => {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(143.61deg, rgba(255, 142, 74, 0.86) 3.94%, #9196C5 84.45%)",
        }}
        className="flex flex-col items-center justify-center flex-1 w-full h-full px-8 pt-[6.5rem] pb-[2rem]"
      >
        <h1 className="text-xl mt-4 mb-4 font-bold text-white md:text-4xl">
          ข้อตกลงและเงื่อนไขในการใช้งาน
        </h1>

        <article
          className="prose lg:prose-xl leading-6 text-white prose-p:inline font-texts"
          id="tos"
          dangerouslySetInnerHTML={{ __html: content }}
        ></article>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const tos = join(process.cwd(), "/src/_data/tos.md");
  const fileContents = fs.readFileSync(tos, "utf8");

  const content = await markdownToHtml(fileContents || "");

  return {
    props: {
      content,
    },
  };
}

export default TOS;
