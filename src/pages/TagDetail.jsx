import { useState, useEffect } from "react";
import { MdIosShare, MdLocationOn } from "react-icons/md";
import RestaurantList from "../component/RestaurantList.jsx";

function TagDetail() {
  const [browserSizeX, setBrowserSizeX] = useState(window.innerWidth);

  const handleResize = () => {
    setBrowserSizeX(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (browserSizeX >= 450) {
    return (
      <div className="flex">
        <section
          id="list"
          className="w-[450px] h-screen border-r-[1px] border-lightGray"
        >
          <div id="listHeader" className="px-5 border-b-[1px] border-lightGray">
            <div
              id="logoAndShare"
              className="flex items-center justify-between py-6"
            >
              <div className="flex items-center">
                <MdLocationOn className="text-primary text-3xl" />
                <h2 className="text-primary font-bold">다이닝</h2>
                <h2 className="text-primary">코드</h2>
              </div>
              <MdIosShare className="text-2xl" />
            </div>
            <div id="locationAndTag" className="flex py-2">
              <h5>부산 금정구 구서동</h5>
              <h5 className="ml-2 font-semibold">#점심특선</h5>
            </div>
          </div>
          <RestaurantList />
        </section>
        <section id="map"></section>
      </div>
    );
  } else {
    return <h1>hello</h1>;
  }
}

export default TagDetail;
