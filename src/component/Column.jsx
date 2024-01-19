import React from 'react'
import LeftButton from './LeftButton'
import DetailButton from './DetailButton'
import RightButton from './RightButton'
import {Columns} from '../stores/mockData.json'

export default function Column() {
  const data = Columns[0];
  return (
    <div className="flex items-stretch justify-between gap-5 ml-5 mr-4 mt-14 ">
      <LeftButton />
      <div className=" flex grow basis-[0%] flex-col items-stretch pb-12 rounded-[50px]">
        <div className="bg-white md:bg-neutral-100 flex w-full items-center justify-between gap-5 pl-6 pr-12 py-7 rounded-[40px_40px_0px_0px]">
            <div className="justify-center text-black text-2xl leading-8 my-auto">추천 칼럼</div>
            <DetailButton />
        </div>
        <div className="flex-col overflow-hidden self-stretch relative flex min-h-[355px] items-stretch ">
          <img src={data.img} className="absolute h-full w-full object-cover object-center inset-0" />
          <div className="md:hidden justify-end text-white text-3xl font-semibold leading-9 relative mt-36  ">
            {data.title}
          </div>
          <div className="md:hidden justify-center text-white text-xl leading-6 relative mt-8 ">
            {data.content}
          </div>
        </div>
        
      </div>
      <RightButton />
    </div>
  )
}
