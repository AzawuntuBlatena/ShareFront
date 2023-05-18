

// import {formatDistanceToNow} from "date-fns"

// import React from 'react'
// import PropTypes from 'prop-types'
// import { FiAlertCircle } from 'react-icons/fi'
// import { IoMdInformationCircle } from 'react-icons/io'

// const NewsCard = ({adminnews}) => {
//   // const icon = type === 'alert' ? <FiAlertCircle /> : <IoMdInformationCircle />
//   // console.log(news.title)
//   console.log(adminnews)
  
//   return (
//     <>
//     <div className="text-2xl font-bold mb-8">News</div>
//    {adminnews && adminnews.map(item => (
//             <div>
//               <br></br>
//             <p className='italic text-2xl '>{formatDistanceToNow(new Date(item.createdAt),{addSuffix:true})}</p>
//             <img src={`http://localhost:5000/${item.img}`}/><br></br>
//             {item.title}<br></br>
//             {item.author}<br></br>
//             {item.description}<br></br>
//             {item.content}<br></br>
//           </div>
//         ))} 
//     </>)
//     // {/* <div className="font-bold">{adminnews}</div> */}
//     // <div className="bg-white rounded-lg shadow-md p-4 mt-10 mb-4 flex items-center">
//     //   <div className="mr-4 text-indigo-500">{icon}</div>
//     //   <div>
       
//     //     <div className="font-bold">{title}</div>
        
//     //     <div className="text-gray-500">{description}</div>
//     //     {image && (
//     //       <div className="mt-4">
      
//     //         <img src={image} alt={title} className="rounded-lg" />
//     //       </div>
//     //     )}
//     //   </div>
//     //   <div>sdlk</div>
   
//   // )
// }

// // NewsCard.propTypes = {
// //   title: PropTypes.string.isRequired,
// //   description: PropTypes.string.isRequired,
// //   type: PropTypes.oneOf(['alert', 'info']).isRequired,
// //   image: PropTypes.string,
// // }

// export default NewsCard


// import React, { useState, useEffect } from 'react'
// import NewsCard from '../shareholder/newspage'
// import Layout from '../shareholder'
// import { useRouter } from 'next/router'
// const news = () => {
//   const [news, setNews] = useState(null)
//   const [error, setError] = useState(null)
//   const router = useRouter();
//   const [showLayout,setShowLayout]=useState(false)
//   useEffect(() => {
//     async function fetchNews() {
//       const user= JSON.parse(sessionStorage.getItem("user"));
//       if(user){
//         const config = {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         }
//         const response = await fetch('http://localhost:5000/api/adminnews',config)
//         const data = await response.json()
//         if(response.ok){
//           setNews(data)
//           setShowLayout(true)
//           console.log(response)
//           console.log(data)

//         }
//         else{
//           setError(data)
//           console.log(data.message)
//         }
//       }
//       else{
//         console.log("not authoried")
//         router.push("/login");
//       }
//     }
//  fetchNews()
//   }, [])
//   return (
   
//     showLayout && <Layout>
//        <div id='news'>
//      <div className='px-10 py-6'>
//      <div className="text-2xl font-bold ">News</div>
//      <div className="grid grid-cols-1 grid-flow-row sm:grid-cols-2 md:grid-cols-3 gap-3 mt-8  ">
//          {news && <NewsCard adminnews={news}/>} 
//        </div>
//      </div>
     
//      </div>
//      </Layout> 

//   )
// }
// export default news