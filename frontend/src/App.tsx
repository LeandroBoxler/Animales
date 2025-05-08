// src/App.tsx
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-300">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
