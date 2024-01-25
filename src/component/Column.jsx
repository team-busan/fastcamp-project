import React, { useState, useEffect } from "react";
import LeftButton from "./LeftButton";
import DetailButton from "./DetailButton";
import RightButton from "./RightButton";
import { axiosInstance, API_URL } from "../stores/API";

export default function Column() {

  const [articleData, setArticleData] = useState({});

  useEffect(() => {
    axiosInstance
      .get(API_URL.ARTICLE).then((res) => {
        
        setArticleData(res.data[0]);
        console.log(articleData)
      })
      .catch((error) => {
        console.log("Column", error);
      });
  }, []);

  if (!articleData) {
    return <div>loading...</div>;
  }
  return (
    <div className="flex items-stretch justify-between gap-5 ml-5 mr-4 mt-14 ">
      <LeftButton />
      <div className=" flex grow basis-[0%] flex-col items-stretch pb-12 rounded-[50px]">
        <div className="bg-white md:bg-neutral-100 flex w-full items-center justify-between gap-5 pl-6 pr-12 py-7 rounded-[40px_40px_0px_0px]">
          <div className="justify-center text-black text-2xl leading-8 my-auto">
            추천 칼럼
          </div>
          <DetailButton />
        </div>
        <div className="flex-col overflow-hidden self-stretch relative flex min-h-[355px] items-stretch bg-white">
          <div className=" justify-end text-3xl font-semibold leading-9 relative mt-24  ml-10 ">
            {articleData.title}
          </div>
          <div className=" justify-center text-xl leading-6 relative mt-8 ml-10 mr-10">
            {articleData.content}
          </div>
        </div>
      </div>
      <RightButton />
    </div>
  );
}
