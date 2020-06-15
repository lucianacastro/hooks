import React, { useState } from 'react';
import './Form.css';
import { Cat } from 'react-kawaii'


const Form = () => {

  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    telefono: ''
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    console.log('Enviando datos...' + datos.nombre + '' + datos.apellido);
  };

  return (
    <div className='form-container'>
      <Cat size={320} mood="excited" color="#596881"/>
      <form onSubmit={sendData}>
        <input
          type="text"
          placeholder="Nombre"
          className="form-input"
          onChange={handleInputChange}
          name="nombre"
          ></input>
        <input
          type="text"
          placeholder="Apellido"
          className="form-input"
          onChange={handleInputChange}
          name="apellido"
        ></input>
        <input
          type="number"
          placeholder="Telefono"
          className="form-input"
          onChange={handleInputChange}
          name="telefono"
        ></input>
        <input
          className="form-input submit"
          type="submit"
          value="Submit"
        />
      </form>
  </div>
  )
};

export default Form;

