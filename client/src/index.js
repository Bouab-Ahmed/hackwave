import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";


const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:profileId",
    element: <Profile />,
  },
]);

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_ID_CLIENT}`}>
      <RouterProvider router={router}>
          <App />
      </RouterProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
