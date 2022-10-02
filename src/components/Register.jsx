// componenter de refistro
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";

import { Alert } from "./Alert";

export function Register() {
  const [user, setUser] = useState({ email: "", password: "" });
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(user.email, user.password);
      navigate("/");
      setError("");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-email") {
        setError("Mensaje del servidor: mail o clave incorrecta");
      }
      if (error.code === "auth/user-not-found") {
        setError("Mensaje del servidor: Cuenta no existe");
      }

      // setError(error.message);
    }

    // console.log(user);
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        className="bg-white shadow-md rounded 
        px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="">email</label>
        <input
          type="email"
          name="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          placeholder="tuemail@dominio.com"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          placeholder="password"
        />
        <p className="my-4 text-sm flex justify-betwenn"></p>
        <button className="bg-blue-500 hover:bg-blue-800 text-white text-sm font-bold py-2 px-4 rounded mt-2">
          Registrar
        </button>
      </form>
      <p className="flex justify-between py-1 px-2">
        No tienes cuenta??
        <Link to={"/Login"} className="text-blue-500 ">
          Crear cuenta
        </Link>
      </p>
    </div>
  );
}
