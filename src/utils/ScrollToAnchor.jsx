import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Hook personalizado para lidar com rolagem para âncoras
const ScrollToAnchor = () => {
  const location = useLocation();

  useEffect(() => {
    // Verificar se há um hash na URL (ex: /#sobre)
    if (location.hash) {
      // Remover o # do hash para obter o ID do elemento
      const elementId = location.hash.substring(1);
      
      // Aguardar um momento para garantir que o DOM esteja carregado
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      // Se não houver hash, role para o topo da página
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null; // Este componente não renderiza nada
};

export default ScrollToAnchor;
