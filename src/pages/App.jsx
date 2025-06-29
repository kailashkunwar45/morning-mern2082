
// App.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayOut";
import Home from "./pages/home/Home";
import ErrorPage from "./pages/ErrorPage"; // <-- custom error UI

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,       // catches loader/render errors :contentReference[oaicite:1]{index=1}
    children: [
      {
        index: true,
        element: <Home />,
      },
      // You can add more nested routes here
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}




