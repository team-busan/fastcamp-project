import { useState } from "react";
import CustomBottomSheet from "../component/CustomBottomSheet";
import { FaLocationCrosshairs } from "react-icons/fa6";

export default function HomeContent() {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid place-items-center w-full h-full md:bg-[url('/img/fastdining_hero_bg.png')] md:bg-cover md:py-11">
      <div className="justify-center text-white text-center text-4xl leading-10 w-[387px] mt-10 md:mt-0">
        당신을 위한 <br />
        부산 추천 맛집
      </div>
      <div className="hidden md:flex self-stretch items-center gap-5 mt-10 ">
        <button
          onClick={() => setOpen(true)}
          className="justify-center text-white text-center text-lg leading-6 my-auto bg-primary flex items-stretch gap-3 px-9 py-2.5 rounded-[50px]"
        >
          다른지역 선택
        </button>
        <button className="justify-center text-white text-center text-lg leading-6 my-auto bg-secondary flex items-center gap-3 px-9 py-2.5 rounded-[50px]">
          <FaLocationCrosshairs /> 현위치로 설정
        </button>
      </div>
      <div className="flex md:hidden self-stretch items-center  gap-5 mt-10 ">
        <button
          onClick={() => setOpen(true)}
          className="justify-center text-white text-center text-lg leading-6 my-auto bg-primary flex items-stretch gap-3 px-9 py-2.5 rounded-[50px]"
        >
          다른선택
        </button>
        <button className="justify-center text-white text-center text-lg leading-6 my-auto bg-secondary flex items-center gap-3 px-9 py-2.5 rounded-[50px]">
          <FaLocationCrosshairs /> 현위치
        </button>
      </div>
      <CustomBottomSheet open={open} setOpen={setOpen} />
    </div>
  );
}
