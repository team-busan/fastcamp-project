import { useState, useEffect } from "react";
import { axiosInstance, API_URL } from "../stores/API.js";
import Navbar from "../component/Navbar";
import MobileNavbar from "../component/MobileNavbar";
import {
  CheckBoxes,
  Radios,
  CheckBoxesWithMore,
  Select,
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

const SearchResultNavbar = ({ browserSizeX }) => {
  if (browserSizeX >= 1024) {
    return <Navbar />;
  } else {
    return <MobileNavbar />;
  }
};

const FilterSelect = ({
  selectFilter,
  socialList,
  peopleList,
  genderList,
  categoryList,
  locationList,
  location,
  tvList,
  convenienceList,
  purposeList,
  moodList,
  tagList,
  setTagList,
}) => {
  if (selectFilter === "social") {
    return (
      <CheckBoxes
        list={socialList}
        isFlexCol={false}
        border={false}
        tagList={tagList}
        setTagList={setTagList}
      />
    );
  } else if (selectFilter === "people") {
    return (
      <div className="flex flex-col">
        <CheckBoxes
          list={peopleList}
          isFlexCol={false}
          border={true}
          tagList={tagList}
          setTagList={setTagList}
        />
        <Radios
          list={genderList}
          border={false}
          tagList={tagList}
          setTagList={setTagList}
        />
      </div>
    );
  } else if (selectFilter === "category") {
    return (
      <Radios
        list={categoryList}
        border={false}
        tagList={tagList}
        setTagList={setTagList}
      />
    );
  } else if (selectFilter === "location") {
    return (
      <Select
        list={locationList}
        state={location}
        border={false}
        tagList={tagList}
        setTagList={setTagList}
      />
    );
  } else if (selectFilter === "tv") {
    return (
      <CheckBoxes
        list={tvList}
        isFlexCol={false}
        tagList={tagList}
        setTagList={setTagList}
      />
    );
  } else if (selectFilter === "convenience") {
    return (
      <CheckBoxes
        list={convenienceList}
        isFlexCol={false}
        tagList={tagList}
        setTagList={setTagList}
      />
    );
  } else if (selectFilter === "purpose") {
    return (
      <CheckBoxes
        list={purposeList}
        isFlexCol={false}
        tagList={tagList}
        setTagList={setTagList}
      />
    );
  } else {
    return (
      <CheckBoxes
        list={moodList}
        isFlexCol={false}
        tagList={tagList}
        setTagList={setTagList}
      />
    );
  }
};

const Filter = ({
  browserSizeX,
  setBrowserSizeX,
  sortState,
  setSortState,
  tagList,
  setTagList,
}) => {
  const [location, setLocation] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [selectFilter, setSelectFilter] = useState("social");

  const handleResize = () => {
    setBrowserSizeX(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const socialList = ["내가좋아요한", "나의팔로우추천"];
  const peopleList = ["20대", "30대", "40대", "50대", "60대이상"];
  const genderList = ["여성", "남성"];
  const categoryList = [
    "배달",
    "밥집",
    "카페",
    "술집",
    "고깃집",
    "횟집",
    "한식",
    "중식",
    "일식",
    "양식",
    "아시안",
    "멕시칸",
    "이탈리안",
    "프렌치",
    "뷔페",
    "브런치",
    "패스트푸드",
    "분식",
    "국물요리",
    "면요리",
    "해산물",
  ];
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
  const tvList = [
    "생활의달인",
    "수요미식회",
    "미쉐린",
    "최자로드",
    "성시경의먹을텐데",
    "백종원의3대천왕",
    "식객허영만의백반기행",
    "백년가게",
    "맛있는녀석들",
    "한국인의밥상",
    "VJ특공대",
    "백종원의골목식당",
    "전지적참견시점",
  ];
  const convenienceList = [
    "주차",
    "발렛가능",
    "드라이브스루",
    "24시영업",
    "개별룸",
    "대형룸",
    "야외좌석(테라스)",
    "콜키지무료",
    "놀이방",
    "반려동물동반",
  ];
  const purposeList = [
    "아침식사",
    "점심식사",
    "저녁식사",
    "혼밥",
    "혼술",
    "혼카페",
    "데이트",
    "회식",
    "건강식",
    "다이어트",
    "가족외식",
    "아이동반",
    "실버푸드",
    "식사모임",
    "술모임",
    "차모임",
    "접대",
    "간식",
  ];
  const moodList = [
    "가성비좋은",
    "분위기좋은",
    "푸짐한",
    "격식있는",
    "고급스러운",
    "서민적인",
    "시끌벅적한",
    "조용한",
    "깔끔한",
    "이색적인",
    "뷰가좋은",
    "예쁜",
    "지역주민이찾는",
  ];

  if (browserSizeX >= 1024) {
    return (
      <div id="filter" className="w-3/12 h-full bg-white p-4 rounded-2xl">
        <div id="eachFilter1">
          <div className="flex items-center">
            <div className="bg-red-600 w-3 h-3 mr-2 rounded"></div>
            <h5 className="font-bold">소셜</h5>
          </div>
          <CheckBoxes
            list={socialList}
            isFlexCol={true}
            tagList={tagList}
            setTagList={setTagList}
          />
        </div>
        <div id="eachFilter2">
          <div className="flex items-center">
            <div className="bg-amber-500 w-3 h-3 mr-2 rounded"></div>
            <h5 className="font-bold">이용자층</h5>
          </div>
          <CheckBoxes
            list={peopleList}
            isFlexCol={false}
            tagList={tagList}
            setTagList={setTagList}
          />
        </div>
        <div id="eachFilter3">
          <Radios list={genderList} tagList={tagList} setTagList={setTagList} />
        </div>
        <div id="eachFilter4" className="flex items-center">
          <div className="bg-yellow-300 w-3 h-3 mr-2 rounded"></div>
          <h5 className="font-bold">카테고리</h5>
        </div>
        <Radios list={categoryList} tagList={tagList} setTagList={setTagList} />
        <div id="eachFilter5" className="flex items-center">
          <div className="bg-lime-600 w-3 h-3 mr-2 rounded"></div>
          <h5 className="font-bold">지역</h5>
        </div>
        <Select
          list={locationList}
          state={location}
          border={true}
          tagList={tagList}
          setTagList={setTagList}
        />
        <div id="eachFilter6" className="flex items-center">
          <div className="bg-cyan-300 w-3 h-3 mr-2 rounded"></div>
          <h5 className="font-bold">TV맛집</h5>
        </div>
        <CheckBoxesWithMore
          list={tvList}
          tagList={tagList}
          setTagList={setTagList}
        />
        <div id="eachFilter7" className="flex items-center">
          <div className="bg-indigo-400 w-3 h-3 mr-2 rounded"></div>
          <h5 className="font-bold">편의기능</h5>
        </div>
        <CheckBoxesWithMore
          list={convenienceList}
          tagList={tagList}
          setTagList={setTagList}
        />
        <div id="eachFilter8" className="flex items-center">
          <div className="bg-blue-600 w-3 h-3 mr-2 rounded"></div>
          <h5 className="font-bold">방문목적</h5>
        </div>
        <CheckBoxesWithMore
          list={purposeList}
          tagList={tagList}
          setTagList={setTagList}
        />
        <div id="eachFilter9" className="flex items-center">
          <div className="bg-violet-800 w-3 h-3 mr-2 rounded"></div>
          <h5 className="font-bold">분위기</h5>
        </div>
        <CheckBoxesWithMore
          list={moodList}
          tagList={tagList}
          setTagList={setTagList}
        />
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
                <FilterButton
                  value="social"
                  displayValue="소셜"
                  selectFilter={selectFilter}
                  setSelectFilter={setSelectFilter}
                  color="bg-red-600"
                />
                <FilterButton
                  value="people"
                  displayValue="이용자층"
                  selectFilter={selectFilter}
                  setSelectFilter={setSelectFilter}
                  color="bg-amber-500"
                />
                <FilterButton
                  value="category"
                  displayValue="카테고리"
                  selectFilter={selectFilter}
                  setSelectFilter={setSelectFilter}
                  color="bg-yellow-300"
                />
                <FilterButton
                  value="location"
                  displayValue="지역"
                  selectFilter={selectFilter}
                  setSelectFilter={setSelectFilter}
                  color="bg-lime-600"
                />
                <FilterButton
                  value="tv"
                  displayValue="TV맛집"
                  selectFilter={selectFilter}
                  setSelectFilter={setSelectFilter}
                  color="bg-cyan-300"
                />
                <FilterButton
                  value="convenience"
                  displayValue="편의기능"
                  selectFilter={selectFilter}
                  setSelectFilter={setSelectFilter}
                  color="bg-indigo-400"
                />
                <FilterButton
                  value="purpose"
                  displayValue="방문목적"
                  selectFilter={selectFilter}
                  setSelectFilter={setSelectFilter}
                  color="bg-blue-600"
                />
                <FilterButton
                  value="mood"
                  displayValue="분위기"
                  selectFilter={selectFilter}
                  setSelectFilter={setSelectFilter}
                  color="bg-violet-800"
                />
              </div>
              <div className="shadow flex justify-center items-center w-[calc(100%-128px)] px-8">
                <FilterSelect
                  selectFilter={selectFilter}
                  socialList={socialList}
                  peopleList={peopleList}
                  genderList={genderList}
                  categoryList={categoryList}
                  locationList={locationList}
                  location={location}
                  tvList={tvList}
                  convenienceList={convenienceList}
                  purposeList={purposeList}
                  moodList={moodList}
                  tagList={tagList}
                  setTagList={setTagList}
                />
              </div>
            </div>
            <div className="flex justify-center bg-white my-2 py-2 px-4 border-y-[1px] border-lightGray">
              <Button
                value="relate"
                displayValue="연관순"
                sortState={sortState}
                setSortState={setSortState}
              />
              <Button
                value="score"
                displayValue="평점순"
                sortState={sortState}
                setSortState={setSortState}
              />
              <Button
                value="review"
                displayValue="리뷰많은순"
                sortState={sortState}
                setSortState={setSortState}
              />
              <Button
                value="favorite"
                displayValue="좋아요많은순"
                sortState={sortState}
                setSortState={setSortState}
              />
              <Button
                value="distance"
                displayValue="거리순"
                sortState={sortState}
                setSortState={setSortState}
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

const Button = ({
  value,
  displayValue,
  sortState,
  setSortState,
  originalList,
  setRestaurantList,
}) => {
  const sortFunc = () => {
    if (value === "relate") {
      setRestaurantList(originalList);
    } else if (value === "score") {
      const originalListCopy = [...originalList].sort(
        (a, b) => b.rating - a.rating
      );
      setRestaurantList(originalListCopy);
    } else if (value === "review") {
      const originalListCopy = [...originalList].sort(
        (a, b) => b.reviewCount - a.reviewCount
      );
      setRestaurantList(originalListCopy);
    } else if (value === "favorite") {
      const originalListCopy = [...originalList].sort(
        (a, b) => b.wishListCount - a.wishListCount
      );
      setRestaurantList(originalListCopy);
    } else {
      const originalListCopy = [...originalList].sort(
        (a, b) => b.distance - a.distance
      );
      setRestaurantList(originalListCopy);
    }
  };

  return (
    <button
      onClick={() => {
        setSortState(value);
        sortFunc();
      }}
      className={`py-1 px-2 border-[1px] rounded-md mr-2 text-sm ${
        sortState === value
          ? "border-secondary text-secondary font-bold"
          : "border-lightGray text-mediumGray"
      }`}
    >
      {displayValue}
    </button>
  );
};

const MapButton = ({
  value,
  meterState,
  setMeterState,
  originalList,
  setRestaurantList,
}) => {
  const filterFunc = () => {
    if (value === "100m") {
      const originalListCopy = [...originalList].filter(
        (v) => v.distance <= 100
      );
      setRestaurantList(originalListCopy);
    } else if (value === "300m") {
      const originalListCopy = [...originalList].filter(
        (v) => v.distance <= 300
      );
      setRestaurantList(originalListCopy);
    } else if (value === "500m") {
      const originalListCopy = [...originalList].filter(
        (v) => v.distance <= 500
      );
      setRestaurantList(originalListCopy);
    } else if (value === "1km") {
      const originalListCopy = [...originalList].filter(
        (v) => v.distance <= 1000
      );
      setRestaurantList(originalListCopy);
    } else if (value === "2km") {
      const originalListCopy = [...originalList].filter(
        (v) => v.distance <= 2000
      );
      setRestaurantList(originalListCopy);
    } else if (value === "3km") {
      const originalListCopy = [...originalList].filter(
        (v) => v.distance <= 3000
      );
      setRestaurantList(originalListCopy);
    } else if (value === "5km") {
      const originalListCopy = [...originalList].filter(
        (v) => v.distance <= 5000
      );
      setRestaurantList(originalListCopy);
    } else if (value === "10km") {
      const originalListCopy = [...originalList].filter(
        (v) => v.distance <= 10000
      );
      setRestaurantList(originalListCopy);
    } else if (value === "15km") {
      const originalListCopy = [...originalList].filter(
        (v) => v.distance <= 15000
      );
      setRestaurantList(originalListCopy);
    } else {
      setRestaurantList(originalList);
    }
  };

  return (
    <button
      onClick={() => {
        setMeterState(value);
        filterFunc();
      }}
      className={`py-1 px-3 rounded-full hover:bg-darkGray ${
        meterState === value ? "bg-darkGray" : null
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
  const [browserSizeX, setBrowserSizeX] = useState(window.innerWidth);
  const [sortSelect, setSortSelect] = useState("relate");
  const [meter, setMeter] = useState("500m");
  const [restaurantList, setRestaurantList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    axiosInstance.get(API_URL.SEARCH).then((res) => {
      setRestaurantList(
        res.data.restaurantList.filter((v) => v.distance <= 500)
      );
      setOriginalList(res.data.restaurantList);
      setReviews(res.data.reviews);
      setUsers(res.data.users);
    });
  }, []);

  useEffect(() => {
    console.log(tagList);
    axiosInstance.post(API_URL.SEARCHFILTER, tagList).then((res) => {
      console.log(res.data.message);
    });
  }, [tagList]);

  return (
    <>
      <SearchResultNavbar browserSizeX={browserSizeX} />
      <div className="w-[calc(100vw-17px)] bg-lightGray flex flex-col justify-center no-scrollbar lg:flex-row lg:p-6">
        <Filter
          browserSizeX={browserSizeX}
          setBrowserSizeX={setBrowserSizeX}
          sortState={sortSelect}
          setSortState={setSortSelect}
          tagList={tagList}
          setTagList={setTagList}
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
                  <Button
                    value="relate"
                    displayValue="연관순"
                    sortState={sortSelect}
                    setSortState={setSortSelect}
                    originalList={originalList}
                    setRestaurantList={setRestaurantList}
                  />
                  <Button
                    value="score"
                    displayValue="평점순"
                    sortState={sortSelect}
                    setSortState={setSortSelect}
                    originalList={originalList}
                    setRestaurantList={setRestaurantList}
                  />
                  <Button
                    value="review"
                    displayValue="리뷰많은순"
                    sortState={sortSelect}
                    setSortState={setSortSelect}
                    originalList={originalList}
                    setRestaurantList={setRestaurantList}
                  />
                  <Button
                    value="favorite"
                    displayValue="좋아요많은순"
                    sortState={sortSelect}
                    setSortState={setSortSelect}
                    originalList={originalList}
                    setRestaurantList={setRestaurantList}
                  />
                  <Button
                    value="distance"
                    displayValue="거리순"
                    sortState={sortSelect}
                    setSortState={setSortSelect}
                    originalList={originalList}
                    setRestaurantList={setRestaurantList}
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
                          <p>{v}</p>
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
                    originalList={originalList}
                    setRestaurantList={setRestaurantList}
                  />
                  <MapButton
                    value="300m"
                    meterState={meter}
                    setMeterState={setMeter}
                    originalList={originalList}
                    setRestaurantList={setRestaurantList}
                  />
                  <MapButton
                    value="500m"
                    meterState={meter}
                    setMeterState={setMeter}
                    originalList={originalList}
                    setRestaurantList={setRestaurantList}
                  />
                  <MapButton
                    value="1km"
                    meterState={meter}
                    setMeterState={setMeter}
                    originalList={originalList}
                    setRestaurantList={setRestaurantList}
                  />
                  <MapButton
                    value="2km"
                    meterState={meter}
                    setMeterState={setMeter}
                    originalList={originalList}
                    setRestaurantList={setRestaurantList}
                  />
                  <MapButton
                    value="3km"
                    meterState={meter}
                    setMeterState={setMeter}
                    originalList={originalList}
                    setRestaurantList={setRestaurantList}
                  />
                  <MapButton
                    value="5km"
                    meterState={meter}
                    setMeterState={setMeter}
                    originalList={originalList}
                    setRestaurantList={setRestaurantList}
                  />
                  <MapButton
                    value="10km"
                    meterState={meter}
                    setMeterState={setMeter}
                    originalList={originalList}
                    setRestaurantList={setRestaurantList}
                  />
                  <MapButton
                    value="15km"
                    meterState={meter}
                    setMeterState={setMeter}
                    originalList={originalList}
                    setRestaurantList={setRestaurantList}
                  />
                  <MapButton
                    value="전국"
                    meterState={meter}
                    setMeterState={setMeter}
                    originalList={originalList}
                    setRestaurantList={setRestaurantList}
                  />
                </div>
                <NaverMap width="100%" height="h-72" isRounded={true} />
              </div>
            </div>
            <RestaurantList
              list={restaurantList}
              setList={setRestaurantList}
              reviews={reviews}
              users={users}
              tag="none"
            />
            <button className="w-[calc(100%-2rem)] m-4 bg-secondary py-3 flex items-center justify-center text-white text-sm rounded-md hover:opacity-80">
              <MdFormatListBulleted />
              <span className="ml-1">검색 결과 더보기</span>
            </button>
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
