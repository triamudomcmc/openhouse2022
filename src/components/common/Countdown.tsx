import { FC, useEffect, useState } from 'react'

export const CountDown: FC<{ timeLeft: {[key: string]: number} }> = ({ timeLeft }) => {
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
