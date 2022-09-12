import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Todos from "./routes/Todos";
import Newsletter from "./routes/Newsletter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<App />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="/newsletter" element={<Newsletter />} />
    </Routes>
  </BrowserRouter>
);
