import React, { useMemo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { router } from "../src/routes/index";
import { getTokenAdmin, getToken } from "./utils/index";

const App = () => {
  const publicRoute = router.filter((i) => i.permissions === false);
  const privateRoute = router.filter((i) => i.permissions === true);
  const token = getToken();
   const tokenAdmin = getTokenAdmin();
  const isAuthenticated = useMemo(() => {
    if (window.location.pathname.split("/").includes("admin")) {
      if (tokenAdmin) {
        return true;
      } else {
        return false;
      }
    } else {
      if (token) {
        return true;
      } else {
        return false;
      }
    }
  }, [token,tokenAdmin]);

  return (
    <Router>
      <Routes>
        {publicRoute.map((e, i) => (
          <Route path={e.path} element={e.element} {...e} key={e.path} />
        ))}
        {privateRoute.map((e, i) => (
          <Route
            {...e}
            element={
              isAuthenticated ? e.element : <Navigate to="/login" replace />
            }
            key={e.path}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
