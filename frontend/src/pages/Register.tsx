import { ButtomSubmit } from "../components/buttomSubmit";
import { Input } from "../components/input";

export const Register = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
        Crear cuenta
      </h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Input type="text" label="Nombre" />
            <Input type="text" label="Apellido" />
            <Input type="text" label="Dni" />
            <Input type="text" label="Email" />
            <Input type="text" label="Direccion" />
          </div>
          <div>
            <Input type="text" label="Usuario" />
            <Input type="text" label="Contraseña" />
            <Input type="text" label="Confirmar contraseña" />
          </div>
        </div>
        <ButtomSubmit name="Registrar" />
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="text-purple-600 hover:underline">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};
