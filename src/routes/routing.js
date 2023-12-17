import { createBrowserRouter } from "react-router-dom";
import Layout from "components/Layout";
import Home from "pages/Home";
import Mypage from "pages/Mypage";
import Post from "pages/Post";

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
        path: "/post",
        element: <Post />,
      },
      {
        path: "/mypage",
        element: <Mypage />,
      },
    ],
  },
]);

export default router;
