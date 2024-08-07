import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { axiosInstance, API_URL } from "../stores/API";
import RestaurantList from "../component/RestaurantList.jsx";
import NaverMap from "../component/NaverMap.jsx";
import { BottomSheet } from "react-spring-bottom-sheet";
import { MdIosShare, MdArrowBackIosNew } from "react-icons/md";

function TagDetail() {
  const navigate = useNavigate();

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
    axiosInstance.get(`/restaurants/?tag=${tag}`).then((res) => {
      setRestaurantList(res.data);
      // setReviews(res.data.reviews);
      // setUsers(res.data.users);
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
              <Link to="/">
                <h2 className="text-primary font-bold">패스트다이닝</h2>
              </Link>
              <MdIosShare
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(window.location.href);
                    alert("클립보드에 링크가 복사되었습니다.");
                  } catch (e) {
                    alert("복사에 실패하였습니다.");
                  }
                }}
                className="text-2xl cursor-pointer"
              />
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
          <MdIosShare
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(window.location.href);
                alert("클립보드에 링크가 복사되었습니다.");
              } catch (e) {
                alert("복사에 실패하였습니다.");
              }
            }}
            className="text-2xl sm:text-3xl cursor-pointer"
          />
        </div>
        <NaverMap width="100vw" height="h-screen" isRounded={false} zoomLevel={14}
          markers={restaurantList ? restaurantList.map((_item) => {
            return {
              id: _item.id,
              title: _item.name,
              lat: _item.latitude,
              lng: _item.longitude,
              address: _item.address,
              category: _item.category,
              score: _item.score,
            }
          }) : []}
          onMarkerClick={(_marker) => {
            navigate(`/detail/${_marker.id}`);
          }} />
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
                className={`float-left bg-white py-1 px-2 border-[1px] rounded-lg ${orderBy === 0 ? orderColor : notOrderColor
                  }`}
                onClick={() => setOrderBy(0)}
              >
                추천순
              </button>
              <button
                className={`float-left bg-white py-1 px-2 border-[1px] rounded-lg ml-2 ${orderBy === 1 ? orderColor : notOrderColor
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
