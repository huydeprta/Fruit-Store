
import { useEffect, useState } from "react";
import AddButton from "../../../components/Button/AddButton";
import UpdateButton from "../../../components/Button/UpdateButton";
import DeleteButton_square from "../../../components/Button/DeleteButton";
import CategoreisService from "../../../services/categories/categoriesService";
import AddForm from "../components/From/addForm";
import EditForm from "../components/From/editForm";
const ManangerCategories = () => {
  const [categories,setCategories] = useState([])
  const [editCategories,setEditCategory] = useState({})
  const [editDataCategories,setDataEditCategory] = useState("")


  const [formAdd, setFormAdd] = useState(false)
  const [formEdit, setFormEdit] = useState(false)
  const [nameProduct, setNameProduct] = useState("")
  const getAllCateories = async ()=>{
    const {data} = await CategoreisService.getAllCategories()
    setCategories(data);
    
 }
 useEffect(()=>{
   getAllCateories()
 },[])
  const postCategories = async () => {
    const data = {
      name: nameProduct
    }
    if (!data) {
      return
    }
    await CategoreisService.AddCategories(data)
    setNameProduct("")
    getAllCateories()
    setFormAdd(false)
  }

  const deleteCategory = async (id)=>{
    console.log(id);
     if(!id){
      return
     }
     await CategoreisService.DeleteCategories(id)
     getAllCateories()
  }

  const updateCategory = async () => {
    
    if (!editDataCategories) {
      return;
      
  }
    const data = {
      name:editDataCategories
    }
    
 
    await CategoreisService.UpdateCategory(editCategories?._id,data);
    getAllCateories()
};

  return (
    <>
      {formAdd && (
        <div className="fixed left-[45%] bg-[#fff] p-5 w-[500px] z-10">
          <AddForm
            onClick={()=>setFormAdd(false)}
            value={nameProduct}
            onSubmit={postCategories}
            onChange={(e) => setNameProduct(e.target.value)}
            nameClick="Thêm danh mục"
            titleForm="Thêm danh mục"
            placeholder="Nhập tên danh mục"
          />
        </div>
      )}

      {formEdit &&(
      <div className="fixed left-[45%] bg-[#fff] p-5 w-[500px] z-10">
           <EditForm 
    value={editDataCategories}
     onChange={(e)=>setDataEditCategory(e.target.value)}
    onClick={()=>updateCategory()}
    placeholder="Sửa tên danh mục"
  />
      </div>
      )}
  

      <div className="overflow-y-auto h-[640px] scrollbar-thin">
        <table className="w-full"  >
          <thead className="bg-gray-100 h-16">
            <tr>
              <th className="text-left px-4">STT</th>
              <th className="text-left px-4">Tên Danh Mục</th>
              <th className="text-left px-4">Sản Phẩm</th>
              <th className="pr-5 py-2  text-right" colSpan="10">
                <AddButton
                click={()=>setFormAdd(!formAdd)}
                  nameButton="Thêm Danh Mục"
                />
              </th>
            </tr>
          </thead>
          <tbody >
  {categories?.map((category,index)=>(
            <tr className="border-b border-gray-200" key={category._id}>
              <td className="text-left px-4 py-2">{index}</td>
              <td className="text-left px-4 py-2">{category?.name}</td>
              <td className="text-left px-4 py-2">{category?.Products.length === 0
              ? "Tạm thơi chưa có sp" : "sẽ thêm sau"}</td>
              <td className="px-4 py-2"></td>
              <td className="text-left py-2"></td>
              <td className="text-left py-2"></td>
              <td className="px-4 py-2">
                <div className="flex items-center justify-center">
                  <UpdateButton   clickUpdate={() => {
                        setFormEdit(true),
                        setEditCategory(category),
                        setDataEditCategory(category.name)
                      }} />
                  <DeleteButton_square clickDelete={()=>deleteCategory(category?._id)} />
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

export default ManangerCategories;