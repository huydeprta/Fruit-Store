import { useEffect, useState } from "react";
import AuthService from "../../../services/authService";
import { format } from 'date-fns';
import DeleteButton_square from "../../../components/Button/DeleteButton";
import CheckButton from "../../../components/Button/CheckButton";
const ManagerClient = () => {
    const [allUser,setAllUser] = useState([])
    const getAlluser = async ()=>{
         const User = await AuthService.GetallUser()
         console.log(User);
         
         setAllUser(User);
    }
    useEffect(()=>{
        getAlluser()
    },[])
    console.log(allUser);
    
    return (
        <>
            <div className="flex-1  undefine ">
                <table className=" w-full ">
                    <thead className="bg-[#FFFFFF] h-[50px]">
                        <tr >
                            <th></th>
                            <th className="text-left w-[150px]">Tên</th>
                            <th className="text-left w-[150px]">Admin</th>
                            <th className="text-left w-[150px]" >Trạng thái</th>
                            <th className="text-left w-[150px] pl-[50px]">Ngày tạo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUser && allUser.map((user, index) => (
                            <tr key={index}>
                                <td className="border-b-0 lg:w-6 before:hidden p-4">
                                    <div className="w-24 h-24 mx-auto lg:w-6 lg:h-6">
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Howell-Hand" alt="Howell Hand" className="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800" />
                                    </div>
                                </td>
                                <td data-label="Name" className="text-left">{user.email && user.email}</td>
                                <td data-label="Company">{user.admin && user.admin === true ? "Admin" : "User"}</td>
                                <td data-label="Status">
                                    {user.status && user.status === true ? (
                                        <span className="text-[#fff] bg-green-600 p-2 rounded-[10px] w-[130px] inline-block text-center">Đã xác thực</span>)
                                        : (<span className="text-[#fff] bg-red-600 rounded-[10px] p-2 w-[130px] inline-block text-center">
                                            Chưa xác thực
                                        </span>)}</td>

                                <td data-label="Created" className="lg:w-1 whitespace-nowrap pl-[50px]">
                                    <small className="text-gray-500 dark:text-slate-400"> {user.createdAt && format(new Date(user.createdAt), 'yyyy-MM-dd HH:mm:ss')}</small>
                                </td>
                                <td className="before:hidden lg:w-1 whitespace-nowrap">
                                    <div className="flex items-center justify-start lg:justify-end undefined -mb-3 flex-nowrap">
                                        <CheckButton  />
                                        {/* clickCheck={
                                            () => {
                                                getDetailUser(user._id)
                                                setShowDetailUser(true)
                                            }} */}
                                        <DeleteButton_square  />
                                        {/* clickDelete={() => { handleDelete(user._id) }} */}
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

export default ManagerClient;