import { Link } from "react-router-dom";
import lightLogo from "../../assets/youtube-logo-light.svg";
import darkLogo from "../../assets/youtube-logo-dark.svg";

const HeaderLogo = () => {
  return (
    <div className="flex flex-shrink-0 items-center">
      <Link to="/" title="Youtube Home" className="px-4 py-[18px]">
        <img src={lightLogo} alt="YouTube Logo" className="block dark:hidden" />
        <img src={darkLogo} alt="YouTube Logo" className="hidden dark:block" />
      </Link>
    </div>
  );
};

export default HeaderLogo;
