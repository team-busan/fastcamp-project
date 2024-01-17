import { useState } from "react";
import { CiClock1, CiCircleChevDown  } from "react-icons/ci";

export default function Information() {
  const [menu, setMenu] = useState(false);
  
  const toggleMenu = () => {
    setMenu(!menu);
    if(menu){
      console.log(menu);
    }
  }


  return (
    <div className = "bg-white p-5">
      <div className = "flex justify-between mb-4">
        <h3 className = "font-bold">영업시간</h3>
        <p className = "flex items-center text-myblue text-sm"><CiClock1/>영업 중</p>
      </div>
      <div className = "">
        <div className = "flex justify-between">
          <span className = "font-bold text-sm">[오늘]01.17(수)</span>
          <span className = "text-sm">영업시간 : 11:00 - 22:00</span>
        </div>
        <div>
          <p className = "flex justify-end text-sm">라스트오더:21:30</p>
          <div className = "flex justify-end text-sm">
            <button
              className = "flex items-center"
              onClick = {toggleMenu}>더보기< CiCircleChevDown/></button>
          </div>
        </div>
        <hr/>
      </div>
      <div>
        <h2>메뉴정보</h2>
        <div>
          <p>까르보나라</p>
          <p>13000원</p>
        </div>
        <div>
          <p>치킨가라아게 미트소스</p>
          <p>14000원</p>
        </div>
        <div>
          <p>매콤새우버섯토마토소스</p>
          <p>15000원</p>
        </div>
        <button>더보기</button>
        <hr/>
        <div>
        <h3 className = "font-bold">맛집태그</h3>
          <div>태그 박스</div>
        </div>
      </div>
    </div>
  )
}
