import { useState, useEffect } from "react";
import { axiosInstance, API_URL } from "../stores/API";

function RestaurantList() {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    axiosInstance.get(API_URL.TAGDETAIL).then((res) => {
      setRestaurantList(res.data);
    });
  }, []);
  return (
    <ul>
      {restaurantList.map((v, i) => {
        return (
          <li key={i}>
            <img src={v.imgLink} />
            <p>{v.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default RestaurantList;
