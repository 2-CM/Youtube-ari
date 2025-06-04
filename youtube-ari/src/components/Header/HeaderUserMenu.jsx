import ThemeToggleSwitch from "../ThemeToggleSwitch";

const HeaderUserMenu = () => {
  return (
    <div className="flex items-center justify-center">
      <ThemeToggleSwitch />
      <button className="avatarBtn border-none px-2 outline-none">
        <div className="avatarImageWrapper">
          <img
            src=""
            alt="Avatar Image"
            className="block h-8 w-8 bg-slate-300"
          />
        </div>
      </button>
    </div>
  );
};

export default HeaderUserMenu;
