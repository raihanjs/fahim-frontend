import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Routes/Router";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>
);
