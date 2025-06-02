import React from 'react';
import AnimalCard from './AnimalCard';
import { useAnimals } from '../../context/AnimalsContext';

const AnimalGallery = () => {
  const { animals } = useAnimals();
  
  return (
    <section id="galeria-animais" className="gallery-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Peludos Esperando por Você</h2>
        <p className="text-center lead mb-5">
          Veja alguns dos nossos cães e gatos que estão prontos para encher um novo lar de alegria e companheirismo. 
          Cada um tem uma história única e muito amor para dar.
        </p>
        <div className="row">
          {animals && animals.length > 0 ? (
            animals.map(animal => (
              <AnimalCard key={animal.id} animal={animal} />
            ))
          ) : (
            <div className="col">
              <p className="text-center">Nenhum animal disponível para adoção no momento.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AnimalGallery;
