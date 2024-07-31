
import http from "../config/http";
import { showToastError } from "../config/toastConfig";
import { showToastSuccess } from "../config/toastConfig";
const AuthService = {
     Register: async (dataRegister)=>{
           try {
               const {data} = await http.post('/user/register',dataRegister)
               console.log(data);
               showToastSuccess(data.message)
           } catch (error) {
               showToastError(error.response.data.message)
           }
     },
     Login: async (dataLogin)=>{
          try {
              const {data} = await http.post('/user/login',dataLogin)
              console.log(data);
              localStorage.setItem("token" ,JSON.stringify(data.token))
              showToastSuccess(data.message)
          } catch (error) {
              showToastError(error.response.data.message)
          }
    }
}
export default AuthService