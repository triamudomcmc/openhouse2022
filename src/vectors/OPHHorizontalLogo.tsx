import { FC } from "react"

export const OPHHorizontalLogo: FC = () => {
  return (
    <div className="flex space-x-2 cursor-pointer flex-shrink-0">
      <img alt="Logo" width={52.5} height={30} className="w-[52.5px] h-[30px]" src="/images/logos/openhouse.png" />
      <div className="flex flex-col justify-center">
        <p className="text-[12px] text-white font-semibold">
          TRIAM UDOM
          <p className="leading-[14px]">ONLINE OPEN HOUSE 2022</p>
        </p>
      </div>
    </div>
  )
}
