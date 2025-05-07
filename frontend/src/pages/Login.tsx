import { ButtomSubmit } from "../components/buttomSubmit";
import { Input } from "../components/input";

export const Login = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
        Iniciar sesión
      </h2>
      <form onSubmit={(e) => e.preventDefault()} className="">
        <Input type="text" label="Nombre de usuario" />
        <Input type="password" label="Contraseña" />
        <ButtomSubmit name="Iniciar sesion" />
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          ¿No tienes cuenta?{" "}
          <a href="/register" className="text-purple-600 hover:underline">
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
};
