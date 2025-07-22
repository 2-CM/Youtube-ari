import "./App.css";

import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import VideoDetail from "./pages/VideoDetail";

function App() {
  return (
    <div className="dark:bg-darkBg min-h-screen bg-white text-black dark:text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/you" element={<MyPage />} />
        <Route path="/video/:id" element={<VideoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
