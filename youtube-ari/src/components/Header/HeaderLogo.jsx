import { Link } from "react-router-dom";
import logo from "../../assets/youtube-logo.svg";

const HeaderLogo = () => {
  return (
    <div className="flex items-center">
      <Link to="/" title="Youtube Home" className="px-4 py-[18px]">
        <img src={logo} alt="YouTube Logo" className="h-full w-full" />
      </Link>
    </div>
  );
};

export default HeaderLogo;
