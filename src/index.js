import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Router } from "react-router-dom";
import Router from "./Router";
import "./styles/commom.scss";
import "./styles/reset.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
