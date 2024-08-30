import { getProductById } from "js/fakeAPI";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();

  const { name } = getProductById(productId);

  return (
    <>
      <p>
        It is details of product with <b> productID: {productId} </b> and
        <b> name: {name}</b>
      </p>
    </>
  );
}
export default ProductDetails;
