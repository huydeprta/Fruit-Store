import Card from "../../../components/CardOverviews/Card";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import CheckoutService from "../../../services/checkout/checkoutService";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../../config/formatCurrency";
import ProductsServices from "../../../services/products/productsServices";

const Mananger = () => {
      const [orderCheckout,setOrderCheckout] = useState([])
      const [allProduct,setAllProduct] = useState([])
      const [totalCheckout,setTotalCheckout] = useState(0)

      useEffect(()=>{
           const getData = async ()=>{
               const {data} = await CheckoutService.getAllCheckout()
               setOrderCheckout(data); 
               const  prd = await ProductsServices.getAllProducts()
               setAllProduct(prd.data)
           }
           getData()
      },[])
      useEffect(()=>{
          setTotalCheckout(orderCheckout.reduce((totals,product)=> totals + product.totalPrice
          ,0))
        
          
      },[orderCheckout])
 
        
     return (
          <>
               <div className="grid grid-cols-3 gap-5 pt-5 p-5">
               <Card
                    titleCard={"Mua hàng"}
                    quantity={orderCheckout?.length}
                    iconCard={
                    <TfiShoppingCartFull className="text-[40px] text-[#10b981]" />}
               />
                <Card
                    titleCard={"Tổng tiền"}
                    quantity={ formatCurrency(totalCheckout)}
                    iconCard={
                         <FaMoneyBillTrendUp className="text-[40px] text-[#10b981]" />}
               />
                     <Card
                    titleCard={"Số lượng sản phẩm"}
                    quantity={allProduct?.length}
                    iconCard={
                    <TfiShoppingCartFull className="text-[40px] text-[#10b981]" />}
               />
               </div>
          </>
     );
};

export default Mananger;