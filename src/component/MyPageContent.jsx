import React, { useState, useEffect } from 'react'
import "../index.css";
import { axiosInstance, API_URL } from "../stores/API";
import { Link } from 'react-router-dom';

export default function MyPageContent({list, setList}) {

  return (
    <div className="flex bg-zinc-100 w-full flex-col  items-stretch px-10 py-6 md:px-20 md:py-12 ">
      <div className="flex flex-col bg-white items-stretch">
          <div className="gap-5 flex space-x-8 justify-center border-b-black border-b border-solid py-12 items-center text-stone-300 text-center text-2xl leading-10 my-auto ">
                <div className="text-black font-semibold">
                  저장한 맛집
                  <br />
                  {list.length}
                </div>
          </div>
          <div className='block bg-white mx-5 my-5 md:mx-10 md:my-10 md:flex flex-wrap'>
            {list.map((item, index) => {
                return(
                  
                  <div key={index} className='flex-col items-center w-full md:w-3/12  pt-10 mb-6 pl-3 pr-3 object-center'>
                    <Link to={`/detail/${item.id}`}>
                    <img src={item.imgLink} className='h-full w-full object-cover aspect-[1] ' />
                    <div className='text-lg leading-6 self-stretch mt-5'>{item.name}</div>
                    </Link>
                  </div>
                  
                )
            })}
          </div>
      </div>
    </div>
  )
}
