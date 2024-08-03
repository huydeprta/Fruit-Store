
import http from "../config/http";
import { showToastError } from "../config/toastConfig";
import { showToastSuccess } from "../config/toastConfig";
const AuthService = {
     Register: async (dataRegister)=>{
           try {
               const {data} = await http.post('/user/register',dataRegister)
               showToastSuccess(data.message)
           } catch (error) {
               showToastError(error.response.data.message)
           }
     },
     Login: async (dataLogin)=>{
          try {
              const {data} = await http.post('/user/login',dataLogin)
              localStorage.setItem("token" ,JSON.stringify(data.token))
              showToastSuccess(data.message)
              return data
          } catch (error) {
              showToastError(error.response.data.message)
          }
    },
     GetUserData: async (token) => {
        console.log(token);
        try {
            const response = await http.get(`/user`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error("Error retrieving user data:", error);
            throw new Error("Đã xảy ra lỗi khi lấy dữ liệu người dùng");
        }
    }
    
}
export default AuthService