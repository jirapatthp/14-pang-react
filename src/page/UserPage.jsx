import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

const UserPage = () => {
  const [members, setMembers] = useState([]);

  const fetchMembers = async () => {
    try {
      const response = await axios.get(API_URL);
      setMembers(response.data);
    } catch (error) {
      console.error("GET ERROR:", error);
    }};

    useEffect(() => {
      fetchMembers();
    }, []);

    return (
      <div className="flex flex-col items-center mt-20 ">
        <h1 className="text-5xl font-bold leading-snug">
          Generation Thailand <br />
          Home - User View
        </h1>
        <div className="flex gap-6 mt-14">
          <Link to="/user">
            <button className="px-6 py-3 bg-white border border-gray-300 rounded shadow hover:bg-gray-50">
              User Home View
            </button>
          </Link>
          <Link to="/admin">
            <button className="px-6 py-3 bg-white border border-gray-300 rounded shadow hover:bg-gray-50">
              Admin Home View
            </button>
          </Link>
        </div>

        {/* TABLE */}
        <table className="w-full border border-gray-300 border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Last Name</th>
              <th className="border border-gray-300 p-2">Position</th>
            </tr>
          </thead>

          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td className="border border-gray-300 p-2">{member.name}</td>
                <td className="border border-gray-300 p-2">
                  {member.lastName}
                </td>
                <td className="border border-gray-300 p-2">
                  {member.position}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  
};

export default UserPage;
