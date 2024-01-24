import { useState, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useDetectClose from "../hooks/useDetectClose";
import { MdOutlineSearch, MdLocationOn } from "react-icons/md";

export default function Navbar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("query") ? searchParams.get("query") : ""
  );

  const inputRef = useRef();
  const [isInputActive, setIsInputActive] = useDetectClose(inputRef, false);

  return (
    <>
      <div className="hidden md:flex w-full items-stretch justify-between gap-5 px-20 py-4 h-0... sticky top-0 bg-white z-[102] ">
        <Link
          to="/"
          className="text-primary text-3xl font-bold leading-9 self-center whitespace-nowrap my-auto cursor-pointer"
        >
          <span>제목</span>
        </Link>
        <div
          ref={inputRef}
          className={`flex items-center bg-lightGray ${
            isInputActive ? "rounded-t-2xl" : "rounded-full"
          } py-1 px-4 relative`}
        >
          <input
            type={searchValue}
            placeholder="지역, 음식 또는 식당명 입력"
            className="bg-transparent outline-none w-96"
            value={searchValue}
            onChange={(e) => setSearchValue(e.currentTarget.value)}
            onClick={() => setIsInputActive(!isInputActive)}
          />
          <MdOutlineSearch className="cursor-pointer text-2xl" />
          {isInputActive && (
            <div className="absolute w-full py-4 rounded-b-2xl bg-white -bottom-[72px] left-0 shadow z-[102]">
              <div className="flex items-center cursor-pointer px-4 py-2 border-l-2 hover:bg-lightGray hover:border-primary">
                {searchValue ? (
                  <>
                    <MdOutlineSearch className="text-2xl" />
                    <span className="ml-2 text-myblue">{`'${searchValue}'`}</span>
                    <span className="ml-1">검색</span>
                  </>
                ) : (
                  <>
                    <MdLocationOn className="text-primary text-2xl" />
                    <span className="ml-2 font-semibold">내주변 검색</span>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
        <div className='className="self-center flex items-stretch justify-between gap-5 my-auto'>
          <div className="justify-center text-black text-sm leading-4 cursor-pointer">
            로그인
          </div>
          <div className="justify-center text-black text-sm leading-4 cursor-pointer">
            회원가입
          </div>
        </div>
      </div>
      {isInputActive && (
        <div className="absolute top-0 w-[calc(100vw-17px)] bg-black opacity-50 h-[200vh] z-[101]"></div>
      )}
    </>
  );
}
