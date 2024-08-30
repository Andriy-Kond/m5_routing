import { Link } from "react-router-dom";

function ProductsList({ products }) {
  return (
    <>
      <p>The PRODUCT LIST element with own self link in PRODUCTS page</p>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={product.id}>
              <img src="https://via.placeholder.com/200x100" alt="plug" />
              <p> {product.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsList;
