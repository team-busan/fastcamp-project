import { useState, useEffect, useRef } from "react";
import useDetectColse from "../hooks/useDetectClose.js";
import {
  MdCheck,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

const CheckBoxes = ({ list, isFlexCol, border, tagList, setTagList }) => {
  const [selected, setSelected] = useState([]);
  return (
    <ul
      className={`py-3 mb-3 ${
        border ? "border-b-[1px] border-lightGray" : ""
      } ${isFlexCol ? null : "flex flex-wrap"}`}
    >
      {list.map((v, i) => {
        return (
          <li
            key={i}
            onClick={() => {
              if (selected.includes(i)) {
                const selectedCopy = [...selected].filter((v2) => v2 !== i);
                setSelected(selectedCopy);
              } else {
                const selectedCopy = [...selected];
                selectedCopy.push(i);
                setSelected(selectedCopy);
              }
              if (tagList.includes(v)) {
                const filteredTagList = [...tagList].filter((v2) => v2 !== v);
                setTagList(filteredTagList);
              } else {
                const tagListCopy = [...tagList];
                tagListCopy.push(v);
                setTagList(tagListCopy);
              }
            }}
            className={`${
              isFlexCol ? null : "w-1/2"
            } mb-2 flex items-center cursor-pointer`}
          >
            <div
              className={`flex justify-center items-center text-sm ${
                selected.includes(i) && tagList.includes(v)
                  ? "text-white border-secondary bg-secondary"
                  : "text-mediumGray border-mediumGray bg-white"
              } w-4 h-4 border-[1px] rounded hover:border-primary hover:text-primary`}
            >
              {selected.includes(i) && tagList.includes(v) ? <MdCheck /> : "+"}
            </div>
            <span
              className={`ml-3 text-sm ${
                selected.includes(i) && tagList.includes(v)
                  ? "text-secondary font-bold"
                  : "text-black font-medium"
              }`}
            >
              {v.name}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

const Radios = ({ list, border, tagList, setTagList }) => {
  const [selected, setSelected] = useState(-1);
  const [listShown, setListShown] = useState(
    list.length > 4 ? list.slice(0, 8) : list
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setListShown(isOpen ? list : list.slice(0, 8));
  }, [isOpen]);

  return (
    <>
      <ul
        className={`py-3 mb-3 ${
          border ? "border-b-[1px] border-lightGray" : ""
        } flex flex-wrap`}
      >
        {listShown.map((v, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                const index = selected === i ? -1 : i;
                setSelected(index);
                if (tagList.includes(v)) {
                  const filteredTagList = [...tagList].filter((v2) => v2 !== v);
                  setTagList(filteredTagList);
                } else {
                  const tagListCopy = [...tagList].filter(
                    (v2) => !list.includes(v2)
                  );
                  tagListCopy.push(v);
                  setTagList(tagListCopy);
                }
              }}
              className="w-1/2 mb-2 flex items-center cursor-pointer"
            >
              <div
                className={`w-4 h-4 border-[1px] rounded-full hover:border-primary ${
                  selected === i && tagList.includes(v)
                    ? "border-[5px] border-secondary"
                    : "border-[1px] border-mediumGray"
                }`}
              ></div>
              <span
                className={`ml-3 text-sm ${
                  selected === i && tagList.includes(v)
                    ? "font-bold text-secondary"
                    : "font-medium text-black"
                }`}
              >
                {v.name}
              </span>
            </li>
          );
        })}
        {list.length > 8 ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-lightGray my-2 py-2 px-8 flex items-center justify-center hover:opacity-80"
          >
            {isOpen ? (
              <MdKeyboardArrowUp className="text-mediumGray" />
            ) : (
              <MdKeyboardArrowDown className="text-mediumGray" />
            )}
            <span className="ml-2 text-sm">{isOpen ? "접기" : "펼치기"}</span>
          </button>
        ) : null}
      </ul>
    </>
  );
};

const CheckBoxesWithMore = ({ list, tagList, setTagList }) => {
  const [selected, setSelected] = useState([]);
  const [listShown, setListShown] = useState(list.slice(0, 4));
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setListShown(isOpen ? list : list.slice(0, 4));
  }, [isOpen]);

  return (
    <ul className="py-3 mb-3 border-b-[1px] border-lightGray">
      {listShown.map((v, i) => {
        return (
          <li
            key={i}
            onClick={() => {
              if (selected.includes(i)) {
                const selectedCopy = [...selected].filter((v2) => v2 !== i);
                setSelected(selectedCopy);
              } else {
                const selectedCopy = [...selected];
                selectedCopy.push(i);
                setSelected(selectedCopy);
              }
              if (tagList.includes(v)) {
                const filteredTagList = [...tagList].filter((v2) => v2 !== v);
                setTagList(filteredTagList);
              } else {
                const tagListCopy = [...tagList];
                tagListCopy.push(v);
                setTagList(tagListCopy);
              }
            }}
            className="mb-2 flex items-center cursor-pointer"
          >
            <div
              className={`flex justify-center items-center text-sm ${
                selected.includes(i) && tagList.includes(v)
                  ? "text-white border-secondary bg-secondary"
                  : "text-mediumGray border-mediumGray bg-white"
              } w-4 h-4 border-[1px] rounded hover:border-primary hover:text-primary`}
            >
              {selected.includes(i) && tagList.includes(v) ? <MdCheck /> : "+"}
            </div>
            <span
              className={`ml-3 text-sm ${
                selected.includes(i) && tagList.includes(v)
                  ? "text-secondary font-bold"
                  : "text-black font-medium"
              }`}
            >
              {v.name}
            </span>
          </li>
        );
      })}
      {list.length > 4 ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-lightGray my-3 py-2 px-8 flex items-center justify-center hover:opacity-80"
        >
          {isOpen ? (
            <MdKeyboardArrowUp className="text-mediumGray" />
          ) : (
            <MdKeyboardArrowDown className="text-mediumGray" />
          )}
          <span className="ml-2 text-sm">{isOpen ? "접기" : "펼치기"}</span>
        </button>
      ) : null}
    </ul>
  );
};

