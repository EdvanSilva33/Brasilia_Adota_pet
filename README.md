# Instruções para o Projeto React - Adote Brasília

## Visão Geral

Este projeto é uma conversão completa do site "Adote Brasília" de Flask para React.js. A aplicação foi reconstruída utilizando componentes React modernos, mantendo todas as funcionalidades e aparência visual do site original.

## Estrutura do Projeto

```
adote-brasilia-react/
├── public/                 # Arquivos públicos
│   └── index.html          # HTML principal
├── src/                    # Código fonte
│   ├── assets/             # Imagens e recursos
│   │   └── images/         # Imagens do site
│   ├── components/         # Componentes React
│   │   ├── animals/        # Componentes relacionados aos animais
│   │   ├── forms/          # Componentes de formulários
│   │   ├── home/           # Componentes da página inicial
│   │   └── layout/         # Componentes de layout (Navbar, Footer)
│   ├── context/            # Contextos React para gerenciamento de estado
│   ├── data/               # Dados estáticos (animais para adoção)
│   ├── pages/              # Páginas principais
│   ├── App.jsx             # Componente principal com rotas
│   ├── index.jsx           # Ponto de entrada da aplicação
│   └── index.css           # Estilos globais
└── package.json            # Dependências e scripts
```

## Funcionalidades Implementadas

1. **Navegação entre páginas** usando React Router
2. **Exibição de animais para adoção** a partir de dados estáticos
3. **Busca de animais** por nome, espécie, raça ou descrição
4. **Formulário de adoção** com validação e feedback visual
5. **Formulário de newsletter** com feedback de sucesso
6. **Slideshow** na página "Como Ajudar"
7. **Sistema de notificações** usando Context API
8. **Layout responsivo** para dispositivos móveis e desktop

## Como Executar o Projeto

### Requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para Execução

1. **Instalar dependências**:
   ```
   cd adote-brasilia-react
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento**:
   ```
   npm start
   ```

3. **Acessar a aplicação**:
   Abra o navegador e acesse `http://localhost:3000`

## Como Fazer o Build para Produção

Para gerar uma versão otimizada para produção:

```
npm run build
```

Isso criará uma pasta `build` com os arquivos estáticos otimizados prontos para deploy.

## Publicação na Vercel

Este projeto está pronto para ser publicado na Vercel:

1. Crie uma conta na [Vercel](https://vercel.com) se ainda não tiver
2. Instale a CLI da Vercel: `npm i -g vercel`
3. No diretório do projeto, execute: `vercel`
4. Siga as instruções para fazer login e configurar o projeto

Alternativamente, você pode conectar seu repositório GitHub diretamente na plataforma da Vercel para implantação automática.

## Personalização

### Modificar os Animais Disponíveis

Para adicionar, remover ou modificar os animais disponíveis para adoção, edite o arquivo:
`src/data/animaisData.js`

### Alterar Estilos

Os estilos globais estão em `src/index.css`. Componentes específicos têm estilos inline que podem ser modificados diretamente nos arquivos JSX.

### Adicionar Novas Páginas

1. Crie um novo componente de página em `src/pages/`
2. Adicione a rota no arquivo `src/App.jsx`

## Observações Importantes

- Esta é uma aplicação frontend pura, sem backend. Os formulários simulam o envio de dados.
- Para integrar com um backend real, você precisará modificar as funções de envio de formulários nos componentes relevantes.
- As imagens são carregadas localmente a partir da pasta `assets`. Em um ambiente de produção, considere usar um serviço de CDN.

## Suporte

Para quaisquer dúvidas ou suporte adicional, entre em contato com o desenvolvedor.
