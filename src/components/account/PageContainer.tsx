import { FC, ReactNode } from "react"
import { ArrowCircleLeftIcon } from "@heroicons/react/outline"
import Image from "next/image"
import { UserIcon } from "@heroicons/react/solid"
import Router from "next/router"

export const PageContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-center w-full min-h-screen bg-cream py-28">
      <div className="w-full max-w-4xl px-10 mx-auto">
        <div
          onClick={() => {
            Router.back()
          }}
          className="flex items-center space-x-1 cursor-pointer text-bright-orange"
        >
          <ArrowCircleLeftIcon className="w-5 h-5" />
          <h1 className="mt-1 text-sm font-normal">ย้อนกลับ</h1>
        </div>
        {children}
      </div>
    </div>
  )
}
