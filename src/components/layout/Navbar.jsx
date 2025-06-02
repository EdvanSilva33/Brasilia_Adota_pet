import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAnimals } from '../../context/AnimalsContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { searchAnimals } = useAnimals();
  
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    searchAnimals(query);
    
    // Navegar para a página inicial e depois rolar até os resultados da busca
    navigate('/');
    
    // Aguardar a navegação e renderização dos resultados antes de rolar
    setTimeout(() => {
      const searchResultsElement = document.getElementById('search-results');
      if (searchResultsElement) {
        searchResultsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  // Função para lidar com a navegação para âncoras
  const handleAnchorNavigation = (e, anchor) => {
    e.preventDefault();
    
    // Se já estiver na página inicial, apenas role para a âncora
    if (window.location.pathname === '/') {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Se estiver em outra página, navegue para a página inicial com a âncora
      navigate('/');
      
      // Aguardar a navegação antes de rolar
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">{ /*Navbar com fundo transparente**/}
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img 
              src={require('../../assets/images/logo.png')} 
              alt="Logo Patinha Adote um Amigo" 
              style={{ height: '30px', marginRight: '10px' }} 
            />
           
          </Link>
          <button 
            className="navbar-toggler " 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="/#inicio" 
                  onClick={(e) => handleAnchorNavigation(e, 'inicio')}
                >
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="/#sobre" 
                  onClick={(e) => handleAnchorNavigation(e, 'sobre')}
                >
                  Sobre Nós
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/como-ajudar">Como Ajudar</Link>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="/#contato" 
                  onClick={(e) => handleAnchorNavigation(e, 'contato')}
                >
                  Contato
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-success ml-2 text-white" to="/formulario-adocao">Quero Adotar!</Link>
              </li>
            </ul>
            <form className="form-inline ml-2" onSubmit={handleSearch}>
              <input 
                className="form-control mr-sm-2" 
                type="search" 
                name="query" 
                placeholder="Buscar animal..." 
                aria-label="Search" 
              />
              <button className="btn btn-success  y-2 my-sm-0" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
