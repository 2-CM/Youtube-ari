import HeaderLogo from "./HeaderLogo";
import HeaderSearchBar from "./HeaderSearchBar";
import HeaderUserMenu from "./HeaderUserMenu";

const Header = () => {
  return (
    <header className="dark:bg-darkBg/70 fixed top-0 z-[2020] w-full bg-white/90 backdrop-blur-2xl">
      <div className="flex h-14 flex-row items-center justify-between px-4">
        <HeaderLogo />
        <HeaderSearchBar />
        <HeaderUserMenu />
      </div>
    </header>
  );
};

export default Header;
