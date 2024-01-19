import { useState, useEffect } from "react";
import { axiosInstance, API_URL } from "../stores/API";
import { FaStar,FaPencilAlt} from "react-icons/fa";
import { CiHeart, CiShare1,CiLocationOn, CiBookmark,CiSquarePlus  } from "react-icons/ci";
import { SlNotebook } from "react-icons/sl";
import { MdOutlineMessage } from "react-icons/md";

export default function RestaurantInformation() {
  const [restaurantList, setRestaurantList] = useState({});

  useEffect(() => {
    axiosInstance.get(API_URL.TAGDETAIL).then((res) => {
      setRestaurantList(res.data[0]);
    });
  }, []);
  return (
    <div className = "bg-white p-5 mb-4">
      <div>
        <img
          src = "https://www.seoulfn.com/news/photo/202103/412309_187543_1220.gif"
          alt = "food"
          className = "mb-5 w-full">
        </img>
      <div>
        <h2 className = "font-bold mb-4">{restaurantList.name}</h2>
        <p className = "text-darkGray mb-4">{restaurantList.location} | {restaurantList.category}
        </p>
        <div className = "flex items-center">
          <span className = "font-bold text-lg mr-2 mb-4">{restaurantList.score}점</span>
          <span className = "text-sm text-darkGray mr-2 mb-4">{restaurantList.gaveRatingPeopleNum}명의 평가</span>
          <span className = "text-sm font-bold mr-2 mb-4">{restaurantList.rating}점</span>
          <span className = "flex">
            <FaStar className = "text-lg text-myblue mb-4" /><FaStar className = "text-lg text-myblue"/><FaStar className = "text-lg text-myblue"/><FaStar className = "text-lg text-myblue"/><FaStar className = "text-lg text-myblue"/>
          </span>
        </div>
        <hr></hr>
      </div>
        <form className = "mt-4 mb-4 flex justify-between">
          <div className = "flex">
            <button className = "w-28 h-9 flex items-center justify-evenly border-solid border rounded-3xl border-black text-sm mr-6"><CiHeart />좋아요({restaurantList.favorite})</button>
            <button className = "w-20 h-9 flex items-center justify-evenly border-solid border border-black rounded-3xl text-sm"><CiShare1 />공유</button>
          </div>
          <div>
            <button className = "w-24 h-9 flex items-center justify-evenly border-solid border border-black rounded-3xl text-sm"><FaPencilAlt/>평가하기</button>
          </div>
        </form>
        <hr></hr>
        <div className = "flex justify-between mt-4">
          <p className = "flex items-center text-sm"><CiLocationOn />{restaurantList.detail__location}</p>
          <button className = "text-white w-20 h-7 bg-darkblue rounded-lg text-sm" >지도보기</button>
        </div>
        <p className = "flex items-center text-sm mt-4"><SlNotebook className = "mr-2"/>{restaurantList.phone}</p>
        <p className = "flex items-center text-sm mt-4"><CiBookmark className = "mr-2"/>{restaurantList.tags2}</p>
        <p className = "flex items-center text-sm mt-4"><CiSquarePlus className = "mr-2" />{restaurantList.tags}</p>
        <p className = "flex items-center text-sm mt-4"><MdOutlineMessage className = "mr-2" />폐업신고 - 정보수정 제안</p>
      </div>
    </div>
  );
}
