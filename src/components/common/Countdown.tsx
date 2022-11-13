import { FC, useEffect, useState } from 'react'

const OpeningTime = +new Date(2023, 0, 14, 9, 0, 0, 0)

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

export const CountDown: FC<{ until?: number }> = ({ until }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft(until ?? OpeningTime))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(until ?? OpeningTime))
    }, 1000)

    return function cleanup() {
      clearInterval(timer)
    }
  }, [until])

  return (
    <div>
        <p>
            {timeLeft?.days ?? 0} {timeLeft?.days && timeLeft?.days > 1 ? "days" : "day"}
        </p>
        
        <p>
            {String(timeLeft?.hours ?? 0).padStart(2, "0)")} hours
        </p>
        
        <p>
            {String(timeLeft?.minutes ?? 0).padStart(2, "0")} minutes
        </p>
        
        <p>
            {String(timeLeft?.seconds ?? 0).padStart(2, "0")} seconds
        </p>
        
    </div>
  )
}
