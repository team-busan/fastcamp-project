import HomeContent from "./HomeContent";
import { Link } from "react-router-dom";

export default function MbLocalFood({ isLogin, setIsLogin }) {
  return (
    <div className="bg-[url('/img/fastdining_hero_bg.png')] bg-cover flex-col overflow-hidden relative flex min-h-[327px] w-full items-stretch pb-8 px-5 md:hidden ">
      <div className="relative flex w-full justify-between items-center gap-5 h-[60px]">
        <Link
          to="/"
          className="justify-center text-primary text-2xl leading-8 tracking-wide flex-1"
        >
          패스트다이닝
        </Link>
        {isLogin === "" ? (
          <>
            <Link
              to="/login"
              className="justify-center text-white text-center text-sm leading-4"
            >
              로그인
            </Link>
            <Link
              to="/signup"
              className="justify-center text-white text-center text-sm leading-4"
            >
              회원가입
            </Link>
          </>
        ) : (
          <>
            <Link
              to={`/mypage/${isLogin}`}
              className="justify-center text-white text-center text-sm leading-4"
            >
              마이페이지
            </Link>
            <span
              onClick={() => setIsLogin("")}
              className="justify-center text-white text-center text-sm leading-4 cursor-pointer"
            >
              로그아웃
            </span>
          </>
        )}
      </div>
      <HomeContent />
    </div>
  );
}
