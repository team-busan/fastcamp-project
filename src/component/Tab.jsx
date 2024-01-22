import React, { useState } from 'react'
import "../index.css";
import {Rating, Save, Like} from "../stores/mockData.json";

export default function Tab() {
  // const [datas, setDatas] = useState({});
  const Menu = [
    {
      id : 1,
      title: "평가한 맛집",
      num: "(264)",
      content: "tab 1 content",
      color: "text-pink-600",
      data: Rating
    },
    {
      id : 2,
      title: "저장한 맛집",
      num: "(38)",
      content: "tab 2 content",
      color: "text-indigo-600",
      data: Save
    },
    {
      id : 3,
      title: " 좋아요한 맛집",
      num: "(1248)",
      content: "tab 3 content",
      color: "text-yellow-600",
      data: Like
    }
  ]
  const [tabIndex, setTabIndex] = useState(1);
  const handleClick = (index) => setTabIndex(index);
  const datas = "";
  const checkTab = (index, className) =>
    tabIndex === index ? className : "";
  return (
    <div className='flex flex-col bg-white items-stretch mx-10 my-12 pb-12'>
      <div className="bg-white ">
        <div className='gap-5 flex space-x-8 border-b-black border-b border-solid pr-20 py-12 justify-between items-center text-stone-300 text-center text-2xl leading-10 my-auto '>
          {Menu.map(item => (
          <div key={item.id} className='w-[33%]'>
            <button 
              onClick={()=> handleClick(item.id)}
              className={`${checkTab(item.id, "text-black font-semibold")} `}>{item.title}<br/>{Object.keys(item.data).length}
            </button>
          </div>
          ))}
        </div>
        <div className='bg-white mx-10 my-12 '>
          {Menu.map((item) =>(
            <div key={item.id} className={` panel w-full flex-wrap ${checkTab(item.id, "active")}`}>
            {item.data.map((v) => {
              return(
                <div className='flex-col items-center w-[207px] pl-12 pt-10 object-center'>
                  <img src={v.img} className='h-full w-full object-cover aspect-[1] ' />
                  <div className='text-lg leading-6 self-stretch mt-5'>{v.name}</div>
              </div>
              )
            })}
            </div>
            
            ))}
        </div>
      </div>
    </div>
  )
}
