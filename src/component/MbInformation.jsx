import React from 'react'
import { CiLocationOn,CiBookmark ,CiCirclePlus,  CiClock1  } from "react-icons/ci";
import { RiBookletLine } from "react-icons/ri";

export default function MbInformation({restaurant}) {
  return (
    <div className = "bg-white p-5 mb-3">
      <div>
        <div className = "flex justify-between">
          <div className = "flex mb-5">
            <CiLocationOn className = "text-xl mr-2 text-primary"/>
            <p>{restaurant.detail__location}</p>
          </div>
          <div className = "flex ">
            <button className = "w-16 h-8 bg-secondary rounded-md text-white">지도보기</button>
          </div>
        </div>
        <hr/>
        <div className = "flex items-center mt-5 mb-5 ">
          <RiBookletLine className = "text-xl mr-2 text-primary"/>
          <p>{restaurant.phone}</p>
        </div>
        <hr/>
        <div className = "flex items-center mt-5 mb-5 ">
          <CiCirclePlus className = "text-xl mr-2 text-primary"/>
          <p>{restaurant.tags}</p>
        </div>
        <hr/>
        <div className = "flex items-center mt-5 mb-5">
          <CiClock1 className = "text-xl mr-2 text-primary"/>
          <p>영업시간 : 11:00 ~ 21:00</p>
        </div>
        <hr/>
        <div className = "flex items-center mt-5 mb-5">
          <CiBookmark className = "text-xl mr-2 text-primary"/>
          <p>폐업신고 - 정보수정 제안</p>
        </div>
        <hr/>
      </div>
    </div>
  )
}
