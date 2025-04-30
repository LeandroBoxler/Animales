// src/App.tsx
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes";
import { Header } from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="py-8">
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
