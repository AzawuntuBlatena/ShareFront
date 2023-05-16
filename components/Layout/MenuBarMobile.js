// @/components/Layout/MenuBarMobile.js
import React from 'react'
import Link from 'next/link'
import { FiMenu as Icon } from 'react-icons/fi'
import {  FiLogOut } from 'react-icons/fi';
import logo from '../../public/assets/logo/sm.jpg'
const MenuBarMobile=({ setter }) =>{
    return (
        <div className="flex flex-row justify-between md:hidden z-200 fixed top-0 left-0 right-0  bg-slate-400 [&>*]:my-auto px-2">
            <button
                className="text-4xl flex text-black"
                onClick={() => {
                    setter(oldVal => !oldVal);
                }}
            >
                <Icon />
            </button>
              <Link href="/" className="ml-0">
                {/*eslint-disable-next-line*/}
                <img
                    src={logo.src}
                    alt="Company Logo"
                    width={50}
                    height={50}
                />
            </Link>  
             {/* <div
                className=" flex flex-row text-white"
                
            >
                 <FiLogOut className="inline-block w-4 h-7 mr-2" />
           <button> Logout</button>
            </div>  */}
        </div>
    )
}
export default MenuBarMobile