const ComunityCell = ({ data }) => {
  const { name, title, level, content, tags } = data;
  const levelColor = ["#E4EFA4", "#C5D853", "#85D16A", "#3AB6A9"];

  return (
    <div className="p-[18px]">
      <div className="flex items-center">
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.6106 6.59235C11.8527 5.74473 11.0824 3.83756 10.917 2.98993C10.5626 1.9304 10.2081 0.80023 8.15246 0.164507C5.48539 -0.660285 -0.0702131 1.64786 0.000671925 6.38045C0.071557 11.113 6.09679 14.5036 10.917 13.9385C15.7372 13.3734 15.808 7.65189 13.6106 6.59235Z"
            fill={levelColor[level - 1]}
          />
        </svg>
        <div className="ml-[4px] text-[16px]">{name}</div>
        <div className="ml-[14px] text-[12px] font-extralight">{title}</div>
      </div>
      <div className="line-clamp-2 break-keep text-[13px] mt-[14px]">
        {content}
      </div>
      <div className="flex gap-[8px] pt-[16px] pb-[24px] border-b-[1px] border-[#D8D8D8]">
        {tags.map((tag) => {
          return (
            <div className="py-[3px] px-[10px] border-[1px] border-black rounded-full text-[13px]">
              #{tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComunityCell;
