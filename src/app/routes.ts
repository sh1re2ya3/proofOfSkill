import { createBrowserRouter } from "react-router";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import Frontend from "./pages/Frontend";
import Design from "./pages/Design";
import Creative from "./pages/Creative";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "frontend", Component: Frontend },
      { path: "creative", Component: Creative },
      { path: "design", Component: Design },
      { path: "about", Component: About },
    ],
  },
]);
