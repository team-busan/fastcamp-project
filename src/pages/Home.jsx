import Column from "../component/Column";
import HomeTagList from "../component/HomeTagList";
import LocalFoodPick from "../component/LocalFoodPick";
import Navbar from "../component/Navbar";
// import Search from "../component/Search";
import { useEffect, useState } from "react";
import { axiosInstance, API_URL } from "../stores/API";
import MbLocalFood from "../component/MbLocalFood";
import MbSearchBox from "../component/MbSearchBox";
import { useRecoilState } from "recoil";
import { isLoginAtom } from "../stores/atoms";

function Home() {
  const [articleListData, setArticleListData] = useState({});
  const [tagListData, setTagListData] = useState([]);
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
      .get("/restaurants/")
      .then((res) => {
        console.log(res);
        setTagListData(res.data);
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
        <HomeTagList tagname={"가족외식"} list={tagListData} />
      </div>
      <div className="bg-lightGray h-[100px]"></div>
    </div>
  );
}

export default Home;
