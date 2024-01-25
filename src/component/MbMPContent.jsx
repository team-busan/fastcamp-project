import React from 'react'
import { FaAngleRight } from "react-icons/fa6";


export default function MbMPContent() {
  return (
    <div className="bg-zinc-300 self-stretch flex w-full flex-col items-stretch mt-20 px-12 py-10 md:hidden">
        <div className="bg-white flex w-full items-center justify-between gap-5 pl-7 pr-2 py-12 rounded-[50px_50px_0px_0px] border-b-stone-300 border-b border-solid">
            <div className="justify-center text-black text-3xl font-semibold w-[250px] my-auto">
            평가한 맛집
            </div>
            <div className="flex items-center gap-px my-auto">
                <div className="justify-center text-neutral-400 text-right text-2xl font-semibold my-auto">
                    264 곳

                </div>
                <button className="aspect-[1.08] object-contain object-center w-[30px] text-neutral-400  overflow-hidden self-stretch shrink-0">
                    <FaAngleRight  size="25"/>
                </button>
            </div>
        </div>
        <div className="bg-white flex w-full items-center justify-between gap-5 pl-7 pr-2 py-12  border-b-stone-300 border-b border-solid">
            <div className="justify-center text-black text-3xl font-semibold w-[250px] my-auto">
            저장한 맛집
            </div>
            <div className="flex items-center gap-px my-auto">
                <div className="justify-center text-neutral-400 text-right text-2xl font-semibold my-auto">
                    38 곳

                </div>
                <button className="aspect-[1.08] object-contain object-center w-[30px] text-neutral-400  overflow-hidden self-stretch shrink-0">
                    <FaAngleRight  size="25"/>
                </button>
            </div>
        </div>
        <div className="bg-white flex w-full items-center justify-between gap-5 pl-7 pr-2 py-12  border-b-stone-300 border-b border-solid rounded-[0px_0px_50px_50px]">
            <div className="justify-center text-black text-3xl font-semibold w-[250px] my-auto">
            좋아요한 맛집
            </div>
            <div className="flex items-center gap-px my-auto">
                <div className="justify-center text-neutral-400 text-right text-2xl font-semibold my-auto">
                    1248 곳

                </div>
                <button className="aspect-[1.08] object-contain object-center w-[30px] text-neutral-400  overflow-hidden self-stretch shrink-0">
                    <FaAngleRight  size="25"/>
                </button>
            </div>
        </div>
    </div>
  )
}
