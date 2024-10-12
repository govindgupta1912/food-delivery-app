// import { createContext } from "react";

// const UserContext = createContext({
//     loggedInUser : "Default user",
   
// });

// export default UserContext;

import { createContext, useState } from "react";

// Create UserContext
const UserContext = createContext();

// UserProvider to provide the context to children components
export const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null); // Initialize with null

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;


