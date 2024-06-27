import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
               <div className='contact-0'>
                <h4>Vie Fruit-Store</h4>
                <p>Fruit-Store là thương hiệu trái cây tươi chất lượng cao,
                     với đa dạng sản phẩm phục vụ mọi nhu cầu: đặc sản vùng miền, trái cây nhập khẩu, quà tặng trái cây, mâm ngũ quả, nước ép, và trái cây sấy.</p>
               </div>
               <div className="logo-footer" > 
               <a href="index.html">
                <img src="https://theme.hstatic.net/200000377165/1001243925/14/footer_logobct_img.png?v=17" alt="Bộ Công Thương" />
                </a>
               </div>
               <div className='content-footer'>
                    <div>
                         <ul>
                              <li className="contact-1"><b>Chi Nhánh 1: </b>
                               Lầu 1, 43 Nguyễn Thái Học, phường Cầu Ông Lãnh, quận 1, TP. Hồ Chí Minh.
                               <br></br>
                               <b>Chi Nhánh 2: </b>
                               SAV.7-00.01, Tầng trệt Tháp 7, The Sun Avenue, 28 Mai Chí Thọ, phường An Phú, thành phố Thủ Đức.
                              </li>
                              <li className="contact-2"><b>Điện Thoại: </b>
                              0345646340
                              </li>
                              <li className="contact-3"><b>Gmail: </b>
                              caothaihuy14@gmail.com
                              </li>
                         </ul>
                    </div>
               </div>
               <div className='clo-md'>
                    <div className='ct-l'><strong>Bản quyền của Công ty CTH Fruit-Store</strong></div>
                    <div className='ct-l'>Giấy chứng nhận Đăng ký Kinh doanh số 0316077880 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 02/01/2020. Đăng ký thay đổi lần 4 ngày 22/04/2022</div>
                    <div className='ct-l'>Giấy chứng nhận cơ sở đủ điều kiện an toàn thực phẩm số 3091/2022/BQLATTP-HCM do Ban Quản lý An toàn thực phẩm thành phố Hồ Chí Minh cấp ngày 17/06/2022</div>
               </div>
            </div>
            <div className="footer-center">
                <div>
                    <h3>Hỗ trợ khách hàng</h3>
                    <p>Tìm kiếm</p>
                    <p>Câu chuyện thương hiệu</p>
                </div>
                <div>
                    <h3>Chăm sóc khách hàng</h3>
                    <p>0865660775</p>
                    <p>hello@morningfruit.com.vn</p>
                </div>
                <div>
                    <h3>Thông tin liên hệ</h3>
                    <p>Chi nhánh 1: Lô 1, 43 Nguyễn Thái Học, Quận 1, TP HCM</p>
                    <p>Chi nhánh 2: SAV 7-00.01, Tầng trệt, The Sun Avenue, 28 Mai Chí Thọ, TP Thủ Đức</p>
                </div>
            </div>
            <div className="footer-right">
                <h3>Follow Us</h3>
                <p>Facebook | Instagram | YouTube | Email</p>
            </div>
        </footer>
    );
};

export default Footer;
