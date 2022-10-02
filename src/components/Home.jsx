import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { authContext, useAuth } from "../context/authContext";

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
    navigate("/login");
  };

  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white rounded shadow-md px-8 pt-6 pb-8">
        <h1 className="text-x1 mb-4">
          welcomeeee {user.displayName || user.email}
        </h1>
        <button
          className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-2"
          onClick={handleLogout}
        >
          logOut
        </button>
      </div>
    </div>
  );
}
