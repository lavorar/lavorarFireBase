// componenter de refistro
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export function Register() {
  const [user, setUser] = useState({ email: "", password: "" });
  const { signup } = useAuth();
  const navigate = useNavigate();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }

    // console.log(user);
  };

  return (
    //<div>Register</div>
    <form onSubmit={handleSubmit}>
      <label htmlFor=""></label>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="tuemail@dominio.com"
      />
      <label htmlFor=""></label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="password"
      />

      <button>Registrar</button>
    </form>
  );
}
