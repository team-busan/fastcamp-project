import React from "react";
import HomeContent from "./HomeContent";

export default function MbLocalFood() {
  return (
    <div className="bg-[url('./img/foodmain.jpg')] bg-cover flex-col overflow-hidden relative flex min-h-[327px] w-full items-stretch pb-8 px-5 md:hidden ">
      <div className=" relative flex w-full items-stretch justify-between gap-5 p-6">
        <div className="justify-center text-cyan-500 text-2xl leading-8 tracking-wide flex-1">
          다이닝코드
        </div>
        <div className="justify-center text-white text-center text-sm leading-4">
          로그인
        </div>
        <div className="justify-center text-white text-center text-sm leading-4">
          회원가입
        </div>
      </div>
      <HomeContent />
    </div>
  );
}
