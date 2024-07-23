import AddButton from "../../../components/Button/AddButton";
import UpdateButton from "../../../components/Button/UpdateButton";
import DeleteButton_square from "../../../components/Button/DeleteButton";
const ManangerProduct = () => {
    return (
        <>
   <div className="overflow-y-auto h-[640px] scrollbar-thin">
        <table className="w-full"  >
          <thead className="bg-gray-100 h-16">
            <tr>
              <th className="text-left px-4">Tên</th>
              <th className="text-left px-4">Xuất xử</th>
              <th className="text-left px-4">Ảnh</th>
              <th className="text-left px-4">Bảo quản</th>
              <th className="text-left px-4">Hạn sử dụng</th>
              <th className="text-left px-4">Danh mục</th>
              <th className="text-left px-4">Giá tiền</th>

              <th className="pr-5 py-2  text-right" colSpan="10">
                <AddButton
                  nameButton="Thêm Sản Phẩm"
                />
              </th>
            </tr>
          </thead>
          <tbody >

              <tr className="border-b border-gray-200">
                <td className="text-left px-4 py-2">Trái cây 1</td>
                <td className="text-left px-4 py-2">Mỹ</td>
                <td className="text-left px-4 py-2">
                  <img
                    className="w-[60px] rounded-[10px]"
                    src={"https://product.hstatic.net/200000377165/product/artboard_6_6b979af74f1447afb0e256d58b80611a_large.png"}
                    alt={'ảnh'}
                  />
                </td>

                <td className="text-left px-4 py-2">Lạnh</td>
                <td className="text-left px-4 py-2">
               2021
                </td>
                <td className="text-left px-4 py-2">  
                trái cây khô
                </td>
                <td className="text-left px-4 py-2">122020 VND</td>

                <td className="px-4 py-2"></td>
                <td className="text-left py-2"></td>
                <td className="text-left py-2"></td>
                <td className="px-4 py-2">
                  <div className="flex items-center justify-center">
                    <UpdateButton />
                    <DeleteButton_square />
                  </div>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
        </>
    );
};

export default ManangerProduct;