import { getProducts } from "js/fakeAPI";

import ProductsList from "components/ProductsList";

function Products() {
  const products = getProducts();
  return (
    <>
      <p>The PRODUCTS page</p>
      <ProductsList products={products} />
    </>
  );
}

export default Products;
