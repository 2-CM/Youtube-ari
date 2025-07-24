import ThemeToggleSwitch from "../ThemeToggleSwitch";
import { useNavigate } from "react-router-dom";
import { UserCircle } from "lucide-react";
import { useAuthContext } from "../../hooks/useAuthContext";

const HeaderUserMenu = () => {
  const { currentUser, login } = useAuthContext();

  const navigate = useNavigate();
  const handleProfileClick = () => {
    navigate(`/you`);
  };

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <ThemeToggleSwitch />
      {!currentUser ? (
        <button onClick={login} className="signInBtn">
          <UserCircle strokeWidth={1.25} className="-ml-2 mr-2 h-6 w-6" />
          <span className="font-medium">Sign in</span>
        </button>
      ) : (
        <button className="avatarBtn px-2" onClick={handleProfileClick}>
          <div className="avatarImageWrapper flex-shrink-0">
            <img
              src={`${currentUser.photoURL}?sz=100`}
              alt="User Avatar"
              className="h-8 w-8 rounded-full"
            />
          </div>
        </button>
      )}
    </div>
  );
};

export default HeaderUserMenu;
