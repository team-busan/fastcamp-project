import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import NaverMap from './NaverMap';
import { useNavigate } from 'react-router-dom';
export default function MbLocation() {
  const navigate = useNavigate();
  return (
    <div className = "bg-white p-5 mb-3">
      <div className = "flex items-center mb-3">
        <CiLocationOn className = "mr-3 text-secondary"/>
        <h4 className = "font-bold ">위치정보</h4>
      </div>
      <NaverMap
        width = {"100%"}
        height = {"h-44"}
        isRounded = {false}
      />
      <div className = "flex items-center justify-center bg-secondary mt-3 rounded-lg text-white h-11">
        <span><CiLocationOn/></span>
        <button onClick = {() => navigate(`/search`)}>합정 맛집 더보기</button>
      </div>
    </div>
  )
}
