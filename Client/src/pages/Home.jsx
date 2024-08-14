import Navbar from "../layout/Navbar/Navbar";
import Section from "../layout/Section/Section";
import Footer from "../layout/Footer/Footer";
import { Link } from "react-router-dom";
import ProductsServices from "../services/products/productsServices";
import { useEffect, useState } from "react";
import { formatCurrency } from "../config/formatCurrency";
const Home = () => {
    const [product, setProduct] = useState([])
    const getAllProduct = async () => {
        const { data } = await ProductsServices.getAllProducts()
        setProduct(data)
    }
    useEffect(() => {
        getAllProduct()
    }, [])
    console.log(product);

    return (
        <>
            <Navbar />
            <Section />
            <div>
                <div className="center">
                    <div>
                        <button className="btn-custom">Trái Ngon Hôm Nay</button>
                    </div>
                </div>
                <div className="none">
                    {product.map((fruit) => (
                        <div className="product-card" key={fruit.id}>
                            <Link to={`/ProductDetails/${fruit._id}`}>
                                <img src={fruit?.image[0]} />
                                <p className="font-bold">{fruit?.name}</p>
                                <p className="text-red-500 price ">   {formatCurrency(fruit?.price)}</p>
                                <p className="font-bold">Xuất xứ:  {fruit?.origin}</p>
                                <button className="bg-green-700 w-[95%] p-2 mx-2 text-[#fff] rounded-[5px]">Chọn Mua</button>
                            </Link>
                        </div>
                    ))}

                </div>
            </div>
            <Footer />

        </>
    );
};

export default Home;