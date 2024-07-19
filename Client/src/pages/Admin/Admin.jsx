import "../../../public/style/Admin.css";
import Sidebar from "./layouts/Sidebar";
import Nav from "./layouts/Nav";
import Mananger from "./content/Mananger";
const Admin = () => {
  return (
    <>
     
      <div className="flex  w-full ">
        <div className="w-[20%] bg-[#669933] h-dvh">
          <Sidebar />
        </div>
        <div className="w-[80%]">
          <Nav />
          <Mananger />
        </div>
      </div>
    </>
  );
};

export default Admin;
