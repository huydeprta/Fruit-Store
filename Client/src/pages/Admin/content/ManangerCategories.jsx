
import AddButton from "../../../components/Button/AddButton";
import UpdateButton from "../../../components/Button/UpdateButton";
import DeleteButton_square from "../../../components/Button/DeleteButton";
const ManangerCategories = () => {
    return (
        <>
           <div className="overflow-y-auto h-[640px] scrollbar-thin">
        <table className="w-full"  >
          <thead className="bg-gray-100 h-16">
            <tr>
            <th className="text-left px-4">STT</th>
              <th className="text-left px-4">Tên Danh Mục</th>
              <th className="text-left px-4">Sản Phẩm</th>
              <th className="pr-5 py-2  text-right" colSpan="10">
                <AddButton
                  nameButton="Thêm Danh Mục"
                />
              </th>
            </tr>
          </thead>
          <tbody >

              <tr className="border-b border-gray-200">
                <td className="text-left px-4 py-2">1</td>


                <td className="text-left px-4 py-2">Trái Cây Khô</td>
                <td className="text-left px-4 py-2">Trái Cây Khô</td>
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

export default ManangerCategories;