import Head from 'next/head'

import styles from '@styles/Home.module.css'
import { CountDown } from '@components/common/Countdown'

export default function Home() {
  return (
    <div className={styles.container}>

      {/* Countdown */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          Countdown
        </h1>
        <CountDown until={+new Date(2023, 0, 14, 9, 0, 0, 0)} />
      </main>

    </div>
  )
}
