import { useEffect, useState } from "react";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { FaStar} from "react-icons/fa";

export default function MbTitle({restaurant}) {

  return (
      <header className = "flex-column bg-slate-100">
        <div className = "flex">
          <div>
            <img 
              src = {restaurant.imgLink}
              alt = "error"/>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.location} | {restaurant.category}
            </p>
          </div>
        </div>
        <div className = "flex">
          <span className="flex">
            <FaStar className="text-lg text-myblue mb-4" />
            <FaStar className="text-lg text-myblue" />
            <FaStar className="text-lg text-myblue" />
            <FaStar className="text-lg text-myblue" />
            <FaStar className="text-lg text-myblue" />
          </span>
          <p>{restaurant.rating}</p>
          <p>(4명)</p>
          <span className="font-bold text-lg mr-2 mb-4">
            {restaurant.rating}점
          </span>
        </div>
      </header>
  )
}
