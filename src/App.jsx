import LoginPage from "./pages/LoginPage";
import ManageOwners from "./pages/ManageOwners";
import ManageTenants from "./pages/ManageTenants";
import ManageManagers from "./pages/ManageManagers";
import ManageProperties from "./pages/ManageProperties";
import UserInfo from "./pages/UserInfo";
import FinancialStats from "./pages/FinancialStats";
import UserComplains from "./pages/UserComplains";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./layout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//loaders imports
import { loader as layoutPageLoader } from "./layout";
import { loader as loginPageLoader } from "./pages/LoginPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" loader={loginPageLoader} element={<LoginPage />} />
        <Route path="/dashboard" loader={layoutPageLoader} element={<Layout />}>
          <Route path="manage-owners" element={<ManageOwners />} />
          <Route path="manage-tenants" element={<ManageTenants />} />
          <Route path="manage-managers" element={<ManageManagers />} />
          <Route path="manage-properties" element={<ManageProperties />} />
          <Route path="main" element={<UserInfo />} />
          <Route path="financial-stats" element={<FinancialStats />} />
          <Route path="user-complains" element={<UserComplains />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
