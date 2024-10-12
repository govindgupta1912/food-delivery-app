// // Importing React Packages
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'

// // Importing local files
// //import Navbar from '../components/Headers';

// export default function Login() {
//   const [credentials, setCredentials] = useState({email:"", password:""})
//   let navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     //Synthetic event
//     e.preventDefault();
//     try {
//       const response = await fetch(`http://localhost:5000/api/login`, {
//         method: 'POST',
//         headers:{
//           'Content-Type':'application/json'
//         },
//         body:JSON.stringify({email:credentials.email, password:credentials.password})
//       });
      
//       const json = await response.json()
  
//       if(!json.success){
//         alert("Enter Valid Credentials")
//       }

//       if(json.success){
//         localStorage.setItem("userName", json.name);
//         localStorage.setItem("userEmail", credentials.email);
//         localStorage.setItem("authToken", json.authToken);
//         navigate("/")
//       }
//     } catch (error) {
//       console.error("error.message")
//     }
//   }

//   const onChangeValue = (e) => {
//     setCredentials({...credentials, [e.target.name]:e.target.value})
//   }
  
//   return (
//     <div className="h-lvh bg-gray-950 text-white font-mono">
//       {/* <Navbar /> */}

//       <form onSubmit={handleSubmit} className="text-2xl px-20 py-10 flex flex-col gap-10">
//         <div className="flex flex-col gap-2">
//           <label htmlFor="email">Email address</label>
//           <input type="email" name="email" value={credentials.email} onChange={onChangeValue} className="bg-transparent px-5 py-2 border-2 border-gray-700 rounded-lg outline-none" />
//         </div>

//         <div className="flex flex-col gap-2">
//           <label htmlFor="password">Email password</label>
//           <input type="password" name="password" value={credentials.password} onChange={onChangeValue} className="bg-transparent px-5 py-2 border-2 border-gray-700 rounded-lg outline-none" />
//         </div>

//         <div className="flex gap-5">
//           <button type="submit" className="bg-blue-400 w-fit px-5 py-1 rounded-lg">Submit</button>
//           <Link to="/signup" className="bg-red-400 w-fit px-5 py-1 rounded-lg">New User?</Link>
//         </div>
//       </form>
//     </div>

//   )
// }



import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../utilites/UserContext';

export default function Login() {
  const { setLoggedInUser } = useContext(UserContext);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });

      const json = await response.json();

      if (!json.success) {
        alert("Enter Valid Credentials");
        return;
      }

      console.log("backend data",json
      );
      

      // Set UserContext and localStorage
      setLoggedInUser(json.data.name); // Update the context with the logged-in user
      localStorage.setItem("userName", json.data.name);
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
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
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" value={credentials.email} onChange={onChangeValue} className="bg-transparent px-5 py-2 border-2 border-gray-700 rounded-lg outline-none" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Email password</label>
          <input type="password" name="password" value={credentials.password} onChange={onChangeValue} className="bg-transparent px-5 py-2 border-2 border-gray-700 rounded-lg outline-none" />
        </div>

        <div className="flex gap-5">
          <button type="submit" className="bg-blue-400 w-fit px-5 py-1 rounded-lg">Submit</button>
          <Link to="/signup" className="bg-red-400 w-fit px-5 py-1 rounded-lg">New User?</Link>
        </div>
      </form>
    </div>
  );
}
