import SignHeader from "../component/SignHeader";
import SignForm from "../component/SignForm";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center">
      <SignHeader />
      <SignForm isSignUp={true} />
    </div>
  );
};

export default SignUp;
