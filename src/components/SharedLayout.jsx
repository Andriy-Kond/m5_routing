import { NavLink, Outlet } from "react-router-dom";
import styled from "@emotion/styled";

import { Container, Header, Logo } from "./SharedLayout.styled";

const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

function SharedLayout() {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>
          GoMerch Store
        </Logo>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
          <StyledNavLink to="/products">Products</StyledNavLink>
        </nav>
      </Header>

      <Outlet />
    </Container>
  );
}

export default SharedLayout;
