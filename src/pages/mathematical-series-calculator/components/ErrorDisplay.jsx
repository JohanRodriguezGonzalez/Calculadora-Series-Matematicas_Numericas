import React from 'react';
import Icon from '../../../components/AppIcon';

const ErrorDisplay = ({ error, currentLanguage, onRetry }) => {
  if (!error) return null;

  const getErrorMessage = (error) => {
    if (currentLanguage === 'es') {
      if (error?.includes('positive integer')) {
        return 'La posición debe ser un número entero positivo entre 1 y 100.';
      }
      if (error?.includes('Unknown series')) {
        return 'Tipo de serie desconocido. Por favor, seleccione una serie válida.';
      }
      return 'Ha ocurrido un error durante el cálculo. Por favor, verifique sus datos e intente nuevamente.';
    } else {
      if (error?.includes('positive integer')) {
        return 'Position must be a positive integer between 1 and 100.';
      }
      if (error?.includes('Unknown series')) {
        return 'Unknown series type. Please select a valid series.';
      }
      return 'An error occurred during calculation. Please check your input and try again.';
    }
  };

  return (
    <div className="bg-error/5 border border-error/20 rounded-lg p-6 mb-6">
      <div className="flex items-start space-x-3">
        <div className="w-10 h-10 bg-error/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon 
            name="AlertCircle" 
            size={24} 
            color="var(--color-error)" 
            strokeWidth={2}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-heading-semibold text-error mb-2">
            {currentLanguage === 'es' ? 'Error de Cálculo' : 'Calculation Error'}
          </h3>
          <p className="text-sm text-error/80 mb-4">
            {getErrorMessage(error)}
          </p>
          <div className="flex items-center space-x-3">
            <button
              onClick={onRetry}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-error text-error-foreground rounded-lg hover:bg-error/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2"
            >
              <Icon name="RotateCcw" size={16} color="var(--color-error-foreground)" strokeWidth={2} />
              <span className="text-sm font-body-medium">
                {currentLanguage === 'es' ? 'Intentar Nuevamente' : 'Try Again'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;