import { useState, useEffect } from "react";
import { axiosInstance, API_URL } from "../stores/API.js";
import Navbar from "../component/Navbar";
import MobileNavbar from "../component/MobileNavbar";
import {
  CheckBoxes,
  Radios,
  CheckBoxesWithMore,
  LocationSelect,
} from "../component/Filters";
import NaverMap from "../component/NaverMap";
import RestaurantList from "../component/RestaurantList";
import {
  MdImportExport,
  MdMyLocation,
  MdIosShare,
  MdFormatListBulleted,
  MdRefresh,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdReplay,
} from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";
import useGeolocation from "../hooks/useGeolocation.js";
import { useRecoilState } from "recoil";
import { isLoginAtom } from "../stores/atoms.js";

const SearchResultNavbar = ({ browserSizeX,  isLogin, setIsLogin }) => {
  if (browserSizeX >= 1024) {
    return <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />;
  } else {
    return <MobileNavbar isLogin={isLogin} setIsLogin={setIsLogin} />;
  }
};

const Filter = ({
  browserSizeX,
  setBrowserSizeX,
  sortState,
  setSortState,
  orderBy,
  setOrderBy,

  location, setLocation,

  tagList,
  setTagList,
  categories,
  setCategories
}) => {
  // const [location, setLocation] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [selectFilter, setSelectFilter] = useState(4);

  const handleResize = () => {
    setBrowserSizeX(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const locationList = [
    "서울",
    "강원",
    "경기",
    "경남",
    "경북",
    "광주",
    "대구",
    "대전",
    "부산",
    "세종",
    "울산",
    "인천",
    "전남",
    "전북",
    "제주",
    "충남",
    "충북",
  ];

  const [tagListData, setTagListData] = useState([]);
  const [tagCategoryList, setTagCategoryList] = useState([]);

  // const [cuisineTypeList, setCuisineTypeList] = useState([]);
  const [cuisineTypeCategoryList, setCuisineTypeCategoryList] = useState([]);

  // const [keywordList, setKeywordList] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/tags/`).then((res) => {
      setTagListData(res.data);
    });
    axiosInstance.get(`/tag_categories/`).then((res) => {
      setTagCategoryList(res.data);
    });
    // axiosInstance.get(`/cuisine_types/`).then((res) => {
    //   setCuisineTypeList(res.data);
    // });
    axiosInstance.get(`/cuisine_type_categories/`).then((res) => {
      setCuisineTypeCategoryList(res.data);
    });
    // axiosInstance.get(`/keywords/`).then((res) => {
    //   setKeywordList(res.data);
    // });
  }, []);

  if (browserSizeX >= 1024) {
    return (
      <div id="filter" className="w-3/12 h-full bg-white p-4 rounded-2xl">
        <div id="eachFilter4" className="flex items-center">
          <div className="bg-yellow-300 w-3 h-3 mr-2 rounded"></div>
          <h5 className="font-bold">카테고리</h5>
        </div>
        <Radios list={cuisineTypeCategoryList} tagList={categories} setTagList={setCategories} />
        <div id="eachFilter5" className="flex items-center">
          <div className="bg-lime-600 w-3 h-3 mr-2 rounded"></div>
          <h5 className="font-bold">지역</h5>
        </div>
        <LocationSelect
          list={locationList}
          state={location}
          border={true}
          setState={setLocation}
        />
        {tagCategoryList ? tagCategoryList.map((tagCategory, i) => {
          const tagDatas = tagListData.filter(tag => tag.tag_category_id === tagCategory.id);
          return (
            <div key={tagCategory.id} className="">
              <div id={`eachFilter${i}`} className="flex items-center">
                <div className={`bg-red-600 w-3 h-3 mr-2 rounded`}></div>
                {/* <div className={`bg-${tagCategory.color} w-3 h-3 mr-2 rounded`}></div> */}
                <h5 className="font-bold">{tagCategory.name}</h5>
              </div>
              {tagDatas && tagDatas.length ?
                <CheckBoxesWithMore
                  list={tagDatas}
                  tagList={tagList}
                  setTagList={setTagList}
                /> : null}
            </div>
          )
        }) : null}
      </div>
    );
  } else {
    return (
      <div className="relative bg-white shadow">
        {isFilterOpen ? (
          <>
            <div className="flex justify-between items-center p-4 bg-lightGray">
              <div>
                <span>{"현 위치 : "}</span>
                <span>부산 금정구 구서동</span>
              </div>
              <button className="flex items-center border-[1px] border-mediumGray py-1 px-2 rounded-lg bg-lightGray">
                <MdRefresh />
                <span className="ml-1">업데이트</span>
              </button>
            </div>
            <div className="flex pl-4">
              <div className="flex flex-col mt-2 w-32">
                {tagCategoryList ? tagCategoryList.map((tagCategory, i) => {
                  return (
                    <FilterButton
                      key={`${tagCategory.id}_${i}`}
                      value={tagCategory.id}
                      displayValue={tagCategory.name}
                      selectFilter={selectFilter}
                      setSelectFilter={setSelectFilter}
                      color="bg-red-600"
                    />
                  )
                }) : null}
              </div>
              <div className="shadow flex justify-center items-center w-[calc(100%-128px)] px-8">
                <div className="flex flex-col">

                  {tagCategoryList ? tagCategoryList.map((tagCategory, i) => {
                    const tagDatas = tagListData.filter(tag => tag.tag_category_id === tagCategory.id);
                    return (
                      <div key={tagCategory.id} className="">
                        {tagDatas && tagDatas.length && tagCategory.id === selectFilter ?
                          <CheckBoxes
                            list={tagDatas}
                            tagList={tagList}
                            setTagList={setTagList}
                          /> : null}
                      </div>
                    )
                  }) : null}
                </div>
              </div>
            </div>
            <div className="flex justify-center bg-white my-2 py-2 px-4 border-y-[1px] border-lightGray">
              <BadgeButton
                label="이름순"
                active={sortState === "name"}
                onClick={() => { setSortState("name"); setOrderBy("asc"); }}
              />
              <BadgeButton
                label="최신순"
                active={sortState === "updated_at"}
                onClick={() => { setSortState("updated_at"); setOrderBy("desc"); }}
              />
              <BadgeButton
                label="연관순"
                active={sortState === "relate"}
                onClick={() => { setSortState("relate") }}
              />
              <BadgeButton
                label="평점순"
                active={sortState === "score"}
                onClick={() => { setSortState("score") }}
              />
              <BadgeButton
                label="리뷰많은순"
                active={sortState === "review"}
                onClick={() => { setSortState("review") }}
              />
              <BadgeButton
                label="좋아요많은순"
                active={sortState === "favorite"}
                onClick={() => { setSortState("favorite") }}
              />
              <BadgeButton
                label="거리순"
                active={sortState === "distance"}
                onClick={() => { setSortState("distance") }}
              />
            </div>
          </>
        ) : null}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="text-2xl bg-white text-mediumGray absolute bottom-[-18px] left-1/2 -translate-x-1/2 py-1 px-4 border-[1px] border-lightGray rounded-lg"
        >
          {isFilterOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
      </div>
    );
  }
};

