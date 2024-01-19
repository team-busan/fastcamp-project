import React from 'react'
import { FaLocationCrosshairs } from "react-icons/fa6";

export default function HomeContent() {
  return (
    <div>
        <div className="justify-center text-white text-center text-4xl leading-10 w-[387px]">
            당신을 위한 <br />
            부산 추천 맛집
        </div>
        <div className="self-stretch flex items-center  gap-5 mt-10 ">
            <button className="justify-center text-white text-center text-lg leading-6 my-auto bg-cyan-500 flex items-stretch gap-3 px-9 py-2.5 rounded-[50px]">다른지역 선택</button>
            <button className="justify-center text-white text-center text-lg leading-6 my-auto bg-blue-500 flex items-stretch gap-3 px-9 py-2.5 rounded-[50px]"><FaLocationCrosshairs /> 현위치로 설정</button>
            
        </div>
    </div>
  )
}
