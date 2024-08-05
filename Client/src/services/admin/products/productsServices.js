import http from "../../../config/http";
import { showToastError } from "../../../config/toastConfig";
import { showToastSuccess } from "../../../config/toastConfig";

const ProductsServices = {
    getAllProducts: async () => {
        try {
          const { data } = await http.get('/user/products');
          return { data };
        } catch (error) {
          showToastError(error.response.data.message);
        }
      },
      addProduct: async (dataProducts) => {
        try {
          const { data } = await http.post('/user/products', dataProducts);
          showToastSuccess(data.message);
          return data;
        } catch (error) {
          showToastError(error.response.data.message);
        }
      },
       DeleteProducts: async (id)=>{
          try {
              const {data} = await http.delete(`/user/products/${id}`)
              showToastSuccess(data.message)
              return data
          } catch (error) {
              showToastError(error.response.data.message)
          }
    },
      UpdateProducts: async (id , dataProducts)=>{
      try {
          const {data} = await http.put(`/user/products/${id}`,dataProducts) ;
          showToastSuccess(data.message)
          return data ;
      } catch (error) {
          showToastError(error.response.data.message)
      }
    }


}

export default ProductsServices