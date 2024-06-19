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
import RestAvilable from "./Components/RestAvilable";
import {Provider} from "react-redux"
import appStore from "./Components/utilis/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
    <>
      <Navbar />
      <Outlet />
      </>
      </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero />
            <RestAvilable/>
          </>
        ),
        
      },
      {
        path: "/",
        element: <RestAvilable/>,
        
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
