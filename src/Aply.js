import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que Bootstrap se aplique correctamente
import Real from './Sidebar'; // Importa el componente Real.js
import Login from './Login';


function App() {
  const navigate = useNavigate(); 

 
  const handleRealClick = () => {
    navigate('/sidebar');
  };



  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <h2>Profesor: Ricardo</h2>
        <h2>Alumno: Javier Audante Jesus</h2>
        <h1>Curso: Aplicación Móvil</h1>
        
        {/* Botones para redirigir a diferentes componentes */}
        <Button variant="primary" onClick={handleRealClick}>
          Ir a Menu
        </Button>
       
        <Button variant="primary" onClick={handleLoginClick}>
          Ir a Formulario
        </Button>
      </header>
    </div>
  );
}

// Componente envolvente con Router para manejar las rutas
function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sidebar" element={<Real />} /> {/* Ruta para Real.js */}
   
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;


