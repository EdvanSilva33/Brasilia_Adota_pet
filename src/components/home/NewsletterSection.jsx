import React from 'react';
import { useAlert } from '../../context/AlertContext';

const NewsletterSection = () => {
  const { addAlert } = useAlert();

  const handleSubmit = (e) => {
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
    <section id="newsletter-section" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h3>Fique por Dentro!</h3>
            <p className="lead">Receba novidades sobre nossos animais, eventos de adoção e dicas para cuidar do seu pet.</p>
            <form onSubmit={handleSubmit} className="form-inline justify-content-center">
              <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="email_newsletter" className="sr-only">Email</label>
                <input 
                  type="email" 
                  className="form-control form-control-lg" 
                  id="email_newsletter" 
                  name="email" 
                  placeholder="Digite seu e-mail" 
                  required 
                />
              </div>
              <button type="submit" className="btn btn-primary mb-2 btn-lg">Inscrever</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
