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
  const [tab, setTab] = useState(1)
  const TabUiNext = (next) => {
    setTab(next)
  }
  return (
    <>
      <div className="flex w-full min-h-screen">
        <div className="w-[20%] bg-[#669933] h-auto min-h-screen">
          <Sidebar TabUiNext={TabUiNext} tab={tab} />
        </div>
        <div className="w-[80%] min-h-screen flex flex-col">
          <Nav />
          <div className="flex-1">
            {tab === 1 && (<Mananger />)}
            {tab === 2 && (<ManangerProduct />)}
            {tab === 3 && (<ManangerCategories />)}
            {tab === 4 && (<ManangerClient />)}
            {tab === 5 && (<ManangerMoney />)}
            {tab === 6 && (<ManangerOrder />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
