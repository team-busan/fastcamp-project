import { useState, useEffect } from "react";
import { axiosInstance, API_URL } from "../stores/API";
import { MdOutlineStar, MdFavoriteBorder } from "react-icons/md";

function RestaurantList({ upperElementHeight }) {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    axiosInstance.get(API_URL.TAGDETAIL).then((res) => {
      setRestaurantList(res.data);
    });
  }, []);
  return (
    <ul
      className="overflow-y-scroll no-scrollbar"
      style={{ maxHeight: `calc(100vh - ${upperElementHeight})` }}
    >
      {restaurantList.map((v, i) => {
        return (
          <li
            key={i}
            className="mx-5 py-5 border-b-[1px] border-lightGray hover:bg-lightGray hover:mx-0 hover:px-5 cursor-pointer"
          >
            <div>
              <div className="flex">
                <img src={v.imgLink} className="rounded-2xl w-24 h-24" />
                <div className="ml-5 w-full">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <h5 className="font-bold mr-1">{v.name}</h5>
                      <span className="font-bold text-darkGray">
                        {v.location}
                      </span>
                    </div>
                    <span className="text-xs">{v.distance}</span>
                  </div>
                  <div>
                    {v.category.map((v2, i2) => {
                      if (i2 === v.category.length - 1) {
                        return (
                          <span className="text-sm text-darkGray" key={i2}>
                            {v2}
                          </span>
                        );
                      } else {
                        return (
                          <span
                            className="text-sm text-darkGray"
                            key={i2}
                          >{`${v2}, `}</span>
                        );
                      }
                    })}
                  </div>
                  <div className="truncate">
                    {v.tags.map((v2, i2) => {
                      if (i2 === v.tags.length - 1) {
                        return (
                          <span
                            className="text-sm text-mediumGray"
                            key={i2}
                          >{`#${v2}`}</span>
                        );
                      } else {
                        return (
                          <span
                            className="text-sm text-mediumGray"
                            key={i2}
                          >{`#${v2}, `}</span>
                        );
                      }
                    })}
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary text-sm font-medium">
                      {v.score}
                    </span>
                    <span className=" text-sm font-medium">점</span>
                    <div className="w-px h-2 mx-2 bg-mediumGray"></div>
                    <MdOutlineStar className="text-lg text-yellow-400 mr-1" />
                    <span className=" text-sm font-medium">{`${v.rating}명 (${v.gaveRatingPeopleNum}명)`}</span>
                    <div className="w-px h-2 mx-2 bg-mediumGray"></div>
                    <MdFavoriteBorder className="text-lg text-mediumGray mr-1" />
                    <span className="text-sm font-medium">{v.favorite}</span>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex">
                  <span className="text-sm text-darkGray">{'"'}</span>
                  <p className="text-sm text-darkGray truncate">
                    {v.lastComment.comment}
                  </p>
                  <span className="text-sm text-darkGray">{'"'}</span>
                </div>
                <div className="flex justify-between">
                  <div>
                    <span className="text-sm">{v.gaveRatingPeopleNum}</span>
                    <span className="text-sm text-mediumGray">
                      명이 추천했습니다.
                    </span>
                  </div>
                  <span className="text-sm">by.{v.lastComment.commenter}</span>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default RestaurantList;
