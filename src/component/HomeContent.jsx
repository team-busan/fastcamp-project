import { useState } from "react";
import CustomBottomSheet from "../component/CustomBottomSheet";
import { FaLocationCrosshairs } from "react-icons/fa6";

export default function HomeContent() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="justify-center text-white text-center text-4xl leading-10 w-[387px]">
        당신을 위한 <br />
        부산 추천 맛집
      </div>
      <div className="self-stretch flex items-center  gap-5 mt-10 ">
        <button
          onClick={() => setOpen(true)}
          className="justify-center text-white text-center text-lg leading-6 my-auto bg-primary flex items-stretch gap-3 px-9 py-2.5 rounded-[50px]"
        >
          다른지역 선택
        </button>
        <button className="justify-center text-white text-center text-lg leading-6 my-auto bg-myblue flex items-center gap-3 px-9 py-2.5 rounded-[50px]">
          <FaLocationCrosshairs /> 현위치로 설정
        </button>
      </div>
      <CustomBottomSheet open={open} setOpen={setOpen} />
    </div>
  );
}
