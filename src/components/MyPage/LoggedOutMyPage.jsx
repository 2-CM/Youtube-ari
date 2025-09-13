import { UserCircle, TvMinimalPlay } from "lucide-react";
import useAuthContext from "../../hooks/useAuthContext";

const LoggedOutMyPage = () => {
  const { login } = useAuthContext();

  return (
    <div className="ml-[72px] flex flex-col items-center justify-center px-6 pt-32">
      <TvMinimalPlay strokeWidth={1} className="h-32 w-32" />
      <p className="mb-4 mt-10 text-center text-xl font-semibold">
        이 페이지는 로그인 후 이용할 수 있습니다.
      </p>
      <p className="text-md pb-10 text-ytGray-90 dark:text-ytGray-20">
        나만의 시청 기록을 확인하려면 로그인하세요.
      </p>

      <button onClick={login} className="signInBtn">
        <UserCircle strokeWidth={1.25} className="-ml-2 mr-2 h-6 w-6" />
        <span className="font-medium">Sign in</span>
      </button>
    </div>
  );
};

export default LoggedOutMyPage;
