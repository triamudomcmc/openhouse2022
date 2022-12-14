import { FC, useEffect, useState } from "react"
import Link from "next/link"

import { useAuth } from "@lib/auth"
import {IUserData} from "@ctypes/account"

export const Navbar: FC<{}> = ({}) => {
    const {user} = useAuth()
    const [mainLinks, setMainLinks] = useState([
        {Name: 'หน้าแรก', Path: '/'}, 
        {Name: 'ชมรม', Path: '/clubs'},
        {Name: 'สายการเรียน', Path: '/programmes'},
        // {Name: 'My Account', Path: '/account'}
    ])
    const [accountLinks, setAccountLinks] = useState([])

    useEffect(() => {
        if (user?.roles.hasOwnProperty('tucmc') || user?.roles.hasOwnProperty('aic')) setAccountLinks((prev) => [...prev, {Name: 'QR Code Reader', Path: '/qrreader'}])
        if (user?.roles.hasOwnProperty('clubPresident')) setAccountLinks((prev) => [...prev, {Name: 'Club Panel', Path: `/clubs/${user?.club}/panel`}])
    }, [user?.club, user?.roles, user?.uid])

    return (
        <div>
            {mainLinks.map((value, index) => {
                return (
                <div key={value?.Name}>
                    <Link href={value?.Path}>{value?.Name}</Link>
                    
                </div>
                )
            })}
        </div>
    )

}
