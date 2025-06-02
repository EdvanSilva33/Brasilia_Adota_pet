# Guia de Configuração do EmailJS

## O que é EmailJS?

EmailJS é um serviço que permite enviar e-mails diretamente do código JavaScript do frontend, sem necessidade de um servidor backend. É perfeito para sites estáticos como este projeto React.

## Passos para Configurar o EmailJS

### 1. Criar uma Conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/) e crie uma conta gratuita
2. O plano gratuito permite enviar até 200 e-mails por mês, o que deve ser suficiente para começar

### 2. Configurar um Serviço de E-mail

1. No painel do EmailJS, clique em "Email Services" e depois em "Add New Service"
2. Escolha seu provedor de e-mail (Gmail, Outlook, etc.)
3. Siga as instruções para conectar sua conta de e-mail
4. Anote o **Service ID** gerado (você precisará dele mais tarde)

### 3. Criar Templates de E-mail

#### Template para Newsletter:
1. No painel do EmailJS, clique em "Email Templates" e depois em "Create New Template"
2. Dê um nome como "Newsletter Subscription"
3. Configure o assunto como "Nova inscrição na newsletter"
4. No corpo do e-mail, você pode usar algo como:
   ```
   Novo e-mail inscrito na newsletter: {{email}}
   
   Data: {{date}}
   ```
5. Anote o **Template ID** gerado

#### Template para Formulário de Adoção:
1. Crie outro template chamado "Adoption Form"
2. Configure o assunto como "Solicitação de Adoção - {{animal_interesse}}"
3. No corpo do e-mail, você pode usar:
   ```
   DADOS PESSOAIS:
   Nome: {{nome_completo}}
   Email: {{email}}
   Telefone: {{telefone}}
   
   ENDEREÇO:
   Rua: {{endereco_rua}}, {{endereco_numero}}
   Complemento: {{endereco_complemento}}
   Bairro: {{endereco_bairro}}
   Cidade: {{endereco_cidade}}
   Estado: {{endereco_estado}}
   CEP: {{endereco_cep}}
   
   SOBRE A ADOÇÃO:
   Tipo de moradia: {{tipo_moradia}}
   Outros animais: {{outros_animais}}
   Por que deseja adotar: {{porque_adotar}}
   Animal de interesse: {{animal_interesse}}
   Mensagem adicional: {{mensagem_adicional}}
   ```
4. Anote o **Template ID** gerado

### 4. Obter sua Public Key

1. No painel do EmailJS, clique em "Account" e depois em "API Keys"
2. Copie sua **Public Key**

### 5. Configurar o Projeto React

Agora que você tem todas as informações necessárias, precisa atualizar três arquivos no projeto:

#### 1. `/src/utils/EmailJSInit.jsx`
Substitua `'YOUR_PUBLIC_KEY'` pela sua Public Key:
```javascript
emailjs.init('sua_public_key_aqui');
```

#### 2. `/src/components/forms/NewsletterForm.jsx`
Substitua os seguintes valores:
```javascript
await emailjs.send(
  'seu_service_id_aqui', // Substitua pelo seu Service ID
  'seu_template_id_newsletter_aqui', // Substitua pelo seu Template ID da Newsletter
  templateParams,
  'sua_public_key_aqui' // Substitua pela sua Public Key
);
```

#### 3. `/src/components/forms/AdoptionForm.jsx`
Substitua os seguintes valores:
```javascript
await emailjs.send(
  'seu_service_id_aqui', // Substitua pelo seu Service ID
  'seu_template_id_adocao_aqui', // Substitua pelo seu Template ID do Formulário de Adoção
  templateParams,
  'sua_public_key_aqui' // Substitua pela sua Public Key
);
```

### 6. Testar o Envio de E-mails

Após configurar tudo, teste os formulários para garantir que os e-mails estão sendo enviados corretamente para o endereço edvancodigo77@gmail.com.

## Observações Importantes

- A conta gratuita do EmailJS tem um limite de 200 e-mails por mês
- Os e-mails enviados terão o domínio do EmailJS, a menos que você use um plano pago
- Para maior segurança em produção, considere mover as chaves para variáveis de ambiente (.env)
- O EmailJS tem proteção contra spam, mas monitore o uso para evitar abusos
