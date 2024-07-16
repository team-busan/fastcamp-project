import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LeftButton from "./LeftButton";
import DetailButton from "./DetailButton";
import RightButton from "./RightButton";

export default function HomeTagList({ tagname = "cafe", list }) {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const limit = 6;

  if (!list) {
    return null;
  }

  const slicedList = list.slice(current * limit, current * limit +limit);
  // const slicedList = list;

  return (
    <div className="flex items-stretch justify-between gap-5 ml-5 mr-4 mt-14 ">
      {current > 0 ? (
        <LeftButton onClick={() => setCurrent(current - 1)} />
      ) : (
        <div className="hidden md:flex justify-center object-contain object-center w-[74px]"></div>
      )}
      <div className="bg-white flex grow basis-[0%] flex-col items-stretch pb-12 rounded-[50px]">
        <div className="bg:white md:bg-neutral-100 flex w-full items-center justify-between gap-5 pl-6 pr-12 py-7 rounded-[40px_40px_0px_0px]">
          <div className="justify-center text-black text-2xl leading-8 my-auto">
            #{tagname}({list.length})
          </div>
          <DetailButton onClick={() => {
            navigate(`/tagdetail?tag=${tagname}`);
          }} />
        </div>
        <div className="flex flex-wrap justify-between gap-[18px] p-4 place-items-center">
            {slicedList.slice(0, 6).map((item) => {
            return (
              <div key={item.id} className="flex w-[calc(50%-9px)] md:w-[calc(33%-12px)] max-md:mt-6 flex-col items-center ">
                <Link
                  to={`/detail/${item.id}`}
                  className="flex flex-col items-center w-full"
                >
                  <div className="flex flex-col aspect-[1] w-full">
                    <img
                      src={item.image_url ? item.image_url : "https://placehold.co/300x300?text=image"}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col justify-left text-black text-lg leading-6 self-stretch mt-2">
                    <div>{item.name}</div>
                    <div className="mt-1 text-sm text-gray-400">
                      {item.address}</div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      {current < Math.floor(list.length / 6) ? (
        <RightButton onClick={() => setCurrent(current + 1)} />
      ) : (
        <div className="hidden md:flex justify-center object-contain object-center w-[74px]"></div>
      )}
    </div>
  );
}
