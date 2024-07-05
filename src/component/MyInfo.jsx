import React from "react";
import { useParams } from "react-router-dom";
import { axiosInstance, API_URL } from "../stores/API";
import { useState, useEffect } from "react";

export default function MyInfo({my, setMy}) {
  
  return (
    <div className="gap-5 flex flex-col md:flex-row place-items-center bg-white md:bg-zinc-100  w-full px-16 py-9">
      <div className="flex flex-col items-stretch w-[78%] ml-5 max-md:w-full my-auto">
        <div className="text-center  md:text-left justify-end text-black text-3xl font-semibold leading-9 mix-blend-multiply max-md:max-w-full">
          {my.username}
          {/* {my.first_name} {my.last_name} ({my.username}) */}
        </div>
        <div className="md:flex text-center  md:text-left  text-black text-xl leading-6 mt-14 max-md:max-w-full">
          {my.bio}
        </div>
      </div>
    </div>
  );
}
