import { useState, useEffect } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import { MdArrowBack, MdFlashOn, MdArrowForwardIos } from "react-icons/md";

const RegionBlock = ({
  name,
  index,
  setSelect,
  isSpecial,
  isSelected,
  isLast,
}) => {
  return (
    <li
      onClick={() => setSelect(index)}
      className="cursor-pointer flex justify-center hover:font-bold"
    >
      <div
        className={`flex items-center justify-between py-1 px-[5%] my-1 rounded-md w-[90%] ${
          isSelected ? "bg-tertiary" : "bg-white"
        }`}
      >
        <div className="flex items-center">
          {isSpecial ? <MdFlashOn className="text-primary mr-1" /> : null}
          <span>{name}</span>
        </div>
        {isSelected && !isLast ? (
          <MdArrowForwardIos className="float-right" />
        ) : null}
      </div>
    </li>
  );
};

function CustomBottomSheet({ open, setOpen }) {
  const onDismiss = () => {
    setOpen(false);
  };

  const [select1, setSelect1] = useState(0);
  const [select2, setSelect2] = useState(0);
  const [select3, setSelect3] = useState(0);

  const list = [
    { name: "서울", isSpecial: false },
    { name: "서울", isSpecial: false },
    { name: "서울", isSpecial: false },
    { name: "서울", isSpecial: false },
    { name: "서울", isSpecial: false },
    { name: "서울", isSpecial: false },
    { name: "서울", isSpecial: false },
    { name: "서울", isSpecial: false },
    { name: "서울", isSpecial: false },
    { name: "서울", isSpecial: false },
    { name: "서울", isSpecial: false },
    { name: "서울", isSpecial: false },
  ];

  const list2 = [
    { name: "전체", isSpecial: false },
    { name: "강남역", isSpecial: true },
    { name: "강남역", isSpecial: true },
    { name: "강남역", isSpecial: true },
    { name: "강남역", isSpecial: true },
    { name: "강남역", isSpecial: true },
    { name: "강남역", isSpecial: true },
    { name: "강남역", isSpecial: true },
    { name: "강남구", isSpecial: false },
    { name: "강남구", isSpecial: false },
    { name: "강남구", isSpecial: false },
    { name: "강남구", isSpecial: false },
    { name: "강남구", isSpecial: false },
    { name: "강남구", isSpecial: false },
    { name: "강남구", isSpecial: false },
    { name: "강남구", isSpecial: false },
  ];

  const list3 = [
    { name: "전체", isSpecial: false },
    { name: "강남역", isSpecial: true },
    { name: "강남역", isSpecial: true },
    { name: "강남역", isSpecial: true },
    { name: "강남역", isSpecial: true },
    { name: "강남역", isSpecial: true },
    { name: "강남역", isSpecial: true },
    { name: "강남역", isSpecial: true },
    { name: "개포동", isSpecial: false },
    { name: "개포동", isSpecial: false },
    { name: "개포동", isSpecial: false },
    { name: "개포동", isSpecial: false },
    { name: "개포동", isSpecial: false },
    { name: "개포동", isSpecial: false },
    { name: "개포동", isSpecial: false },
    { name: "개포동", isSpecial: false },
  ];

  return (
    <>
      <BottomSheet open={open} onDismiss={onDismiss}>
        <div>
          <div className="flex items-center pt-2 pb-4 border-b-2 border-primary">
            <MdArrowBack
              className="text-3xl ml-2 cursor-pointer"
              onClick={() => setOpen(false)}
            />
            <h5 className="font-bold ml-4">지역 선택</h5>
          </div>
          <div>
            <div className="flex w-full border-b-[1px] border-lightGray">
              <h6 className="w-[27.5%] pl-4 h-10 flex items-center font-semibold">
                광역시도
              </h6>
              <h6 className="w-[36.25%] pl-4 h-10 flex items-center font-semibold">
                시군구
              </h6>
              <h6 className="w-[36.25%] pl-4 h-10 flex items-center font-semibold">
                읍면동
              </h6>
            </div>
            <div className="flex">
              <div className="w-[27.5%]">
                <ul className="flex flex-col pt-1 max-h-[calc(100vh-173px)] overflow-y-scroll no-scrollbar">
                  {list.map((v, i) => (
                    <RegionBlock
                      name={v.name}
                      index={i}
                      setSelect={setSelect1}
                      isSpecial={v.isSpecial}
                      isSelected={i === select1 ? true : false}
                      isLast={false}
                      key={i}
                    />
                  ))}
                </ul>
              </div>
              <div className="w-[36.25%]">
                <ul className="flex flex-col pt-1 border-x-[1px] border-lightGray max-h-[calc(100vh-173px)] overflow-y-scroll no-scrollbar">
                  {list2.map((v, i) => (
                    <RegionBlock
                      name={v.name}
                      index={i}
                      setSelect={setSelect2}
                      isSpecial={v.isSpecial}
                      isSelected={i === select2 ? true : false}
                      isLast={false}
                      key={i}
                    />
                  ))}
                </ul>
              </div>
              <div className="w-[36.25%]">
                <ul className="flex flex-col pt-1 max-h-[calc(100vh-173px)] overflow-y-scroll no-scrollbar">
                  {list3.map((v, i) => (
                    <RegionBlock
                      name={v.name}
                      index={i}
                      setSelect={setSelect3}
                      isSpecial={v.isSpecial}
                      isSelected={i === select3 ? true : false}
                      isLast={true}
                      key={i}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="bg-primary w-full text-white text-xl font-bold h-14 outline-none"
          >
            선택 완료
          </button>
        </div>
      </BottomSheet>
    </>
  );
}

export default CustomBottomSheet;
