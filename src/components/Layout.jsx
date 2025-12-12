import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const getTitleByPathName = (pathname) => {
  switch (pathname) {
    case "/":
      return "React - Assessment";
    case "/user":
      return "Home - User View";
    case "/admin":
      return "Home - Admin View";
  }
};

export default function Layout() {
  const { pathname } = useLocation();
  const title = getTitleByPathName(pathname);
  const showHeader = pathname !== "/owner";

  return (
    <div>
      <Navbar />
      <div>
        {showHeader && (
          <h1 className="text-5xl font-bold leading-snug text-center my-8">
            Generation Thailand <br />
            {title}
          </h1>
        )}
        <Outlet />
      </div>
    </div>
  );
}
