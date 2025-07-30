import useAuthContext from "../hooks/useAuthContext";
import LoggedInMyPage from "../components/MyPage/LoggedInMyPage";
import LoggedOutMyPage from "../components/MyPage/LoggedOutMyPage";

const MyPage = () => {
  const { currentUser } = useAuthContext();

  if (!currentUser) {
    return <LoggedOutMyPage />;
  }

  return <LoggedInMyPage currentUser={currentUser} />;
};

export default MyPage;
