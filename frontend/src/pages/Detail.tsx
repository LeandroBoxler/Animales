import { ImagesCards } from "../components/imagesCards";
import { PageCard } from "../components/pageCard";

export const Detail = () => {
  return (
    <PageCard>
      <div className="flex flex-wrap">
        <div className="w-1/2">
          <ImagesCards name="Ver mas" />
        </div>
        <div className="text-center w-1/2">
          <h1 className="text-center text-2xl">NOMBRE</h1>
          <p className="text-2xl">EDAD: 14</p>
          <p className="text-2xl">HISTORIA:</p>
          <p>Descripcion:</p>
          <p>Tamaño:</p>
        </div>
      </div>
    </PageCard>
  );
};
