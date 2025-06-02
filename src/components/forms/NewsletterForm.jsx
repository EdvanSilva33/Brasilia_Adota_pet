import React, { useState } from 'react';
import { useAlert } from '../../context/AlertContext';
import emailjs from '@emailjs/browser';

const NewsletterForm = () => {
  const { addAlert } = useAlert();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      addAlert('Por favor, forneça um e-mail válido.', 'warning');
      return;
    }

    setIsSubmitting(true);

    try {
      // Preparar os dados para envio com EmailJS
      const templateParams = {
        to_email: 'edvancodigo77@gmail.com',
        from_name: 'Site Adote Brasília',
        subject: 'Nova inscrição na newsletter',
        message: `Novo e-mail inscrito na newsletter: ${email}`,
        reply_to: email
      };
      
      // Enviar usando EmailJS
      // Substitua os parâmetros abaixo pelos seus IDs do EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // Substitua pelo seu Service ID
        'YOUR_TEMPLATE_ID', // Substitua pelo seu Template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Substitua pela sua Public Key
      );
      
      // Sucesso
      addAlert(`Obrigado por se inscrever! Seu e-mail ${email} foi registrado com sucesso.`, 'success');
      setEmail('');
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      addAlert('Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente.', 'danger');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline justify-content-center">
      <input 
        type="email" 
        name="email" 
        className="form-control form-control-sm mr-2" 
        placeholder="Seu e-mail" 
        required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isSubmitting}
      />
      <button 
        type="submit" 
        className="btn btn-primary btn-sm"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Inscrever'}
      </button>
    </form>
  );
};

export default NewsletterForm;
