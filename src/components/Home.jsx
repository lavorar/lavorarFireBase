import Card from "./layout/elements/Card";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { authContext, useAuth } from "../context/authContext";
import HomeSearchBar from "./layout/elements/HomeSearchBar";

export function Home() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate("/");

  console.log(user);

  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      console.log(error);
    }
    navigate("/");
  };

  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="flex flex-col  items-center w-full p-5 bg-gray-50 dark:bg-gray-700 text-black">      
      <HomeSearchBar />
      <Card />
    </div>
  );
}
