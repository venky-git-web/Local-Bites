import React, { useEffect, useState } from 'react'
import { SWIGGY_URL } from './utilis'
import { Link } from "react-router-dom";
import RestAvilableCards from './RestAvilableCards';

const RestAvilable = () => {

 

  const fetchApi = async () => {
    try {

      const response = await fetch(SWIGGY_URL)
      const data = await response.json()
      const resdata = data?.data?.cards[4]?.card?.card
        
      console.log(resdata)
      
      
       
    } catch (error) {
      console.error("error: ",error)
     }
  }
  useEffect(() => {
    fetchApi()
  },[])

  return (
    // <div className="my-5 mx-4 flex flex-wrap justify-center items-center gap-2">
    //     {resdata.map((RestData) => (
    //       <Link
    //         key={RestData?.info?.id}
    //         to={`/restaurants/${RestData?.info?.id}`}
    //       >
    //         <RestAvilableCards resdata={RestData}/>
    //       </Link>
    //     ))}
    //   </div>
    <div>hello</div>
  )
}

export default RestAvilable;