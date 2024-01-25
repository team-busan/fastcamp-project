import Column from "../component/Column";
import HomeTagList from "../component/HomeTagList";
import LocalFoodPick from "../component/LocalFoodPick";
import Navbar from "../component/Navbar";
// import Search from "../component/Search";
import { useEffect, useState } from "react";
import { axiosInstance, API_URL } from "../stores/API";
import MbLocalFood from "../component/MbLocalFood";

function Home() {
  const [articleData, setArticleData] = useState({});
  const [tagListData, setTagListData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(API_URL.HOME).then((res) => {
        
        setArticleData(res.data.articles[0]);
        setTagListData(res.data.tagList);
      })
      .catch((error) => {
        console.log("Home", error);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="bg-lightGray ">
      <LocalFoodPick />
      <MbLocalFood />
      <Column article={articleData} setArticle={setArticleData}/>
      <HomeTagList list={tagListData} setList={setTagListData}/>
      </div>
    </div>
  );
}

export default Home;
