import { NavLink, Route, Routes } from "react-router-dom";

import About from "pages/About";
import styled from "@emotion/styled";

import Home from "pages/Home";
import Products from "pages/Products";
import NotFoundPage from "pages/NotFoundPage";
import ProductDetails from "pages/ProductDetails";

const StyledNavLink = styled(NavLink)`
  color: #272727;

  &.active {
    color: #ff4400;
  }
`;

function App() {
  return (
    <>
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="about">About</StyledNavLink>
        <StyledNavLink to="products">Products</StyledNavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
