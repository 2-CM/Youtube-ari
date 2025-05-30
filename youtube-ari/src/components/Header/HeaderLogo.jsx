import logo from "../../assets/youtube-logo.svg";

const HeaderLogo = () => {
  return (
    <div>
      <a href="/" title="Youtube Home">
        <img src={logo} alt="YouTube Logo" className="h-full w-full" />
      </a>
    </div>
  );
};

export default HeaderLogo;
