import FullSizeImage from "../Image/FullSizeImage";

const ConsumerFeeds = () => {
  return (
    <div className="pb-[24px]">
      <div className="flex justify-between my-[29px]">
        <div>이 제품에 대한 Consumer Feeds</div>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.90625 17.1875L14.0938 11L7.90625 4.8125"
            stroke="black"
            stroke-width="2.15625"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="grid grid-cols-3 gap-[2px]">
        <FullSizeImage id={14} />
        {Array.from({ length: 8 }).map((_, index) => {
          return <FullSizeImage id={index + 6} />;
        })}
      </div>
    </div>
  );
};

export default ConsumerFeeds;