const BadgeButton = ({
  label,
  onClick,
  active
}) => {
  return (
    <button
      onClick={onClick}
      className={`py-1 px-2 border-[1px] rounded-md mr-2 text-sm ${active
        ? "border-secondary text-secondary font-bold"
        : "border-lightGray text-mediumGray"
        }`}
    >
      {label}
    </button>
  );
};

const MapButton = ({
  value,
  meterState,
  setMeterState,
}) => {
  return (
    <button
      onClick={() => {
        setMeterState(value);
      }}
      className={`py-1 px-3 rounded-full hover:bg-darkGray ${meterState === value ? "bg-darkGray" : null
        }`}
    >
      {value}
    </button>
  );
};

const FilterButton = ({
  value,
  displayValue,
  selectFilter,
  setSelectFilter,
  color,
}) => {
  if (selectFilter === value) {
    return (
      <button className="mb-1 flex items-center">
        <div className={`${color} h-10 w-8 rounded-l-lg`}></div>
        <span className="px-4">{displayValue}</span>
      </button>
    );
  } else {
    return (
      <button
        className="mb-1 py-2 px-4 bg-lightGray rounded-l-lg text-darkGray"
        onClick={() => setSelectFilter(value)}
      >
        {displayValue}
      </button>
    );
  }
};

