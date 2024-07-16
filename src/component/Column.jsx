import React, { useState } from "react";
import LeftButton from "./LeftButton";
import DetailButton from "./DetailButton";
import RightButton from "./RightButton";

export default function Column({ articles }) {
  const [current, setCurrent] = useState(0);

  if (!articles) {
    return <div>loading...</div>;
  }

  const article = articles[current];

  if (!article) {
    return null;
  }

  return (
    <div className="flex justify-between gap-5 ml-5 mr-4 mt-14 ">
      {current > 0 ? <LeftButton onClick={() => { setCurrent(current - 1) }} /> : <div className="hidden md:flex justify-center object-contain object-center w-[74px]"></div>}
      <div key={article.id} className="flex grow basis-[0%] flex-col items-stretch pb-12 rounded-[50px]">
        <div className="bg-neutral-100 flex w-full items-center justify-between gap-5 pl-6 pr-12 py-7 rounded-[40px_40px_0px_0px]">
          <div className="justify-center text-black text-2xl leading-8 my-auto">
            추천 칼럼
          </div>
          {/* <DetailButton /> */}
        </div>
        <div className="flex md:hidden relative flex-col overflow-hidden self-stretch min-h-[355px] items-stretch bg-white rounded-[0px_0px_40px_40px]">
          <div className="absolute flex flex-col w-full h-full">
            <img src={article.image && "str".includes(article.image) ? article.image : "https://placehold.co/300x300?text=image"} className="h-full w-full object-cover object-center" />
          </div>
          <div className="absolute flex flex-col w-full h-full bg-black opacity-40"></div>

          <div className="justify-end text-white text-2xl font-semibold leading-9 relative mt-28 ml-10 ">
            <a href={article.url} target="_blank" rel="noreferrer">{article.title}</a>
          </div>
          <div className="justify-center text-white text-lg leading-6 relative mt-8 ml-10 mr-10">
            <a href={article.url} target="_blank" rel="noreferrer">{article.preview_content.length > 60 ? article.preview_content.slice(0, 60) + "..." : article.preview_content}</a>
          </div>
        </div>

        <div className="hidden md:flex relative flex-row overflow-hidden self-stretch min-h-[355px] items-stretch bg-white rounded-[0px_0px_40px_40px]">
          <div className="flex flex-col w-1/3 aspect-square">
            <img src={article.image && "str".includes(article.image) ? article.image : "https://placehold.co/300x300?text=image"} className="h-full w-full object-cover object-center" />
          </div>

          <a href={article.url} target="_blank" rel="noreferrer">
            <div className="mt-10 ml-10 mr-10">
              <div className="justify-end text-3xl font-semibold leading-9 relative">
                {article.title}
              </div>
              <div className="justify-center text-xl leading-6 relative mt-8">
                {article.preview_content.length > 120 ? article.preview_content.slice(0, 120) + "..." : article.preview_content}
              </div>
            </div>
          </a>
        </div>
      </div>
      {current < articles.length - 1 ? <RightButton onClick={() => { setCurrent(current + 1) }} /> : <div className="hidden md:flex justify-center object-contain object-center w-[74px]"></div>}
    </div>
  );
}
