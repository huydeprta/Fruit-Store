const AddProductForm = ({ onClick, newProduct, setNewProduct, onSubmit, categories, placeholder }) => {
  return (
    <div>
      <input
        className="block border rounded-md p-2 w-full mb-3"
        placeholder={placeholder}
        type="text"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        className="block border rounded-md p-2 w-full mb-3"
        placeholder="Nhập nguồn gốc"
        type="text"
        value={newProduct.origin}
        onChange={(e) => setNewProduct({ ...newProduct, origin: e.target.value })}
      />
      <input
        className="block border rounded-md p-2 w-full mb-3"
        placeholder="Nhập URL ảnh"
        type="text"
        value={newProduct.image}
        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
      />
      <input
        className="block border rounded-md p-2 w-full mb-3"
        placeholder="Bảo quản"
        type="text"
        value={newProduct.storage}
        onChange={(e) => setNewProduct({ ...newProduct, storage: e.target.value })}
      />
      <input
        className="block border rounded-md p-2 w-full mb-3"
        placeholder="Hạn sử dụng"
        type="text"
        value={newProduct.expirydate}
        onChange={(e) => setNewProduct({ ...newProduct, expirydate: e.target.value })}
      />
      <select
        className="block border rounded-md p-2 w-full mb-3"
        value={newProduct.categories}
        onChange={(e) => setNewProduct({ ...newProduct, categories: e.target.value })}
      >
        <option value="">Chọn danh mục</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        className="block border rounded-md p-2 w-full mb-3"
        placeholder="Nhập giá"
        type="number"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
      />
      <input
        className="block border rounded-md p-2 w-full mb-3"
        placeholder="Nhập mô tả"
        type="text"
        value={newProduct.description}
        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
      />
      <button onClick={onSubmit} className="w-full bg-blue-500 text-white p-3 rounded-md">
        Thêm sản phẩm
      </button>
      <button onClick={onClick} className="w-full bg-red-500 text-white p-3 rounded-md mt-2">
        Hủy
      </button>
    </div>
  );
};

export default AddProductForm;
