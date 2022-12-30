import Link from "next/link"

import KorChor from "@vectors/icons/korchor"
import DuckInTheMusuem from "@vectors/common/duckInTheMusuem"
import RegisteredSuccessfully from "@vectors/text/registeredSuccessfully"

import { useAuth } from "@lib/auth"
import notFound from "@pages/404"

export default function Done() {
  const { user } = useAuth()

  if (user?.uid)
    return (
      <div className="relative flex justify-center item-center">
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-cream">
          <DuckInTheMusuem classname="max-lg:hidden" width="472" height="266" />
          <DuckInTheMusuem classname="lg:hidden" width="250" />
          <div className=" bg-[#4461AD] w-[240px] lg:w-[440px] mt-[4px] lg:mt-[12px]">
            <RegisteredSuccessfully classname="mx-auto max-lg:hidden" width="394" height="48" />
            <RegisteredSuccessfully classname="mx-auto lg:hidden" width="226" height="25" />
          </div>
        </div>
        <KorChor classname="max-lg:hidden absolute bottom-[100px]" width="190" height="28" />
        <KorChor classname="lg:hidden absolute bottom-[100px]" width="100" />
      </div>
    )

  return notFound()
}
