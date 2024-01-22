import { useEffect, useState } from "react";
import { axiosInstance, API_URL } from "../stores/API";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { FaStar} from "react-icons/fa";

export default function MbTitle() {
  useEffect(() => {
    axiosInstance.get(API_URL.TAGDETAIL).then((res) => {
      setRestaurantList(res.data[0]);
    });
  }, []);

  const [restaurantList, setRestaurantList] = useState({});

  return (
      <header className = "flex-column bg-slate-100">
        <div className = "flex">
          <div>
            <h3>{restaurantList.name}</h3>
            <p>{restaurantList.location} | {restaurantList.category}
            </p>
          </div>
          <div><FaRegShareFromSquare/></div>
        </div>
        <div className = "flex">
          <span className="flex">
            <FaStar className="text-lg text-myblue mb-4" />
            <FaStar className="text-lg text-myblue" />
            <FaStar className="text-lg text-myblue" />
            <FaStar className="text-lg text-myblue" />
            <FaStar className="text-lg text-myblue" />
          </span>
          <p>{restaurantList.rating}</p>
          <p>({restaurantList.gaveRatingPeopleNum}명)</p>
          <span className="font-bold text-lg mr-2 mb-4">
            {restaurantList.score}점
          </span>
        </div>
      </header>
  )
}
