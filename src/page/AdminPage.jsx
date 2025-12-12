import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

const AdminPage = () => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    position: "",
  });

  const [members, setMembers] = useState([]);

  const fetchMembers = async () => {
    try {
      const response = await axios.get(API_URL);
      setMembers(response.data);
    } catch (error) {
      console.error("GET ERROR:", error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const deleteMember = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchMembers();
    } catch (error) {
      console.error("DELETE ERROR:", error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-20 ">
      <h1 className="text-5xl font-bold leading-snug">
        Generation Thailand <br />
        Home - Admin View
      </h1>

      {/* Buttons */}
      <div className="flex gap-6 mt-10">
        <Link to="/user">
          <button className="px-6 py-2 bg-white border border-gray-300 rounded shadow">
            User Home View
          </button>
        </Link>

        <Link to="/admin">
          <button className="px-6 py-2 bg-white border border-gray-300 rounded shadow">
            Admin Home View
          </button>
        </Link>
      </div>

      {/* Create User */}
      <div className="w-[800px] mt-12">
        <h2 className="text-lg font-semibold mb-4">Create User Here</h2>

        <form
          className="flex gap-4 items-center"
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const response = await axios.post(API_URL, form);
              console.log("PST SUCCESS:", response.data);
              fetchMembers();
              setForm({
                name: "",
                lastName: "",
                position: "",
              });
            } catch (error) {
              console.error("POST ERROR:", error);
            }
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded w-full"
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded w-full"
          />

          <input
            type="text"
            name="position"
            placeholder="Position"
            value={form.position}
            onChange={handleChange}
            className="border border-gray-300 px-3 py-2 rounded w-full"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded shadow"
          >
            Save
          </button>
        </form>
      </div>

      {/* Table */}
      <div className="w-[800px] mt-12">
        <h2 className="text-lg font-semibold mb-2">Table 1</h2>

        <table className="w-full border border-gray-300 border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Last Name</th>
              <th className="border border-gray-300 p-2">Position</th>
              <th className="border border-gray-300 p-2">Action</th>
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
                <td className="border border-gray-300 p-2 text-center">
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => deleteMember(member.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
