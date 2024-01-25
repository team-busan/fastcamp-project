import SignHeader from "../component/SignHeader";
import SignForm from "../component/SignForm";

const Login = () => {
  return (
    <div className="flex flex-col items-center">
      <SignHeader />
      <SignForm isSignUp={false} />
    </div>
  );
};

export default Login;
