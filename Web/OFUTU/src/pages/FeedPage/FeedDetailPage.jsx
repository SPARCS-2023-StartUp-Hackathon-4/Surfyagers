import useSWR from "swr";
import { useParams } from "react-router-dom";
import FullSizeImage from "../../element/Image/FullSizeImage";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const FeedDetailPage = () => {
  const onBack = () => {
    history.back();
  };

  const { id } = useParams();
  const { data, error, isLoading } = useSWR(
    "http://loopy-lim.com:8000/feedDetail/" + id,
    fetcher
  );
  if (error) {
    console.log(error);
    return <div>ERROR</div>;
  }
  if (isLoading)
    return (
      <div className="animate-pulse">
        <div className="w-full h-full"></div>
      </div>
    );

  const users = [
    "뽀로로",
    "패티",
    "해리",
    "에디",
    "로보",
    "크롱",
    "시현",
    "bigsun",
    "intellijang",
  ];

  const level = [4, 3, 2, 4, 1, 2, 1, 2, 4];
  const levelColor = ["#E4EFA4", "#C5D853", "#85D16A", "#3AB6A9"];

  return (
    <div>
      <div className="fixed flex pt-[154px] translate-y-[-100px] pb-[24px] w-full bg-white">
        <button className="translate-x-[24px] flex-1" onClick={onBack}>
          <img src="/images/arrow.left.svg" alt="" />
        </button>
        <div className="w-full flex justify-center  flex-1">
          <img src="/images/OFUTU_logo.svg" alt="" />
        </div>
        <button
          dir="rtl"
          className="flex-1 translate-x-[-24px]"
          onClick={onBack}
        >
          <img src="/images/search.svg" alt="" />
        </button>
      </div>
      <div className="h-[111px]"></div>
      <FullSizeImage id={+id + 28} />
      <div className="flex items-center justify-between px-[21px] py-[12px] border-b-[0.5px] border-[#DCDCDC] h-fit">
        <div className="text-[13px] text-[#777777]">디어마이어스</div>
        <div className="py-[5px] px-[12px] border-[#DCDCDC] border rounded-[3px] text-[#777777] font-normal text-[12px]">
          바로가기
        </div>
      </div>
      <div className="p-[21px]" style={{ whiteSpace: "pre-wrap" }}>
        {data.content}
      </div>
      <div className="fixed bottom-0 pb-[108px] right-[20px] flex items-center">
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.6106 6.59235C11.8527 5.74473 11.0824 3.83756 10.917 2.98993C10.5626 1.9304 10.2081 0.80023 8.15246 0.164507C5.48539 -0.660285 -0.0702131 1.64786 0.000671925 6.38045C0.071557 11.113 6.09679 14.5036 10.917 13.9385C15.7372 13.3734 15.808 7.65189 13.6106 6.59235Z"
            fill={levelColor[level[id - 1] - 1]}
          />
        </svg>
        <div className="pl-[6px]">{users[id - 1]}</div>
      </div>
      <div className="fixed bottom-0 pb-[37px] bg-[#fff] w-screen flex  justify-between pt-[13px] border-t-[0.5px] border-[#DCDCDC]">
        <div className="ml-[24px]">
          <div className="text-[14px] font-semibold">오가닉 솜</div>
          <div className="text-[18px]">{numberWithCommas(1000)}원 대</div>
        </div>
        <div className="flex flex-row-reverse items-center mr-[14px]">
          <div className="flex items-center ml-[6px] px-[10px] py-[7px] border-[1px] rounded-full w-fit border-[#DCDCDC]">
            <svg
              width="17"
              height="15"
              viewBox="0 0 17 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.981 1.04734C9.18098 1.04734 8.48098 3.04734 8.48098 4.04734C8.31431 2.88067 7.28097 0.647336 4.48098 1.04734C0.480981 1.84734 0.348819 6.04736 1.98098 8.04734L7.48098 13.5473C8.28098 14.3473 9.14765 13.8807 9.48098 13.5473C10.8143 12.3807 13.6057 9.4994 14.981 8.04734C17.3488 5.54736 15.481 1.04734 11.981 1.04734Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linejoin="bevel"
              />
            </svg>
            <span className="text-[16px] font-normal ml-[6px]">
              {numberWithCommas(1958)}
            </span>
          </div>
          <div className="p-[10px] border-[1px] rounded-full border-[#DCDCDC] ml-[8px]">
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.64286 5.74074L9.5 1M9.5 1L14.3571 5.74074M9.5 1V12.2593M1 11.0741V17H18V11.0741"
                stroke="black"
                stroke-width="1.5"
                stroke-linejoin="bevel"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
};

export default FeedDetailPage;
