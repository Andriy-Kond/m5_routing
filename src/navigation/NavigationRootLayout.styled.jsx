import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

// Стилізація за допомогою звичайного React Router:
const style = ({ isActive, isPending, isTransitioning }) => {
  return {
    fontWeight: isActive ? "bold" : "",
    color: isPending ? "#ff4500" : "#000",
    viewTransitionName: isTransitioning ? "slide" : "",

    padding: "8px 16px",
    borderRadius: "4px",
    textDecoration: "none",
    fontSize: "26px",
  };
};

// Стилізація за допомогою @emotion-styled
const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #000;
  font-weight: 500;

  transition: transform 0.3s ease;

  &.active {
    font-weight: bold;
    color: #ff4500;
  }

  &.pending {
    color: #0011ff;
  }

  &.transitioning {
    transform: scale(1.15);
  }
`;
