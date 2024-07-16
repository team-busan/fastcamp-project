import Column from "../component/Column";
import HomeRestaurantList from "../component/HomeTagList";
import LocalFoodPick from "../component/LocalFoodPick";
import Navbar from "../component/Navbar";
// import Search from "../component/Search";
import React, { useEffect, useState } from "react";
import { axiosInstance, API_URL } from "../stores/API";
import MbLocalFood from "../component/MbLocalFood";
import MbSearchBox from "../component/MbSearchBox";
import { useRecoilState } from "recoil";
import { isLoginAtom } from "../stores/atoms";

function Home() {
  const [articleListData, setArticleListData] = useState({});
  const [tagListData, setTagListData] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);

  useEffect(() => {
    axiosInstance
      .get("/articles/")
      .then((res) => {
        console.log(res.data);

        setArticleListData(res.data);
      })
      .catch((error) => {
        console.log("Home", error);
      });

    axiosInstance
      .get("/tags/")
      .then((res) => {
        console.log(res);
        setTagListData(res.data);
      }).catch((error) => {
        console.log("Home", error);
      });

    axiosInstance
      .get("/restaurants/")
      .then((res) => {
        console.log(res);
        setRestaurantData(res.data);
      }).catch((error) => {
        console.log("Home", error);
      });
  }, []);
  return (
    <div>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
      <div className="bg-lightGray ">
        <LocalFoodPick />
        <MbLocalFood isLogin={isLogin} setIsLogin={setIsLogin} />
        <div className="flex md:hidden">
          <MbSearchBox />
        </div>
        <Column articles={articleListData} />
        {tagListData.map((tag) => {
          const filteredList = restaurantData.filter((item) => {
            const _findTag = item.tags.find((v) => v.tag.name === tag.name);
            return _findTag;
          })
          if (!filteredList.length) {
            return <React.Fragment key={tag.id}></React.Fragment>;
          }
          return (
            <HomeRestaurantList 
            key={tag.id}
            tagname={tag.name} list={filteredList} />
          )
        })}
        <HomeRestaurantList tagname={"기타"} list={restaurantData.filter((item) => {
          return !item.tags.length;
        })} />
      </div>
      <div className="bg-lightGray h-[100px]"></div>
    </div>
  );
}

export default Home;
