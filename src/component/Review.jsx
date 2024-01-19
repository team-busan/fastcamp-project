import { useEffect, useState } from "react";
import { axiosInstance, API_URL } from "../stores/API";
import { FaStar } from "react-icons/fa";

export default function Review({ setData }) {
  const [restaurantList, setRestaurantList] = useState({});
  const review = restaurantList.review;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(API_URL.TAGDETAIL);
        setRestaurantList(res.data[0]);
      } catch (error) {
        console.error("데이터를 불러오는 중 에러 발생:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (review) {
      const totalRating = review.reduce(
        (accumulator, value) => {
          accumulator.taste += parseInt(value.rating.taste);
          accumulator.price += parseInt(value.rating.price);
          accumulator.service += parseInt(value.rating.service);
          return accumulator;
        },
        { taste: 0, price: 0, service: 0 }
      );

      const avgRating = {
        taste: totalRating.taste / review.length,
        price: totalRating.price / review.length,
        service: totalRating.service / review.length,
      };

      setData((prevData) => ({
        ...prevData,
        rating : ((avgRating.taste + avgRating.price + avgRating.service)/3).toFixed(1),
        avgTaste: avgRating.taste.toFixed(1),
        avgPrice: avgRating.price.toFixed(1),
        avgService: avgRating.service.toFixed(1),
        people: review.length,
      }));
    }
  }, [review, setData]);

  return (
    <div className="border-2 p-5">
      {review &&
        review.map((value, i) => (
          <div key={i}>
            <div className = "flex mb-2">
              <img
                className = "w-16 h-16 rounded-full mr-2"
                src={value.imgLink}
                alt={value.name} />
              <div>
                <p className = "font-bold">{value.name}</p>
                <div className="flex">
                  <FaStar className = "text-myblue text-lg"/>
                  <FaStar className = "text-myblue text-lg"/>
                  <FaStar className = "text-myblue text-lg"/>
                  <FaStar className = "text-myblue text-lg"/>
                  <FaStar className = "text-myblue text-lg"/>
                </div>
              </div>
            </div>
            <div>
              <main className="flex-column">
                <div className="flex mb-2">
                  <span className="flex items-center text-sm mr-2">
                    맛<FaStar className = "text-myblue"/>
                    {value.rating.taste}
                  </span>
                  <span className="flex items-center text-sm mr-2">
                    가격<FaStar className = "text-myblue"/>
                    {value.rating.price}
                  </span>
                  <span className="flex items-center text-sm mr-2">
                    서비스<FaStar className = "text-myblue"/>
                    {value.rating.service}
                  </span>
                </div>
                <div>
                  <p className = "text-sm mb-4">{value.text}</p>
                </div>
              <div className = "flex">
                {value.imgLinkList &&
                  value.imgLinkList.map((img, j) => (
                    <img
                      key={j}
                      src={img.imgLink}
                      alt={`optional_${j}`}
                      className="w-32 h-24"
                    />
                  ))}
              </div>
                <button className = "mt-4 mb-4 text-sm border border-black w-16 h-7">공감(0)</button>
              </main>
            </div>
          </div>
        ))}
    </div>
  );
}
