import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import ProductsServices from "../services/products/productsServices";
import { formatCurrency } from "../config/formatCurrency";
const ProductDetails = () => {
  const [detailProduct, setDetailProduct] = useState({})
  const { id } = useParams()
  console.log(id);
  const getDetailProduct = async () => {
    const data = await ProductsServices.GetDeltailProduct(id)
    setDetailProduct(data);

  }
  useEffect(() => {
    getDetailProduct()
  }, [id])
  return (
    <>
      <Navbar />
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            {detailProduct?.image?.map((images) => (
              <>
                <div className="border rounded-lg p-2">
                  <img src={images} alt={images} className="w-full h-auto rounded" />
                </div>

                <div className="flex space-x-2 mt-2 justify-center">
                  <img src={images} alt="Thumbnail 1" className="w-16 h-16 rounded border cursor-pointer" />
                </div>
              </>
            ))}
          </div>
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-bold">{detailProduct?.name}</h1>
            <p className="text-red-500 text-lg font-semibold">{ formatCurrency(detailProduct?.price)}</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <button className="border border-gray-400 px-2 py-1">-</button>
                <input type="text" value="1" className="border-t border-b border-gray-400 w-12 text-center" />
                <button className="border border-gray-400 px-2 py-1">+</button>
              </div>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                Thêm vào giỏ
              </button>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Thông Tin Sản Phẩm</h2>
              <p>{detailProduct?.description}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Thông Tin Sản Phẩm</h2>
              <p>{detailProduct?.origin}</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Bảo Quản Và Sử Dụng</h2>
              <p>{detailProduct?.storage}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
