import { useState } from "react";
import "../../../public/style/Admin.css";
import Sidebar from "./layouts/Sidebar";
import Nav from "./layouts/Nav";
import Mananger from "./content/Mananger";
import ManangerProduct from "./content/ManangerProduct";
import ManangerCategories from "./content/ManangerCategories";
import ManangerClient from "./content/ManangerClient";
import ManangerMoney from "./content/ManangerMoney";
import ManangerOrder from "./content/ManangerOrder";
const Admin = () => {
  const [tab,setTab] = useState(1)
  const TabUiNext =  (next)=>{
    setTab(next)
  }
  return (
    <>
     
      <div className="flex  w-full ">
        <div className="w-[20%] bg-[#669933] h-dvh">
          <Sidebar  TabUiNext={TabUiNext}  tab={tab} />
        </div>
        <div className="w-[80%]">
          <Nav/>
    
        {tab === 1 && (<Mananger />)}  
        {tab === 2 && (<ManangerProduct/>)}
        {tab === 3 && (<ManangerCategories/>)}
        {tab === 4 && (<ManangerClient/>)}
        {tab === 5 && (<ManangerMoney/>)}
        {tab === 6 && (<ManangerOrder/>)}



        </div>
      </div>
    </>
  );
};

export default Admin;
