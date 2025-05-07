import { useState } from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <header className="bg-purple-600 text-white p-4 px-6 flex w-full">
      <ul className="flex flex-wrap justify-between w-full items-center text-lg">
        <img src="./img/3135768.png" className="w-20" alt="Logo" />

        <li>
          <Link to="/" className="hover:underline">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/detail" className="hover:underline">
            Quienes somos
          </Link>
        </li>

        <li>
          <Link to="/volunteering" className="hover:underline">
            Voluntariado
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:underline">
            Contactanos
          </Link>
        </li>
        <li>
          <Link to="/register">Registrarme</Link>
        </li>
        <li>
          <Link to="/login">Iniciar sesion</Link>
        </li>
        <li className="">
          <Link
            to="/"
            className=""
            onMouseEnter={() => setMenu(true)}
            onMouseOut={() => setMenu(false)}
            onClick={handleClick}
          >
            Quiero adoptar
          </Link>

          <div
            className={`bg-purple-600 absolute shadow-md rounded transition-all duration-300 w-1/12 ${
              menu ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <li>
              <Link to="/detail">Gatos</Link>
            </li>
            <li>
              <Link to="/detail">Perros</Link>
            </li>
          </div>
        </li>
        <Link to="/donates">
          <li className="bg-yellow-400 px-7 py-4 rounded-full flex items-center">
            Donar
          </li>
        </Link>
      </ul>
    </header>
  );
};
