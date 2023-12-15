import { createBrowserRouter } from "react-router-dom";
import Layout from "Layout";
import Home from "pages/Home";
import Mypage from "pages/Mypage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/mypage",
        element: <Mypage />,
      },
    ],
  },
]);

export default router;
