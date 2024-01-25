import React from "react";
import HomeContent from "./HomeContent";
import { Link } from "react-router-dom";

export default function MbLocalFood() {
  return (
    <div className="bg-[url('./img/foodmain.jpg')] bg-cover flex-col overflow-hidden relative flex min-h-[327px] w-full items-stretch pb-8 px-5 md:hidden ">
      <div className=" relative flex w-full items-stretch justify-between gap-5 p-6">
        <Link to="/" className="justify-center text-primary text-2xl leading-8 tracking-wide flex-1">
          제목
        </Link>
        <Link to="/login" className="justify-center text-white text-center text-sm leading-4">
          로그인
        </Link>
        <Link to="/signup" className="justify-center text-white text-center text-sm leading-4">
          회원가입
        </Link>
      </div>
      <HomeContent />
    </div>
  );
}
