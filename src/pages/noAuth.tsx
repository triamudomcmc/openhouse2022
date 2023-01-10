import Link from "next/link"
import ThisPageCouldNotBeFound from "@vectors/text/couldNotFound"
import DuckInTheMusuem from "@vectors/common/duckInTheMusuem"
import RegisterFirst from "@vectors/text/registerFirst"

export default function notFound() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-cream">
        <DuckInTheMusuem classname="max-lg:hidden" width="472" height="266" />
        <DuckInTheMusuem classname="lg:hidden" width="250" />
        <div className=" bg-[#4461AD] w-[230px] lg:w-[478px] mt-[4px] lg:mt-[12px]">
          <RegisterFirst className="mx-auto max-lg:hidden" width="466" height="48" />
          <RegisterFirst className="mx-auto lg:hidden" width="226" height="25" />
        </div>
        <Link href="/auth">
          <button className="bg-[#4461AD] text-cream text-[14px] lg:text-[20px] mt-[10px] lg:mt-[30px] w-[100px] h-[25px] lg:w-[150px] lg:h-[40px] rounded-[20px]">
            ลงทะเบียน
          </button>
        </Link>
      </div>
    </div>
  )
}
