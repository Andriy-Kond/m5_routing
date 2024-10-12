import styled from "@emotion/styled";
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

// export const Link = styled(NavLink)`
//   padding: 8px 16px;
//   border-radius: 4px;
//   text-decoration: none;
//   color: black;
//   font-weight: 500;

//   &.active {
//     color: white;
//     background-color: orangered;
//   }
// `;

// const style = ({ isActive, isPending, isTransitioning }) => {
//   return {
//     fontWeight: isActive ? "bold" : "",
//     color: isPending ? "red" : "black",
//     viewTransitionName: isTransitioning ? "slide" : "",

//     padding: "8px 16px",
//     borderRadius: "4px",
//     textDecoration: "none",
//     fontSize: "26px",
//   };
// };

// const StyledNavLink = styled(NavLink)`
//   font-weight: normal;
//   color: #000;
//   transition: transform 0.3s ease;

//   &.active {
//     font-weight: bold;
//     color: #ff4500;
//   }

//   &.pending {
//     color: red;
//   }

//   &.transitioning {
//     transform: scale(1.05);
//   }
// `;
