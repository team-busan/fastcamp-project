import React from "react";
import { FaCircleChevronLeft } from "react-icons/fa6";

export default function LeftButton({onClick}) {
  return (
    <button className="hidden md:flex justify-center object-contain object-center w-[74px] text-stone-300 overflow-hidden self-center shrink-0 my-auto"
    onClick={onClick}>
      <FaCircleChevronLeft size="40" />
    </button>
  );
}
