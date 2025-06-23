const Description = ({ views, publishedAt, description }) => {
  return (
    <div className="mt-3 cursor-pointer rounded-xl bg-ytGray-30">
      <div className="p-3 text-sm">
        <div className="flex flex-row font-medium">
          <span>{views}</span>
          <span className="before:mx-1 before:content-['•']">
            {publishedAt}
          </span>
        </div>
        <div className="whitespace-pre-line font-normal">{description}</div>
      </div>
    </div>
  );
};

export default Description;
