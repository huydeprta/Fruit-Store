
const Nav = () => {
     return (
          <div>
                <div className="admin-navbar">
    <div className="navbar-left">
  <input type="text" placeholder="Tìm kiếm..." className="search-input" />
  <button className="search-button">
    <span className="material-symbols-outlined">search</span>
  </button>
</div>

    <div className="navbar-right">
      <div className="notification">
        <span className="material-symbols-outlined">notifications</span>
      </div>
      <div className="email">
        <span className="material-symbols-outlined">email</span>
      </div>
      <span className="user-name">Hello Admin!</span>
      <img src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/450874004_1125831589025106_3269203047907659091_n.jpg?stp=dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEE_GpnS8N0k9Y6c7wsFaOQHP6kUYv-PAIc_qRRi_48Ar1pYyZemc3qtgEkdit8_A6xsceHJen1VyfnCeVlACtu&_nc_ohc=o645cLMHc_kQ7kNvgGiziO5&_nc_ht=scontent.fdad3-1.fna&oh=00_AYB3tLs_FMDiiN8PrNVaNWlGBrjexzMiMLPVuX2I0MR8lQ&oe=669B1563" className="profile-img" />
    </div>
  </div>
          </div>
     );
};

export default Nav;