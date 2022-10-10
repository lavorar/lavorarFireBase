// import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import Header from "./components/layout/header/Header";
import { Login } from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Register } from "./components/Register";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <>
      <div className="flex justify-center w-auto md:mx-40 mx-[0.15rem] mt-28 md:mt-32 md:mb-96 p-4 rounded-lg bg-gray-50  dark:bg-gray-600  h-5/6 text-black ">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
