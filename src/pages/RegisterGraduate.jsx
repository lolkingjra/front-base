import { counter } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from'react-bootstrap/Container';

const RegisterGraduate=()=>{
  const [editingId, setEditingId] = useState(null);
const[graduate,setGraduate]= useState({
    name:'',
    id:'',
    email:'',
    phone:'',
    address:'',
    carreer:'',
    graduatedYear:'',
    documents:'',
})
//seteo del graduado
const handleChange= (e) => {
  setGraduate({
    ...graduate,[e.target.name]:e.target.value,//elegir ... todo los campos y hacerlo tipo json clave valor
  });
};
//envio del form y leer desde el useState
const handleSubmit= async(e)=>{
e.preventDefault();

try{
  const response = await fetch('http://localhost:3000/graduates',{
method:'POST',
headers:{'Content-Type':'application/json',},
body: JSON.stringify(graduate),

});
}
catch (error) {
  console.log("error en la peticion al backend",error);
  
}
};

 const handleEdit = (graduate) => {
    setGraduate({ ...graduate, id: graduate.id });
    setEditingId(graduate.name);
  };


  const inputClasses = "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
 

  const labelClasses = "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400";

  return (
    <div className="mt-4 px-4"> 
      <h2 className="text-2xl font-bold mb-6 text-center text-bg-red-900 dark:text-bg bg-red-400">Registro de Graduado</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-800 dark:bg-gray-900 p-8 rounded-lg shadow-md"> {/* Ajustado max-w-lg para más espacio */}
        
        {/* Nombre completo */}
        <div className="mb-5">
          <label htmlFor="name" className={labelClasses}>Nombre completo</label>
          <input
            type="text"
            id="name"
            name="name"
            value={graduate.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Ingrese su nombre completo"
            required
          />
         
        </div>

        {/* Cedula ó identificación */}
        <div className="mb-5">
          <label htmlFor="id" className={labelClasses}>Cédula ó identificación</label>
          <input
            type="text"
            id="id"
            name="id"
            value={graduate.id}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Ingrese su Identificación"
            required
          />
        </div>

        {/* Correo electrónico */}
        <div className="mb-5">
          <label htmlFor="email" className={labelClasses}>Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={graduate.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="email@ejemplo.com"
            required
          />
           <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            No se compartirá con externos su correo.
          </p>
        </div>

        {/* Teléfono */}
        <div className="mb-5">
          <label htmlFor="phone" className={labelClasses}>Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={graduate.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="123456789"
            required
          />
        </div>

        {/* Dirección */}
        <div className="mb-5">
          <label htmlFor="address" className={labelClasses}>Dirección</label>
          <input
            type="text"
            id="address"
            name="address"
            value={graduate.address}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Dirección"
            required
          />
        </div>

        {/* Carrera cursada */}
        <div className="mb-5">
          <label htmlFor="carreer" className={labelClasses}>Carrera cursada</label>
          <input
            type="text"
            id="carreer"
            name="carreer"
            value={graduate.carreer}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Carrera"
            required
          />
        </div>

        {/* Año de graduación */}
        <div className="mb-5">
          <label htmlFor="graduatedYear" className={labelClasses}>Año de graduación</label>
          <input
            type="number"
            id="graduatedYear"
            name="graduatedYear"
            value={graduate.graduatedYear}
            onChange={handleChange}
            className={inputClasses}
            placeholder="2023"
            min="1900" // Buena práctica
            max={new Date().getFullYear()} // Buena práctica
            required
          />
        </div>

        {/* Adjuntar documentos */}
        <div className="mb-5">
          <label htmlFor="documents" className={labelClasses}>Adjuntar documentos (título, cédula, etc.)</label>
          <input
            type="file"
            id="documents"
            name="documents"
            // El value de un input type="file" no se controla directamente en React de la misma forma.
            // Se maneja a través del onChange y el objeto 'files'.
            // value={graduate.documents} // Esto no funciona bien para file inputs
            onChange={handleChange}
            className={`${inputClasses} file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-600 dark:file:text-gray-300 dark:hover:file:bg-gray-500`}
            // 'required' para file puede ser opcional dependiendo de tu lógica
          />
        </div>

      <Button variant="primary" type="submit">
        Registrar graduado
      </Button>
      <Button variant="primary" type="submit"
       
      onClick={() => handleEdit(graduate)}
        className="bg-green-700 hover:underline"
      >
       Actualizar informacion
      </Button>
    </form>
    </div>
);
};

export default RegisterGraduate;