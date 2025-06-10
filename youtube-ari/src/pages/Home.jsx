import Header from "../components/Header/Header";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="ml-[72px] mt-14 h-[2000px] bg-gray-100">content</div>
    </div>
  );
};

export default Home;
