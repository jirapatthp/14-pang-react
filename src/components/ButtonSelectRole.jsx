import React from "react";
import { Link } from "react-router-dom";

const URL = [
  {
    id: "1",
    title: "User Home View",
    path: "/user",
  },
  {
    id: "2",
    title: "Admin Home View",
    path: "/admin",
  },
];

const ButtonSelectRole = () => {
  return (
    <div className="flex gap-6">
      {URL.map((item) => (
        <Link key={item.id} to={item.path}>
          <button className="px-6 py-3 bg-white border border-gray-300 rounded shadow hover:bg-gray-50 hover:cursor-pointer">
            {item.title}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ButtonSelectRole;
