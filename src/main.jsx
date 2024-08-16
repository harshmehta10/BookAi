import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";

import Api from "./components/Api/Api.jsx";
import Price from "./components/Price/Price.jsx";

import Navbar from "./components/Navbar/Navbar.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route path="" index element={<Layout />} />
      <Route path="Features" element={<Navbar />} />
      {/* <Route path="How it works" element={<Howitworks />} />
      <Route path="Roadmap" element={<Roadmap />} /> */}
      <Route path="Price" element={<Price />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
