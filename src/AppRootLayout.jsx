import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

function AppRootLayout() {
  return (
    <>
      <h1>Apps RootLayout Container</h1>
      <nav>
        <Link to="/">Apps Root Layout</Link>
        <Link to="/navigation">Navigation</Link>
        <Link to="/signup">Signup</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
export default AppRootLayout;
