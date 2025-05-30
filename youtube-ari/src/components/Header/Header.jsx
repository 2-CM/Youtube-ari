import HeaderLogo from "./HeaderLogo";
import HeaderSearchBar from "./HeaderSearchBar";
import HeaderUserMenu from "./HeaderUserMenu";

const Header = () => {
  return (
    <header className="z-2020 fixed flex h-14 w-full items-center justify-between px-4">
      <HeaderLogo />
      <HeaderSearchBar />
      <HeaderUserMenu />
    </header>
  );
};

export default Header;
