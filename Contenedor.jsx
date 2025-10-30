function Contenedor({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      {children}
    </div>
  );
}

export default Contenedor;
