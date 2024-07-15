import "../../public/style/Contact.css";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
const Contact = () => {
    return (
        <>
            <Navbar />
            <div id="wrap">
                <section id="formBox">
                    <div className="headBox">

                        <h1>Liên hệ</h1>
                    </div>

                    <div className="contentWrapper">
                        <div className="box6_right">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d420.8199979923226!2d108.16969790184355!3d16.07585216162545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219b509a30cfb%3A0xb93a05e26b3b28ff!2zUGjhu5UgdGjDtG5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYyDEkMOgIE7hurVuZw!5e0!3m2!1svi!2s!4v1686966378921!5m2!1svi!2s" width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            <h3>Trụ sở chính</h3>
                            <p>137 Nguyễn Thị Thập, Thanh Khê Tây, Liên Chiểu, Đà Nẵng 550000, Việt Nam</p>
                            <p>Phone: <b>0345646340</b></p>
                            <p>Email: <b>huyctpd08750@fpt.edu.vn</b></p>
                        </div>
                        <form action="">
                            <div id="lien-he-box">
                                <div className="contact1">
                                    <input type="text" id="hoTen" placeholder="Họ Tên (*)" />
                                </div>
                                <div className="contact2">
                                    <input type="email" id="email" placeholder="Email (*)" />
                                </div>
                                <div className="contact3">
                                    <input type="number" id="phone" placeholder="Điện Thoại (*)" />
                                </div>
                                <div className="contact4">
                                    <input type="text" id="diaChi" placeholder="Địa Chỉ (*)" />
                                </div>
                                <div className="contact5">
                                    <textarea rows="3" placeholder="Nội Dung (*)" id="noiDung"></textarea>
                                </div>
                                <div className="contact6">
                                    <input type="button" value="Gửi" id="btnSend" />
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            <Footer />
        </>

    );
}

export default Contact;
