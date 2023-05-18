import React, { useContext, useEffect, useState } from "react";
// import VectorImg from "../public/assets/logo/manage.jpg";
// // import LoginImg from "/public/asset/logo/plb.jpg";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { UserAuth } from "../context/AuthContext";
import Heator from "@/components/Layout/Heator";
export default function Login() {
  const router = useRouter();
 const { Userlogin}= UserAuth();
  const [isdata , setIsData]=useState(false)
  const [error , setError]=useState("")
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch
  } = useForm();
  const email= watch("email");
  const password = watch('password');
  const submitHandler = async  (e) => {
    // e.preventDefault();
 Userlogin(email,password).then((user_data)=>{
      setIsData(true)
 }).catch(err=>{
  setError(err.message)
 })
  };
  useEffect(() => {
    const user= JSON.parse(sessionStorage.getItem("user"));
    // console.log(user.token)
    if(user){
      if (user.roll===0) {
        router.push("/shareholder");
      }
      if (user.roll===2) {
        router.push("/shareholder/news");
      }
    }
  }, [isdata]);
  return (
    <Heator>
    
    <div className=" bg-slate-600 h-full md:flex justify-start xl:justify-around gap-2  ">
      <div className="flex flex-col pt-5 bg-white  rounded-lg my-5  ">
        <div className="flex items-center flex-col ">
          <p className=" font-bold text-[50px] text-primary font-montez ">
            Your company
          </p>
          <div className="md:max-w-5xl sm:max-w-xl">
            <p className=" text-[30px] md:text-[40px] font-righteous ">
              Welcome back
            </p>
          </div>
        </div>
        <div className="p-2 flex flex-col ">
          <form
            className="flex flex-col py-2"
            // onSubmit={submitHandler}
            onSubmit={handleSubmit(submitHandler)}

          >
            <div className="relative">
              <p className="py-2 text-[20px] font-medium">Email Address</p>
              <input
                className=" border border-gray-300 outline-none bg-white pl-9 pr-4 py-1 rounded-xl text-[20px]
                          transition focus:ring-4 focus:ring-green-500 placeholder-[#95959E] h-16 md:w-[400px] sm:[300px]
                           "
                id="email"
                type={"email"}
                placeholder="enter email"
                {...register("email", {
                  required: "Please enter email",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                    message: "Please enter valid email",
                  },
                })}
              />
              {errors.email && (
                <div className="text-red-600">{errors.email.message}</div>
              )}
            </div>
            <div className="relative py-5">
              <p className="py-2 text-[20px] font-medium">Password</p>
              <input
                className=" border border-gray-300 outline-none bg-white pl-9 pr-4 py-1 rounded-xl text-[20px]
                          transition focus:ring-4 focus:ring-green-500 placeholder-[#95959E] h-16 md:w-[400px] sm:[300px]
                           "
                type={"password"}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Please enter password",
                  minLength: {
                    value: 6,
                    message: "password is more than 5 chars",
                  },
                })}
                id="password"
              />
              {errors.password && (
                <div className="text-red-500 ">{errors.password.message}</div>
              )}
            </div>
            
            <div className="my-5 items-center  bg-primary  border-2 border-gray-300 rounded-2xl md:w-[200px] sm:[100px]">
              <button
                type="submit"
                className=" py-3 px-5 font-medium font-righteous uppercase text-[25px] text-blue "
             
              >
                log in
              </button>
            </div>
          </form>
          <div className="-mt-6 flex items-center md:justify-center -ml-6">
  
  <Link href={"/"}>
    <p className=" py-5 md:pl-32 font-medium text-[20px] text-green-700 sm:pl-18">
      Forget Password?
    </p>
  </Link>
</div>
{error && (
                <div className="text-red-500 ">{error}</div>
              )}
         
          </div>
        
        </div>
      </div>
      
     
  
    </Heator>
  );
}





