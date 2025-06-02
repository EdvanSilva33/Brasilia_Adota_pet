import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="sobre" className="info-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 info-text">
            <h2>Nossa Paixão: Cuidar e Encontrar Lares Felizes</h2>
            <p>Somos dedicados a resgatar, cuidar e encontrar famílias responsáveis para animais abandonados. Conheça nosso trabalho e junte-se a nós nesta causa que salva vidas e espalha amor.</p>
            <Link to="/resgate-gatinho" className="btn btn-secondary">Saiba Mais Sobre Resgates</Link>
          </div>
          <div className="col-md-6 info-image text-center">
            <img 
              src={require('../../assets/images/Equipe-cuidando.jpg')} 
              alt="Equipe cuidando de animais resgatados" 
              className="img-fluid rounded" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
