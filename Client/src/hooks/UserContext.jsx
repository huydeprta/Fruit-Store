import { createContext, useEffect, useState } from "react";
export const UserProvider = createContext()
import AuthService from "../services/admin/authService";
const UserContext = ({children}) => {
    const token = localStorage.getItem('token')
    const [user,setUser] = useState(null)
     useEffect(()=>{
          const GetUserDataLogin = async () =>{
             const getData = await AuthService.GetUserData(JSON.parse(token))
             setUser(getData);
          }
          GetUserDataLogin()
     },[token])

     return (
          <div>
               <UserProvider.Provider value={{user}}>
                     {children}
               </UserProvider.Provider>
          </div>
     );
};

export default UserContext;