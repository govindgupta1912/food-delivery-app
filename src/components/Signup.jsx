// // Importing React Packages
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'

// // Importing Local Files
// import Navbar from '../components/Headers'
// import Footer from '../components/Footer'

// export default function Signup(){
//   // UseNavigate
//   const navigate = useNavigate();

//   // UseStates
//   const [credentials, setCredentials] = useState({name:"", email:"", password:"", address:""})

//   // Functions
//   const handleSubmit = async (e) => {
//     //Synthetic event
//     e.preventDefault();
//    try {
//      localStorage.setItem("userName", credentials.name);
 
 
//      const response = await fetch(`http://localhost:5000/api/signup`, {
//        method: 'POST',
//        headers:{
//          'Content-Type':'application/json'
//        },
//        body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, address: credentials.address})
//      });
     
//      const json = await response.json()
//      console.log("json: ",json);
     
//      if(json){
//        localStorage.setItem("userName", credentials.name);
//        localStorage.setItem("userEmail", credentials.email);
//        localStorage.setItem("authToken", json.authToken);
//        navigate("/");
//      }
//    } catch (error) {
//     console.error("error.message")
//   }
//   }

//   const onChangeValue = (e) => {
//     setCredentials({...credentials, [e.target.name]:e.target.value})
//   }

//   return (
//     <div className="h-lvh bg-gray-950 text-white font-mono">
//       {/* <Navbar /> */}

//       <form onSubmit={handleSubmit} className="text-2xl px-20 py-10 flex flex-col gap-10">
//         <div className="flex flex-col gap-2">
//           <label htmlFor="name">Enter your name</label>
//           <input type="text" name="name" value={credentials.name} onChange={onChangeValue} className="bg-transparent px-5 py-2 border-2 border-gray-700 rounded-lg outline-none" />
//         </div>

//         <div className="flex flex-col gap-2">
//           <label htmlFor="email">Email address</label>
//           <input type="email" name="email" value={credentials.email} onChange={onChangeValue} className="bg-transparent px-5 py-2 border-2 border-gray-700 rounded-lg outline-none" />
//         </div>

//         <div className="flex flex-col gap-2">
//           <label htmlFor="password">Email password</label>
//           <input type="password" name="password" value={credentials.password} onChange={onChangeValue} className="bg-transparent px-5 py-2 border-2 border-gray-700 rounded-lg outline-none" />
//         </div>

//         <div className="flex flex-col gap-2">
//           <label htmlFor="geolocation">Enter Your Address</label>
//           <input type="text" name="geolocation" value={credentials.geolocation} onChange={onChangeValue} className="bg-transparent px-5 py-2 border-2 border-gray-700 rounded-lg outline-none" />
//         </div>

//         <div className="flex gap-5">
//           <button type="submit" className="bg-blue-400 w-fit px-5 py-1 rounded-lg">Submit</button>
//           <Link to="/login" className="bg-red-400 w-fit px-5 py-1 rounded-lg">Already a User</Link>
//         </div>
//       </form>

//       {/* <Footer /> */}
//     </div>
//   )
// }


import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../utilites/UserContext';

export default function Signup() {
  const { setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", address: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, address: credentials.address })
      });

      const json = await response.json();
      if (json.success) {
        setLoggedInUser(credentials.name); // Update the context with the logged-in user
        localStorage.setItem("userName", credentials.name);
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken);
        alert("Signup successful!"); // Alert for successful signup
        navigate("/");
      } else {
        alert("Signup failed! Please try again.");
      }
    } catch (error) {
      console.error("error.message");
    }
  };

  const onChangeValue = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-lvh bg-gray-950 text-white font-mono">
      <form onSubmit={handleSubmit} className="text-2xl px-20 py-10 flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Enter your name</label>
          <input type="text" name="name" value={credentials.name} onChange={onChangeValue} className="bg-transparent px-5 py-2 border-2 border-gray-700 rounded-lg outline-none" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" value={credentials.email} onChange={onChangeValue} className="bg-transparent px-5 py-2 border-2 border-gray-700 rounded-lg outline-none" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Email password</label>
          <input type="password" name="password" value={credentials.password} onChange={onChangeValue} className="bg-transparent px-5 py-2 border-2 border-gray-700 rounded-lg outline-none" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="address">Enter Your Address</label>
          <input type="text" name="address" value={credentials.address} onChange={onChangeValue} className="bg-transparent px-5 py-2 border-2 border-gray-700 rounded-lg outline-none" />
        </div>

        <div className="flex gap-5">
          <button type="submit" className="bg-blue-400 w-fit px-5 py-1 rounded-lg">Submit</button>
          <Link to="/login" className="bg-red-400 w-fit px-5 py-1 rounded-lg">Already a User</Link>
        </div>
      </form>
    </div>
  );
}
