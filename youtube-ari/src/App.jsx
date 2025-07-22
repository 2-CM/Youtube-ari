import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebase";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import VideoDetail from "./pages/VideoDetail";
import LayoutWithSidebar from "./components/SideBar/LayoutWithSidebar";

function App() {
  const [user, setUser] = useState(null); // 사용자 정보를 저장할 상태

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const login = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Google 로그인 실패:", err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("로그아웃 실패:", err);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-darkBg dark:text-white">
      <Header user={user} login={login} />
      <Routes>
        <Route element={<LayoutWithSidebar />}>
          <Route path="/" element={<Home />} />
          <Route path="/you" element={<MyPage user={user} logout={logout} />} />
        </Route>
        <Route path="/video/:id" element={<VideoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
