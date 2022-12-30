import type { FC } from "react"
import { ArticleLeft } from "./article/left"
import { ArticleRight } from "./article/right"

export const ArticleBackground: FC<{ classname?: string }> = ({ classname }) => {
  return (
    <div className={`${classname}`}>
      <ArticleLeft />
      <ArticleRight />
    </div>
  )
}
