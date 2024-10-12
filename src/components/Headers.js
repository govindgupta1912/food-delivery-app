// import { useContext, useState } from "react";
// import { CDN_URL, LOGO_URL } from "../utilites/constant";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utilites/useOnlineStatus";
// import UserContext from "../utilites/UserContext";

// import{useSelector} from "react-redux";
// //NOTES
// // So, when you use "../utilities/constant", you're essentially saying "go up one directory level from the current
// //  directory, then look for a directory named utilities, 
// // and within that directory, find a file named constant.js or constant.ts (depending on the file extension)."
// const Header =()=>{
 
//      const [btn,setbtn]=useState("Login");
//       const {loggedInUser} =useContext(UserContext);

//       const cartitems = useSelector((store)=>store.cart.items);
//       const online=useOnlineStatus()

//     return(
//         <div className="header flex justify-between bg-pink-100 sm:bg-yellow-100 lg:bg-green-100">
//             <div className="logo-container">
//               <img
//               className="logo w-28"
//               //src="https://tse3.mm.bing.net/th?id=OIP.ZTPIMc8wkghzvm35H6EUVwHaHa&pid=Api&P=0&h=180"
//               src={LOGO_URL}
//               />
//             </div>

//             <div className="flex items-center">
//             <ul className="flex  ">
//                 <li className="px-4">
                    
//                     OnlineStatus:{online?"✅":"🔴"}
//                 </li>
//                 <li className="px-4"><Link to="/">Home</Link></li>
//                 <li className="px-4"><Link to="/about">Abouts us</Link></li>
//                 <li className="px-4"><Link to="/contact">Contact us</Link></li>
//                 <li className="px-4"><Link to="/grocery">Grocery</Link></li>
//                 <li className="px-4 text-xl font-bold"><Link to="/cart"><i className="fa-solid fa-cart-shopping "></i>({cartitems.length})</Link></li>
                
//                 {/* <button className="login px-4" onClick={()=>{
//                     btn === "Login"?setbtn("Logout"):setbtn("Login");
//                 }}>{btn}</button>

//                 <li className="px-4 font-bold">{loggedInUser}</li>
//                 <li className="px-4"><Link to="/login">Login</Link></li> */}

//                           {/* Conditional Rendering based on login status */}
//           <li className="px-4">
//             {loggedInUser ? (
//               <div className="flex items-center">
//                 <i className="fa-solid fa-user"></i>
//                 <span className="ml-2">{loggedInUser}</span>
//               </div>
//             ) : (
//               <Link to="/login">Login</Link>
//             )}
//           </li>

//             </ul>
//             </div>

//         </div>
//     )
// }

// export default Header;


// import { useContext, useState } from "react";
// import { CDN_URL, LOGO_URL } from "../utilites/constant";
// import { Link, useNavigate } from "react-router-dom";
// import useOnlineStatus from "../utilites/useOnlineStatus";
// import UserContext from "../utilites/UserContext";
// import { useSelector } from "react-redux";

// const Header = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle dropdown
//   const { loggedInUser, setLoggedInUser } = useContext(UserContext); // Destructure setLoggedInUser to handle logout
//   const cartitems = useSelector((store) => store.cart.items);
//   const online = useOnlineStatus();
//   const navigate = useNavigate();

//   // Logout functionality
//   const handleLogout = () => {
//     // Clear UserContext
//     setLoggedInUser(null);
    
//     // Clear localStorage
//     localStorage.removeItem("userName");
//     localStorage.removeItem("userEmail");
//     localStorage.removeItem("authToken");
    
//     // Redirect to login page after logout
//     navigate("/login");
//   };

//   return (
//     <div className="header flex justify-between bg-pink-100 sm:bg-yellow-100 lg:bg-green-100">
//       <div className="logo-container">
//         <img className="logo w-28" src={LOGO_URL} />
//       </div>

//       <div className="flex items-center">
//         <ul className="flex">
//           <li className="px-4">
//             OnlineStatus: {online ? "✅" : "🔴"}
//           </li>
//           <li className="px-4"><Link to="/">Home</Link></li>
//           <li className="px-4"><Link to="/about">About us</Link></li>
//           <li className="px-4"><Link to="/contact">Contact us</Link></li>
//           <li className="px-4"><Link to="/grocery">Grocery</Link></li>
//           <li className="px-4 text-xl font-bold"><Link to="/cart"><i className="fa-solid fa-cart-shopping"></i>({cartitems.length})</Link></li>
          
//           {/* Conditional Rendering based on login status */}
//           <li className="px-4 relative">
//             {loggedInUser ? (
//               <div className="flex items-center">
//                 <i className="fa-solid fa-user cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}></i>
//                 <span className="ml-2 cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
//                   {loggedInUser}
//                 </span>

//                 {/* Dropdown Menu for Logout */}
//                 {isDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
//                     <button
//                       className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200"
//                       onClick={handleLogout}
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <Link to="/login">Login</Link>
//             )}
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;


import { useContext, useState } from "react";
import { LOGO_URL } from "../utilites/constant";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utilites/useOnlineStatus";
import UserContext from "../utilites/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext); // Ensure UserContext is accessed correctly
  const [showDropdown, setShowDropdown] = useState(false);
  const cartitems = useSelector((store) => store.cart.items);
  const online = useOnlineStatus();
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedInUser(null); // Clear UserContext
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  console.log("username",loggedInUser);
  
  return (
    <div className="header flex justify-between bg-pink-100 sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
        <img className="logo w-28" src={LOGO_URL} alt="Logo" />
      </div>

      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4">OnlineStatus: {online ? "✅" : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 text-xl font-bold">
            <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i> ({cartitems.length})</Link>
          </li>

          {/* User Icon with Dropdown */}
          <li className="relative px-4">
            {loggedInUser ? (
              <div>
                <div className="flex items-center cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
                  <i className="fa-solid fa-user"></i>
                  <span className="ml-2">{loggedInUser}</span>
                </div>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 bg-white text-black py-2 px-4 rounded shadow-lg">
                    <button
                      className="block w-full text-left hover:bg-gray-100 p-2"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
