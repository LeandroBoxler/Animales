import { useState } from "react";

export interface CardHomePros {
  name: string;
}

export const ImagesCards = ({ name }: CardHomePros) => {
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
      className=" bg-white relative shadow-lg rounded overflow-hidden hover:opacity-70 cursor-pointer text-[2rem]"
    >
      <p
        className={`bg-gray-500 w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${point ? "z-50" : ""} `}
      >
        {name}
      </p>
      <img
        src="./img/perrito.jpeg"
        alt={name}
        className="w-full object-cover relative"
      />
    </div>
  );
};
