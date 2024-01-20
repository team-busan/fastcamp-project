import React from 'react'

export default function MyPageSection() {
  return (
    <div className="hidden flex-col justify-center  md:grid place-items-center leading-9 relative overflow-hidden min-h-[250px] w-full items-center pt-28 pb-24 px-16 ">
        <img src='img/foodmain.jpg' className=" absolute h-full w-full object-cover object-center inset-0" />
        <div className='absolute text-white text-center grid place-items-center text-3xl'>주요 활동 지역 : 부산</div>
    </div>
  )
}
