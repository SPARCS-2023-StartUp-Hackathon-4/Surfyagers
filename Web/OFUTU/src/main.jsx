import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TagSuggestFullPage from "./pages/TagSuggestFullPage/TagSuggestFullPage";
import "./index.css";
import SuggestDoneFullPage from "./pages/SuggestDoneFullPage/SuggestDoneFullPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello world</div>,
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
