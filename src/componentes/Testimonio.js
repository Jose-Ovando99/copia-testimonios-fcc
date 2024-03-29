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
        <p className='texto-testimonio'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at dolor ullamcorper nibh porta ornare sit amet non nunc. Donec ultricies interdum lacus gravida ornare. Phasellus aliquet rutrum sagittis. Vestibulum et augue vel velit congue commodo. Donec blandit urna ut vestibulum viverra. Mauris condimentum, ante nec euismod rutrum, risus urna convallis odio, et maximus diam metus in nisi.</p>
      </div>
    </div>
  );
}

export default Testimonio;