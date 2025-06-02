import React, { useState } from 'react';
import AlertMessage from '../components/layout/AlertMessage';

const ComoAjudarPage = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const showSlides = (n) => {
    let newIndex = n;
    if (n > 3) newIndex = 1;
    if (n < 1) newIndex = 3;
    setSlideIndex(newIndex);
  };

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  return (
    <main className="content-container">
      <AlertMessage />
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Como Você Pode Ajudar Sem Precisar Adotar</h1>

      <div className="slideshow-container">
        <div className="mySlides" style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
          <img 
            src={require('../assets/images/placeholder_ajuda1.jpg')} 
            alt="Forma de ajudar 1: Lar temporário"
            style={{ width: '100%', maxHeight: '450px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }}
          />
          <div className="slide-text-content">
            <h3>1. Seja um Lar Temporário Acolhedor</h3>
            <p>Oferecer um lar temporário é uma das formas mais impactantes de ajudar. Muitos animais resgatados precisam de um ambiente seguro e tranquilo para se recuperarem física e emocionalmente antes de encontrarem um lar definitivo. Como lar temporário, você oferece cuidados diários, socialização e muito amor, preparando o pet para a adoção. Os abrigos geralmente fornecem o suporte necessário, como alimentação e despesas veterinárias.</p>
          </div>
        </div>

        <div className="mySlides" style={{ display: slideIndex === 2 ? 'block' : 'none' }}>
          <img 
            src={require('../assets/images/placeholder_ajuda2.jpg')} 
            alt="Forma de ajudar 2: Doações"
            style={{ width: '100%', maxHeight: '450px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }}
          />
          <div className="slide-text-content">
            <h3>2. Contribua com Doações Essenciais</h3>
            <p>Abrigos e ONGs de proteção animal dependem de doações para continuar seu trabalho vital. Você pode ajudar doando ração de boa qualidade, medicamentos, vacinas, produtos de limpeza, cobertores, brinquedos e outros suprimentos. Contribuições financeiras também são cruciais para cobrir custos com tratamentos veterinários, castrações e a manutenção geral das instalações. Cada doação, por menor que seja, faz uma grande diferença.</p>
          </div>
        </div>

        <div className="mySlides" style={{ display: slideIndex === 3 ? 'block' : 'none' }}>
          <img 
            src={require('../assets/images/placeholder_ajuda3.jpg')} 
            alt="Forma de ajudar 3: Voluntariado e Divulgação"
            style={{ width: '100%', maxHeight: '450px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px' }}
          />
          <div className="slide-text-content">
            <h3>3. Dedique seu Tempo e Divulgue a Causa</h3>
            <p>Ser voluntário em um abrigo é uma experiência gratificante. Você pode ajudar com a limpeza, alimentação, passeios com os cães, socialização dos gatos e em eventos de adoção. Além disso, use suas redes sociais para divulgar animais que precisam de um lar, compartilhar informações sobre a importância da adoção responsável, da castração e do combate aos maus-tratos. Conscientizar as pessoas ao seu redor é um ato poderoso de ajuda.</p>
          </div>
        </div>

        <a className="prev" onClick={() => plusSlides(-1)} style={{ cursor: 'pointer' }}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)} style={{ cursor: 'pointer' }}>&#10095;</a>
      </div>
      <br />

      <div className="dots-container" style={{ textAlign: 'center', padding: '15px 0' }}>
        <span 
          className={`dot ${slideIndex === 1 ? 'active' : ''}`} 
          onClick={() => currentSlide(1)}
          style={{ 
            cursor: 'pointer',
            height: '15px',
            width: '15px',
            margin: '0 5px',
            backgroundColor: slideIndex === 1 ? '#717171' : '#bbb',
            borderRadius: '50%',
            display: 'inline-block',
            transition: 'background-color 0.6s ease'
          }}
        ></span>
        <span 
          className={`dot ${slideIndex === 2 ? 'active' : ''}`} 
          onClick={() => currentSlide(2)}
          style={{ 
            cursor: 'pointer',
            height: '15px',
            width: '15px',
            margin: '0 5px',
            backgroundColor: slideIndex === 2 ? '#717171' : '#bbb',
            borderRadius: '50%',
            display: 'inline-block',
            transition: 'background-color 0.6s ease'
          }}
        ></span>
        <span 
          className={`dot ${slideIndex === 3 ? 'active' : ''}`} 
          onClick={() => currentSlide(3)}
          style={{ 
            cursor: 'pointer',
            height: '15px',
            width: '15px',
            margin: '0 5px',
            backgroundColor: slideIndex === 3 ? '#717171' : '#bbb',
            borderRadius: '50%',
            display: 'inline-block',
            transition: 'background-color 0.6s ease'
          }}
        ></span>
      </div>
    </main>
  );
};

export default ComoAjudarPage;
