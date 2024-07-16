import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  MdArrowBack,
  MdAddCircle,
  MdOutlineSearch,
  MdLocationOn,
} from "react-icons/md";

const MobileNavbar = ({
  isLogin, setIsLogin
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("query") ? searchParams.get("query") : ""
  );
  const [isSearchDone, setIsSearchDone] = useState(true);
  return (
    <div className="flex items-center py-2 px-4 border-b-2 border-primary">
      {isSearchDone ? (
        <MdLocationOn className="text-primary text-3xl" />
      ) : (
        <MdArrowBack
          className="text-3xl cursor-pointer"
          onClick={() => history.back()}
        />
      )}
      <input
        type="text"
        value={searchValue}
        placeholder="지역, 음식 또는 식당명 입력"
        onChange={(e) => setSearchValue(e.currentTarget.value)}
        onClick={() => setIsSearchDone(false)}
        className="mx-2 outline-none w-[calc(100%-100px)]"
      />
      {isSearchDone || searchValue ? (
        <MdAddCircle
          className="text-lightGray rotate-45 text-2xl mr-2 cursor-pointer"
          onClick={() => setSearchValue("")}
        />
      ) : null}
      {isSearchDone ? null : (
        <MdOutlineSearch
          className="text-3xl cursor-pointer ml-auto"
          onClick={() => setIsSearchDone(true)}
        />
      )}
      {isSearchDone ? null : (
        <div
          className="w-[calc(100vw-17px)] h-[300vh] absolute bg-white z-[101] top-[48px] left-0"
          onClick={() => setIsSearchDone(true)}
        >
          <button className="flex items-center mx-auto bg-lightGray px-3 py-2 mt-8 rounded-full">
            <MdLocationOn className="text-primary text-2xl" />
            <span className="ml-1">내주변 검색</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
