import Head from 'next/head'

import { CountDown } from '@components/common/Countdown'

export default function Home() {
  return (
    <div>

      {/* Countdown */}
      <main className='main'>
        <h1 className='title'>
          Countdown
        </h1>
        <CountDown until={+new Date(2023, 0, 14, 9, 0, 0, 0)} />
      </main>

    </div>
  )
}
