import { FC, useEffect, useState } from "react"

const OpeningTime = +new Date(2022, 0, 14, 9, 0, 0, 0)

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  total: number
}

const calculateTimeLeft: (time: number) => TimeLeft | null = (time) => {
  const difference = time - +new Date()

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      total: difference,
    }
  } else {
    return null
  }
}

export const CountDown: FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft(OpeningTime))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(OpeningTime))
    }, 1000)

    return function cleanup() {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="flex flex-col text-white font-display text-xl font-thin sm:px-16 py-3 mt-[30px] md:mt-[50px] space-y-8">
      <div className="flex text-center space-x-6 text-4xl">
        <div className="flex-col space-y-2">
          <p className="font-mono px-6 py-6 bg-gray-500 bg-opacity-25 backdrop-blur-sm rounded-tl-xl rounded-bl-xl">
            {timeLeft?.days}
          </p>
          <p className="text-base font-light">days</p>
        </div>
        <div className="flex-col space-y-2">
          <p className="font-mono px-4 py-6 bg-gray-500 bg-opacity-25 backdrop-blur-sm">{String(timeLeft?.hours)}</p>
          <p className="text-base font-light">hours</p>
        </div>
        <div className="flex-col space-y-2">
          <p className="font-mono px-4 py-6 bg-gray-500 bg-opacity-25 backdrop-blur-sm">
            {String(timeLeft?.minutes).padStart(2, "0")}
          </p>
          <p className="text-base font-light">minutes</p>
        </div>
        <div className="flex-col space-y-2">
          <p className="font-mono px-4 py-6 bg-gray-500 bg-opacity-25 backdrop-blur-sm rounded-tr-xl rounded-br-xl">
            {String(timeLeft?.seconds).padStart(2, "0")}
          </p>
          <p className="text-base font-light">seconds</p>
        </div>
      </div>
    </div>
  )
}
