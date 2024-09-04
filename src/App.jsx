import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import AppRootLayout from "AppRootLayout";

// import Navigation from "navigation";
// import Signup from "signup";
const Navigation = lazy(() => import("navigation"));
const Signup = lazy(() => import("signup"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppRootLayout />}>
          <Route path="navigation/*" element={<Navigation />} />
          <Route path="signup/*" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
