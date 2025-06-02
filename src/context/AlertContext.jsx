import React, { createContext, useState, useContext } from 'react';

// Criando o contexto de alertas
const AlertContext = createContext();

// Hook personalizado para usar o contexto de alertas
export const useAlert = () => useContext(AlertContext);

// Provedor do contexto de alertas
export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  // Função para adicionar um alerta
  const addAlert = (message, type = 'info', timeout = 5000) => {
    const id = Date.now();
    setAlerts(prev => [...prev, { id, message, type }]);
    
    // Remove o alerta após o timeout
    setTimeout(() => {
      setAlerts(prev => prev.filter(alert => alert.id !== id));
    }, timeout);
  };

  // Função para remover um alerta específico
  const removeAlert = (id) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
