import { FC, useEffect, useState } from "react"

export const CountDown: FC<{ timeLeft: { [key: string]: number } }> = ({ timeLeft }) => {
  return (
    <div className="flex w-[308px] lg:w-[481px] justify-between mx-auto lg:mt-[35px] mt-[30px]">
      <div>
        <div className="lg:w-[97px] lg:h-[97px] lg:rounded-[20px] w-[62px] h-[62px] rounded-[13px] bg-white lg:shadow-[2_4px_8px__rgba(0,0,0,0.25)] flex items-center justify-center">
          <p className="lg:text-[53px] text-[33px] font-[600]">{timeLeft?.days ?? 0}</p>
        </div>
        <p className="text-[15px] lg:text-[24px] opacity-60 flex justify-center lg:mt-[12px]">
          {timeLeft?.days && timeLeft?.days > 1 ? "Days" : "Day"}
        </p>
      </div>
      <div>
        <div className="lg:w-[97px] lg:h-[97px] lg:rounded-[20px] w-[62px] h-[62px] rounded-[13px] bg-white lg:shadow-[2_4px_8px__rgba(0,0,0,0.25)] flex items-center justify-center">
          <p className="lg:text-[53px] text-[33px] font-[600]">{String(timeLeft?.hours ?? 0).padStart(2, "0)")}</p>
        </div>
        <p className="text-[15px] lg:text-[24px] opacity-60 flex justify-center lg:mt-[12px]">Hours</p>
      </div>
      <div>
        <div className="lg:w-[97px] lg:h-[97px] lg:rounded-[20px] w-[62px] h-[62px] rounded-[13px] bg-white lg:shadow-[2_4px_8px__rgba(0,0,0,0.25)] flex items-center justify-center">
          <p className="lg:text-[53px] text-[33px] font-[600]">{String(timeLeft?.minutes ?? 0).padStart(2, "0)")}</p>
        </div>
        <p className="text-[15px] lg:text-[24px] opacity-60 flex justify-center lg:mt-[12px]">Minutes</p>
      </div>
      <div>
        <div className="lg:w-[97px] lg:h-[97px] lg:rounded-[20px]  w-[62px] h-[62px] rounded-[13px] bg-white lg:shadow-[2_4px_8px__rgba(0,0,0,0.25)] flex items-center justify-center">
          <p className="lg:text-[53px] text-[33px] font-[600]">{String(timeLeft?.seconds ?? 0).padStart(2, "0)")}</p>
        </div>
        <p className="text-[15px] lg:text-[24px] opacity-60 flex justify-center lg:mt-[12px]">Seconds</p>
      </div>
    </div>
  )
}
