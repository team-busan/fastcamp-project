import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineStar, MdFavoriteBorder } from "react-icons/md";

function RestaurantList({
  list,
  setList,
  reviews,
  users,
  upperElementHeight,
  tag,
}) {
  useEffect(() => {
    let restaurantListCopy;
    if (tag === "none") {
      restaurantListCopy = [...list];
    } else {
      restaurantListCopy = [...list].filter((v) => v.tags.includes(tag));
    }
    for (let i = 0; i < restaurantListCopy.length; i++) {
      const filteredReview = reviews.filter(
        (v) => v.restaurant_id === restaurantListCopy[i].id
      );
      let wishListCount = 0;
      for (let j = 0; j < users.length; j++) {
        for (let k = 0; k < users[j].wishlist.length; k++) {
          if (users[j].wishlist[k] === restaurantListCopy[i].id) {
            wishListCount++;
          }
        }
      }
      restaurantListCopy[i].reviewCount = filteredReview.length;
      if (filteredReview.length !== 0) {
        restaurantListCopy[i].lastComment = {
          name: filteredReview[filteredReview.length - 1].name,
          comment: filteredReview[filteredReview.length - 1].comment,
        };
      }
      restaurantListCopy[i].wishListCount = wishListCount;
    }
    setList(restaurantListCopy);
  }, [reviews, users]);
  return (
    <ul
      className="overflow-y-scroll no-scrollbar"
      style={{ maxHeight: `calc(100vh - ${upperElementHeight})` }}
    >
      {list.map((v, i) => {
        return (
          <li
            key={i}
            className="mx-5 py-5 border-b-[1px] border-lightGray hover:bg-lightGray hover:mx-0 hover:px-5 cursor-pointer"
          >
            <Link to={`/detail/${v.id}`}>
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
                      <span className="text-xs">
                        {v.distance >= 1000
                          ? `${v.distance / 1000}km`
                          : `${v.distance}m`}
                      </span>
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
                      <MdOutlineStar className="text-lg text-yellow-400 mr-1" />
                      <span className=" text-sm font-medium">{`${v.rating} (${
                        v.reviewCount ? v.reviewCount : 0
                      }명)`}</span>
                      <div className="w-px h-2 mx-2 bg-mediumGray"></div>
                      <MdFavoriteBorder className="text-lg text-mediumGray mr-1" />
                      <span className="text-sm font-medium">
                        {v.wishListCount ? v.wishListCount : 0}
                      </span>
                    </div>
                  </div>
                </div>
                {v.lastComment && (
                  <>
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
                          <span className="text-sm">{v.reviewCount}</span>
                          <span className="text-sm text-mediumGray">
                            명이 추천했습니다.
                          </span>
                        </div>
                        <span className="text-sm">by.{v.lastComment.name}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default RestaurantList;
