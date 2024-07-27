import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./components/contexts/LoginProvider.jsx";
import { UserProvider } from "./components/contexts/UserContext.jsx";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <UserProvider>
          <NextUIProvider>
            <App />
          </NextUIProvider>
        </UserProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
);
