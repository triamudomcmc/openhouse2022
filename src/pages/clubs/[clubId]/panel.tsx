import React, {useEffect, useState} from 'react'

import { useAuth } from '@lib/auth'

export default function ClubPanel() {
    const {user} = useAuth()
    const [club, setClub] = useState(null)

    useEffect(() => {
        if (user?.club) setClub(user?.club)
    }, [user?.club])

    if (club !== null) {
        return (
            <div>
                <h3>Club Panel</h3>
            </div>
        )
    }

    return (
        <div>
            <h3>Access Denied</h3>
        </div>
    )
}