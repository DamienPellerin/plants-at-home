import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { App } from "App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageNotFound } from "pages/PageNotFound/PageNotFound";
import { PlantBrowse } from "pages/PlantBrowse/PlantBrowse";
import { PlantItem } from "pages/PlantItem/PlantItem";
import { Presentation } from "./pages/Presentation/Presentation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="/plante/:id" element={<PlantItem />} />
        <Route path="/plante" element={<PlantBrowse />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
