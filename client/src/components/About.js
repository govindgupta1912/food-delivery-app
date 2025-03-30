// import User from "./User";
// import User_class from "./User_class";
// import React from "react";
// import UserContext from "../utilites/UserContext";
// // const About=()=>{
// //     return(
// //         <div>
// //             <h1>this is about us page</h1>
// //             <User name={"Govind"} Location={"raipur"}/>
// //             <User_class name={"Govind"} Location={"raipur"} contact={"@gupta"}/>
// //         </div>
// //     )
// // };

// class About extends React.Component{
//     constructor(props)
//     {
//       super(props);
//       console.log("parent constructor")
//     }
//     componentDidMount(){
//         console.log("parent Component did mount");
//     }
//     render()
//     {
//         console.log("parent render")
//         return(
          
//             <div>
//                 <h1>this is about us page</h1>
//                 <div>
                    
//                     <UserContext.Consumer>
//                         {({loggedInUser})=>(
//                             <h1>loggedInUser:{loggedInUser}</h1>
//                         )}
//                         </UserContext.Consumer>

//                 </div>
//                 <User name={"Govind"} Location={"raipur"}/>
//                 <User_class name={"Govind"} Location={"raipur"} contact={"@gupta"}/>
//                 {/* <User_class name={"ravi"} Location={"jaipur"} contact={"@sinha"}/>
//                 <User_class name={"sumit"} Location={"ranchi"} contact={"@sukla"}/> */}
//             </div>
//         ) 
//     }
// }
// export default About;

import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import burgerImage from "../utilites/images/burgerImage.png";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* <div className="mb-8">

        {show ? (
          <>
            <Link to="/about">
              <button
                className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all"
                onClick={() => setShow(false)}
              >
                Hide My Profile
              </button>
            </Link>
            <Outlet />
          </>
        ) : (
          <Link to="/about">
            <button
              className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all"
              onClick={() => setShow(true)}
            >
              Show My Profile
            </button>
          </Link>
        )}
      </div> */ }

      <div className="flex flex-col md:flex-row items-center max-w-7xl w-full p-4">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold leading-snug">
            Welcome to <br />
            The world of <br />
            <span className="text-orange-500">Tasty & Fresh Food</span>
          </h1>
          <h4 className="text-xl text-gray-700 mt-4">
            "Better you will feel if you eat a Food
            <span className="text-orange-500">Fire</span> healthy meal"
          </h4>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={burgerImage}
            alt="Food Image"
            className="w-80 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

