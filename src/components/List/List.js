import React from "react";
import Loading from '../../assets/loading.svg'
function List({students, loading}){
    return (
        <div className="container mx-auto p-5">
            <table className="w-full">
                <thead className="">
                    <tr>
                        <th className="font-semibold p-y border-b-[1px] border-slate-400 text-[18px]">
                            #
                        </th>
                        <th className="font-semibold p-y border-b-[1px] border-slate-400 text-[18px]">
                            Firstname
                        </th>
                        <th className="font-semibold p-y border-b-[1px] border-slate-400 text-[18px]">
                            Lastname
                        </th>
                        <th className="font-semibold p-y border-b-[1px] border-slate-400 text-[18px]">
                            Group
                        </th>
                        <th className="font-semibold p-y border-b-[1px] border-slate-400 text-[18px]">
                            Does work?
                        </th>
                        <th className="font-semibold p-y border-b-[1px] border-slate-400 text-[18px]">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody> 
                    {loading ? (
                        <tr>
                            <td>
                                <img src={Loading} width={70} height={70} alt="Loading..." />
                            </td>
                        </tr>
                    ) : ( students.length > 0 && 
                        students.map((item, index) => (
                            <tr key={index} className="odd:bg-slate-300">
                                <td className="py-2 text-center">{item.firtName}</td>
                                <td className="py-2 text-center">{item.lastName}</td>
                                <td className="py-2 text-center">
                                    {item.groupId === "1" ? "REACT N1" : ""}
                                    {item.groupId === "2" ? "REACT N2" : ""}
                                    {item.groupId === "3" ? "REACT N3" : ""}
                                </td>
                                <td className="py-2 text-center">
                                    {item.doesWork ? "Ha" : "Yo'q"}
                                </td>
                                <td className="py-2 text-center justify-center space-x-3">
                                    <button className="py-2 flex item-center rounded-md text-white bg-yellow-500">
                                        Edit
                                    </button>
                                    <button className="py-2 flex item-center rounded-md text-white bg-red-500">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default List;