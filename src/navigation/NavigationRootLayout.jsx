import { NavLink, Outlet } from "react-router-dom";
import styled from "@emotion/styled";

import { Container, Header, Logo } from "./NavigationRootLayout.styled";
import { Suspense } from "react";

const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #000;
  font-weight: 500;

  &.active {
    color: #fff;
    background-color: #ff4500;
  }
`;

function NavigationRootLayout() {
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
          <StyledNavLink to="/navigation" end>
            {/* end робить так, що NavLink буде "активний" (&.active) лише тоді, коли шлях точно збігається з поточним URL.
          Якщо не поставити end, то при кліку на будь-який шлях (about, products), кнопка Home завжди буде підсвічена помаранчевим (буде завжди &.active).
          Така поведінка лише у вкладених маршрутах. Якщо Navigation Home - це коренева сторінка (тобто "/"), то end не обов'язковий */}
            Navigation Home
          </StyledNavLink>
          <StyledNavLink to="about">About</StyledNavLink>
          <StyledNavLink to="products">Products</StyledNavLink>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <footer>Footer</footer>
    </Container>
  );
}

export default NavigationRootLayout;
