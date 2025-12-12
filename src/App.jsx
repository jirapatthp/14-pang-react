import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./page/HomePage";
import UserPage from "./page/UserPage";
import AdminPage from "./page/AdminPage";
import OwnerPage from "./page/OwnerPage";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

export default function App() {
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

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserPage members={members} />} />
          <Route
            path="/admin"
            element={
              <AdminPage
                members={members}
                setMembers={setMembers}
                fetchMembers={fetchMembers}
              />
            }
          />
          <Route path="/owner" element={<OwnerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
