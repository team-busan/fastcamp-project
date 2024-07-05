import Navbar from '../component/Navbar'
import MyInfo from '../component/MyInfo'
import MyPageContent from '../component/MyPageContent'
import { useParams } from "react-router-dom";
import { axiosInstance, API_URL } from "../stores/API";
import { useState, useEffect } from "react";
import MypageNav from '../component/MypageNav';
import { useRecoilState } from 'recoil';
import { accessTokenAtom } from '../stores/atoms';

export default function MyPage() {
  const params = useParams();
  const [userData, setUserData] = useState({});
  const [wishlist, setWishList] = useState([]);

  const [accessToken, _] = useRecoilState(accessTokenAtom)

  useEffect(() => {
    if (!accessToken) {
      console.log(accessToken);
      alert("로그인이 필요합니다.");
      return;
    }

    axiosInstance
      .get(API_URL.WHOAMI, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        // const listCopy = [...res.data.users];
        // const user = listCopy.find((v) => v.username === params.username);
        // setUserData(user);
        // let listCopy2 = [...res.data.restaurant];
        // let wishs = listCopy2.filter((v)=> user.wishlist.includes(v.id));
        // setWishList(wishs);

        // console.log(res.data)
        setUserData(res.data);
      })
      .catch((error) => {
        console.log("MyPage", error);
      });
  }, [accessToken]);

  return (
    <div>
      <Navbar />
      <MypageNav />
      {userData ? <div>
        <MyInfo my={userData} setMy={setUserData} />
        <MyPageContent list={wishlist} setList={setWishList} />
      </div> : <div>loading...</div>}
    </div>
  )
}
