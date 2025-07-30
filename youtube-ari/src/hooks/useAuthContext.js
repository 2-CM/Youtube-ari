import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

// AuthContext를 쉽게 사용할 수 있도록 하는 커스텀 훅
const useAuthContext = () => {
  // Context 값을 가져옴
  const context = useContext(AuthContext);

  // Provider 외부에서 사용하려 할 경우 오류 발생
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }

  return context;
};

export default useAuthContext;
