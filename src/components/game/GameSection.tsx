import { FC } from "react"

export const GameSection: FC<{ type: string | string[]; currType: string }> = ({ children, type, currType }) => {
  return (
    <>
      {((typeof type === "string" && type === currType) || (typeof type === "object" && type.includes(currType))) &&
        children}
    </>
  )
}
