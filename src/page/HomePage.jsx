import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center mt-20 ">
      <h1 className="text-5xl font-bold leading-snug">
        Generation Thailand <br />
        React - Assessment
      </h1>
      <div className="flex gap-6 mt-14">
        <Link to="/user">
          <button className="px-6 py-3 bg-white border border-gray-300 rounded shadow hover:bg-gray-50">User Home View</button>
        </Link>
        <Link to="/admin">
          <button className="px-6 py-3 bg-white border border-gray-300 rounded shadow hover:bg-gray-50">Admin Home View</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
