import React from 'react'
import { Link } from 'react-router-dom'
export default function MypageNav() {
  return (
    <div className=" flex-col overflow-hidden sticky flex  w-full items-stretch pb-8 px-5 md:hidden ">
      <div className=" flex w-full justify-between items-center gap-5 h-[60px]">
        <Link to="/" className="justify-center text-primary text-2xl leading-8 tracking-wide flex-1">
        패스트다이닝
        </Link>
      </div>
    </div>
  )
}
