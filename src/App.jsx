import { Route, Routes } from "react-router-dom";

import AppRootLayout from "AppRootLayout";
import Navigation from "navigation";
import Signup from "signup";

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
