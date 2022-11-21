import { useEffect, useState } from 'react'
import Link from 'next/link'

import { useAuth } from '@lib/auth'

export default function AdminIndex() {
    const {user} = useAuth()
    const [pendingArticleList, setPendingArticleList] = useState<Array<string>>([])

    useEffect(() => {
        const fetchPendingArticleList = async () => {
            if (user?.uid) {
                const res = await fetch(`/api/admin/getClubPendArticleList`, {
                    method: 'POST',
                    body: JSON.stringify({
                        executerUid: user?.uid
                    })
                })
                const val = await res.json()
                setPendingArticleList(val?.value)
            }
        }
        if (user?.uid && user?.roles?.hasOwnProperty('tucmc')) fetchPendingArticleList()
    }, [user?.roles, user?.uid])

    if (user?.roles?.hasOwnProperty('tucmc')) return (
        <div>
            {pendingArticleList.map((val, key) => {
                return (
                    <div key={val}>
                        <Link href={`/clubs/${val}`}><u>{val}</u></Link>
                    </div>
                )
            })}
        </div>
    )

    return (
        <><h1>Permission Denied</h1></>
    )
}
