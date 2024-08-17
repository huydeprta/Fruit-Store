
import http from "../../config/http";
import { showToastError } from "../../config/toastConfig";
// import { showToastSuccess } from "../../config/toastConfig";
const CheckoutService = {
    postCheckout: async (dataCheckout)=>{
        try {
            const {data} = await http.post('/checkout',dataCheckout)            
            return {data}
        } catch (error) {
            showToastError(error.response.data.message)
        } 
    }, 
    getAllCheckout: async ()=>{
        try {
            const {data} = await http.get('/checkout')            
            return {data}
        } catch (error) {
            showToastError(error.response.data.message)
        } 
    }, 
}
export default CheckoutService