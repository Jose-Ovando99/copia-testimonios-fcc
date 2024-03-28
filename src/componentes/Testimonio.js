import React from 'react';

function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' 
        src={require('../imagenes/testimonio-one.jpg')} 
        alt='Foto de One' />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Sujeto 1, One</p>
        <p className='cargo-testimonio'>Ingeniero de software</p>
        <p className='texto-testimonio'>Este texto lo voy a cambiar despues</p>
      </div>
    </div>
  );
}

export default Testimonio;