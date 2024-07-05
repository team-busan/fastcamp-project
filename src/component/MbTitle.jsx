import { useEffect, useState } from "react";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { CiBookmark, CiLocationOn, CiFaceFrown } from "react-icons/ci";
import { PiNotePencil } from "react-icons/pi";
import { RiShareForward2Fill } from "react-icons/ri";
import {  useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { isLoginAtom } from "../stores/atoms";

export default function MbTitle({ restaurant, review, averageRating }) {
  const isLogin = useRecoilValue(isLoginAtom);
  const navigate = useNavigate();
  return (
      <header className = "flex-col bg-white mb-3">
        <div className = "flex">
          <div>
            <img 
              src = {restaurant.imgLink}
              alt = "error"
              className = "h-72 w-screen"
              />
            <div className = "p-5">
              <h3>{restaurant.name}</h3>
              <p className = "text-sm text-mediumGray mb-2">{restaurant.location} | {restaurant.category}
              </p>
              <div className = "flex items-center">
                <span className="flex mr-2">
                  <FaStar className="text-lg text-secondary" />
                  <FaStar className="text-lg text-secondary" />
                  <FaStar className="text-lg text-secondary" />
                  <FaStar className="text-lg text-secondary" />
                  <FaStar className="text-lg text-secondary" />
                </span>
                <p>{averageRating.toFixed(1)}</p>
              </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="flex justify-between p-5">
        <div 
          className="flex flex-col items-center"
          onClick = {isLogin == "" ? () => navigate(`/login`) : ""}
        >
          <CiBookmark className="text-2xl" />
          <p>저장</p>
        </div>
        <div
          className="flex flex-col items-center"
          onClick = {isLogin == "" ? () => navigate(`/login`) : ""}
        >
          <PiNotePencil className="text-2xl" />
          <p>평가하기</p>
        </div>
        <div 
          className="flex flex-col items-center"
          onClick = {isLogin == "" ? () => navigate(`/login`) : ""}
        >
          <CiLocationOn className="text-2xl" />
          <p>체크인</p>
        </div>
        <div 
          className="flex flex-col items-center"
          onClick = {isLogin == "" ? () => navigate(`/login`) : ""}
        >
          <RiShareForward2Fill className="text-2xl" />
          <p>공유</p>
        </div>
        <div
          className="flex flex-col items-center"
          onClick = {isLogin == "" ? () => navigate(`/login`) : ""}
        >
          <CiFaceFrown className="text-2xl" />
          <p>별로에요</p>
        </div>
      </div>
    </header>
  );
}
