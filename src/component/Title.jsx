import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { FaStar, FaPencilAlt } from "react-icons/fa";
import {
  CiHeart,
  CiShare1,
  CiLocationOn,
  CiBookmark,
  CiSquarePlus,
} from "react-icons/ci";
import { SlNotebook } from "react-icons/sl";
import { MdOutlineMessage } from "react-icons/md";
import { isLoginAtom } from "../atoms";
import { useRecoilValue } from "recoil";
import Login from "../pages/Login";
import { useNavigate } from "react-router-dom";

export default function Title({restaurant, wishlist ,setWishlist}){
  const isLogin = useRecoilValue(isLoginAtom);
  const navigate = useNavigate();

  const onWish = () => {
    console.log("굿");
  };

  return (
    <div className="bg-white p-5 mb-4">
      <div>
        <img
          src = {restaurant.imgLink}
          alt="food"
          className="mb-5 w-full h-80"
        ></img>
        <div>
          <h2 className="font-bold mb-4">{restaurant.name}</h2>
          <p className="text-darkGray mb-4">
            {restaurant.location} | {restaurant.category}
          </p>
          <div className="flex items-center">
            <span className="font-bold text-lg mr-2 mb-4">
              {restaurant.rating}점
            </span>
            <span className="text-sm text-darkGray mr-2 mb-4">
              5명의 평가
            </span>
            <span className="text-sm font-bold mr-2 mb-4">
              {restaurant.rating}점
            </span>
            <span className="flex">
              <FaStar className="text-lg text- mb-4 text-secondary"  />
              <FaStar className="text-lg text-secondary" />
              <FaStar className="text-lg text-secondary" />
              <FaStar className="text-lg text-secondary" />
              <FaStar className="text-lg text-secondary" />
            </span>
          </div>
          <hr></hr>
        </div>
        <div className="mt-4 mb-4 flex justify-between">
          <div className="flex">
            <button 
              onClick = {isLogin == "" ? () => navigate(`/login`) :() => onWish}
              className="w-28 h-9 flex items-center justify-evenly border-solid border rounded-3xl border-black text-sm mr-6">
              <CiHeart />
              좋아요
            </button>
            <button
              onClick = {isLogin == "" ? () => navigate(`/login`) :() => onWish}
              className="w-20 h-9 flex items-center justify-evenly border-solid border border-black rounded-3xl text-sm">
              <CiShare1 />
              공유
            </button>
          </div>
          <div>
            <button
              onClick = {isLogin == "" ? () => navigate(`/login`) :() => onWish}
              className="w-24 h-9 flex items-center justify-evenly border-solid border border-black rounded-3xl text-sm">
              <FaPencilAlt />
              평가하기
            </button>
          </div>
        </div>
        <hr></hr>
        <div className="flex justify-between mt-4">
          <p className="flex items-center text-sm">
            <CiLocationOn />
            {restaurant.detail__location}
          </p>
          <button className="text-white w-20 h-7 bg-secondary rounded-lg text-sm">
            지도보기
          </button>
        </div>
        <p className="flex items-center text-sm mt-4">
          <SlNotebook className="mr-2" />
          {restaurant.phone}
        </p>
        <p className="flex items-center text-sm mt-4">
          <CiSquarePlus className="mr-2" />
          {restaurant.tags}
        </p>
        <p className="flex items-center text-sm mt-4">
          <MdOutlineMessage className="mr-2" />
          폐업신고 - 정보수정 제안
        </p>
      </div>
    </div>
  );
}


/* Title.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cuisine: PropTypes.arrayOf(
      PropTypes.shape({
        food: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
      })
    ).isRequired,
    rating: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    imgLink: PropTypes.string.isRequired,
    detail__location: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    distance: PropTypes.string.isRequired,
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
}; */