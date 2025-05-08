import { ButtomSubmit } from "./buttomSubmit";
import { Input } from "./input";

export const Footer = () => {
  return (
    <div className="bg-purple-950 flex flex-wrap text-white p-5 w-full justify-between">
      <div className="flex gap-5 flex-col">
        <p>La direccion del local</p>
        <p>+54 1122334456677</p>
        <p>correo@gmail.com</p>
      </div>
      <div className="">
        <div className="flex w-full flex-wrap items-end gap-3">
          <Input
            type="email"
            label="Suscribete"
            placeHolder="correo@gmail.com"
            className="w-1/2"
          />
          <ButtomSubmit className="lg:w-1/4" name="Suscribirse" />
        </div>
        <div>logos</div>
      </div>
    </div>
  );
};
