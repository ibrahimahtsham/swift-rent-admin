import LoginPage from "./pages/LoginPage";
import ManageOwners from "./pages/ManageOwners";
import ManageTenants from "./pages/ManageTenants";
import Layout from "./layout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route path="manage-owners" element={<ManageOwners />} />
          <Route path="manage-tenants" element={<ManageTenants />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
