// import React from "react";
// import UserContext from "./UserContext"
// const UserContextProvider = ({children}) => {
//     return(
//         <UserContext.Provider value={{user,SetUser}}>
//             {children}


//         </UserContext.Provider>
//     )
// }

// export default UserContextProvider





import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;