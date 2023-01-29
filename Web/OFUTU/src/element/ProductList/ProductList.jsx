import useSWR from "swr";
import FullSizeImage from "../Image/FullSizeImage";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ProductComponent = ({ productData }) => {
  return (
    <div className="p-[6px] pb-[26px]">
      <FullSizeImage id={+productData.imgs} />
      <div className="text-[12px] font-semibold  mt-[10px]">
        {productData.product_name}
      </div>
      <div className="text-[14px] font-regular">{productData.company}</div>
      <div className="text-[14px] mt-[4px]">
        <span className="font-bold">
          {numberWithCommas(productData.money)}원
        </span>{" "}
        대
      </div>
      <div className="text-[#878787] text-[10px] mt-[9px]">
        좋아요 {numberWithCommas(productData.heart)}
      </div>
    </div>
  );
};

const ProductList = ({ tag }) => {
  const { data, error, isLoading } = useSWR(
    "http://loopy-lim.com:8000/productList/" + tag,
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

  const goProductList = () => {
    try {
      webkit.messageHandlers.scriptHandler.postMessage("/product/1");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="grid grid-cols-2 p-[19px] pt-[37px]">
      {data.map((product) => {
        return (
          <div onClick={goProductList}>
            <ProductComponent productData={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
