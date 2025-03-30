// const Contact=()=>{
//     return(
//         <div className="">
//             <h1 className="text-center"> This is contact page</h1>
//             <form className="mx-96 my-10">
//                 NAME:     <input type="text" placeholder="WRITE NAME" className="border border-black p-1"></input><br/>
//                 MESSAGE:<input type="text" placeholder="write message here"className="border border-black p-1"/><br/>
//                 <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">SUBMIT</button>
//             </form>
//         </div>
//     )
// }

// export default Contact;

import { useState } from "react";
import contactUs from "../utilites/images/contactUs.png";

const Contact = () => {
  const [message, setMessage] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-4">
      {/* Left Section: Image */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={contactUs}
          alt="Contact us"
          className="w-80 md:w-full h-auto object-contain"
        />
      </div>

      {/* Right Section: Form */}
      <div className="md:w-1/2 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Contact us</h1>
        
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-lg space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            required
            className="border border-orange-500 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          
          <input
            type="email"
            placeholder="Email"
            required
            className="border border-orange-500 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          
          <textarea
            placeholder="Type your Message here..."
            required
            className="border border-orange-500 rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>

          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition-all"
          >
            Submit
          </button>

          {message && (
            <span className="mt-4 text-green-600">
              Thanks for contacting FoodFire, We will reply ASAP.
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
