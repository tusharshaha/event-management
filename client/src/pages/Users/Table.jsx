import React from "react";
import axiosRequest from "../../utils/axios.service";

const Table = ({ data }) => {
    const handleMakeAdmin = async (email) => {
        event.preventDefault();
        console.log(email);
        try {
            const res = await axiosRequest.patch(`/user/control/${email}`, {
                role: "admin",
            });
            toast.success(res.data.message, { id: "user" });
        } catch (error) {
            toast.error(error.response.data.message, { id: "user" });
        }
    };

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Role
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Make Admin
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data?.map((item) => (
                                    <tr key={item._id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {item.firstName} {item.lastName}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {item.status}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.role}</td>
                                        <td>
                                            <button
                                                onClick={() => handleMakeAdmin(item.email)}
                                                className="px-6 py-4 whitespace-nowrap"
                                            >
                                                Make Admin
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
