// @/components/Layout/Sidebar.js
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SlHome } from 'react-icons/sl'
import {BsBarChart, BsNewspaper,BsBoxArrowUpRight } from 'react-icons/bs'
import {  FiCalendar, FiFileText, FiMessageSquare, FiSettings } from 'react-icons/fi'
import logo from '../../public/assets/logo/sm.jpg'
const Sidebar=({ show, setter })=> {
    const router = useRouter();
    // Define our base class
    const className = "bg-black w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
    // Append class based on state of sidebar visiblity
    const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";
    // Clickable menu items
    const MenuItem = ({ icon, name, route }) => {
        // Highlight menu item based on currently displayed route
        const colorClass = router.pathname === route ? "text-white" : "text-white/50 hover:text-white";
        return (
            <Link
                href={route}
                onClick={() => {
                    setter(oldVal => !oldVal);
                }}
                className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
            >
                <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                    {icon}
                </div>
                <div>{name}</div>
            </Link>
        )
    }
    // Overlay to prevent clicks in background, also serves as our close button
    const ModalOverlay = () => (
        <div
            className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30`}
            onClick={() => {
                setter(oldVal => !oldVal);
            }}
        />
    )
    return (
        <>
            <div className={`${className}${appendClass}`}>
                <div className="p-2 flex">
                    <Link href="/">
                        {/*eslint-disable-next-line*/}
                        <img src={logo.src} alt="Company Logo" width={300} height={300} />
                    </Link>
                </div>
                <div className="flex flex-col">
                <MenuItem
                        name="Home"
                        route="/shareholder"
                        icon={<SlHome />}
                    />
                    <MenuItem
                        name="My share"
                        route="/shareholder/myshare"
                        icon={<BsBoxArrowUpRight />}
                    />
                    <MenuItem
                        name="Report"
                        route="/shareholder/report"
                        icon={<BsBarChart />}
                    />
                    <MenuItem
                        name="News"
                        route="/shareholder/news"
                        icon={<BsNewspaper />}
                    />
                    
                    <MenuItem
                        name="Meeting"
                        route="/shareholder/meeting"
                        icon={<FiCalendar />}
                    />
                    <MenuItem
                        name="Letter"
                        route="/shareholder/letter"
                        icon={<FiFileText />}
                    />
                    <MenuItem
                        name="Chat"
                        route="/shareholder/chat"
                        icon={<FiMessageSquare />}
                    />
                    <MenuItem
                        name="Setting"
                        route="/shareholder/setting"
                        icon={<FiSettings />}
                    /> 
                  
                </div>
            </div>
            {show ? <ModalOverlay /> : <></>}
        </>
    )
}
export default Sidebar