const SearchResult = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("query") || "");

  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);

  const [browserSizeX, setBrowserSizeX] = useState(window.innerWidth);
  const [sortState, setSortState] = useState("name");
  const [orderBy, setOrderBy] = useState("desc");

  const [meter, setMeter] = useState("500m");
  const [restaurantList, setRestaurantList] = useState([]);
  // const [reviews, setReviews] = useState([]);
  // const [users, setUsers] = useState([]);
  const [tagList, setTagList] = useState([]);
  const [categories, setCategories] = useState([]);

  const [location, setLocation] = useState("");

  const [pageSkip, setPageSkip] = useState(0);
  const pageLimit = 10
  const [isPageEnd, setIsPageEnd] = useState(false);

  const { geolocation, error } = useGeolocation();

  const [zoomLevel, setZoomLevel] = useState(10);

  useEffect(() => {
    if (!geolocation) {
      return
    }
    let distance = 0;
    let _meter = meter;
    if (_meter.includes("km")) {
      _meter = _meter.replace("km", "");
      distance = _meter;
    } else if (_meter.includes("m")) {
      _meter = _meter.replace("m", "");
      distance = _meter / 1000;
    }

    let _zoomLevel = 10;
    if (distance == 0) {
      _zoomLevel = 6;
    } else if (distance <= 0.1) {
      _zoomLevel = 15;
    } else if (distance <= 0.3) {
      _zoomLevel = 14;
    } else if (distance <= 0.5) {
      _zoomLevel = 13;
    } else if (distance <= 1) {
      _zoomLevel = 12;
    } else if (distance <= 2) {
      _zoomLevel = 11;
    } else if (distance <= 3) {
      _zoomLevel = 10;
    } else if (distance <= 5) {
      _zoomLevel = 9;
    } else if (distance <= 10) {
      _zoomLevel = 8;
    } else if (distance <= 15) {
      _zoomLevel = 7;
    } else {
      _zoomLevel = 6;
    }
    setZoomLevel(_zoomLevel)

    // ==============================================
    // TODO: DATA.GO.KR API KEY 발급 후 사용
    // ==============================================
    // searchParams.set("longitude", geolocation.longitude);
    // searchParams.set("latitude", geolocation.latitude);
    // searchParams.set("distance", distance);
    // setSearchParams(searchParams);
  }, [geolocation, meter])

  useEffect(() => {
    const search_param = searchParams.get("query") || ""
    if (searchQuery != search_param) {
      setSearchQuery(search_param);
    }
  }, [searchParams]);

  useEffect(() => {
    // serialize url search param from search_param
    // const urlSearchParams = new URLSearchParams();
    // urlSearchParams.append("query", searchQuery || "");

    axiosInstance.get(`/restaurants/?${searchParams.toString()}&skip=${0}&limit=${pageLimit}`).then((res) => {
      setRestaurantList(res.data);
      // setOriginalList(res.data.restaurantList);
      // setReviews(res.data.reviews);
      // setUsers(res.data.users);
    });
  }, [searchParams]);

  const getMoreRestaurants = () => {
    if (isPageEnd) {
      return
    }
    const _skip = pageSkip + pageLimit
    setPageSkip(_skip);
    // setSearchParams({ skip: pageSkip + pageLimit });
    axiosInstance.get(`/restaurants/?${searchParams.toString()}&skip=${_skip}&limit=${pageLimit}`).then((res) => {
      if (res.data.length === 0) {
        setIsPageEnd(true);
        return
      }
      setRestaurantList((prev) => [...prev, ...res.data]);
    });
  }

  useEffect(() => {
    if (!location) return;
    searchParams.set("area", location);
    setSearchParams(searchParams);
  }, [location])

  useEffect(() => {
    if (!categories) return;
    if (categories.length === 0) {
      searchParams.delete("cuisine_type_categories");
    } else {
      searchParams.set("cuisine_type_categories", categories.join(","));
    }
    setSearchParams(searchParams);
  }, [categories])

  useEffect(() => {
    if (!tagList) return;
    if (tagList.length === 0) {
      searchParams.delete("tags");
    } else {
      const _tagList = tagList.map((v) => v.name);
      searchParams.set("tags", _tagList.join(","));
    }
    setSearchParams(searchParams);
  }, [tagList])

  useEffect(() => {
    if (!sortState) return;
    if (!["name", "created_at", "updated_at"].includes(sortState)) {
      alert("필터 기준이 구현되지 않았습니다.");
      return;
    }
    searchParams.set("order_by", sortState);
    setSearchParams(searchParams);
  }, [sortState])

  useEffect(() => {
    if (!orderBy) return;
    if (!["asc", "desc"].includes(orderBy)) {
      alert("필터 기준이 구현되지 않았습니다.");
      return;
    }
    searchParams.set("sort", orderBy);
    setSearchParams(searchParams);
  }, [orderBy])

  return (
    <>
      <SearchResultNavbar browserSizeX={browserSizeX} isLogin={isLogin} setIsLogin={setIsLogin} />
      <div className="w-[calc(100vw-17px)] bg-lightGray flex flex-col justify-center no-scrollbar lg:flex-row lg:p-6">
        <Filter
          browserSizeX={browserSizeX}
          setBrowserSizeX={setBrowserSizeX}
          sortState={sortState}
          setSortState={setSortState}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          tagList={tagList}
          setTagList={setTagList}
          categories={categories}
          setCategories={setCategories}
          location={location}
          setLocation={setLocation}
        />
        <div className="flex flex-col w-full lg:w-9/12">
          <div id="content" className="bg-white lg:ml-6 lg:rounded-2xl">
            {browserSizeX >= 1024 ? (
              <div
                id="contentHeader"
                className="flex justify-between px-4 border-b-[1px] border-lightGray"
              >
                <div className="py-4 pr-4 flex items-center border-r-[1px] border-lightGray">
                  <MdImportExport />
                  <span className="ml-1 text-sm">정렬</span>
                </div>
                <div className="pl-4 flex items-center">
                  <BadgeButton
                    label="이름순"
                    active={sortState === "name"}
                    onClick={() => { setSortState("name"); setOrderBy("asc"); }}
                  />
                  <BadgeButton
                    label="최신순"
                    active={sortState === "updated_at"}
                    onClick={() => { setSortState("updated_at"); setOrderBy("desc"); }}
                  />
                  <BadgeButton
                    label="연관순"
                    active={sortState === "relate"}
                    onClick={() => { setSortState("relate") }}
                  />
                  <BadgeButton
                    label="평점순"
                    active={sortState === "score"}
                    onClick={() => { setSortState("score") }}
                  />
                  <BadgeButton
                    label="리뷰많은순"
                    active={sortState === "review"}
                    onClick={() => { setSortState("review") }}
                  />
                  <BadgeButton
                    label="좋아요많은순"
                    active={sortState === "favorite"}
                    onClick={() => { setSortState("favorite") }}
                  />
                  <BadgeButton
                    label="거리순"
                    active={sortState === "distance"}
                    onClick={() => { setSortState("distance") }}
                  />
                </div>
                <div className="pl-4 flex items-center border-l-[1px] border-lightGray text-sm">
                  <MdMyLocation />
                  <span className="ml-1 font-semibold">{"현위치 : "}</span>
                  <span className="ml-1 font-semibold">부산 금정구 구서동</span>
                </div>
              </div>
            ) : null}
            <div>
              {tagList.length !== 0 && (
                <div className="w-full p-4 flex items-center justify-between">
                  <ul className="flex gap-2">
                    {tagList.map((v, i) => {
                      return (
                        <li
                          key={i}
                          className="bg-primary text-white py-1 px-2 flex items-center rounded-md"
                        >
                          <p>{v.name}</p>
                          <p
                            onClick={() => {
                              const filteredTagList = [...tagList].filter(
                                (v2) => v2 !== v
                              );
                              setTagList(filteredTagList);
                            }}
                            className="bg-secondary ml-1 rounded-full rotate-45 w-5 h-5 flex items-center justify-center cursor-pointer"
                          >
                            +
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                  <MdReplay
                    onClick={() => setTagList([])}
                    className="cursor-pointer"
                  />
                </div>
              )}
              <div className="flex items-center justify-between px-5 py-4">
                <div className="font-semibold">
                  <span>{meter === "전국" ? null : "내주변"}</span>
                  <span className="ml-1">{meter}</span>
                  <span className="ml-1">맛집</span>
                  <span className="ml-1">
                    (
                    <span className="text-primary">
                      {restaurantList.length}
                    </span>
                    )
                  </span>
                  <span>곳</span>
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
                  className="text-lg cursor-pointer"
                />
              </div>
              <div className="px-4 rounded-2xl">
                <div className="w-full p-1 bg-mediumGray text-white text-sm flex justify-between rounded-t-2xl">
                  <MapButton
                    value="100m"
                    meterState={meter}
                    setMeterState={setMeter}
                  />
                  <MapButton
                    value="300m"
                    meterState={meter}
                    setMeterState={setMeter}
                  />
                  <MapButton
                    value="500m"
                    meterState={meter}
                    setMeterState={setMeter}
                  />
                  <MapButton
                    value="1km"
                    meterState={meter}
                    setMeterState={setMeter}
                  />
                  <MapButton
                    value="2km"
                    meterState={meter}
                    setMeterState={setMeter}
                  />
                  <MapButton
                    value="3km"
                    meterState={meter}
                    setMeterState={setMeter}
                  />
                  <MapButton
                    value="5km"
                    meterState={meter}
                    setMeterState={setMeter}
                  />
                  <MapButton
                    value="10km"
                    meterState={meter}
                    setMeterState={setMeter}
                  />
                  <MapButton
                    value="15km"
                    meterState={meter}
                    setMeterState={setMeter}
                  />
                  <MapButton
                    value="전국"
                    meterState={meter}
                    setMeterState={setMeter}
                  />
                </div>
                <NaverMap width="100%" height="h-72" isRounded={true}
                  zoomLevel={zoomLevel}
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
              </div>
            </div>
            <RestaurantList
              list={restaurantList}
            // setList={setRestaurantList}
            // reviews={reviews}
            // users={users}
            // tag="none"
            />
            {!isPageEnd ? <button
              onClick={() => {
                getMoreRestaurants()
              }}
              className="w-[calc(100%-2rem)] m-4 bg-secondary py-3 flex items-center justify-center text-white text-sm rounded-md hover:opacity-80">
              <MdFormatListBulleted />
              <span className="ml-1">검색 결과 더보기</span>
            </button>: null}
          </div>
          <div className="bg-transparent py-8 flex flex-col items-center lg:mt-6 lg:ml-6 lg:rounded-lg lg:bg-white">
            <p className="font-bold text-sm">찾으시는 식당이 없으신가요?</p>
            <button className="bg-primary text-white text-sm py-3 px-16 mt-4 rounded-md hover:opacity-80">
              맛집 등록 요청하기
            </button>
            <p className="text-xs text-mediumGray mt-4">
              보통 당일 등록이 이루어지며, 등록 시 즉시 푸시 알림을 드립니다.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
