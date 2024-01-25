import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { axiosInstance, API_URL } from "../stores/API";
import RestaurantList from "../component/RestaurantList.jsx";
import NaverMap from "../component/NaverMap.jsx";
import { BottomSheet } from "react-spring-bottom-sheet";
import { MdIosShare, MdLocationOn, MdArrowBackIosNew } from "react-icons/md";

function TagDetail() {
  const [params, setParams] = useSearchParams();
  const [tag, setTag] = useState(params.get("tag"));
  const [open, setOpen] = useState(false);
  const [browserSizeX, setBrowserSizeX] = useState(window.innerWidth);
  const [orderBy, setOrderBy] = useState(0);
  const [restaurantList, setRestaurantList] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  const orderColor = "text-primary border-primary";
  const notOrderColor = "text-lightGray border-lightGray";

  const handleResize = () => {
    setBrowserSizeX(window.innerWidth);
  };

  useEffect(() => {
    setOpen(true);
    axiosInstance.get(API_URL.TAGDETAIL).then((res) => {
      setRestaurantList(res.data.restaurantList);
      setReviews(res.data.reviews);
      setUsers(res.data.users);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (browserSizeX >= 800) {
    return (
      <div className="flex">
        <section className="w-[450px] h-screen border-r-[1px] border-lightGray">
          <div className="px-5 border-b-[1px] border-lightGray">
            <div className="flex items-center justify-between py-6">
              <div>
                <h2 className="text-primary font-bold">제목</h2>
              </div>
              <MdIosShare className="text-2xl cursor-pointer" />
            </div>
            <div className="flex py-2">
              <h4>부산 금정구 구서동</h4>
              <h4 className="ml-2 font-semibold">{`#${tag}`}</h4>
            </div>
          </div>
          <RestaurantList
            list={restaurantList}
            setList={setRestaurantList}
            reviews={reviews}
            users={users}
            upperElementHeight="128px"
            tag={tag}
          />
        </section>
        <section>
          <NaverMap width="100vw - 450px" height="h-screen" isRounded={false} />
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <div className="h-14 px-4 sm:px-4 flex items-center justify-between">
          <MdArrowBackIosNew
            onClick={() => history.back()}
            className="text-2xl sm:text-3xl cursor-pointer"
          />
          <div className="flex">
            <h4 className="mr-2 text-lg sm:text-2xl">부산 금정구 구서동</h4>
            <h4 className="text-lg sm:text-2xl">{`#${tag}`}</h4>
          </div>
          <MdIosShare className="text-2xl sm:text-3xl cursor-pointer" />
        </div>
        <NaverMap width="100vw" height="h-screen" isRounded={false} />
        <BottomSheet
          open={open}
          blocking={false}
          snapPoints={({ maxHeight }) => [
            maxHeight - 56,
            maxHeight / 4,
            maxHeight * 0.6,
          ]}
          header={
            <div className="ml-1">
              <button
                className={`float-left bg-white py-1 px-2 border-[1px] rounded-lg ${
                  orderBy === 0 ? orderColor : notOrderColor
                }`}
                onClick={() => setOrderBy(0)}
              >
                추천순
              </button>
              <button
                className={`float-left bg-white py-1 px-2 border-[1px] rounded-lg ml-2 ${
                  orderBy === 1 ? orderColor : notOrderColor
                }`}
                onClick={() => setOrderBy(1)}
              >
                거리순
              </button>
            </div>
          }
        >
          <RestaurantList
            list={restaurantList}
            setList={setRestaurantList}
            reviews={reviews}
            users={users}
            tag={tag}
          />
        </BottomSheet>
      </div>
    );
  }
}

export default TagDetail;
