import { useState, useEffect } from "react";
import DEFAULT_AVATAR_URL from "../../assets/default-avatar.png";

const Avatar = ({ src, alt = "User Avatar", className }) => {
  const [imgSrc, setImgSrc] = useState(src || DEFAULT_AVATAR_URL);

  useEffect(() => {
    // src prop이 변경될 때마다 imgSrc 상태를 업데이트
    setImgSrc(src || DEFAULT_AVATAR_URL);
  }, [src]);

  // 이미지 로딩 에러 발생 시 실행될 함수
  const handleImageError = () => {
    if (imgSrc !== DEFAULT_AVATAR_URL) {
      setImgSrc(DEFAULT_AVATAR_URL);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleImageError}
      referrerPolicy="no-referrer"
    />
  );
};

export default Avatar;
