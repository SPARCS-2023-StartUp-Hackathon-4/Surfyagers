import { useParams } from "react-router-dom";
import ProductDetail from "../../element/Product/ProductDetail";

const ProductDetailPage = () => {
  const { id } = useParams();

  const onBack = () => {
    alert("back");
  };

  return (
    <div>
      <div className="fixed w-full bg-white">
        <div className="flex justify-between items-center">
          <button
            className="translate-x-[24px] translate-y-[12px] flex-1"
            onClick={onBack}
          >
            <img src="/images/arrow.left.svg" alt="" />
          </button>
          <div className="w-full flex justify-center mt-[54px] mb-[27px] flex-1">
            <div className="font-medium text-[18px]">제품 정보</div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
      <div className="h-[111px]"></div>
      <ProductDetail productId={id} />
    </div>
  );
};

export default ProductDetailPage;
