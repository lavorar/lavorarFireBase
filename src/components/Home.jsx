import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { authContext, useAuth } from "../context/authContext";

export function Home() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate("/");
  const handleLogout = async () => {
    await logout();
    navigate('/login');    
  };

  console.log(user);

  if (loading) return <h1>Loading...</h1>
  return (
    <div>
      <h1>welcomeeee {user.email}</h1>

      <button onClick={handleLogout}>logOut</button>
    </div>
  );
}
