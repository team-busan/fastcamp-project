import React from "react";
import { FaCircleChevronRight } from "react-icons/fa6";

export default function RightButton() {
  return (
    <button className="hidden md:flex  object-contain object-center w-[74px] justify-center text-stone-300 overflow-hidden self-center shrink-0 my-auto">
      <FaCircleChevronRight size="40" />
    </button>
  );
}
