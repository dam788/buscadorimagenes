import React, { useState } from 'react';
import Error from './Error'


const Formulario = ({guardarBusqueda}) => {

  // state de lo que el usuario busca
  const [termino, setTermino] = useState('');
  const [error, setError] = useState(false);

  const buscarImagenes = e => {

    e.preventDefault();

    // validar
    if (termino.trim() === "") {
      return setError(true);
    }
    setError(false);

    // enviar termino de busqueda a componente principal
    guardarBusqueda(termino);


  }


  return (
    <form
      onSubmit={buscarImagenes}
    >
      <div className="row">
        <div className="form-gorup col-md-8">
          <input
            type="text"
            name=""
            placeholder="Busca una Imagen. Ej: Café"
            className="form-control form-control-lg"
            onChange={e => setTermino(e.target.value)}
          />
        </div>
        <div className="form-gorup col-md-4">
          <input
            type="submit"
            name=""
            value="Buscar"
            placeholder="Busca una Imagen. Ej: Café"
            className="btn btn-lg btn-danger btn-block"
          />
        </div>
      </div>
      {error ? <Error mensaje="Agrega un término de Busqueda"/> : null}
    </form>
   );
}

export default Formulario;