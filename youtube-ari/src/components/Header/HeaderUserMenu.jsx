import ThemeToggleSwitch from "../ThemeToggleSwitch";
import channelImage from "../../assets/mock_channelImage_3.jpg";

const HeaderUserMenu = () => {
  return (
    <div className="flex items-center justify-center">
      <ThemeToggleSwitch />
      <button className="avatarBtn px-2">
        <div className="avatarImageWrapper">
          <img src={channelImage} alt="Avatar Image" className="h-8 w-8" />
        </div>
      </button>
    </div>
  );
};

export default HeaderUserMenu;
