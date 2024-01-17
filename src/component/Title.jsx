import { FaStar,FaPencilAlt} from "react-icons/fa";
import { CiHeart, CiShare1,CiLocationOn, CiBookmark,CiSquarePlus  } from "react-icons/ci";
import { SlNotebook } from "react-icons/sl";
import { MdOutlineMessage } from "react-icons/md";
export default function Title() {
  return (
    <div className = "bg-white p-5 mb-4">
      <div>
        <img
          src = "https://www.seoulfn.com/news/photo/202103/412309_187543_1220.gif"
          alt = "food"
          className = "mb-5">
        </img>
        <div>
          <h2 className = "font-bold mb-4">고도식</h2>
          <p className = "text-darkGray mb-4">송리단길|고깃집,알등심</p>
          <div className = "flex items-center">
            <span className = "font-bold text-lg mr-2 mb-4">90점</span>
            <span className = "text-sm text-darkGray mr-2 mb-4">35명의 평가</span>
            <span className = "text-sm font-bold mr-2 mb-4">4.7점</span>
            <span className = "flex">
              <FaStar className = "text-lg text-myblue mb-4" /><FaStar className = "text-lg text-myblue"/><FaStar className = "text-lg text-myblue"/><FaStar className = "text-lg text-myblue"/><FaStar className = "text-lg text-myblue"/>
            </span>
          </div>
          <hr></hr>
        </div>
        <form className = "mt-4 mb-4 flex justify-between">
          <div className = "flex">
            <button className = "w-28 h-9 flex items-center justify-evenly border-solid border rounded-3xl border-black text-sm mr-6"><CiHeart />좋아요(170)</button>
            <button className = "w-20 h-9 flex items-center justify-evenly border-solid border border-black rounded-3xl text-sm"><CiShare1 />공유</button>
          </div>
          <div>
            <button className = "w-24 h-9 flex items-center justify-evenly border-solid border border-black rounded-3xl text-sm"><FaPencilAlt/>평가하기</button>
          </div>
        </form>
        <hr></hr>
        <div className = "flex justify-between mt-4">
          <p className = "flex items-center text-sm"><CiLocationOn />서울특별시 송파구 송파동 55-7</p>
          <button className = "text-white w-20 h-7 bg-darkblue rounded-lg text-sm" >지도보기</button>
        </div>
        <p className = "flex items-center text-sm mt-4"><SlNotebook className = "mr-2"/>02-422-8692</p>
        <p className = "flex items-center text-sm mt-4"><CiBookmark className = "mr-2"/>디코숨은맛집, 식사모임</p>
        <p className = "flex items-center text-sm mt-4"><CiSquarePlus className = "mr-2" />시끌벅적한, 점심식사, 저녁식사, 무료주차</p>
        <p className = "flex items-center text-sm mt-4"><MdOutlineMessage className = "mr-2" />폐업신고 - 정보수정 제안</p>
      </div>
    </div>
  )
}
