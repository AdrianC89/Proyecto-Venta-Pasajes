import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ListaPasajes from "./pages/ListaPasajes";
import CrearPasajes from "./pages/CrearPasajes";
import ActualizarPasajes from "./pages/ActualizarPasajes";
import Perfil from "./pages/Perfil";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/pasajes" element={<ListaPasajes />} />
              <Route path="/crearpasaje" element={<CrearPasajes />} />
              <Route path="/pasajes/:id" element={<ActualizarPasajes />} />
              <Route path="/profile" element={<Perfil />} />
            </Routes>
        
          <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
