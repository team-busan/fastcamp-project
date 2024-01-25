import Blog from "../component/Blog";
import Information from "../component/Information";
import { axiosInstance, API_URL } from "../stores/API";
import { useParams } from "react-router-dom";
import NaverMap from "../component/NaverMap";
import RecommendedRestaurants from "../component/RecommendedRestaurants";
import Title from "../component/Title";
import VisitRating from "../component/VisitRating";
import { useEffect, useState } from "react";
import MbTitle from "../component/MbTitle";
import MbInformation from "../component/MbInformation";
import MbMenu from "../component/MbMenu";
import MbLocation from "../component/MbLocation";
import MbTag from "../component/MbTag";
import MbVisitRating from "../component/MbVisitRating";

export default function Detail() {
  const params = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [review, setReview] = useState([]);
  const [blog, setBlog] = useState([]);
  const averageRating = calculateAverageRating(review);

  useEffect(() => {
    axiosInstance
      .get(API_URL.DETAIL)
      .then((res) => {
        const data = res.data.restaurant.find((v) => {
          return v.id === Number(params.id);
        });
        if (data) {
          setRestaurant(data);
        }
        const data2 = res.data.review.filter((v) => {
          return v.restaurant_id === Number(params.id);
        });
        if (data2) {
          setReview(data2);
        }
        const data3 = res.data.blogview.filter((v) => {
          return v.restaurant_id === Number(params.id);
        });
        if (data3) {
          setBlog(data3);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function calculateAverageRating(reviews) {
    if (reviews.length === 0) {
      return 0;
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;
    return averageRating;
  }

  return (
    <>
      <div className="hidden md:flex md:flex-row md:center md:w-screen md:justify-evenly bg-lightGray">
        <NaverMap width="14rem" height="h-56" />
        <main className="w-6/12">
          <Title restaurant={restaurant} />
          <Information restaurant={restaurant} />
          {/* <RecommendedRestaurants /> */}
          <VisitRating review={review} averageRating={averageRating} />
          <Blog blog={blog} />
        </main>
      </div>
      <div className=" md:hidden md:flex-col md:items-center md:w-screen bg-slate-50">
        <MbTitle
          restaurant={restaurant}
          review={review}
          averageRating={averageRating}
        />
        <MbInformation restaurant={restaurant} />
        <MbMenu restaurant={restaurant} />
        <MbLocation />
        <MbTag restaurant={restaurant} />
        <MbVisitRating averageRating={averageRating} review={review} />
      </div>
    </>
  );
}
