import React from 'react';
import { Link } from 'react-router-dom';

const AnimalCard = ({ animal }) => {
  // Função para carregar a imagem dinamicamente
  const getAnimalImage = () => {
    try {
      // Tenta carregar a imagem do animal a partir do nome do arquivo
      return require(`../../assets/images/${animal.imagem}`);
    } catch (error) {
      // Se a imagem não existir, usa uma imagem padrão
      return require('../../assets/images/logo_placeholder.png');
    }
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img 
          src={getAnimalImage()} 
          className="card-img-top" 
          alt={animal.nome} 
          style={{ height: '200px', objectFit: 'cover' }} 
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{animal.nome}</h5>
          <p className="card-text">
            <strong>Espécie:</strong> {animal.especie}<br />
            <strong>Raça:</strong> {animal.raca}<br />
            <strong>Idade:</strong> {animal.idade}
          </p>
          <p className="card-text flex-grow-1">{animal.descricao}</p>
          <Link 
            to={`/formulario-adocao?animal=${animal.nome}`} 
            className="btn btn-primary mt-auto"
          >
            Quero Adotar {animal.nome}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
