import React from 'react';
import { Link } from 'react-router-dom';
import { useAlert } from '../../context/AlertContext';

const Footer = () => {
  const { addAlert } = useAlert();
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    
    if (email) {
      addAlert(`Obrigado por se inscrever! Um e-mail de confirmação foi enviado para ${email}.`, 'success');
      e.target.reset();
    } else {
      addAlert('Por favor, forneça um e-mail válido.', 'warning');
    }
  };

  return (
    <footer id="contato" className="bg-dark text-white mt-5 p-4 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Institucional</h5>
            <ul className="list-unstyled">
              <li><a href="https://youtu.be/UdrMj_A3_xE?si=OTc51wJ0ws48tlos" target='_blank' className="text-white">Nossa História</a></li>
              <li><a href="https://youtu.be/F2QxAZwmKN8?si=D5Y8m38XjH_usZ9c" target='_blank' className="text-white">Nossa Equipe</a></li>
              <li><a href="/Pdf?parcerias.pdf" target='_blank' className="text-white">Transparência</a></li>
              <li><a href="/Pdf/doacao.pdf" target='_blank' className="text-white">Termos de Adoção</a></li>
              <li><a href="/Pdf/termo_privacidade_adocao.pdf" target='_blank' className="text-white">Política de Privacidade</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Como Ajudar</h5>
            <ul className="list-unstyled">
              <li><a href="/Pdf/processo_adocao.pdf" target='_blank' className="text-white">Processo de Adoção</a></li>
              <li><a href="/Pdf/voluntarios.pdf" target='_blank' className="text-white">Seja um Voluntário</a></li>
              <li><a href="https://www.facebook.com/doacoesanimaisbsb/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="text-white">Faça uma Doação</a></li>
              <li><a href="/Pdf/apadrinhamento.pdf" target='_blank' className="text-white">Apadrinhe um Animal</a></li>
              <li><a href="https://www.doapet.com.br/" target="_blank" rel="noopener noreferrer" className="text-white">Parcerias</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Siga-nos</h5>
            <div className="social-media">
              <a href="#" className="text-white mr-2">
                <img 
                  src={require('../../assets/images/social_facebook_placeholder.png')} 
                  alt="Facebook" 
                  style={{ height: '24px' }} 
                />
              </a>
              <a href="#" className="text-white mr-2">
                <img 
                  src={require('../../assets/images/social_instagram_placeholder.png')} 
                  alt="Instagram" 
                  style={{ height: '24px' }} 
                />
              </a>
              <a href="#" className="text-white mr-2">
                <img 
                  src={require('../../assets/images/social_twitter_placeholder.png')} 
                  alt="Twitter" 
                  style={{ height: '24px' }} 
                />
              </a>
              <a href="#" className="text-white">
                <img 
                  src={require('../../assets/images/social_whatsapp_placeholder.png')} 
                  alt="WhatsApp" 
                  style={{ height: '24px' }} 
                />
              </a>
            </div>
            <h5 className="mt-3">Newsletter</h5>
            <form onSubmit={handleNewsletterSubmit} className="form-inline justify-content-center">
              <input 
                type="email" 
                name="email" 
                className="form-control form-control-sm mr-2" 
                placeholder="Seu e-mail" 
                required 
              />
              <button type="submit" className="btn btn-primary btn-sm">Inscrever</button>
            </form>
          </div>
        </div>
        <hr className="bg-secondary" />
        <p className="mt-3">&copy; {currentYear} Adote um Amigo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
