const EditProductForm = (props) => {
  const { onClick, product, setProduct, categories , setFormEdit} = props;
  console.log('product', product);


  return (
    <div>
      <input
        className="block border rounded-md p-2 w-full mb-3"
        placeholder="Nhập tên sản phẩm"
        type="text"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <input
        className="block border rounded-md p-2 w-full mb-3"
        placeholder="Nhập nguồn gốc"
        type="text"
        value={product.origin}
        onChange={(e) => setProduct({ ...product, origin: e.target.value })}
      />
      <input
        className="block border rounded-md p-2 w-full mb-3"
        placeholder="Nhập URL ảnh"
        type="text"
        value={product.image}
        onChange={(e) => setProduct({ ...product, image: e.target.value })}
      />
      <input
        className="block border rounded-md p-2 w-full mb-3"
        placeholder="Bảo quản"
        type="text"
        value={product.storage}
        onChange={(e) => setProduct({ ...product, storage: e.target.value })}
      />
      <input
        className="block border rounded-md p-2 w-full mb-3"
        placeholder="Hạn sử dụng"
        type="text"
        value={product.expirydate}
        onChange={(e) => setProduct({ ...product, expirydate: e.target.value })}
      />
      <select
        className="block border rounded-md p-2 w-full mb-3"
        value={product.categories}
      onChange={(e) => setProduct({ ...product, categories: e.target.value })}
      >
        <option value="">Chọn danh mục</option>
        {categories.map((category) => (
          <>
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          </>
        ))}
      </select>
      <input
        className="block border rounded-md p-2 w-full mb-3"
        placeholder="Nhập giá"
        type="number"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
      />
      <input
        className="block border rounded-md p-2 w-full mb-3"
        placeholder="Nhập mô tả"
        type="text"
        value={product.description}
        onChange={(e) => setProduct({ ...product, description: e.target.value })}
      />
      <button onClick={onClick} className="w-full bg-blue-500 text-[#fff] p-3 rounded-md">Cập nhật</button>
      <button onClick={()=>setFormEdit(false)} className="w-full bg-red-500 text-white p-3 rounded-md mt-2">
        Hủy
      </button>
    </div>
  );
};

export default EditProductForm;