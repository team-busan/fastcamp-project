import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance, API_URL } from "../stores/API";
import { useRecoilState, useSetRecoilState } from "recoil";
import { accessTokenAtom, isLoginAtom } from "../stores/atoms";
import qs from "query-string";

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
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const setterFunc = useSetRecoilState(isLoginAtom);

  const [_, setAccessToken] = useRecoilState(accessTokenAtom)

  const signUpFunc = (e, id, pw, pwConfirm) => {
    e.preventDefault();
    if (id === "" || pw === "" || pwConfirm === "") {
      return alert("모든 값을 입력해주세요");
    }
    if (pw !== pwConfirm) {
      return alert("비밀번호가 일치하지 않습니다.");
    }
    const body = {
      username: id,
      password: pw,
      first_name: firstName,
      last_name: lastName,
      email: email,
    };
    // axiosInstance.post(API_URL.SIGNUP, qs.stringify(body), {
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    // }).then((res) => {

    axiosInstance.post(API_URL.SIGNUP, body, {
    }).then((res) => {
      console.log(body);
      // alert(res.data.id);
      alert("회원가입이 완료되었습니다.")
      navigate(`/login`);
    });
  };

  const loginFunc = (e, id, pw) => {
    e.preventDefault();
    if (id === "" || pw === "") {
      return alert("모든 값을 입력해주세요");
    }
    const body = {
      username: `${id}`.trim(),
      password: `${pw}`.trim(),
      // scope: "",
      // grant_type: "",
      // client_id: "",
      // client_secret: "",
    };
    
    //application/x-www-form-urlencoded
    axiosInstance.post(API_URL.LOGIN, qs.stringify(body)).then((res) => {
      // console.log(res);
      // alert(res.data.access_token);
      setterFunc(res.data.access_token);
      setAccessToken(res.data.access_token);
      navigate(`/mypage`);
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
          <div>
            <TextInput
            state={pwConfirm}
            setState={setPwConfirm}
            placeholder="비밀번호 확인"
          />
          <TextInput state={email} setState={setEmail} placeholder="이메일 입력" />
          <TextInput state={firstName} setState={setFirstName} placeholder="이름 입력" />
          <TextInput state={lastName} setState={setLastName} placeholder="성 입력" />
          </div>
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
