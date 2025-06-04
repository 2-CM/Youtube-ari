import logo from "../../assets/youtube-logo.svg";

const HeaderLogo = () => {
  return (
    <div className="flex items-center pl-10">
      <a href="/" title="Youtube Home" className="px-4 py-[18px]">
        <img src={logo} alt="YouTube Logo" className="h-full w-full" />
      </a>
    </div>
  );
};

export default HeaderLogo;
