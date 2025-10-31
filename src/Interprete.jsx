function Interprete(props) {
  const {foto, nombre} = props;

  return (
    <div className="bg-white shadow-md  overflow-hidden flex flex-col items-center text-left hover:shadow-lg transition-shadow duration-300 w-80 p-5 rounded-2xl">
      <img className="w-80 h-90 object-cover rounded-2xl " 
      src={foto} alt={nombre}/>
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2 pt-3">
          {nombre}</h2>
        <p >{props.children}</p>
      </div>
    </div>
  )
}

export default Interprete