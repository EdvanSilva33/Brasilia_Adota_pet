import React from 'react';
import { useAlert } from '../../context/AlertContext';

const AlertMessage = () => {
  const { alerts, removeAlert } = useAlert();

  if (alerts.length === 0) return null;

  return (
    <div className="container mt-4">
      {alerts.map(alert => (
        <div 
          key={alert.id} 
          className={`alert alert-${alert.type} alert-dismissible fade show`} 
          role="alert"
        >
          {alert.message}
          <button 
            type="button" 
            className="close" 
            onClick={() => removeAlert(alert.id)} 
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default AlertMessage;
