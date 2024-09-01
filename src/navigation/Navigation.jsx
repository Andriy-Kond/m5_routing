import { Route, Routes } from "react-router-dom";

import Home from "navigation/pages/Home";
import About from "navigation/pages/About";
import Products from "navigation/pages/Products";
import ProductDetails from "navigation/pages/ProductDetails";
import NotFoundPage from "navigation/pages/NotFoundPage";

import Mission from "navigation/components/Mission";
import Team from "navigation/components/Team";
import Reviews from "navigation/components/Reviews";
import NavigationRootLayout from "navigation/NavigationRootLayout";

function Navigation() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavigationRootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="products" element={<Products />}></Route>
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default Navigation;
