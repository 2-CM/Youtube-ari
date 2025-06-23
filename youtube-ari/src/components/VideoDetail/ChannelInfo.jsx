import { useNavigate } from "react-router-dom";

const ChannelInfo = ({ channelImage, channelName }) => {
  const navigate = useNavigate();

  const handleChannelClick = () => {
    navigate(`/@${channelName}`);
  };

  return (
    <div
      className="mt-3 flex cursor-pointer select-none flex-row items-center"
      onClick={handleChannelClick}
    >
      <div className="mr-3 h-10 w-10">
        <img
          src={channelImage}
          alt="Channel Image"
          className="rounded-full object-cover"
        />
      </div>
      <div
        title={channelName}
        className="group relative text-left text-base font-medium"
      >
        {channelName}
        <div
          role="tooltip"
          aria-label="tooltip"
          className="tooltip bottom-12 group-hover:opacity-90"
        >
          {channelName}
        </div>
      </div>
    </div>
  );
};

export default ChannelInfo;
