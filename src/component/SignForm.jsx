import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance, API_URL } from "../stores/API";

const TextInput = ({ state, setState, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={state}
      onChange={(e) => setState(e.currentTarget.value)}
      className="w-full px-4 py-2 mb-3 border-[1px] rounded-md border-lightGray focus:border-primary outline-none"
    />
  );
};

const SignForm = ({ isSignUp }) => {
  const navigate = useNavigate();
  const [id, setId] = useState("FoodLove");
  const [pw, setPw] = useState("1234");
  const [pwConfirm, setPwConfirm] = useState("");

  const signUpFunc = (e, id, pw, pwConfirm) => {
    e.preventDefault();
    if (id === "" || pw === "" || pwConfirm === "") {
      return alert("모든 값을 입력해주세요");
    }
    if (pw !== pwConfirm) {
      return alert("비밀번호가 일치하지 않습니다.");
    }
    const body = {
      id: id,
      pw: pw,
      pwConfirm: pwConfirm,
    };
    axiosInstance.post(API_URL.SIGNUP, body).then((res) => {
      console.log(body);
      alert(res.data.message);
      navigate(`/mypage/${id}`);
      // navigate("/");
    });
  };

  const loginFunc = (e, id, pw) => {
    e.preventDefault();
    if (id === "" || pw === "") {
      return alert("모든 값을 입력해주세요");
    }
    const body = {
      id: id,
      pw: pw,
    };
    axiosInstance.post(API_URL.LOGIN, body).then((res) => {
      console.log(body);
      alert(res.data.message);
      navigate(`/mypage/${id}`);
      // navigate("/");
    });
  };

  return (
    <>
      <form method="post" className="flex flex-col items-center w-96">
        <h3 className="font-semibold w-full text-center pb-8 mb-8 border-b-[1px] border-lightGray">
          {isSignUp ? "회원가입" : "로그인"}
        </h3>
        <TextInput state={id} setState={setId} placeholder="아이디 입력" />
        <TextInput state={pw} setState={setPw} placeholder="비밀번호 입력" />
        {isSignUp ? (
          <TextInput
            state={pwConfirm}
            setState={setPwConfirm}
            placeholder="비밀번호 확인"
          />
        ) : null}
        <button
          onClick={(e) =>
            isSignUp ? signUpFunc(e, id, pw, pwConfirm) : loginFunc(e, id, pw)
          }
          className="mt-6 w-full py-3 bg-primary text-white rounded-md hover:opacity-80"
        >
          {isSignUp ? "회원가입" : "로그인"}
        </button>
      </form>
      <hr className="h-[1px] w-96 my-8 bg-lightGray border-0" />
      <div className="flex">
        <span>
          {isSignUp ? "이미 계정이 있으신가요?" : "아직 계정이 없으신가요?"}
        </span>
        <Link
          to={isSignUp ? "/login" : "/signup"}
          className="ml-2 border-b-[1px] border-primary text-primary hover:opacity-80"
        >
          {isSignUp ? "로그인하러 가기" : "회원가입하러 가기"}
        </Link>
      </div>
    </>
  );
};

export default SignForm;
