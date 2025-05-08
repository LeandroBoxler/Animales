import { ButtomSubmit } from "../components/buttomSubmit";
import { PageCard } from "../components/pageCard";

export const Volunteering = () => {
  return (
    <div className="p-4">
      <h1 className="text-5xl w-full mb-5">Voluntareado</h1>
      <PageCard className="mb-5">
        <h1 className="text-4xl mb-5">¿Que hacemos?</h1>

        <p>
          Resumen 28/04: Turno Mañana: se realizaron tareas de rastrillaje: los
          jardines, sector de juegos, frente de vestuario, se junto todo el
          rastrillado alrededor de la cancha (Jaula). Se baldeo el comedor , se
          limpio los vestuarios. Turno Tarde: Se realizaron tareas de limpieza y
          mantenimiento, Se soldó uno de los arcos de la cancha del playon. Se
          sigue soldando el poton principal, se cambiaron luces en los
          vestuarios, se presentaron agentes de ambiente. 29/04: Turno Mañana:
          Se realizaron tareas de limpieza, Rastrillaje de jardines, calle
          interna, se barrio y se rastrillo el sector de plaza y sectores de la
          cancha, se recoleto todo lo barrido y la basura del predio. Turno
          Tarde: Se presentó personal de obra publica para tomar medidas al
          container de Anses, Denis Bloin. Se realizaron tareas de limpieza y
          mantenimiento. 30/04: Turno mañana: Se realizaron tareas de limpieza,
          Barrido de la calle interna, sector de juegos, se rastrillaron
          jardines y alrededores de la cancha. Turno Tarde: Se realizaron tareas
          de limpieza y mantenimiento. 01/05: Dia del trabajador. 02/05: SDF: En
          el dia de la fecha se realizaron tareas de limpieza general, Se sacó
          tiera para rellenar la cancha. Se cierra el parque a las 20hs. 03/05:
          SDF: En el dia de la fecha se realizaron tareas de limpieza,
          rastrillaje del parque, limpieza de vestuario, galerías y pasillos. Se
          ceró a las 20hs. 04/05: En el dia de la fecha se realizaron tareas de
          limpieza del parque, baldeo de galería y pasillos, baldeo de comedor,
          se hacen canteros y se remueven las plantas. Se cierra el parque a las
          21hs
        </p>
      </PageCard>
      <PageCard>
        <h1 className="text-4xl">Requisitos</h1>
        <ul>
          <li></li>
        </ul>
        <ButtomSubmit name="Registrarme" className="lg:w-[20%]" />
      </PageCard>
    </div>
  );
};
