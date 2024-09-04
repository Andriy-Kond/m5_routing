import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getProductById } from "navigation/js/fakeAPI";
import { BackLink } from "navigation/components/BackLink";
import { useRef } from "react";

function ProductDetails() {
  // useEffect(() => {
  //   // HTTP запит, якщо потрібен
  // }, []);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/navigation/products");

  const { productId } = useParams(); // Забрати з поточного адресного рядку динамічний параметр "productId"

  const { name } = getProductById(productId);

  console.log("ProductDetails >> location:::", location);
  console.log("ProductDetails >> backLinkHref:::", backLinkHref.current);

  return (
    <>
      <main>
        <BackLink to={backLinkHref.current}>Back</BackLink>

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

        <ul>
          <li>
            <Link to="gallery">Галерея</Link>
          </li>
          <li>
            <Link to="feedbacks">Відгуки</Link>
          </li>
        </ul>

        <Outlet />
      </main>
    </>
  );
}
export default ProductDetails;
