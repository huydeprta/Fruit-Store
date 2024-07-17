
import "../../../public/style/Admin.css";

const Admin = () => {
  return (
    <>
      <div className="admin-navbar">
        <div className="navbar-left">
          <span className="material-symbols-outlined">menu</span>
          <h2>Hệ Thống Quản Lý</h2>
        </div>
        <div className="navbar-right">
          <span className="material-symbols-outlined">search</span>
          <button className="date-button">
            17/07/2024
          </button>
          <div className="profile">
            <img src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/450874004_1125831589025106_3269203047907659091_n.jpg?stp=dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEE_GpnS8N0k9Y6c7wsFaOQHP6kUYv-PAIc_qRRi_48Ar1pYyZemc3qtgEkdit8_A6xsceHJen1VyfnCeVlACtu&_nc_ohc=o645cLMHc_kQ7kNvgGiziO5&_nc_ht=scontent.fdad3-1.fna&oh=00_AYB3tLs_FMDiiN8PrNVaNWlGBrjexzMiMLPVuX2I0MR8lQ&oe=669B1563" />
          </div>
        </div>
      </div>

      <div className="admin-sidebar">
        <h2>Danh Muc Quản Lý</h2>
        <ul className="sidebar-menu">
          <li>
            <div className="menu-item">
              <span className="material-symbols-outlined">window</span>
              Hệ Thống Quản Lý
            </div>
          </li>
          <li>
            <div className="menu-item">
              <span className="material-symbols-outlined">stacks</span>
              Quản Lý Sản Phẩm
              <ul className="submenu">
                <li>Danh sách sản phẩm</li>
                <li>Danh mục sản phẩm</li>
              </ul>
            </div>
          </li>
          <li>
            <div className="menu-item">
              <span className="material-symbols-outlined">stacks</span>
              Quản lý đơn hàng
            </div>
          </li>
          <li>
            <div className="menu-item">
              <span className="material-symbols-outlined">stacks</span>
              Quản lý khách hàng
            </div>
          </li>
          <li>
            <div className="menu-item">
              <span className="material-symbols-outlined">stacks</span>
              Quản lý nhân viên
            </div>
          </li>
          <li>
            <div className="menu-item">
              <span className="material-symbols-outlined">stacks</span>
              Quản lý tài khoản
            </div>
          </li>
        </ul>
        <div className="admin-account-section">
          <span className="material-symbols-outlined">stacks</span>
          Tài Khoản
        </div>
      </div>
    </>
  );
};

export default Admin;
