import { NavLink, Outlet } from "react-router-dom";
import styled from "@emotion/styled";

import { Container, Header, Logo } from "./NavigationRootLayout.styled";

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
          {/* end робить так, що NavLink буде "активний" (&.active) лише тоді, коли шлях точно збігається з поточним URL.
          Якщо не поставити end, то при кліку на будь-який шлях (about, producta), кнопка Home завжди буде підсвічена помаранчевим (буде завжди &.active).
          Така поведінка лише у вкладених маршрутах. Якщо Home - це коренева сторінка (тобто шлях "/", то end не обов'язковий) */}

          <StyledNavLink to="/navigation" end>
            Navigation Home
          </StyledNavLink>
          <StyledNavLink to="about">About</StyledNavLink>
          <StyledNavLink to="products">Products</StyledNavLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
}

export default NavigationRootLayout;
