import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Categories = lazy(() => import("../pages/Category"));
const Products = lazy(() => import("../pages/Product"));
const Coupon = lazy(() => import("../pages/Coupon"));
const Charts = lazy(() => import("../pages/Charts"));
const Customers = lazy(() => import("../pages/Customer"));
const Buttons = lazy(() => import("../pages/Buttons"));
const Orders = lazy(() => import("../pages/Orders"));
const Request = lazy(() => import("../pages/RequestQuote"));
const Tables = lazy(() => import("../pages/Tables"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));
const Brands = lazy(() => import("../pages/Brands"));
const SingleRequest = lazy(() => import("../pages/Singlerequest"));
/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
  },
  {
    path: "/categories",
    component: Categories,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/brands",
    component: Brands,
  },
  {
    path: "/chart",
    component: Charts,
  },
  {
    path: "/coupons",
    component: Coupon,
  },
  {
    path: "/customers",
    component: Customers,
  },
  {
    path: "/orders",
    component: Orders,
  },
  {
    path: "/request",
    component: Request,
  },
  {
    path: "/request/:id",
    component: SingleRequest,
  },
  {
    path: "/tables",
    component: Tables,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
];

export default routes;
