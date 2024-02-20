import { FaStar } from "react-icons/fa";
import Review from "./Review";
import { useState } from "react";
import { CiCircleChevDown } from "react-icons/ci";

export default function VisitRating({ review, averageRating }) {
  const [visibleReviews, setVisibleReviews] = useState(3); 

  const showMoreReviews = () => {
    setVisibleReviews(prevVisibleReviews => prevVisibleReviews + 2);
  };

  return (
    <div className="bg-white p-5 mb-4">
      <div className="flex">
        <h3 className="font-bold mb-4">{review.length}건의 방문자 평가</h3>
        <div className="flex items-center mb-2 ml-2">
          <span className="flex">
            <FaStar className="text-secondary text-lg" />
            <FaStar className="text-secondary text-lg" />
            <FaStar className="text-secondary text-lg" />
            <FaStar className="text-secondary text-lg" />
            <FaStar className="text-secondary text-lg" />
          </span>
          <p className="font-bold mr-4 ml-2">{averageRating.toFixed(1)}</p>
        </div>
      </div>
      <hr />
      <div className="flex-row justify-between mt-2 mb-4">
        <div className="flex flex-row mb-2">
          <div className="text-4xl">😊</div>
          <div className="flex-col">
            <p className="text-sm">
              이 음식점의 평가결과는 신뢰할 수 있을만큼 이루어졌습니다.
            </p>
            <p className="text-xs text-mediumGray">
              홍보 및 비방 등 부적절한 평가는 평점산정에서 제외될수있습니다.
            </p>
          </div>
        </div>
        <button className="text-sm border w-full border-black p-3">
          맛집 평가하고 300원까지 적립받기
        </button>
      </div>
      <Review review={review} visibleReviews={visibleReviews} />
      <button className="bg-lightGray h-16 w-full rounded-lg flex items-center justify-center mt-4" onClick={showMoreReviews}>
        더보기
        <CiCircleChevDown />
      </button>
    </div>
  );
}