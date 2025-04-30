export const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
          Crear cuenta
        </h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre completo
            </label>
            <input
              id="name"
              type="text"
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Introduce tu nombre completo"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre de usuario
            </label>
            <input
              id="username"
              type="text"
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Introduce tu nombre de usuario"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Introduce tu correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Introduce tu contraseña"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirmar contraseña
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="mt-2 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Confirma tu contraseña"
            />
          </div>
          <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
            Registrarme
          </button>
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
    </div>
  );
};
