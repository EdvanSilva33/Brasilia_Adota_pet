import React, { useEffect } from 'react';
import emailjs from '@emailjs/browser';

// Componente para inicializar o EmailJS
const EmailJSInit = () => {
  useEffect(() => {
    // Inicializar EmailJS com sua Public Key
    // Substitua 'YOUR_PUBLIC_KEY' pela sua chave pública do EmailJS
    emailjs.init('YOUR_PUBLIC_KEY');
  }, []);

  return null; // Este componente não renderiza nada
};

export default EmailJSInit;
