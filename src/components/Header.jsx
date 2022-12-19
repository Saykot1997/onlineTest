import React from 'react'
import { IoNotifications } from "react-icons/io5"
import userPhoto from "../photo/user.jpeg"

export default function Header() {
    return (
        <div className=' w-full h-16 bg-sky-900 flex items-center justify-center'>
            <div className=' w-full xl:w-[1200px] flex justify-between items-center'>
                <div className=' flex items-center gap-5'>
                    <p className=' text-white text-sm cursor-pointer'>Dashboard</p>
                    <p className=' text-white text-sm cursor-pointer'>Master Price</p>
                    <p className=' text-white text-sm cursor-pointer'>Custom Price</p>
                    <p className=' text-white text-sm cursor-pointer'>Calender</p>
                    <p className=' text-white text-sm cursor-pointer'>Reports</p>
                </div>
                <div className=' flex items-center gap-2'>
                    <IoNotifications className=' text-2xl ' />
                    <div className=' w-8 h-8 rounded-full '>
                        <img src={userPhoto} alt="user" className=' h-full w-full object-cover rounded-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}
