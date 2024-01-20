import React from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function DetailButton() {
  return (
    <button className="bg-white text-blue-500 text-base md:bg-zinc-300 self-stretch flex items-center justify-between gap-0.5 pl-6 pr-2.5 py-2.5 rounded-[50px] text-center md:text-black  md:text-lg leading-6 my-auto">
      자세히보기 <FaAngleRight />
    </button>
  );
}