function Interprete({ foto, nombre, children }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 overflow-hidden">
      <img
        src={foto}
        alt={`Foto de ${nombre}`}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 text-left">
        <h2 className="text-lg font-bold text-gray-800">{nombre}</h2>
        <p className="text-gray-600 text-sm">{children}</p>
      </div>
    </div>
  );
}

export default Interprete;
