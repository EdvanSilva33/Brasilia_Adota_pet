import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAlert } from '../../context/AlertContext';
import emailjs from '@emailjs/browser';

const AdoptionForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addAlert } = useAlert();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome_completo: '',
    email: '',
    telefone: '',
    endereco_rua: '',
    endereco_numero: '',
    endereco_complemento: '',
    endereco_bairro: '',
    endereco_cidade: '',
    endereco_estado: '',
    endereco_cep: '',
    tipo_moradia: '',
    outros_animais: '',
    porque_adotar: '',
    animal_interesse: new URLSearchParams(location.search).get('animal') || '',
    mensagem_adicional: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação básica
    const requiredFields = [
      'nome_completo', 'email', 'telefone', 
      'endereco_rua', 'endereco_numero', 'endereco_bairro', 
      'endereco_cidade', 'endereco_estado', 'endereco_cep', 
      'tipo_moradia', 'porque_adotar'
    ];
    
    const missingFields = requiredFields.filter(field => !formData[field].trim());
    
    if (missingFields.length > 0) {
      addAlert('Por favor, preencha todos os campos obrigatórios do formulário de adoção.', 'danger');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Preparar os dados para envio com EmailJS
      const templateParams = {
        to_email: 'edvancodigo77@gmail.com',
        from_name: `${formData.nome_completo} via Site Adote Brasília`,
        subject: `Solicitação de Adoção - ${formData.animal_interesse || 'Novo interesse'}`,
        message: `
          DADOS PESSOAIS:
          Nome: ${formData.nome_completo}
          Email: ${formData.email}
          Telefone: ${formData.telefone}
          
          ENDEREÇO:
          Rua: ${formData.endereco_rua}, ${formData.endereco_numero}
          Complemento: ${formData.endereco_complemento || 'Não informado'}
          Bairro: ${formData.endereco_bairro}
          Cidade: ${formData.endereco_cidade}
          Estado: ${formData.endereco_estado}
          CEP: ${formData.endereco_cep}
          
          SOBRE A ADOÇÃO:
          Tipo de moradia: ${formData.tipo_moradia}
          Outros animais: ${formData.outros_animais || 'Não informado'}
          Por que deseja adotar: ${formData.porque_adotar}
          Animal de interesse: ${formData.animal_interesse || 'Não especificado'}
          Mensagem adicional: ${formData.mensagem_adicional || 'Não informado'}
        `,
        reply_to: formData.email
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
      addAlert('Sua solicitação de adoção foi enviada com sucesso! Entraremos em contato em breve.', 'success');
      
      // Redirecionar para a página inicial após 2 segundos
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      addAlert('Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente.', 'danger');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="adoption-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Seus Dados Pessoais</legend>
        <div className="form-group">
          <label htmlFor="nome_completo">Nome Completo:</label>
          <input 
            type="text" 
            id="nome_completo" 
            name="nome_completo" 
            value={formData.nome_completo}
            onChange={handleChange}
            required 
            disabled={isSubmitting}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">E-mail:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone (com DDD):</label>
          <input 
            type="tel" 
            id="telefone" 
            name="telefone" 
            placeholder="(XX) XXXXX-XXXX" 
            value={formData.telefone}
            onChange={handleChange}
            required 
            disabled={isSubmitting}
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Seu Endereço</legend>
        <div className="form-group">
          <label htmlFor="endereco_rua">Rua/Avenida:</label>
          <input 
            type="text" 
            id="endereco_rua" 
            name="endereco_rua" 
            value={formData.endereco_rua}
            onChange={handleChange}
            required 
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group form-group-inline">
          <div>
            <label htmlFor="endereco_numero">Número:</label>
            <input 
              type="text" 
              id="endereco_numero" 
              name="endereco_numero" 
              value={formData.endereco_numero}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="endereco_complemento">Complemento:</label>
            <input 
              type="text" 
              id="endereco_complemento" 
              name="endereco_complemento" 
              value={formData.endereco_complemento}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="endereco_bairro">Bairro:</label>
          <input 
            type="text" 
            id="endereco_bairro" 
            name="endereco_bairro" 
            value={formData.endereco_bairro}
            onChange={handleChange}
            required 
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group form-group-inline">
          <div>
            <label htmlFor="endereco_cidade">Cidade:</label>
            <input 
              type="text" 
              id="endereco_cidade" 
              name="endereco_cidade" 
              value={formData.endereco_cidade}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="endereco_estado">Estado:</label>
            <input 
              type="text" 
              id="endereco_estado" 
              name="endereco_estado" 
              value={formData.endereco_estado}
              onChange={handleChange}
              required 
              maxLength="2" 
              placeholder="UF" 
              disabled={isSubmitting}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="endereco_cep">CEP:</label>
          <input 
            type="text" 
            id="endereco_cep" 
            name="endereco_cep" 
            placeholder="XXXXX-XXX" 
            value={formData.endereco_cep}
            onChange={handleChange}
            required 
            disabled={isSubmitting}
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Sobre a Adoção</legend>
        <div className="form-group">
          <label htmlFor="tipo_moradia">Tipo de Moradia:</label>
          <select 
            id="tipo_moradia" 
            name="tipo_moradia" 
            value={formData.tipo_moradia}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          >
            <option value="" disabled>Selecione...</option>
            <option value="casa_com_quintal">Casa com quintal</option>
            <option value="casa_sem_quintal">Casa sem quintal</option>
            <option value="apartamento">Apartamento</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="outros_animais">Já possui outros animais? Se sim, quais e quantos?</label>
          <textarea 
            id="outros_animais" 
            name="outros_animais" 
            rows="3"
            value={formData.outros_animais}
            onChange={handleChange}
            disabled={isSubmitting}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="porque_adotar">Por que você deseja adotar?</label>
          <textarea 
            id="porque_adotar" 
            name="porque_adotar" 
            rows="4" 
            value={formData.porque_adotar}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="animal_interesse">Nome do animal de interesse (se houver):</label>
          <input 
            type="text" 
            id="animal_interesse" 
            name="animal_interesse" 
            value={formData.animal_interesse}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensagem_adicional">Alguma informação adicional que gostaria de compartilhar?</label>
          <textarea 
            id="mensagem_adicional" 
            name="mensagem_adicional" 
            rows="4"
            value={formData.mensagem_adicional}
            onChange={handleChange}
            disabled={isSubmitting}
          ></textarea>
        </div>
      </fieldset>
      
      <div className="form-group form-submit-group">
        <button 
          type="submit" 
          className="btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Solicitação de Adoção'}
        </button>
      </div>
    </form>
  );
};

export default AdoptionForm;
