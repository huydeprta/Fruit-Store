
import http from "../../../config/http";
import { showToastError } from "../../../config/toastConfig";
import { showToastSuccess } from "../../../config/toastConfig";
const CategoreisService = {
    getAllCategories: async ()=>{
        try {
            const {data} = await http.get('/user/category')            
            return {data}
        } catch (error) {
            showToastError(error.response.data.message)
        } 
    },
     AddCategories: async (dataCategories)=>{
           try {
               const {data} = await http.post('/user/category',dataCategories)
               showToastSuccess(data.message)
               return data
           } catch (error) {
               showToastError(error.response.data.message)
           }
     },
     DeleteCategories: async (id)=>{
        try {
            const {data} = await http.delete(`/user/category/${id}`)
            showToastSuccess(data.message)
            return data
        } catch (error) {
            showToastError(error.response.data.message)
        }
  },
   
    
}
export default CategoreisService