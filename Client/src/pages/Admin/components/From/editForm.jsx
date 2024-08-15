const EditForm = (props) => {
     const { value, onChange, onClick ,placeholder,setFormEdit} = props;
     return (
         <div>
             <input 
                className="block border rounded-md p-2 w-full mb-3"
                 placeholder={placeholder}
                 type="text"
                 value={value}
                 onChange={onChange}
             />
             <button onClick={onClick} className="w-full bg-blue-500 text-[#fff] p-3 rounded-md">Cập nhật</button>
             <button onClick={()=>setFormEdit(false)} className="w-full bg-red-500 text-white p-3 rounded-md mt-2">
        Hủy
      </button>
         </div>
     );
 };
 
 export default EditForm;