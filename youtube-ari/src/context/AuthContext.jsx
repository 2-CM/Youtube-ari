import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";

// AuthContext 객체 생성 및 내보내기
export const AuthContext = createContext(null);

// AuthProvider 컴포넌트 정의 및 내보내기
// 이 컴포넌트가 실제 인증 로직과 상태를 관리하고 Context 값을 제공
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Firebase 인증 상태 변화 감지
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // 로그인/로그아웃 시 currentUser를 업데이트
      setIsLoading(false); // 사용자 정보 확인 완료 시 로딩 종료
    });

    // 컴포넌트 언마운트 시 구독 해제하여 메모리 누수 방지
    return () => unsubscribe();
  }, []);

  // 로그인 로직
  const login = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // 로그아웃 로직
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    // AuthContext.Provider를 통해 하위 컴포넌트에 제공
    <AuthContext.Provider value={{ currentUser, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
