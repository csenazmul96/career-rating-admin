import LoginForm from "@/app/(auth)/login/__components/LoginForm";

const LoginPage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-login-img bg-cover bg-center bg-no-repeat">
      <div className="w-[500px] bg-white bg-opacity-80 py-[64px] px-[65px] shadow-lg rounded-[20px]">
        <h1 className="text-[25px] text-black font-bold mb-4 text-center pb-10">관리자 로그인</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;