import "./App.css";

import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import VideoDetail from "./pages/VideoDetail";
import LayoutWithSidebar from "./components/SideBar/LayoutWithSidebar";

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-darkBg dark:text-white">
      <Header />
      <Routes>
        <Route element={<LayoutWithSidebar />}>
          <Route path="/" element={<Home />} />
          <Route path="/you" element={<MyPage />} />
        </Route>
        <Route path="/video/:id" element={<VideoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
