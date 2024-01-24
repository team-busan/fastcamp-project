import { FaStar } from "react-icons/fa";
import Review from "./Review";
import { useState } from "react";
import { CiCircleChevDown } from "react-icons/ci";

export default function VisitRating({review}) {
  return (
    <div className="bg-white p-5 mb-4">
      <h3 className="font-bold mb-4">0건의 방문자 평가</h3>
      <hr />
      <div className="flex justify-between mt-4">
        <div>
          <div className="flex items-center  mb-2">
            <p className="font-bold mr-4">0</p>
            <span className="flex">
              <FaStar className="text-secondary text-lg" />
              <FaStar className="text-secondary text-lg" />
              <FaStar className="text-secondary text-lg" />
              <FaStar className="text-secondary text-lg" />
              <FaStar className="text-secondary text-lg" />
            </span>
          </div>
          <div className="flex mb-4">
            <span className="flex items-center text-sm mr-2">
              맛<FaStar className="text-secondary" />
              {/* {data.avgTaste} */}
            </span>
            <span className="flex items-center text-sm mr-2">
              가격
              <FaStar className="text-secondary" />
              {/* {data.avgPrice} */}
            </span>
            <span className="flex items-center text-sm mr-2">
              서비스
              <FaStar className="text-secondary" />
              {/* {data.avgService} */}
            </span>
          </div>
          <p className="text-sm mb-2">방문목적</p>
          <p className="text-sm mb-2">분위기</p>
          <p className="text-sm mb-2">편의시설</p>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm mr-8">매우만족</p>
            <div className="bg-secondary w-28 h-3"></div>
          </div>
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm">만족</p>
            <div className="bg-secondary w-28 h-3"></div>
          </div>
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm">보통</p>
            <div className="bg-secondary w-28 h-3"></div>
          </div>
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm">불만</p>
            <div className="bg-secondary w-28 h-3"></div>
          </div>
          <div className="flex items-center justify-between mb-1">
            <p className="text-sm">매우불만</p>
            <div className="bg-secondary w-28 h-3"></div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between mt-4 mb-4">
        <div className="flex items-center">
          <span className="text-xl">😊</span>
        </div>
        <div className="">
          <p className="text-sm">
            이 음식점의 평가결과는 신뢰할 수 있을만큼 이루어졌습니다.
          </p>
          <p className="text-xs text-mediumGray">
            홍보 및 비방 등 부적절한 평가는 평점산정에서 제외될수있습니다.
          </p>
        </div>
        <button className="text-sm border border-black p-3">
          맛집 평가하고 300원까지 적립받기
        </button>
      </div>
      <Review
        review = {review} />
      <button className="bg-lightGray h-16 w-full rounded-lg flex items-center justify-center mt-4">
        더보기
        <CiCircleChevDown />
      </button>
    </div>
  );
}