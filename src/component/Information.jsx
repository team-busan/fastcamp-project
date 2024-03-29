import { useEffect, useState } from "react";
import { CiClock1, CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import PropTypes from "prop-types";
import useCurrentDate from "../hooks/useCurrentDate";

export default function Information({ restaurant }) {
  const [ismenu, setIsmenu] = useState(false);
  const {currentDate, currentDayOfWeek} = useCurrentDate();

  const toggleMenu = () => {
    setIsmenu(!ismenu);
  };

  return (
    <div className="bg-white p-5 mb-4">
      <div className="flex justify-between mb-4">
        <h3 className="font-bold">영업시간</h3>
        <p className="flex items-center text-secondary text-sm">
          <CiClock1 />
          영업 중
        </p>
      </div>
      <div className="">
        <div className="flex justify-between">
          <span className="font-bold text-sm">[오늘]{currentDate}({currentDayOfWeek})</span>
          <span className="text-sm mb-4 ">영업시간 : 11:00 - 22:00</span>
        </div>
        <div>
          <p className="flex justify-end text-sm mb-4">라스트오더:21:30</p>
        </div>
      </div>
      <div>
        <ul>
          {restaurant.cuisine &&
            restaurant.cuisine.slice(0, 3).map((value, i) => (
              <li key={i}>
                <div className="flex justify-between text-sm mb-3">
                  <span>{value.food}</span>
                  <span>{value.price}</span>
                </div>
              </li>
            ))}
          {ismenu &&
            restaurant.cuisine.slice(3).map((value, i) => {
              return (
                <li key={i}>
                  <div className="flex justify-between text-sm mb-3">
                    <span>{value.food}</span>
                    <span>{value.price}</span>
                  </div>
                </li>
              );
            })}
        </ul>
        <div className="flex justify-end text-sm">
          {ismenu ? (
            <button className="flex items-center mb-4" onClick={toggleMenu}>
              접기
              <CiCircleChevUp />
            </button>
          ) : (
            <button className="flex items-center mb-4" onClick={toggleMenu}>
              더보기
              <CiCircleChevDown />
            </button>
          )}
        </div>
        <hr />
        <div className="">
          <h3 className="font-bold mt-4 mb-4">맛집태그</h3>
          <div className="h-40">
          <div>
            {restaurant.category &&
              restaurant.category.map((value, i) => (
                <span
                  key={i}
                  style={{ fontSize: `${Math.floor(Math.random() * 20 + 10)}px` }}
                  className = ""
                >
                  {value}
                </span>
              ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
