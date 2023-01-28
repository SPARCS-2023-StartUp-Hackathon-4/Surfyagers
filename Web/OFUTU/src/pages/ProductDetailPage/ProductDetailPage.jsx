import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { productId } = useParams();
  return <div>ProductDetailPage</div>;
};

export default ProductDetailPage;
