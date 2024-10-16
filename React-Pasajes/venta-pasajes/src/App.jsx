import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext'

import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import ListaPasajes from "./pages/ListaPasajes";
import CrearPasajes from "./pages/CrearPasajes";
import ActualizarPasajes from "./pages/ActualizarPasajes";
import Perfil from "./pages/Perfil";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <AuthProvider>
          <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

       <Route element ={<ProtectedRoute />}>
          <Route path="/pasajes" element={<ListaPasajes />} />
          <Route path="/crearpasaje" element={<CrearPasajes/>} />
          <Route path="/pasajes/:id" element={<ActualizarPasajes />} />
          <Route path="/profile" element={<Perfil />} />
       </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}
export default App
