import { createBrowserRouter } from "react-router-dom";
import Layout from "components/Layout";
import Home from "pages/Home";
import Mypage from "pages/Mypage";
import New from "pages/New";
import Edit from "pages/Edit";

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
        path: "/new",
        element: <New />,
      },
      {
        path: "/edit/:id",
        element: <Edit />,
      },
      {
        path: "/mypage",
        element: <Mypage />,
      },
    ],
  },
]);

export default router;
