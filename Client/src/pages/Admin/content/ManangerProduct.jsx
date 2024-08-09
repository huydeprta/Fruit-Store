import { useEffect, useState } from "react";
import AddButton from "../../../components/Button/AddButton";
import UpdateButton from "../../../components/Button/UpdateButton";
import DeleteButton_square from "../../../components/Button/DeleteButton";
import ProductsServices from "../../../services/products/productsServices";
import CategoreisService from "../../../services/categories/categoriesService";
import AddProductForm from "../components/product/AddProductForm";
import EditProductForm from "../components/product/EditProductForm";
import { formatCurrency } from "../../../config/formatCurrency";
const ManagerProduct = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ProductAddForm, setFormAdd] = useState(false);
  const [ProductEditForm, setFormEdit] = useState(false)
  const [editProduct, setEditProduct] = useState(null);
  const [editDataProduct,setDataEditProduct] = useState("")
  const [newProduct, setNewProduct] = useState({
    name: "",
    origin: "",
    image: "",
    storage: "",
    expirydate: "",
    price: "",
    description: "",
    categories: ""
  });

  const getAllProducts = async () => {
    try {
      const { data } = await ProductsServices.getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllCategory = async () => {
    try {
      const { data } = await CategoreisService.getAllCategories();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const postProduct = async () => {
    if (!newProduct.name) {
      alert("Tên sản phẩm là bắt buộc.");
      return;
    }
    try {
      console.log("Adding new product:", newProduct);
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
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const deleteProduct = async (id) => {
    if (!id) {
      return;
    }
    try {
      await ProductsServices.DeleteProducts(id);
      getAllProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  
  const updateProduct = async () => {
    
    if (!editDataProduct) {
      return;
      
  }
    const data = {
      name: editDataProduct.name,
      origin: editDataProduct.origin,
      image: editDataProduct.image,
      storage: editDataProduct.storage,
      expirydate: editDataProduct.expirydate,
      categories: editDataProduct.categories,
      price: editDataProduct.price,
      description: editDataProduct.description
    }
    
    await ProductsServices.UpdateProducts(editProduct?._id, data);
    
    getAllProducts()
};

  return (
    <>
      {ProductAddForm && (
        <div className="fixed left-[45%] bg-[#fff] p-5 w-[500px] z-10">
          <AddProductForm
            onClick={() => setFormAdd(false)}
            newProduct={newProduct}
            setNewProduct={setNewProduct}
            onSubmit={postProduct}
            categories={categories}
            placeholder="Nhập tên sản phẩm"
          />
        </div>
      )}

      {ProductEditForm && (
        <div className="fixed left-[45%] bg-[#fff] p-5 w-[500px] z-10">
          <EditProductForm
            product={editDataProduct}
            setProduct={setDataEditProduct}
            onClick={() => updateProduct(false)}
            categories={categories}
          />
        </div>
      )}

      <div className="overflow-y-auto  scrollbar-thin ">
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
                  click={() => setFormAdd(!ProductAddForm)}
                  nameButton="Thêm Sản Phẩm"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr className="border-b border-gray-200" key={product._id}>
                <td className="text-left px-4 py-2">{product?.name}</td>
                <td className="text-left px-4 py-2">{product?.origin}</td>
                <td className="text-left px-4 py-2">
                  <img
                    className="w-[60px] rounded-[10px]"
                    src={product?.image}
                    alt={product?.name}
                  />
                </td>
                <td className="text-left px-4 py-2">{product?.storage}</td>
                <td className="text-left px-4 py-2">{product?.expirydate}</td>
                <td className="text-left px-4 py-2">{product?.categories?.name}</td>
                <td className="text-left px-4 py-2">{ formatCurrency(product?.price)}</td>
                <td className="text-left px-4 py-2 w-[400px]">{product?.description}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center justify-center">
                    <UpdateButton clickUpdate={() => {
                        setFormEdit(true),
                        setEditProduct(product),
                        setDataEditProduct(product)
                      }} />
                    <DeleteButton_square clickDelete={() => deleteProduct(product?._id)} />
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