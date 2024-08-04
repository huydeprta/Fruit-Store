import { useEffect, useState } from "react";
import AddButton from "../../../components/Button/AddButton";
import UpdateButton from "../../../components/Button/UpdateButton";
import DeleteButton_square from "../../../components/Button/DeleteButton";
import ProductsServices from "../../../services/admin/products/productsServices";
import AddProductForm from "../components/product/AddProductForm"; 

const ManagerProduct = () => {
  const [products, setProducts] = useState([]);
  const [formAdd, setFormAdd] = useState(false); 
  const [newProduct, setNewProduct] = useState({
    name: "", 
    origin: "",
    image: "",
    storage: "",
    expirydate: "",
    categories: "",
    price: "",
    description: ""
  });

  const getAllProducts = async () => {
    const { data } = await ProductsServices.getAllProducts();
    setProducts(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const postProduct = async () => {
    if (!newProduct.name) {
      return;
    }
    await ProductsServices.addProduct(newProduct);
    setNewProduct({
      name: "", 
      origin: "",
      image: "",
      storage: "",
      expirydate: "",
      categories: "",
      price: "",
      description: ""
    });
    getAllProducts();
    setFormAdd(false);
  };

  const deleteProduct = async (id) => {
    if (!id) {
      return;
    }
    await ProductsServices.deleteProduct(id);
    getAllProducts();
  };

  return (
    <>
      {formAdd && (
        <div className="fixed left-[45%] bg-[#fff] p-5 w-[500px] z-10">
          <AddProductForm
            onClick={() => setFormAdd(false)}
            newProduct={newProduct}
            setNewProduct={setNewProduct}
            onSubmit={postProduct}
            placeholder="Nhập tên sản phẩm"
          />
        </div>
      )}

      <div className="overflow-y-auto h-[640px] scrollbar-thin">
        <table className="w-full">
          <thead className="bg-gray-100 h-16">
            <tr>
              <th className="text-left px-4">Tên</th>
              <th className="text-left px-4">Xuất xứ</th>
              <th className="text-left px-4">Ảnh</th>
              <th className="text-left px-4">Bảo quản</th>
              <th className="text-left px-4">Hạn sử dụng</th>
              <th className="text-left px-4">Danh mục</th>
              <th className="text-left px-4">Giá tiền</th>
              <th className="text-left px-4">Mô tả</th>
              <th className="pr-5 py-2 text-right" colSpan="2">
                <AddButton
                  click={() => setFormAdd(!formAdd)}
                  nameButton="Thêm Sản Phẩm"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr className="border-b border-gray-200" key={product._id}>
                <td className="text-left px-4 py-2">{product.name}</td>
                <td className="text-left px-4 py-2">{product.origin}</td>
                <td className="text-left px-4 py-2">
                  <img
                    className="w-[60px] rounded-[10px]"
                    src={product.image}
                    alt={product.name}
                  />
                </td>
                <td className="text-left px-4 py-2">{product.storage}</td>
                <td className="text-left px-4 py-2">{product.expiration}</td>
                <td className="text-left px-4 py-2">{product.category}</td>
                <td className="text-left px-4 py-2">{product.price} VND</td>
                <td className="text-left px-4 py-2">{product.description}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center justify-center">
                    <UpdateButton />
                    <DeleteButton_square
                      clickDelete={() => deleteProduct(product._id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManagerProduct;
