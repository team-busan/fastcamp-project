import React from 'react'
import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
    <div className='bg-zinc-100 flex items-center justify-between w-1/2 gap-5 px-6 py-2 rounded-3xl top-96'>
        <input className="border-transparent w-full bg-zinc-100 "placeholder='지역, 음식 또는 식당명 입력'></input>
        <CiSearch />
    </div>
  )
}
