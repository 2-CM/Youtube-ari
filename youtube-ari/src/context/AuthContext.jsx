import { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "../firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

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

  // 로그인 함수
  const login = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Google 로그인 실패:", err);
    }
  };

  // 로그아웃 함수
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("로그아웃 실패:", err);
    }
  };

  // Context.Provider로 하위 컴포넌트에 currentUser 공유
  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
