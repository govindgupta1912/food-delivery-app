import { useContext, useState } from "react";
import { CDN_URL, LOGO_URL } from "../utilites/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilites/useOnlineStatus";
import UserContext from "../utilites/UserContext";

import{useSelector} from "react-redux";
//NOTES
// So, when you use "../utilities/constant", you're essentially saying "go up one directory level from the current
//  directory, then look for a directory named utilities, 
// and within that directory, find a file named constant.js or constant.ts (depending on the file extension)."
const Header =()=>{
 
     const [btn,setbtn]=useState("Login");
      const {loggedInUser} =useContext(UserContext);

      const cartitems = useSelector((store)=>store.cart.items);
      const online=useOnlineStatus()

    return(
        <div className="header flex justify-between bg-pink-100 sm:bg-yellow-100 lg:bg-green-100">
            <div className="logo-container">
              <img
              className="logo w-28"
              //src="https://tse3.mm.bing.net/th?id=OIP.ZTPIMc8wkghzvm35H6EUVwHaHa&pid=Api&P=0&h=180"
              src={LOGO_URL}
              />
            </div>

            <div className="flex items-center">
            <ul className="flex  ">
                <li className="px-4">
                    
                    OnlineStatus:{online?"✅":"🔴"}
                </li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">Abouts us</Link></li>
                <li className="px-4"><Link to="/contact">Contact us</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4 text-xl font-bold"><Link to="/cart">cart({cartitems.length})</Link></li>
                <button className="login px-4" onClick={()=>{
                    btn === "Login"?setbtn("Logout"):setbtn("Login");
                }}>{btn}</button>

                <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
            </div>

        </div>
    )
}

export default Header;