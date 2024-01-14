// import { rootRoutes } from "./root";
import HomePage from "../container/User/homepage/index";
import HomePageAdmin from "../container/Admin/homepage/index";
import LoginAdmin from "../container/Admin/Login/index"
import NotfoundPage from "../container/staticPage/NotfoundPage/index";
import Login from "../container/User/Login/index";
import Register from "../container/User/Register/index";
import Product from "../container/Admin/Product/index";
import ProductUser from "../container/User/Product/index";
import ProductDetail from "../container/User/ProductDetail/index";
import Card from "../container/User/Card/index";
import Guide from "../container/User/Guide/index";
import News from "../container/User/News/index"

export const router = [
  {
    path: "/",
    element: <HomePage />,
    permissions: false,
    exact: true,
  },
  {
    path: "/admin",
    element: <HomePageAdmin />,
    permissions: true,
    exact: true,
  },
  {
    path: "/login",
    element: <Login />,
    permissions: false,
    exact: true,
  },
  {
    path: "/admin/login",
    element: <LoginAdmin />,
    permissions: false,
    exact: true,
  },
  {
    path: "/register",
    element: <Register />,
    permissions: false,
    exact: true,
  },
  {
    path: "/admin/product",
    element: <Product />,
    permissions: true,
    exact: true,
  },
  {
    path: "/product",
    element: <ProductUser />,
    permissions: false,
    exact: true,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
    permissions: true,
    exact: true,
  },
  {
    path: "/card",
    element: <Card />,
    permissions: true,
    exact: true,
  },
  {
    path: "/guide",
    element: <Guide />,
    permissions: false,
    exact: true,
  },
  {
    path: "/news",
    element: <News />,
    permissions: false,
    exact: true,
  },
  {
    path: "*",
    element: <NotfoundPage />,
    permissions: false,
    exact: true,
  },
];
