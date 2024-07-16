import Blog from "../component/Blog";
import Information from "../component/Information";
import { axiosInstance, API_URL } from "../stores/API";
import { useNavigate, useParams } from "react-router-dom";
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
import MbBlog from "../component/MbBlog";
import Navbar from "../component/Navbar";
import MbHeader from "../component/MbHeader";
import { useRecoilState } from "recoil";
import { isLoginAtom } from "../stores/atoms";

export default function Detail() {
  const params = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState({});
  const [review, setReview] = useState([]);
  const [blog, setBlog] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const averageRating = calculateAverageRating(review);
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);

  useEffect(() => {
    // axiosInstance
    //   .get(API_URL.DETAIL)
    //   .then((res) => {
    //     const data = res.data.restaurant.find((v) => {
    //       return v.id === Number(params.id);
    //     });
    //     if (data) {
    //       setRestaurant(data);
    //     }
    //     const data2 = res.data.review.filter((v) => {
    //       return v.restaurant_id === Number(params.id);
    //     });
    //     if (data2) {
    //       setReview(data2);
    //     }
    //     const data3 = res.data.blogview.filter((v) => {
    //       return v.restaurant_id === Number(params.id);
    //     });
    //     if (data3) {
    //       setBlog(data3);
    //     }
    //     const userId = 1; 

    //     const currentUser = res.data.users.find((user) => user.id === userId);
    //     if (currentUser && Array.isArray(currentUser.wishlist)) {
    //       setWishlist(currentUser.wishlist);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });
    axiosInstance.get(`/restaurants/${params.id}`)
      .then((res) => {
        setRestaurant(res.data);
      })
  }, [params.id]);

  function calculateAverageRating(reviews) {
    if (reviews.length === 0) {
      return 0;
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;
    return averageRating;
  }

  return (
    <div>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
      <div className="hidden md:flex md:flex-row md:center md:w-screen md:justify-center bg-lightGray">
        <div className="bg-white p-3 h-80 mt-5 mr-5">
          <NaverMap width="14rem" height="h-56" />
          <div className="mt-3">
            <p className="font-bold">{restaurant.address}</p>
            <p className="cursor-pointer" onClick={() => navigate("/search")}>맛집 더 검색해보기</p>
          </div>
        </div>
        <main className="w-4/12 mt-5">
          <Title restaurant={restaurant} wishlist={wishlist} setWishlist={setWishlist} />
          <Information restaurant={restaurant} />
          {/* <RecommendedRestaurants /> */}
          <VisitRating review={review} averageRating={averageRating} />
          <Blog blog={blog} />
        </main>
      </div>
      <div className=" md:hidden md:flex-col md:items-center md:w-screen bg-slate-50">
        <MbHeader restaurant={restaurant} goBack={() => {
          navigate(-1)
        }} />
        <MbTitle
          restaurant={restaurant}
          review={review}
          averageRating={averageRating}
        />
        <MbInformation
          restaurant={restaurant} />
        <MbMenu
          restaurant={restaurant} />
        <MbLocation />
        <MbTag
          title="# 맛집태그"
          tagdata={restaurant?.tags ? restaurant.tags.map((item) => item.tag.name) : null} />
        <MbTag
          title="# 키워드"
          tagdata={restaurant?.keywords ? restaurant.keywords.map((item) => item.keyword.name) : null} />
        {/* <MbTag
          title="# 카테고리"
          tagdata={restaurant?.cuisine_types ? restaurant.cuisine_types.map((item) => item.cuisine_type.name) : null} /> */}
        <MbVisitRating
          averageRating={averageRating}
          review={review}
          restaurant={restaurant}
        />
        <MbBlog
          blog={blog} />
      </div>
    </div>
  );
}
