
import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./utilites/UserContext";
import appStore from "./utilites/appStore";
import { Provider } from "react-redux";
import Header from "./components/Headers";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Carts from "./components/Carts";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Shimmer from "./components/Shimmer";

const Groceryy = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [loggedInUser, setLoggedInUser] = useState(null); // Renamed for clarity

  // Load user data from localStorage on initial render
  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setLoggedInUser(storedUserName); // Update logged-in user
    }
  }, []);

 console.log("username localstorage", localStorage.getItem("userName"));
 console.log("userapp", loggedInUser);
 


  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Groceryy />
          </Suspense>
        ),
      },
      { path: "/cart", element: <Carts /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
