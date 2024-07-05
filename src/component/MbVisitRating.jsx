import React from 'react'
import { LuPencil } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import MbReview from './MbReview';
import {  useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { isLoginAtom } from '../stores/atoms';

export default function MbVisitRating({averageRating, review, restaurant}) {
  const isLogin = useRecoilValue(isLoginAtom);
  const navigate = useNavigate();
  return (
    <div className = "bg-white p-5 mb-3">
      <div className = "flex items-center mb-2">
        <div className = "mr-3"><LuPencil /></div>
        <h4 className = "font-bold flex">{review.length}건의 방문자 평가</h4>
      </div>
      <div className="flex items-center mb-2">
        <span className="flex">
          <FaStar className="text-secondary text-lg" />
          <FaStar className="text-secondary text-lg" />
          <FaStar className="text-secondary text-lg" />
          <FaStar className="text-secondary text-lg" />
          <FaStar className="text-secondary text-lg" />
        </span>
        <p className="font-bold mr-4 ml-2">{averageRating.toFixed(1)}</p>
        </div>
        <hr/>
      <div className="flex justify-between mt-4 mb-4">
        <div className = "flex-row">
          <div className = "flex mb-3">
            <span className="text-xl">😊</span>
            <p className="text-sm">
            이 음식점의 평가결과는 신뢰할 수 있을만큼 이루어졌습니다.
            </p>
          </div>
          <button
            onClick = {isLogin == "" ? () => navigate(`/login`) : ""}
            className="flex justify-center items-center border w-full border-black p-3 rounded-lg">
          <LuPencil className = "mr-3"/>
          맛집 평가하기
          </button>
        </div>
      </div>
      <hr/>
      <MbReview 
        review = {review}
        restaurant = {restaurant}
      />
    </div>
  )
}
