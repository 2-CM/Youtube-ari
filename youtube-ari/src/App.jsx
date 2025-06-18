import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import VideoDetail from "./components/VideoDetail/VideoDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<VideoDetail />} />
    </Routes>
  );
}

export default App;
