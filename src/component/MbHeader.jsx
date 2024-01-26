import React from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';

export default function MbHeader({ restaurant }) {
  return (
    <header style={{ zIndex: 5 }} className="flex p-3 items-center sticky top-0 bg-white">
      <IoIosArrowRoundBack className="text-3xl" />
      <p className="font-bold flex-grow text-center">{restaurant.location}</p>
    </header>
  );
}