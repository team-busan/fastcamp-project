import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from 'prop-types';

export default function Review({ review, visibleReviews }) {
  return (
    <div className="">
      {review.slice(0, visibleReviews).map((value, i) => (
        <div className="border border-2 mb-2 p-5" key={i}>
          <div className="flex mb-2">
            <img
              className="w-16 h-16 rounded-full mr-2"
              src={value.imgLink}
              alt={value.name}
            />
            <div>
              <p className="font-bold">{value.name}</p>
              <div className="flex">
                <FaStar className="text-secondary text-lg" />
                <FaStar className="text-secondary text-lg" />
                <FaStar className="text-secondary text-lg" />
                <FaStar className="text-secondary text-lg" />
                <FaStar className="text-secondary text-lg" />
              </div>
            </div>
          </div>
          <div>
            <main className="flex-column">
              <div>
                <p className="text-sm mb-4">{value.comment}</p>
              </div>
              <div className="flex">
                {value.imgLinkList &&
                  value.imgLinkList.map((img, j) => (
                    <img
                      key={j}
                      src={img.imgLink}
                      alt={`optional_${j}`}
                      className="w-2/6 h-32"
                    />
                  ))}
              </div>
              <button className="mt-4 mb-4 text-sm border border-black w-16 h-7">
                공감(0)
              </button>
            </main>
          </div>
        </div>
      ))}
    </div>
  );
}

Review.propTypes = {
  review: PropTypes.array.isRequired,
  visibleReviews: PropTypes.number.isRequired,
};