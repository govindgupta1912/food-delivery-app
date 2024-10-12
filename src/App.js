// import React, { lazy, Suspense, useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./components/Headers";
// import Body from "./components/Body";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Carts from "./components/Carts";
// import Footer from "./components/Footer";
// import Error from "./components/Error";
// import RestaurantMenu from "./components/RestaurantMenu";
// import { createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
// import useOnlineStatus from "./utilites/useOnlineStatus";
// import Shimmer from "./components/Shimmer";
// import UserContext from "./utilites/UserContext";
// import appStore from "./utilites/appStore";
// import { Provider } from "react-redux";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// //import Grocery from "./components/Grocery";
//  // not import like this if does not want  to load it intilay it will load the code only after access

//  // it should we imported like this

//  const Groceryy=lazy(()=>import("./components/Grocery"));


// // const AppLayout=()=>{
// //     // const status=useOnlineStatus();
// //     // if(status === false)
// //     //     return (
// //     //  <h1>your are offline check internet connectio</h1>
// //     //  );
    
// //     const[userName,setUserName]=useState();
// //     const[branch,setbranch]=useState();

// //      useEffect(()=>{
// //         const data ={
// //             name:"govind Kumar Gupta",
// //             branch:"mca"
// //         };
// //         setUserName(data.name);
// //         setbranch(data.branch);
// //      },[])
// //     return (
         
// //         <Provider store={appStore}>
// //         <UserContext.Provider value={{loggedInUser:userName,setUserName,classb:branch}}>
// //     <div className="app">
// //         <UserContext.Provider value={{loggedInUser:"sandeep"}}>
// //         <Header/>
// //         </UserContext.Provider>
        
// //         <Outlet/>
// //         <Footer />
// //     </div>
// //     </UserContext.Provider>
// //     </Provider>
// // )
// // }

// const AppLayout = () => {
//   const [userName, setUserName] = useState(null); // No default user
//   const [branch, setBranch] = useState("");

//   return (
//     <Provider store={appStore}>
//       {/* Provide UserContext to the entire app */}
//       <UserContext.Provider value={{ loggedInUser: userName, setLoggedInUser: setUserName, branch }}>
//         <div className="app">
//           <Header />  {/* Header will reflect the logged-in user */}
//           <Outlet />
//           <Footer />
//         </div>
//       </UserContext.Provider>
//     </Provider>
//   );
// };



// //  const approuter = createBrowserRouter([
// //     {
// //         path: "/",
// //         element:<AppLayout/>,
// //         errorElement:<Error/>,
// //     },
// //     {
// //       path:"/about",
// //       element:<About/>
// //     },
// //     {
// //         path:"/contact",
// //         element:<Contact/>
// //     }
// //  ]);

// const approuter = createBrowserRouter([
//     {
//         path: "/",
//         element:<AppLayout/>,
//         children:[
//             {
//                 path:"/",
//                 element:<Body/>,
//             },
//             {
//                 path:"/about",
//                 element:<About/>
//               },
//               {
//                   path:"/contact",
//                   element:<Contact/>
//               },
//               {
//                 path:"/restaurants/:resId",
//                 element:<RestaurantMenu/>,
//               },
//               {                                                
//                path:"/grocery",
//                element:<Suspense fallback={<Shimmer/>}><Groceryy/></Suspense>
//                // element should we inserted inside the Suspense if do not want to load it intially
            
//               },
//               {
//                 path:"/cart",
//                 element:<Carts/>,
//               },
//               {
//                 path:"/login",
//                 element:<Login/>,
//               },
//               {
//                 path:"/signup",
//                 element:<Signup/>,
//               },
//         ],
//        // errorElement:<Error/>,
//     },
   
//  ]);

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={approuter}/>);
// // routerProvider is use to provide route

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
console.log("username localstorage",localStorage.getItem("userName"));

 console.log("userapp",loggedInUser);
 


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
