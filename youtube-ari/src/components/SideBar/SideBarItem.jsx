import { Link, useLocation } from "react-router-dom";

const SideBarItem = ({ to, title, icon: Icon }) => {
  const location = useLocation(); // 현재 경로를 가져옴
  const isActive = location.pathname === to; // 현재 경로와 버튼의 링크 경로가 일치하는지 확인

  return (
    <div className="sidebarIconWrapper">
      <Link to={to} title={title} className="sidebarIconLink">
        <div className="mb-2">
          {/* isActive 값에 따라 아이콘 색상을 변경 */}
          <Icon
            alt={title}
            strokeWidth={1.5}
            className={
              isActive
                ? "h-6 w-6 text-black dark:text-white"
                : "h-6 w-6 text-ytGray-70"
            }
          />
        </div>
        <span className="sidebarIconText">{title}</span>
      </Link>
    </div>
  );
};

export default SideBarItem;
