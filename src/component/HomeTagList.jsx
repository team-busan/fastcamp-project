import React from "react";
import LeftButton from "./LeftButton";
import DetailButton from "./DetailButton";
import { homeData } from "../stores/mockData.json";
import RightButton from "./RightButton";

export default function HomeTagList() {
  const data = homeData;
  return (
    <div className="flex  items-stretch justify-between gap-5 ml-5 mr-4 mt-14 ">
      <LeftButton />
      <div className="bg-white flex grow basis-[0%] flex-col items-stretch pb-12 rounded-[50px]">
        <div className="bg:white md:bg-neutral-100 flex w-full items-center justify-between gap-5 pl-6 pr-12 py-7 rounded-[40px_40px_0px_0px]">
          <div className="justify-center text-black text-2xl leading-8 my-auto">
            #카페(47)
          </div>
          <DetailButton />
        </div>
        <div className="ml-8 mr-8 mt-11 mb-2.5 grid grid-cols-2  md:grid-cols-4 gap-5 p-4 place-items-center">
          {data.map((item, index) => {
            return (
              <div key={index} className=" items-stretch w-3/12 max-md:mt-6 ">
                <div className="flex grow flex-col items-center ">
                  <div className="flex-col overflow-hidden relative flex aspect-[1] w-[207px] pl-16 pt-12 items-end ">
                    <img
                      src={item.img}
                      className="absolute h-full w-full object-cover object-center inset-0"
                    />
                  </div>

                  <div className="justify-center text-center text-black text-lg leading-6 self-stretch mt-5">
                    {item.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <RightButton />
    </div>
  );
}
