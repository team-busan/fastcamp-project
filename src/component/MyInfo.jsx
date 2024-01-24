import React from 'react'
import { useParams } from 'react-router-dom';
import { axiosInstance, API_URL } from "../stores/API";
import { useState, useEffect } from "react";

export default function MyInfo() {
    const params = useParams();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        axiosInstance
        .get(API_URL.MYPAGE).then((res) => {
            const listCopy = [...res.data];
            const user = listCopy.find((v) => v.username === params.username);
            setUserData(user);
            console.log(userData);
            })
            .catch((error) => {
            console.log("HomeTagList", error);
            });
        }, []);

        if (!userData) {
        return <div>loading...</div>;
        }
    
    return (
        <div className="gap-5 flex flex-col md:flex-row place-items-center bg-white md:bg-zinc-100 bg-opacity-90 w-full px-20 py-9">
            <div className="md:flex flex-col grid  justify-center items-center  w-[22%] ">
                <img src='/img/profile.jpeg' className="aspect-square object-center w-[127px] overflow-hidden shrink-0  object-cover max-w-full rounded-[50%]" />
            </div>
            <div className="flex flex-col items-stretch w-[78%] ml-5 max-md:w-full my-auto">
                <div className="text-center  md:text-left justify-end text-black text-3xl font-semibold leading-9 mix-blend-multiply max-md:max-w-full">
                {userData.username}
                </div>
                <div className="md:flex text-center  md:text-left  text-black text-xl leading-6 mt-14 max-md:max-w-full max-md:mt-10">
                {userData.intro}
                </div>
            </div>
        </div>
        <div className="hidden md:flex text-center  md:text-left  text-black text-xl leading-6 mt-14 max-md:max-w-full max-md:mt-10">
          {data.intro}
        </div>
      </div>
    </div>
  );
}
