/* eslint-disable no-undef */
 import { useState } from "react";
import "./Login.css"
const Login = () => {

          const [currState,setCurrState] = useState("Đăng Nhập")

     return ( 
          <div className="login">
               <form className="login-form">
                    <div className="login-title">
                         <h2>{currState}</h2>
                         <img onClick={()=>setShowLogin(false)}></img>
                    </div>
               </form>
          </div>
      );
}
 
export default Login;