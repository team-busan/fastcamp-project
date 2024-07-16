import React, { useState } from 'react'
import { MdOutlineRestaurantMenu,MdKeyboardArrowDown } from "react-icons/md";
export default function MbMenu({restaurant}) {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className = "bg-white p-5 mb-3">
      <div className = "flex justify-between">
        <div className = "flex items-center">
          <MdOutlineRestaurantMenu className = "mr-3 text-secondary"/>
          <h4 className = "font-bold">매장정보</h4>
        </div>
        <div onClick = {() => setIsMenu(!isMenu)}>
          <MdKeyboardArrowDown className = "text-lg"/>
        </div>
      </div>
      <div>
      <ul className = "mt-3">
          {restaurant.cuisine_types &&
            restaurant.cuisine_types.slice(0, 3).map((value, i) => (
              <li key={i}>
                <div className="flex justify-between text-sm mb-3">
                  <span>{value.cuisine_type.name}</span>
                  {/* <span>{value.price}</span> */}
                </div>
              </li>
            ))}
            {isMenu &&
            restaurant.cuisine_types.slice(3).map((value, i) => {
              return (
                <li key={i}>
                  <div className="flex justify-between text-sm mb-3">
                    <span>{value.cuisine_type.name}</span>
                    {/* <span>{value.price}</span> */}
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  )
}
