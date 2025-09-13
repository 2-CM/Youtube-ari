const ChannelInfo = ({ channelImage, channelName }) => {
  return (
    <div className="mt-3 flex cursor-pointer select-none flex-row items-center">
      <div className="mr-3 h-10 w-10">
        <img
          src={channelImage || "/src/assets/default-avatar.png"}
          alt="Channel Image"
          className="rounded-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/src/assets/default-avatar.png";
          }}
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
