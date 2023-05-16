import React from 'react'
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
export const login = () => {
  const router = useRouter();
 const {logout}= UserAuth();
 const handleLogout=async (e) =>{
  const user= logout()
 console.log(user)  
}
  return (
    <div>
       <div className="my-5 items-center  bg-primary  border-2 border-gray-300 rounded-2xl md:w-[200px] sm:[100px]">
              <button
                // type="submit"
                onClick={() => handleLogout()}
               className=" py-3 px-5 font-medium font-righteous uppercase text-[25px] text-blue "
              >
                logout
              </button>
            </div>

    </div>
  )
}
export default login