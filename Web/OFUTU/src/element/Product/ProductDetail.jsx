import useSWR from "swr";
import FullSizeImage from "../Image/FullSizeImage";
import ConsumerFeeds from "./ConsumerFeeds";
import LikedProduct from "./LikedProduct";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ProductDetail = ({ productId }) => {
  const { data, error, isLoading } = useSWR(
    "http://loopy-lim.com:8000/productDetail/" + productId,
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

  const clickConsumerFeeds = () => {
    location.href = "/feeds/" + productId;
  };

  return (
    <div>
      <FullSizeImage id={28} />
      <div className="flex items-center justify-between px-[21px] py-[12px] border-b-[0.5px] border-[#DCDCDC] h-fit">
        <div className="text-[13px] text-[#777777]">{data.product_name}</div>
        <div className="py-[5px] px-[12px] border-[#DCDCDC] border rounded-[3px] text-[#777777] font-normal text-[12px]">
          바로가기
        </div>
      </div>
      <div className="flex my-[24px]">
        <div className="px-[10px] py-[4px] bg-[#000] text-[#fff] rounded-full ml-[16px]">
          제로웨이스트
        </div>
        <div className="px-[10px] py-[4px] bg-[#000] text-[#fff] rounded-full ml-[6px]">
          비건
        </div>
      </div>
      <div className="text-[18px] ml-[16px] mb-[16px]">{data.company}</div>
      <div className="flex items-center">
        <div className="flex gap-[2px] ml-[16px] mr-[8px]">
          {Array.from({ length: 5 }).map(() => {
            return (
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.30249 9.90301C2.55309 10.0703 2.86235 10.0145 3.22493 9.78683L5.9976 8.01163L8.77027 9.78683C9.13285 10.0145 9.44744 10.0703 9.69804 9.90301C9.94332 9.74036 9.99664 9.47083 9.85267 9.1037L8.7596 6.26432L11.5589 4.51235C11.9162 4.28929 12.0708 4.04299 11.9695 3.78275C11.8682 3.52716 11.5856 3.40169 11.143 3.40634L7.70919 3.42493L6.6641 0.571596C6.5308 0.199826 6.31219 0 5.9976 0C5.68834 0 5.46973 0.199826 5.33109 0.571596L4.28601 3.42493L0.852168 3.40634C0.409607 3.40169 0.13234 3.52716 0.0310314 3.78275C-0.0702776 4.04299 0.0790199 4.28929 0.441599 4.51235L3.24093 6.26432L2.14252 9.1037C1.99856 9.47083 2.05188 9.74036 2.30249 9.90301Z"
                  fill="#1C1C1E"
                />
              </svg>
            );
          })}
        </div>
        <div className="text-[11px] border-b-[0.5px] border-[#000]">
          9개의 컨슈머 피드 보러가기
        </div>
      </div>
      <div className="text-[19px] ml-[16px] mt-[16px]">
        <span className="font-bold">{numberWithCommas(data.money)}원</span> 대
      </div>
      <div className="text-[11px] text-[#828282] mx-[16px] pb-[26px] border-b-[0.5px]">
        후기 작성시, {data.point}{" "}
        <span className="text-[#303030]">포인트 적립</span>
      </div>
      <div className="px-[16px]" onClick={clickConsumerFeeds}>
        <ConsumerFeeds />
      </div>
      <LikedProduct />
      <div className="h-[105px]"></div>
      <div className="fixed bottom-0 pb-[37px] bg-[#fff] w-screen flex  justify-between pt-[13px] border-t-[0.5px] border-[#DCDCDC]">
        <div className="flex items-center">
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
        <div className="py-[14px] px-[24px] bg-black text-white rounded-[3px] mr-[29px] text-[16px] font-medium">
          피드 등록하기
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
