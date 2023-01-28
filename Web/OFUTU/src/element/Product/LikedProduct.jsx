import FullSizeImage from "../Image/FullSizeImage";

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ProductComponent = ({ productData }) => {
  return (
    <div className="pb-[26px] w-[150px]">
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
    </div>
  );
};

const LikedProduct = () => {
  const productDatas = [
    {
      imgs: 25,
      product_name: "디어마이어스",
      company: "퓨어 캐스틸 바솝",
      money: 2000,
    },
    {
      imgs: 26,
      product_name: "얼쑤",
      company: "율무 올인원 비누",
      money: 3000,
    },
    {
      imgs: 27,
      product_name: "어반어스",
      company: "EM 세안 비누",
      money: 2000,
    },
  ];
  return (
    <div>
      <div className="text-[19px] font-medium mb-[19px] pl-[16px]">
        좋아할 만한 상품
      </div>
      <div className="scrollbar-hide overflow-y-auto w-full">
        <div className="flex gap-[15px] w-fit px-[16px]">
          {productDatas.map((productData) => {
            return <ProductComponent productData={productData} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default LikedProduct;
