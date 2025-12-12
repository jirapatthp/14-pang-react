import React from "react";

const Navbar = () => {
  const Links = [
    { id: "1", name: "Home", path: "/" },
    { id: "2", name: "Owner", path: "/owner" },
  ];
  return (
    <div className="border h-16 bg-fuchsia-50 flex justify-end items-center gap-4 px-4">
      {Links.map((item) => (
        <a key={item.id} href={item.path}>
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
