import {Link} from 'react-router-dom'
const Sidebar = ({TabUiNext}) => {
  
  return (
    <>
      <div className="admin-sidebar relative">
        <div className="sidebar-header">
          <span className="material-symbols-outlined">add_reaction</span>
          <h2>Huy Admin</h2>
        </div>
        <ul className="sidebar-menu">
          <li>
            <div className=" hover:bg-white duration-300 menu-item" onClick={()=> TabUiNext(1)}>
              <span className="material-symbols-outlined">dashboard</span>
              Trang quản trị
            </div>
            <div className="section-title">Giao diện</div>
          </li>
          <li>
            <div className=" hover:bg-white duration-300 menu-item flex justify-between" onClick={()=> TabUiNext(2)}>
              <div className="flex items-center"  >
              <span className="material-symbols-outlined">format_list_bulleted</span>
              Sản phẩm
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </li>
          <li>
            <div className=" hover:bg-white duration-300 menu-item flex justify-between" onClick={()=> TabUiNext(3)}>
              <div className="flex items-center" >
              <span className="material-symbols-outlined">build</span>
              Danh mục
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </li>
          <li>
            <div className=" hover:bg-white duration-300 menu-item flex justify-between"   onClick={()=> TabUiNext(4)}>
               <div className="flex items-center">
               <span className="material-symbols-outlined">people</span>
               Khách hàng
               </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </li>
          <li>
            <div className="hover:bg-white duration-300 menu-item"  onClick={()=> TabUiNext(5)}>
              <span className="material-symbols-outlined">assessment</span>
              Thống kê
            </div>
          </li>
          <li>
            <div className="hover:bg-white duration-300 menu-item"  onClick={()=> TabUiNext(6)}>
            <span className="material-symbols-outlined">inventory</span>
              Đơn Hàng
            </div>
          </li>
        </ul>
         <div className="flex justify-center duration-300 bg-[#fff] shadow p-3 rounded-md m-2 hover:bg-[#e6e6e6] cursor-pointer">
         <Link to={'/'}>
          <span className="cursor-pointer">Đăng xuất</span>
          </Link>
         </div>
      </div>
    </>
  );
};

export default Sidebar;
