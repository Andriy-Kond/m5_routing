import { useLocation, useParams } from "react-router-dom";
import { getProductById } from "navigation/js/fakeAPI";
import { BackLink } from "navigation/components/BackLink";

function ProductDetails() {
  const { productId } = useParams();
  const { name } = getProductById(productId);
  const location = useLocation();
  console.log("ProductDetails >> location:::", location);
  console.log("ProductDetails >> location.state:::", location.state);

  const backLinkHref = location.state ?? "/navigation/products";

  return (
    <>
      <main>
        <BackLink to={backLinkHref}>Back</BackLink>

        <p>
          It is details of product with <b> productID: {productId} </b> and
          <b> name: {name}</b>
        </p>
        <img src="https://via.placeholder.com/960x240" alt="" />
        <div>
          <h2>
            Product - {name} - {productId}
          </h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
      </main>
    </>
  );
}
export default ProductDetails;
