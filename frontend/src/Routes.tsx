import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Detail } from "./pages/Detail";
import { Volunteering } from "./pages/Volunteering";
import { Donates } from "./pages/Donates";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/volunteering" element={<Volunteering />} />
      <Route path="/donates" element={<Donates />} />
    </Routes>
  );
}
