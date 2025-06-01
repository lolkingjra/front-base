import { counter } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from'react-bootstrap/Container';
const RegisterGraduate=()=>{
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
const handleSubmit= (e)=>{
e.preventDefault();
console.log('datos enviados: ',graduate,counter+1);

}
return(

<Container className="mt-4">
  <h2>Registro de Graduado</h2>
<Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nombre completo</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su nombre completo"
        name = "name"
        value={graduate.name}
        onChange={handleChange} />
        <Form.Text className="text-muted">
          No se  compartirá con externos su correo.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="id">
        <Form.Label>Cedula ó identificación</Form.Label>
        <Form.Control type="text" placeholder=" ingrese su Identificación" 
        name="id"
        value={graduate.id}
        onChange={handleChange}
        />
      </Form.Group>

<Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="email@ejemplo.com"
            name="email"
            value={graduate.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="tel"
            placeholder="123456789"
            name="phone"
            value={graduate.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Dirección"
            name="address"
            value={graduate.address}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="carreer">
          <Form.Label>Carrera cursada</Form.Label>
          <Form.Control
            type="text"
            placeholder="Carrera"
            name="carreer"
            value={graduate.carreer}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="graduatedYear">
          <Form.Label>Año de graduación</Form.Label>
          <Form.Control
            type="number"
            placeholder="2023"
            name="graduatedYear"
            value={graduate.graduatedYear}
            onChange={handleChange}
          />
        </Form.Group>
     
      
      <Button variant="primary" type="submit">
        Registrar graduado
      </Button>
    </Form>
</Container>


);
};
export default RegisterGraduate;