
import Layout from '../shareholder'
import {formatDistanceToNow} from "date-fns"

import React from 'react'
import PropTypes from 'prop-types'
import { FiAlertCircle } from 'react-icons/fi'
import { IoMdInformationCircle } from 'react-icons/io'

const NewsCard = ({adminnews}) => {
  // const icon = type === 'alert' ? <FiAlertCircle /> : <IoMdInformationCircle />
  // console.log(news.title)
  console.log(adminnews)
  
  return (
    <>
   
   

    {adminnews && adminnews.map(item => (
       <div >
       {/* <div className="mr-4 text-indigo-500">{icon}</div> */}
    <div className= 'w-[400px] h-auto p-8 shadow-2xl shadow-black rounded-xl '>
       <div className="font-bold text-blue-700">{item.title}</div>
       {item.author}
       {item.description}
       {item.content}
       <img src={`http://localhost:5000/${item.img}`}/>
       <p className='italic text-normal text-right text-blue-950 pb-0 '>{formatDistanceToNow(new Date(item.createdAt),{addSuffix:true})}</p>
 </div>
     </div>
            
             
           
          
           
    
         
        ))} 
        </>
        )
        }

export default NewsCard