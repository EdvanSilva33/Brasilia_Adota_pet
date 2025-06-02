import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/hero/Dog_cat.png';

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="hero" 
      style={{
        backgroundColor: '#FFCC00', // Amarelo vibrante
        padding: '60px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 d-flex flex-column justify-content-center text-left">
            <h1 
              className="display-4" 
              style={{ 
                fontWeight: 'bold', 
                color: '#fff',
                marginBottom: '20px',
                fontSize: '2.8rem'
              }}
            >
              Encontre seu Novo Melhor Amigo de Quatro Patas!
            </h1>
            <p 
              className="lead" 
              style={{ 
                color: '#fff',
                marginBottom: '30px',
                fontSize: '1.1rem'
              }}
            >
              Milhares de cães e gatos esperam por um lar amoroso. Adotar é um ato de amor que transforma vidas, a sua e a deles. Descubra como você pode fazer a diferença.
            </p>
            <div>
              <Link 
                to="/formulario-adocao" 
                className="btn btn-primary btn-lg mr-3 mb-1" 
                style={{ 
                  backgroundColor: '#007bff', 
                  borderColor: '#007bff',
                  marginRight: '15px',
                  marginBottom: '10px'
                }}
              >
                Quero Adotar!
              </Link>
              <Link 
                to="/como-ajudar" 
                className="btn btn-warning btn-lg" 
                style={{ 
                  backgroundColor: '#FFA500', 
                  borderColor: '#FFA500',
                  color: '#fff'
                }}
              >
                Como Ajudar
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 d-none d-md-block">
            <img 
              src={heroImage} 
              alt="Cachorro e gato juntos" 
              style={{
                maxWidth: '100%',
                height: 'auto',
                position: 'relative',
                zIndex: 2
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
