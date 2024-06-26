/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: "/app/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Dashboard", // name that appear in Sidebar
  },
  {
    path: "/app/categories",
    icon: "FormsIcon",
    name: "Categories",
  },
  {
    path: "/app/products",
    icon: "CardsIcon",
    name: "Products",
  },
  {
    path: "/app/brands",
    icon: "HeartIcon",
    name: "Brands",
  },
  {
    path: "/app/coupons",
    icon: "ChartsIcon",
    name: "Coupons",
  },
  {
    path: "/app/customers",
    icon: "ButtonsIcon",
    name: "Customers",
  },
  {
    path: "/app/orders",
    icon: "ModalsIcon",
    name: "Orders",
  },
  {
    path: "/app/request",
    icon: "ModalsIcon",
    name: "Request Quote",
  },
  {
    path: "/app/tables",
    icon: "TablesIcon",
    name: "Our Staff",
  },
  // {
  //   icon: "PagesIcon",
  //   name: "Pages",
  //   routes: [
  //     // submenu
  //     {
  //       path: "/login",
  //       name: "Login",
  //     },
  //     {
  //       path: "/create-account",
  //       name: "Create account",
  //     },
  //     {
  //       path: "/forgot-password",
  //       name: "Forgot password",
  //     },
  //     {
  //       path: "/app/404",
  //       name: "404",
  //     },
  //     {
  //       path: "/app/blank",
  //       name: "Blank",
  //     },
  //   ],
  // },
];

export default routes;
