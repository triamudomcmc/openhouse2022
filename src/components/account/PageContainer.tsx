import { FC, ReactNode } from "react"
import { ArrowCircleLeftIcon } from "@heroicons/react/outline"
import Image from "next/image"
import { UserIcon } from "@heroicons/react/solid"
import Router from "next/router"

export const PageContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center w-full bg-cream py-28">
      <div className="max-w-4xl mx-auto px-10 w-full">
        <div
          onClick={() => {
            Router.back()
          }}
          className="text-bright-orange flex space-x-1 items-center cursor-pointer"
        >
          <ArrowCircleLeftIcon className="w-5 h-5" />
          <h1 className="text-sm mt-1 font-normal">ย้อนกลับ</h1>
        </div>
        {children}
      </div>
    </div>
  )
}
