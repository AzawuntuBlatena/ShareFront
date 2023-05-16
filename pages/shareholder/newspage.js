
import Layout from '../shareholder'

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
    
   {adminnews.map(item => (
          <h1>
            <div></div>{item.title}
            {item.author}
            {item.description}
            {item.content}
          </h1>
         
        ))} 
    </>)
    // {/* <div className="font-bold">{adminnews}</div> */}
    // <div className="bg-white rounded-lg shadow-md p-4 mt-10 mb-4 flex items-center">
    //   <div className="mr-4 text-indigo-500">{icon}</div>
    //   <div>
       
    //     <div className="font-bold">{title}</div>
        
    //     <div className="text-gray-500">{description}</div>
    //     {image && (
    //       <div className="mt-4">
      
    //         <img src={image} alt={title} className="rounded-lg" />
    //       </div>
    //     )}
    //   </div>
    //   <div>sdlk</div>
   
  // )
}

// NewsCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   type: PropTypes.oneOf(['alert', 'info']).isRequired,
//   image: PropTypes.string,
// }

export default NewsCard