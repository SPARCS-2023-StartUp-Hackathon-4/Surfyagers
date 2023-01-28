import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TagSuggestFullPage from "./pages/TagSuggestFullPage/TagSuggestFullPage";
import "./index.css";
import SuggestDoneFullPage from "./pages/SuggestDoneFullPage/SuggestDoneFullPage";
import HomePage from "./pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello world</div>,
  },
  {
    path: "home",
    element: <HomePage />,
  },
  {
    path: "/tagSuggest",
    element: <TagSuggestFullPage />,
  },
  {
    path: "/suggestDone",
    element: <SuggestDoneFullPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
