// componente logion
// componenter de registro
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      navigate("/");
      setError("");
    } catch (error) {
      // console.log(error.code);
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
  
  
  const handleGoogleSignin = async () =>{
    await loginWithGoogle()
    .then(function(response ){ 
      console.log('respons')
    })
    .cath(function(error){
      console.log('error')
    })
    navigate('/')
  } 

  return (
    <div>
      {error && <p>{error}</p>}
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

        <button>Login</button>
      </form>

      <button onClick={handleGoogleSignin}>Login con google</button>
    </div>
  );
}

