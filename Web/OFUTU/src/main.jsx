import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TagSuggestFullPage from "./pages/TagSuggestFullPage/TagSuggestFullPage";
import "./index.css";
import SuggestDoneFullPage from "./pages/SuggestDoneFullPage/SuggestDoneFullPage";
import MainPage from "./pages/MainPage/MainPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import FeedPage from "./pages/FeedPage/FeedPage";
import FeedDetailPage from "./pages/FeedPage/FeedDetailPage";
import HomePage from "./pages/HomePage/HomePage";
import ComunityPage from "./pages/ComunityPage/ComunityPage";
import ComunityDetailPage from "./pages/ComunityPage/ComunityDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello world</div>,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/main/:tag",
    element: <MainPage />,
  },
  {
    path: "/comunity/:tag",
    element: <ComunityPage />,
  },
  {
    path: "/comunityDetail/:id",
    element: <ComunityDetailPage />,
  },
  {
    path: "/product/:id",
    element: <ProductDetailPage />,
  },
  { path: "/feed/:id", element: <FeedPage /> },
  { path: "/feedDetail/:id", element: <FeedDetailPage /> },
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
