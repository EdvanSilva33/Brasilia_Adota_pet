import React from 'react';
import AlertMessage from '../components/layout/AlertMessage';
import AdoptionForm from '../components/forms/AdoptionForm';

const FormularioAdocaoPage = () => {
  return (
    <section className="form-section adoption-form-section">
      <div className="container">
        <h2>Formulário de Interesse em Adoção</h2>
        <p>Preencha o formulário abaixo para demonstrar seu interesse em adotar um dos nossos peludos. Entraremos em contato o mais breve possível!</p>
        
        <AlertMessage />
        <AdoptionForm />
      </div>
    </section>
  );
};

export default FormularioAdocaoPage;
