import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

// import Home from "navigation/pages/Home";
// import About from "navigation/pages/About";
// import Products from "navigation/pages/Products";
// import ProductDetails from "navigation/pages/ProductDetails";
// import NotFoundPage from "navigation/pages/NotFoundPage";

import NavigationRootLayout from "navigation/NavigationRootLayout";
import Gallery from "./components/Gallery";
import Feedbacks from "./components/Feedbacks";
// import Mission from "navigation/components/Mission";
// import Team from "navigation/components/Team";
// import Reviews from "navigation/components/Reviews";

const Home = lazy(() => import("navigation/pages/Home"));
const About = lazy(() => import("navigation/pages/About"));
const Products = lazy(() => import("navigation/pages/Products"));
const ProductDetails = lazy(() => import("navigation/pages/ProductDetails"));
const NotFoundPage = lazy(() => import("navigation/pages/NotFoundPage"));

const Mission = lazy(() => import("navigation/components/Mission"));
const Team = lazy(() => import("navigation/components/Team"));
const Reviews = lazy(() => import("navigation/components/Reviews"));

function Navigation() {
  return (
    <>
      <Routes>
        <Route path="" element={<NavigationRootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<ProductDetails />}>
            <Route path="gallery" element={<Gallery />} />
            <Route path="feedbacks" element={<Feedbacks />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default Navigation;
