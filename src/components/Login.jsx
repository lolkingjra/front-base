import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const API_URL = import.meta.env.VITE_API_URL;

  const [form, setForm] = useState({ id: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
     const response = await fetch('http://localhost:3000/graduates',{
method:'POST',
headers:{'Content-Type':'application/json',},
body: JSON.stringify(form),
});

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        setError(data.error || "Error al iniciar sesión");
        return;
      }

      login(form, data.token);
      navigate("/");
    } catch (err) {
      console.error("Error al intentar iniciar sesión:", err);
      setError("Error de conexión. Intenta nuevamente.");
      setLoading(false);
    }
  };

const goToRegister = ()=>{
  navigate("/registerGraduate");
}

 /* return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">Iniciar sesión</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          name="id"
          placeholder="Cédula"
          value={form.id}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          type="submit"
          className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg w-full ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={loading}
        >
          {loading ? "Cargando..." : "Entrar"}
        </button>
        <button
          type="button"
          onClick={goToRegister}
          className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg w-full ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={loading}
        >
          {loading ? "Cargando..." : "Cambiar informacion"}
          
        </button>
      </form>
    </div>
  );
  */
 return(
<div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={null} alt="" />
        </div>

        <div className='bg-gray-800 flex flex-col justify-center'>
            <form onSubmit={handleLogin} className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>Iniciar sesión</h2>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Usuario</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Contraseña</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Recuerdame</p>
                    <p>olvidé contraseña</p>
                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Iniciar sesión</button>
                 <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Registrarse</button>
                
            </form>
        </div>
    </div>
 );
  
};

export default Login;
