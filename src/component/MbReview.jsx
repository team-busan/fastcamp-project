import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import { FaStar } from "react-icons/fa";

export default function MbReview({ review, restaurant }) {
  const [expandedComments, setExpandedComments] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState(2); 

  // Slick settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1, 
    adaptiveHeight: true,
  };

  const toggleComment = (index) => {
    setExpandedComments((prevExpandedComments) => {
      const newExpandedComments = [...prevExpandedComments];
      newExpandedComments[index] = !newExpandedComments[index];
      return newExpandedComments;
    });
  };

  const loadMoreReviews = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 2);
  };

  return (
    <div className="mt-3">
      {review.length !== 0 &&
        review.slice(0, visibleReviews).map((value, i) => (
          <div className="mb-3" key={i}>
            <div className="flex mb-3">
              <div>
                <img
                  className="w-16 h-16 rounded-full mr-2"
                  src={value.imgLink}
                  alt={value.name}
                />
              </div>
              <div>
                <h4 className="font-bold">{value.name}</h4>
              </div>
            </div>
            <div>
              <Slider {...settings}>
                {value.imgLinkList &&
                  value.imgLinkList.map((img, j) => (
                    <div key={j} className="relative">
                      <img
                        src={img.imgLink}
                        alt="error"
                        className="w-full h-72"
                      />
                      <span
                        className="rounded-sm absolute right-3 top-2 w-10 text-center"
                        style={{
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          color: 'white'
                        }}>
                        {`${j + 1}/${value.imgLinkList.length}`}
                      </span>
                    </div>
                  ))}
              </Slider>
            </div>
            <div className="flex justify-between items-center mt-3">
              <span className="flex">
                <FaStar className="text-secondary text-lg" />
                <FaStar className="text-secondary text-lg" />
                <FaStar className="text-secondary text-lg" />
                <FaStar className="text-secondary text-lg" />
                <FaStar className="text-secondary text-lg" />
              </span>
              <div className="flex">
                <p className="mr-2">{restaurant.address}</p>
                <p>{new Intl.DateTimeFormat('ko-KR').format(new Date(value.created_at))}</p>
              </div>
            </div>
            <p>
              {expandedComments[i] ? value.comment : value.comment.substring(0, 100) + "..."}
              {value.comment.length > 100 && (
                <span onClick={() => toggleComment(i)}>
                  {expandedComments[i] ? ' 간략히 보기' : ' 더보기'}
                </span>
              )}
            </p>
          </div>
        ))}
      {review.length > visibleReviews && (
        <button className="bg-lightGray flex justify-center items-center w-full border-black p-3 rounded-lg" onClick={loadMoreReviews}>
          더보기
        </button>
      )}
    </div>
  );
}
