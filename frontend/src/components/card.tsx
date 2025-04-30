import { useState } from "react";

export interface CardHomePros {
  name: string;
  ages: number;
}

export const CardHome = ({ name }: CardHomePros) => {
  const [point, setPoint] = useState<boolean>(false);
  const pointMouseEnter = () => {
    setPoint(true);
  };
  const pointMouseEnd = () => {
    setPoint(false);
  };
  return (
    <div
      onPointerMove={pointMouseEnter}
      onPointerOut={pointMouseEnd}
      className="bg-white relative shadow-lg rounded-lg overflow-hidden hover:opacity-50 cursor-pointer"
    >
      <p
        className={`bg-gray-500 w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${point ? "z-50" : ""} `}
      >
        NOMBRE
      </p>
      <img
        src="./img/perrito.jpeg"
        alt={name}
        className="w-full h-80 object-cover relative"
      />
    </div>
  );
};
