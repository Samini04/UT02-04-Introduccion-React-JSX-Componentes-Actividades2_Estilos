import Contenedor from "./Contenedor";
import Interprete from "./Interprete";
import peliculas from "./peliculas";

function App() {
  return (
    <Contenedor>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-2">
          Intérpretes
        </h1>
        <p className="text-gray-500">
          Listado de intérpretes disponibles:
        </p>
      </div>

      {/* Rejilla de intérpretes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {peliculas.map((pelicula) =>
          pelicula.actores.map((actor) => (
            <Interprete
              key={actor.nombre}
              nombre={actor.nombre}
              foto={actor.imagen}
            >
              {actor.biografia}
            </Interprete>
          ))
        )}
      </div>
    </Contenedor>
  );
}

export default App;
