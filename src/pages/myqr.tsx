/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useQRCode } from 'next-qrcode'

import {useAuth} from '@lib/auth'
import styles from '@styles/Home.module.css'

export default function QrGen() {
    const {Canvas} = useQRCode()
    const {user} = useAuth()

    if (user?.uid) {
        return (
            <div className={styles.main}>
                <Canvas 
                    text={user?.uid}
                    options={{
                        type: 'image/jpeg',
                        quality: 0.5,
                        level: 'M',
                        margin: 3,
                        scale: 4,
                        width: 200,
                        color: {
                        dark: '#000000',
                        light: '#cccccc',
                        },
                    }}
                />
            </div>
        )
    }
    return (
        <div className={styles.main}>
            <h3>Please sign up to view your QR code</h3>
            <a href='/auth'><u>Click here to Sign Up</u></a>
        </div>
    )
}