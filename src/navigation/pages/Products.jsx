import { useSearchParams } from "react-router-dom";

import { getProducts } from "navigation/js/fakeAPI";

import SearchBox from "navigation/components/SearchBox";
import ProductsList from "navigation/components/ProductsList";

function Products() {
  // useEffect(() => {
  //   // HTTP запит, якщо потрібен
  // }, []);

  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("searchValue") ?? "";

  const updateFilterInput = searchValue => {
    const newParams = searchValue === "" ? {} : { searchValue };

    setSearchParams(newParams);
  };

  const visibleProducts = products.filter(product =>
    product.name.toLowerCase().includes(productName.toLowerCase()),
  );

  return (
    <>
      <p>The PRODUCTS page</p>
      {/* <SearchBox value={productName} updateFilterInput={updateFilterInput} /> */}

      <input
        type="text"
        onChange={e => updateFilterInput(e.target.value)}
        value={productName}
      />

      <ProductsList products={visibleProducts} />
    </>
  );
}

// З кнопкою (без параметрів у адресному рядку):
// function Products() {
//   const products = getProducts();
//   const [filteredProducts, setFilteredProducts] = useState(products);

//   const setFilterProducts = e => {
//     e.preventDefault();
//     const filter = products.filter(product =>
//       product.name
//         .toLowerCase()
//         .includes(e.currentTarget.elements.filter.value.toLowerCase()),
//     );

//     setFilteredProducts(filter);
//   };

//   return (
//     <>
//       <p>The PRODUCTS page</p>
//       <SearchBox submit={setFilterProducts} />
//       <ProductsList products={filteredProducts} />
//     </>
//   );
// }

export default Products;
