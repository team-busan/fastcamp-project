import React, { useState, useEffect } from 'react'
import "../index.css";
import { axiosInstance, API_URL } from "../stores/API";

export default function Tab() {
  const [saveData, setSaveData] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(API_URL.HOME).then((res) => {
        
        setSaveData(res.data);
        console.log(saveData);
      })
      .catch((error) => {
        console.log("Tab", error);
      });
  }, []);

  return (
    <div className="flex flex-col bg-white items-stretch mx-10 my-12 pb-12">
      <div className="bg-white ">
        <div className="gap-5 flex space-x-8 border-b-black border-b border-solid pr-20 py-12 justify-between items-center text-stone-300 text-center text-2xl leading-10 my-auto ">
            <div className="w-[33%]">
              <div className="text-black font-semibold">
                저장한 맛집
                <br />
                {saveData.length}
              </div>
            </div>
        </div>
        <div className='bg-white mx-10 my-12 flex flex-wrap'>
          {saveData.map((item, index) => {
              return(
                <div key={index} className='flex-col items-center w-3/12 pl-12 pt-10 mb-10 object-center'>
                  <img src={item.imgLink} className='h-full w-full object-cover aspect-[1] ' />
                  <div className='text-lg leading-6 self-stretch mt-5'>{item.name}</div>
                </div>
              )
            })}
        </div>
        </div>
      </div>
  );
}
