export const Donates = () => {
  return (
    <div className="p-5">
      <h1 className="w-full text-5xl">Donaciones</h1>
      <div className="grid grid-cols-3 text-center">
        <div className="bg-white p-4 rounded-lg shadow-lg m-6 hover:m-5 cursor-pointer border border-gray-200">
          <img src="/img/perrito4.jpg" alt="" />
          <p className="">Dinero</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg m-6  hover:m-5 cursor-pointer border-gray-200">
          <img src="/img/perrito4.jpg" alt="" />
          <p>Comida</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg m-6 hover:m-5 cursor-pointer border-gray-200">
          <img src="/img/perrito4.jpg" alt="" />
          <p>Medicamentos</p>
        </div>
      </div>
    </div>
  );
};
