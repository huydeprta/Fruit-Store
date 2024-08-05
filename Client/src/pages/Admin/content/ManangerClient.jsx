
const ManagerClient = () => {
    return (
        <>
            <div className="flex-1">
                <table className="w-full">
                    <thead className="bg-gray-100 h-[50px]">
                        <tr>
                            <th className="text-left w-[150px] px-4">Tên</th>
                            <th className="text-left w-[150px]">Admin</th>
                            <th className="text-left w-[150px]">Trạng thái</th>
                            <th className="text-left w-[150px] pl-[50px]">Ngày tạo</th>
                        </tr>
                    </thead>
                    
                </table>
            </div>
        </>
    );
};

export default ManagerClient;