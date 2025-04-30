import { useState } from "react";

export const Detail = () => {
  const images = [
    "./img/perrito.jpeg",
    "./img/perrito2.jpg",
    "./img/perrito3.jpg",
    "./img/perrito4.jpg",
  ];
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="mx-2 p-2 bg-white shadow-lg rounded-lg">
      <div className="flex gap-4 justify-center">
        <div className=" flex justify-center items-center">
          <img
            src={mainImage}
            alt="Imagen principal"
            className="max-w-xl h-auto object-contain rounded"
          />
        </div>

        <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px]">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Miniatura ${index + 1}`}
              className="w-24 h-24 object-cover rounded cursor-pointer hover:opacity-70 transition"
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <h1 className="text-center text-2xl">NOMBRE</h1>
        <p className="text-2xl">EDAD: 14</p>
        <p className="text-2xl">HISTORIA:</p>
        <p>Descripcion:</p>
        <p>Tamaño:</p>
      </div>
    </div>
  );
};
