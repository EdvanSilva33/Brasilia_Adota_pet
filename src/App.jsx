import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AlertProvider } from './context/AlertContext';
import { AnimalsProvider } from './context/AnimalsContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ComoAjudarPage from './pages/ComoAjudarPage';
import FormularioAdocaoPage from './pages/FormularioAdocaoPage';
import ResgateGatinhoPage from './pages/ResgateGatinhoPage';
import EmailJSInit from './utils/EmailJSInit';
import ScrollToAnchor from './utils/ScrollToAnchor';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <Router>
      <AlertProvider>
        <AnimalsProvider>
          <EmailJSInit />
          <ScrollToAnchor />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/como-ajudar" element={<ComoAjudarPage />} />
            <Route path="/formulario-adocao" element={<FormularioAdocaoPage />} />
            <Route path="/resgate-gatinho" element={<ResgateGatinhoPage />} />
          </Routes>
          <Footer />
        </AnimalsProvider>
      </AlertProvider>
    </Router>
  );
}

export default App;
