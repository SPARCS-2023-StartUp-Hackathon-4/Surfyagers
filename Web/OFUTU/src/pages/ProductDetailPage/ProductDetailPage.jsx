import { useParams } from "react-router-dom";
import ProductDetail from "../../element/Product/ProductDetail";

const ProductDetailPage = () => {
  const { id } = useParams();

  const onBack = () => {
    alert("back");
  };

  return (
    <div>
      <div>
        <button
          className="absolute translate-x-[50%] translate-y-[50%] ml-[24px]"
          onClick={onBack}
        >
          <img src="/images/arrow.left.svg" alt="" />
        </button>
        <div className="w-full flex justify-center mt-[54px] mb-[27px]">
          <div className="font-medium text-[18px]">제품 정보</div>
        </div>
      </div>
      <ProductDetail productId={id} />
    </div>
  );
};

export default ProductDetailPage;
