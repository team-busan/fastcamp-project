import React from 'react'
import Search from './Search';

export default function Navbar() {
  return (
    <div className="hidden md:flex w-full items-stretch justify-between gap-5 px-20 py-4 h-0... sticky top-0 bg-white " >
        <div className="justify-center text-cyan-500 text-3xl font-bold leading-9 self-center whitespace-nowrap my-auto">
            다이닝 코드
        </div>
        <Search/>
        <div className='className="self-center flex items-stretch justify-between gap-5 my-auto'>
            <div className="justify-center text-black text-sm leading-4">
            로그인
          </div>
          <div className="justify-center text-black text-sm leading-4">
            회원가입
          </div>
        </div>
    </div>

  )
}
