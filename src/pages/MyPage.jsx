import Navbar from '../component/Navbar'
import MyInfo from '../component/MyInfo'
import MyPageContent from '../component/MyPageContent'
import { useParams } from "react-router-dom";
import { axiosInstance, API_URL } from "../stores/API";
import { useState, useEffect } from "react";
import MypageNav from '../component/MypageNav';

export default function MyPage() {
  const params = useParams();
  const [userData, setUserData] = useState({});
  const [wishlist, setWishList] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(API_URL.MYPAGE)
      .then((res) => {
        const listCopy = [...res.data.users];
        const user = listCopy.find((v) => v.username === params.username);
        setUserData(user);
        let listCopy2 = [...res.data.restaurant];
        let wishs = listCopy2.filter((v)=> user.wishlist.includes(v.id));
        setWishList(wishs);
      })
      .catch((error) => {
        console.log("MyPage", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <MypageNav />
      <MyInfo my={userData} setMy={setUserData}/>
      <MyPageContent list={wishlist} setList={setWishList} />
    </div>
  )
}
