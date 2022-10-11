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
      <div className="flex justify-center w-auto md:mx-40  mt-16 md:mt-24 md:mb-10 p-4 rounded-lg bg-gray-50 min-h-screen dark:bg-gray-800  h-auto   text-black ">
        <AuthProvider>          
          <Routes>
            <Route
              path="/"
              element={                
                  <Home />                
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
      </div>
    </>
    
  );
}

export default App;
