import React from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const CalculationInput = ({ 
  termPosition, 
  onTermPositionChange, 
  onCalculate, 
  isCalculating, 
  error, 
  currentLanguage,
  selectedSeries 
}) => {
  const handleSubmit = (e) => {
    e?.preventDefault();
    onCalculate();
  };

  const isDisabled = !selectedSeries || !termPosition || termPosition < 1 || termPosition > 100;

  return (
    <div className="bg-card rounded-lg border border-border p-6 mb-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            label={currentLanguage === 'es' ? 'Posición del Término (n)' : 'Term Position (n)'}
            type="number"
            placeholder={currentLanguage === 'es' ? 'Ingrese un número del 1 al 100' : 'Enter a number from 1 to 100'}
            value={termPosition}
            onChange={(e) => onTermPositionChange(e?.target?.value)}
            min="1"
            max="100"
            required
            error={error}
            description={currentLanguage === 'es' ? 'Ingrese un número entero positivo entre 1 y 100' : 'Enter a positive integer between 1 and 100'}
            className="text-center text-lg"
          />
        </div>
        
        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isCalculating}
          disabled={isDisabled}
          iconName="Calculator"
          iconPosition="left"
        >
          {isCalculating 
            ? (currentLanguage === 'es' ? 'Calculando...' : 'Calculating...') 
            : (currentLanguage === 'es' ? 'Calcular Término' : 'Calculate Term')
          }
        </Button>
        
        {!selectedSeries && (
          <p className="text-sm text-warning text-center">
            {currentLanguage === 'es' ?'Por favor, seleccione una serie matemática primero' :'Please select a mathematical series first'
            }
          </p>
        )}
      </form>
    </div>
  );
};

export default CalculationInput;