import Card from "../../../components/CardOverviews/Card";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";


const Mananger = () => {
     return (
          <>
               <div className="grid grid-cols-3 gap-5 pt-5 p-5">
               <Card
                    titleCard={"Mua hàng"}
                    quantity={20}
                    iconCard={
                    <TfiShoppingCartFull className="text-[40px] text-[#10b981]" />}
               />
                <Card
                    titleCard={"Tổng tiền"}
                    quantity={20}
                    iconCard={
                         <FaMoneyBillTrendUp className="text-[40px] text-[#10b981]" />}
               />
                     <Card
                    titleCard={"Số lượng sản phẩm"}
                    quantity={20}
                    iconCard={
                    <TfiShoppingCartFull className="text-[40px] text-[#10b981]" />}
               />
               </div>
          </>
     );
};

export default Mananger;