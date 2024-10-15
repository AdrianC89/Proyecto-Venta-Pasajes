import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext'

import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'


function App() {
  return (
    <AuthProvider>
          <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/pasajes" element={<h1>Lista de Pasajes</h1>} />
        <Route path="/crearpasaje" element={<h1>Crear Pasajes</h1>} />
        <Route path="/pasajes/:id" element={<h1>Actualizar Pasaje</h1>} />
        <Route path="/profile" element={<h1>Perfil</h1>} />

      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}
export default App
