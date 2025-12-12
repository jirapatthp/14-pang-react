import React from "react";
import { IoReloadSharp } from "react-icons/io5";

const Table = ({
  members,
  isAdmin = false,
  handleDelete,
  deletingId = null,
}) => {
  return (
    <div>
      <table className="w-full border border-gray-300 border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Last Name</th>
            <th className="border border-gray-300 p-2">Position</th>
            {isAdmin && <th className="border border-gray-300 p-2">Action</th>}
          </tr>
        </thead>

        <tbody>
          {members.map((member) => {
            const isDeleteTing = deletingId === member.id;
            return (
              <tr key={member.id}>
                <td className="border border-gray-300 p-2">{member.name}</td>
                <td className="border border-gray-300 p-2">
                  {member.lastName}
                </td>
                <td className="border border-gray-300 p-2">
                  {member.position}
                </td>
                {isAdmin && (
                  <td className="border border-gray-300 p-2 text-center">
                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => handleDelete?.(member.id)}
                    >
                      {isDeleteTing ? (
                        <IoReloadSharp className="animate-spin" />
                      ) : (
                        "delete"
                      )}
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
