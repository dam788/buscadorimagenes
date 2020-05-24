import React,{useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import ListaImagenes from './components/ListaImagenes';

function App() {

  // state de la app
  const [busqueda, guardarBusqueda] = useState('');
  // state para guardar imagenes
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaactual, guardarPaginaActual] = useState(1);
  const [totalpaginas, guardarTotalPaginas] = useState(1);

  // cuando recibamos termino de busqueda en el componente app usamos useEffect()
  useEffect(() => {

    const consultaAPI = async () => {

          // para que no se ejecute el useffect sin realizar la busqueda a la primera
    if(busqueda==="") return

      const porPagina = 30;
      const key = '16723052-ecb7606df848467d9b667a469';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${porPagina}&page=${paginaactual}`;

      const res = await fetch(url);
      const resultado = await res.json();

      guardarImagenes(resultado.hits);

      // calcular el total de las paginas
      const CalcPaginas = Math.ceil(resultado.totalHits / porPagina);
      guardarTotalPaginas(CalcPaginas);

      //  mover la pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: 'smooth'})

    }
    consultaAPI();

  }, [busqueda,paginaactual])

  // pagina anteorior
  const paginaAnterior = () => {

    let nuevaPagActual = paginaactual - 1;

    if (nuevaPagActual === 0) return;

    guardarPaginaActual(nuevaPagActual)

  }

  // pagina anteorior
  const paginaSiguiente = () => {

    let nuevaPagActual = paginaactual + 1;

    if (nuevaPagActual > totalpaginas) return;

    guardarPaginaActual(nuevaPagActual)

  }




  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes</p>
        <Formulario
          guardarBusqueda={guardarBusqueda}
        />
      </div>
      <div className="row justify-content-center">
        <ListaImagenes
          imagenes={imagenes}
        />

        {(paginaactual===1) ? null : (

          <button
          type="button"
          className="btn btn-danger btn-lg mr-1"
          onClick={paginaAnterior}
          >
            &laquo; Anterior
          </button>

        )}

        {(paginaactual === totalpaginas) ? null : (

          <button
          type="button"
          className="btn btn-danger btn-lg"
          onClick={paginaSiguiente}
          >
            Siguiente &raquo;
          </button>

        )}

      </div>
    </div>
  );
}

export default App;
