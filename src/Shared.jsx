import { Link, Outlet } from "react-router-dom";

function Shared() {
  return (
    <>
      <h1>Shared Container</h1>
      <nav>
        <Link to="/">Shared</Link>
        <Link to="/navigation">Navigation</Link>
        <Link to="/signup">Signup</Link>
      </nav>
      <Outlet />
    </>
  );
}
export default Shared;
