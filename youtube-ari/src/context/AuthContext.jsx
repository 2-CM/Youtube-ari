import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

// Context 생성
const AuthContext = createContext(null);

// Provider 컴포넌트
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Firebase 인증 상태 변화 감지
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // 로그인/로그아웃 시 currentUser를 업데이트
      setCurrentUser(user);
    });

    // 컴포넌트 언마운트 시 구독 해제하여 메모리 누수 방지
    return () => unsubscribe();
  }, []);

  // Context.Provider로 하위 컴포넌트에 currentUser 공유
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
