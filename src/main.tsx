import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { BrowserRouter } from "react-router-dom";
import "@ant-design/v5-patch-for-react-19";

import "./styles/main.css";
import "antd/dist/reset.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
