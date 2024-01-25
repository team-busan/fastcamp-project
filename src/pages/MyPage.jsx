import Navbar from '../component/Navbar'
import MyInfo from '../component/MyInfo'
import MyPageSection from '../component/MyPageSection'
import MyPageContent from '../component/MyPageContent'
import MyIntro from '../component/MyIntro'
import MbMPContent from '../component/MbMPContent'
import { useParams } from "react-router-dom";
import { axiosInstance, API_URL } from "../stores/API";
import { useState, useEffect } from "react";

export default function MyPage() {
  const params = useParams();
  const [userData, setUserData] = useState({});
  const [wishLists, setWishLists] = useState([])

  useEffect(() => {
    axiosInstance
      .get(API_URL.MYPAGE)
      .then((res) => {
        const listCopy = [...res.data.users];
        const user = listCopy.find((v) => v.username === params.username);
        setUserData(user);
        setWishLists(res.data.wishlists);
        console.log(userData);
      })
      .catch((error) => {
        console.log("MyPage", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <MyInfo my={userData} setMy={setUserData}/>
      {/* <MyIntro /> */}
      {/* <MyPageSection /> */}
      <MyPageContent list={wishLists} setList={setWishLists} />
      <MbMPContent />
    </div>
  )
}
