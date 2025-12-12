const Navbar = () => {
  const Links = [
    { id: "1", name: "Home", path: "/" },
    { id: "2", name: "Owner", path: "/owner" },
  ];
  return (
    <div className="text-xl font-black  border h-16 bg-fuchsia-50 flex justify-end items-center gap-8 px-8">
      {Links.map((item) => (
        <a key={item.id} href={item.path}>
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
