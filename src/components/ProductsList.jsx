import { Link } from "react-router-dom";
import { CardWrapper, Container, ProductName } from "./ProductsList.styled";

function ProductsList({ products }) {
  return (
    <>
      <p>The PRODUCT LIST element with own self link in PRODUCTS page</p>
      <Container>
        {products.map(product => (
          <CardWrapper key={product.id}>
            <Link to={product.id}>
              <img src="https://via.placeholder.com/200x100" alt="plug" />
              <ProductName> {product.name}</ProductName>
            </Link>
          </CardWrapper>
        ))}
      </Container>
    </>
  );
}

export default ProductsList;
