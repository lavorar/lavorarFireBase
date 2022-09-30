// componenter de refistro
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

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
      setError('');
    } catch (error) {
      console.log(error.code);
      if (error.code === 'auth/invalid-email'){
        setError('Mensaje del servidor: mail o clave incorrecta')
        document.getElementByName('password').style.backgroundColor = 'red';
      }

      // setError(error.message);
    }

    // console.log(user);
  };

  return (
    <div>
      {error && <p>{error}</p> }
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
    </div>
  );
}
