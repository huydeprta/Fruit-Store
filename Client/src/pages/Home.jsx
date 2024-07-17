import Navbar from "../layout/Navbar/Navbar";
import Section from "../layout/Section/Section";
import Footer from "../layout/Footer/Footer";
const Home = () => {
    return (
        <>
            <Navbar/>
            <Section/>
            <div>
                <div className="center">
                    <div>
                        <button className="btn-custom">Trái Ngon Hôm Nay</button>
                    </div>
                </div>
                <div className="none">
                    <div className="product-card">
                        <img src="https://product.hstatic.net/200000377165/product/artboard_6_6b979af74f1447afb0e256d58b80611a_large.png" alt="Papaya" className="product-image" />
                        <p>Du du ruot vang huu co</p>
                        <p className="price">65,000₫</p>
                        <button className="buy-button">CHỌN MUA</button>
                    </div>

                </div>
            </div>
            <Footer />

        </>
    );
};

export default Home;