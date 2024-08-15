import "../../public/style/Product.css";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";

import CategoreisService from "../services/categories/categoriesService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Products = () => {
  const [Categories, setCategories] = useState([])
  const [productCategories, setProductCategories] = useState({})


  const getDataCategories = async () => {
    const { data } = await CategoreisService.getAllCategories()
    setProductCategories(data[0])
    setCategories(data);
  }
  useEffect(() => {
    getDataCategories()
  }, [])

  const handleShowProductCategories = (idCate) => {
    const product = Categories.find((productCate) => productCate._id === idCate)
    setProductCategories(product)
  }
  console.log(productCategories);

  return (
    <>
      <Navbar />
      <div className="products">
        <div className="cate">
          <div className="categories">
            <span>DANH MỤC SẢN PHẨM</span>
          </div>
          <div className="list-categories">
            {Categories.map((nameCate) => (
              <div key={nameCate._id}>
                <span className="hover:text-lime-500 duration-300 cursor-pointer" onClick={() => handleShowProductCategories(nameCate?._id)}>{nameCate?.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="none">
            {productCategories?.Products?.map((product) => (
              <>
             <Link to={`/productdetails/${product._id}`}>
                <div className="product-card">
                  <img src={product?.image[0]} alt="Papaya" className="product-image" />
                  <p>{product?.name}</p>
                  <p className="price">65,000₫</p>
                  <button className="bg-green-700 w-[95%] p-2 mx-2 text-[#fff] rounded-[5px]">Chọn Mua</button>
                </div>
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
};

export default Products;
