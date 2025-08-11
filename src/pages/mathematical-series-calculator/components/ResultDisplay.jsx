import React from 'react';
import MathematicalSeries from './MathematicalSeries';

const ResultDisplay = ({ result, currentLanguage }) => {
  if (!result) return null;

  // Obtener el cálculo detallado si la serie es 'serie'
  const detailedCalculation = result?.seriesType === 'serie' 
    ? MathematicalSeries?.getDetailedCalculation(result?.seriesType, result?.position)
    : null;

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-heading-semibold text-foreground mb-2">
          {currentLanguage === 'es' ? 'Resultado' : 'Result'}
        </h2>
        <div className="text-4xl font-heading-bold text-primary mb-2">
          {result?.value?.toLocaleString()}
        </div>
        <p className="text-sm text-muted-foreground">
          {currentLanguage === 'es' 
            ? `Término ${result?.position} de ${result?.seriesName}` 
            : `Term ${result?.position} of ${result?.seriesName}`
          }
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-muted/50 rounded-lg p-4">
          <h3 className="font-heading-semibold text-foreground mb-2">
            {currentLanguage === 'es' ? 'Fórmula' : 'Formula'}
          </h3>
          <div className="font-data text-sm text-foreground">
            {result?.formula}
          </div>
        </div>

        {detailedCalculation && (
          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="font-heading-semibold text-foreground mb-2">
              {currentLanguage === 'es' ? 'Cálculo Detallado' : 'Detailed Calculation'}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground">
                <span className="font-medium">
                  {currentLanguage === 'es' ? 'Componentes:' : 'Components:'}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3">
                <div className="text-foreground">
                  <span className="font-medium">primo({result?.position}):</span> {detailedCalculation?.primeN}
                </div>
                <div className="text-foreground">
                  <span className="font-medium">fibonacci({result?.position}):</span> {detailedCalculation?.fibonacciN}
                </div>
                <div className="text-foreground">
                  <span className="font-medium">triangular({result?.position + 1}):</span> {detailedCalculation?.triangularN1}
                </div>
              </div>
              <div className="text-foreground font-data bg-accent/10 p-2 rounded">
                {detailedCalculation?.breakdown}
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <span>
            {currentLanguage === 'es' 
              ? `Tiempo de cálculo: ${result?.calculationTime}ms` 
              : `Calculation time: ${result?.calculationTime}ms`
            }
          </span>
          <span>
            {currentLanguage === 'es' 
              ? `Serie: ${result?.seriesType}` 
              : `Series: ${result?.seriesType}`
            }
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;