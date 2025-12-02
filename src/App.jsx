import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Rutas from './pages/Rutas'
import Creditos from './pages/Creditos'
import ListaRutas from './pages/ListaRutas'
import { FaGithub } from "react-icons/fa";
import Ruta from './pages/Ruta'



function App() {

  return (
    <>
      <header>
        <nav className="nav-superior">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rutas">Rutas</Link></li>
            <li><Link to="/lista-rutas">Lista de Rutas</Link></li>

            <li><Link to="/creditos">Créditos</Link></li>
          </ul>

        </nav>

      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rutas" element={<Rutas />}></Route>
          <Route path="/lista-rutas" element={<ListaRutas />}></Route>
          <Route path="/ruta/:id" element={<Ruta />}></Route>
          <Route path="/creditos" element={<Creditos />}></Route>
        </Routes>
      </main>


      <footer>
        <p> &copy; 2025 Arturo López - Vicálvaro
          <a href="https://github.com/arzurlopez"> <FaGithub /> </a>
        </p>
      </footer>

    </>
  )
}

export default App
