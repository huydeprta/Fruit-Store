const Sidebar = () => {
  return (
    <>
      <div className="admin-sidebar relative">
        <div className="sidebar-header">
          <span className="material-symbols-outlined">add_reaction</span>
          <h2>Huy Admin</h2>
        </div>
        <ul className="sidebar-menu">
          <li>
            <div className=" hover:bg-white duration-300 menu-item">
              <span className="material-symbols-outlined">dashboard</span>
              Trang quản trị
            </div>
            <div className="section-title">Giao diện</div>
          </li>
          <li>
            <div className=" hover:bg-white duration-300 menu-item flex justify-between">
              <div className="flex items-center">
              <span className="material-symbols-outlined">format_list_bulleted</span>
              Sản phẩm
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </li>
          <li>
            <div className=" hover:bg-white duration-300 menu-item flex justify-between">
              <div className="flex items-center">
              <span className="material-symbols-outlined">build</span>
              Danh mục
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </li>
          <li>
            <div className=" hover:bg-white duration-300 menu-item flex justify-between">
               <div className="flex items-center">
               <span className="material-symbols-outlined">people</span>
               Khách hàng
               </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </li>
          <li>
            <div className="hover:bg-white duration-300 menu-item">
              <span className="material-symbols-outlined">assessment</span>
              Thống kê
            </div>
          </li>
        </ul>
         <div className="flex justify-center duration-300 bg-[#fff] shadow p-3 rounded-md m-2 hover:bg-[#e6e6e6] cursor-pointer">
          <span className="cursor-pointer">Đăng xuất</span>
         </div>
      </div>
    </>
  );
};

export default Sidebar;
