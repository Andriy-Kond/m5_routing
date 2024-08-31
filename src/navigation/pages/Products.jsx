import { getProducts } from "navigation/js/fakeAPI";

import ProductsList from "navigation/components/ProductsList";

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
