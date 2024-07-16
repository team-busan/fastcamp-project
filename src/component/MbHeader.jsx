import React from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';

export default function MbHeader({ restaurant, goBack }) {
  return (
    <header style={{ zIndex: 5 }} className="flex p-3 items-center sticky top-0 bg-white">
      <IoIosArrowRoundBack className="text-3xl" onClick={() => {goBack()}} />
      <p className="font-bold flex-grow text-center">{restaurant.address}</p>
    </header>
  );
}