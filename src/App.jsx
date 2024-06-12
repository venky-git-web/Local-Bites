import React from "react";
import Navbar from "./Components/Navbar";
import "./index.css";
import Hero from "./Components/Hero";
import Offers from "./Components/Offers";
import Signing from "./Components/SignIng";
import Help from "./Components/Help";
import Cart from "./Components/Cart";
import Error from "./Components/Error";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/Offers",
        element: <Offers />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/signing",
        element: <Signing />,
      },
      {
        path:"/restaurants/:id",
        element:<RestaurantMenu/>
      }
    ],
    errorElement: <Error />,
  },
]);

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />
);