const LocationSelect = ({ list, state, setState, border}) => {
  const locationRef = useRef();
  const [locationIsOpen, setLocationIsOpen] = useDetectColse(
    locationRef,
    false
  );
  return (
    <div
      className={`pb-4 mb-4 ${
        border ? "border-b-[1px] border-lightGray" : "w-1/2"
      } relative`}
    >
      <input
        type="button"
        value={state ? state : "광역시도"}
        onClick={() => setLocationIsOpen(!locationIsOpen)}
        className="w-full mt-2 border-[1px] border-mediumGray px-4 py-1 rounded text-left text-sm cursor-pointer hover:border-primary"
      />
      {locationIsOpen ? (
        <MdKeyboardArrowUp
          onClick={() => setLocationIsOpen(!locationIsOpen)}
          className="absolute right-2 top-4 text-mediumGray cursor-pointer"
        />
      ) : (
        <MdKeyboardArrowDown
          onClick={() => setLocationIsOpen(!locationIsOpen)}
          className="absolute right-2 top-4 text-mediumGray cursor-pointer"
        />
      )}
      {locationIsOpen && (
        <ul className="shadow-md rounded-md h-64 overflow-y-scroll no-scrollbar">
          {list.map((v, i) => {
            return (
              <li
                key={i}
                className="px-4 py-2 text-sm hover:bg-lightGray cursor-pointer"
                onClick={() => {
                  // if (tagList.includes(v)) {
                  //   const filteredTagList = [...tagList].filter(
                  //     (v2) => v2 !== v
                  //   );
                  //   setTagList(filteredTagList);
                  // } else {
                  //   const tagListCopy = [...tagList].filter(
                  //     (v2) => !list.includes(v2)
                  //   );
                  //   tagListCopy.push(v);
                  //   setTagList(tagListCopy);
                  // }
                  setState(v);
                  setLocationIsOpen(!locationIsOpen);
                }}
              >
                {v}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export { CheckBoxes, Radios, CheckBoxesWithMore, LocationSelect };
