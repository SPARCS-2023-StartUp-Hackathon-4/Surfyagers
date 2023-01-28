import useSWR from "swr";
import { useParams } from "react-router-dom";
import Feed from "../../element/Feed/Feed";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const FeedPage = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useSWR(
    "http://loopy-lim.com:8000/productDetail/" + id,
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
  const onBack = () => {
    history.back();
  };
  return (
    <div>
      <div className="fixed flex pt-[54px] pb-[24px] w-full bg-white">
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
      <div className="px-[24px]">
        <Feed />
      </div>
      <div className="h-[105px]"></div>
      <div className="fixed bottom-0 pb-[37px] bg-[#fff] w-screen flex  justify-between pt-[13px] border-t-[0.5px] border-[#DCDCDC]">
        <div className="ml-[24px]">
          <div className="text-[14px] font-semibold">{data.product_name}</div>
          <div className="text-[18px]">{data.company}</div>
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
              {numberWithCommas(data.heart)}
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
    </div>
  );
};

export default FeedPage;
