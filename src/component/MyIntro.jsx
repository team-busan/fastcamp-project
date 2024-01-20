import React from 'react'
import {User} from '../stores/mockData.json'

export default function MyIntro() {
    const data = User[0];
  return (
    <div className='border-t-stone-300 border-t border-solid md:hidden'>
        <div className='className="justify-center text-black text-2xl ml-12 mt-20 mb-20  self-start'>
            {data.intro}
        </div>
    </div>
  )
}
