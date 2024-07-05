import Navbar from '../component/Navbar'
import MyInfo from '../component/MyInfo'
import MyPageContent from '../component/MyPageContent'
import { useParams } from "react-router-dom";
import { axiosInstance, API_URL } from "../stores/API";
import { useState, useEffect } from "react";
import MypageNav from '../component/MypageNav';

export default function UserPage() {
    const params = useParams();
    const [userData, setUserData] = useState(null);
    const [wishlist, setWishList] = useState([]);

    useEffect(() => {
        axiosInstance
            .get(`${API_URL.USERS}/${params.id}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                // const listCopy = [...res.data.users];
                // const user = listCopy.find((v) => v.username === params.username);
                // setUserData(user);
                // let listCopy2 = [...res.data.restaurant];
                // let wishs = listCopy2.filter((v)=> user.wishlist.includes(v.id));
                // setWishList(wishs);

                console.log(res.data)
                setUserData(res.data);

            })
            .catch((error) => {
                console.log("UserPage", error);
            });
    }, []);

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
