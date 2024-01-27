import { useState, useRef } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import useDetectClose from "../hooks/useDetectClose";
import { MdOutlineSearch, MdLocationOn } from "react-icons/md";

function MbSearchBox() {
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState(
        searchParams.get("query") ? searchParams.get("query") : ""
    );

    const inputRef = useRef();
    const [isInputActive, setIsInputActive] = useDetectClose(inputRef, false);

    const handleSearch = (query) => {
        if (query === "") {
            query = "내주변";
        }
        navigate(`/search?query=${query}`);
    };

    return (
        <div
            ref={inputRef}
            className={`flex w-full items-center bg-white ${isInputActive ? "rounded-t-2xl" : "rounded-full"
                } mt-14 mx-4 py-3 px-4 relative`}
        >
            <input
                type={searchValue}
                placeholder="지역, 음식 또는 식당명 입력"
                className="bg-transparent outline-none w-full"
                value={searchValue}
                onChange={(e) => setSearchValue(e.currentTarget.value)}
                onClick={() => setIsInputActive(!isInputActive)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch(searchValue);
                    }
                }}
            />
            <MdOutlineSearch
                onClick={() => handleSearch(searchValue)}
                className="cursor-pointer text-2xl"
            />
            {isInputActive && (
                <div className="absolute w-full py-4 rounded-b-2xl bg-white -bottom-[72px] left-0 shadow z-[102]">
                    <div className="flex items-center cursor-pointer px-4 py-2 border-l-2 hover:bg-lightGray hover:border-primary">
                        {searchValue ? (
                            <div
                                onClick={() => handleSearch(searchValue)}
                                className="flex"
                            >
                                <MdOutlineSearch className="text-2xl" />
                                <span className="ml-2 text-myblue">{`'${searchValue}'`}</span>
                                <span className="ml-1">검색</span>
                            </div>
                        ) : (
                            <div
                                onClick={() => handleSearch(searchValue)}
                                className="flex"
                            >
                                <MdLocationOn className="text-primary text-2xl" />
                                <span className="ml-2 font-semibold">내주변 검색</span>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default MbSearchBox