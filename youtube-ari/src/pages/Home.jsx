import Header from "../components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="h-[2000px] bg-gray-100 pt-14">
        Scroll to test fixed header
      </div>
    </div>
  );
};

export default Home;
