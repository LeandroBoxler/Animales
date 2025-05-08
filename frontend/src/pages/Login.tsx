import { ButtomSubmit } from "../components/buttomSubmit";
import { Input } from "../components/input";
import { PageCard } from "../components/pageCard";
import { PageMain } from "../components/pageMain";

export const Login = () => {
  return (
    <PageMain className="flex justify-center items-center ">
      <PageCard className="">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
          Iniciar sesión
        </h2>
        <form onSubmit={(e) => e.preventDefault()} className="">
          <Input type="text" label="Nombre de usuario" />
          <Input type="password" label="Contraseña" />
          <ButtomSubmit className="" name="Iniciar sesion" />
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            ¿No tienes cuenta?{" "}
            <a href="/register" className="text-purple-600 hover:underline">
              Regístrate
            </a>
          </p>
        </div>
      </PageCard>
    </PageMain>
  );
};
