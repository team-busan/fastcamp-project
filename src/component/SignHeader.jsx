import { Link } from "react-router-dom";

const SignHeader = () => {
  return (
    <Link
      to="/"
      className="text-primary font-bold w-full py-6 mb-14 flex justify-center border-b-[1px] border-lightGray"
    >
      <h1>제목</h1>
    </Link>
  );
};

export default SignHeader;
