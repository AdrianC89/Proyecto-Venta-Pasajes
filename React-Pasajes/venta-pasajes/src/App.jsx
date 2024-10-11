import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TicketForm from './formulario.jsx';
import Footer from './footer.jsx';

import './App.css'

function App() {

  return (
    <Router>
      <div className='contenedorPrincipal'>
        <Routes>
          <Route path="/buscarpasajes" element={<TicketForm/>} />
          <Route path="/footer" element={<Footer/>} />
          {/*<div>
              <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>*/} 
        </Routes>
      </div>
    </Router>
  )
}

export default App
