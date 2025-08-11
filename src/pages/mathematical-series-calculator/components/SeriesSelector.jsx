import React from 'react';


const SeriesSelector = ({ selectedSeries, onSeriesChange, currentLanguage }) => {
  const seriesOptions = {
    es: [
      {
        id: 'triangular',
        name: 'Números Triangulares',
        description: 'Secuencia: 1, 3, 6, 10, 15... (n(n+1)/2)',
        formula: 'T(n) = n(n+1)/2'
      },
      {
        id: 'fibonacci',
        name: 'Secuencia de Fibonacci',
        description: 'Secuencia: 1, 1, 2, 3, 5, 8, 13... (F(n) = F(n-1) + F(n-2))',
        formula: 'F(n) = F(n-1) + F(n-2)'
      },
      {
        id: 'prime',
        name: 'Números Primos',
        description: 'Secuencia: 2, 3, 5, 7, 11, 13, 17... (números divisibles solo por 1 y sí mismos)',
        formula: 'P(n) = n-ésimo número primo'
      },
      {
        id: 'serie',
        name: 'Fórmula Serie Combinada',
        description: 'Combina las tres series con coeficientes específicos: -3×primo(n) - fibonacci(n) + 5×triangular(n+1)',
        formula: 'serie(n) = -3primo(n) - fibonacci(n) + 5triangular(n + 1)'
      }
    ],
    en: [
      {
        id: 'triangular',
        name: 'Triangular Numbers',
        description: 'Sequence: 1, 3, 6, 10, 15... (n(n+1)/2)',
        formula: 'T(n) = n(n+1)/2'
      },
      {
        id: 'fibonacci',
        name: 'Fibonacci Sequence',
        description: 'Sequence: 1, 1, 2, 3, 5, 8, 13... (F(n) = F(n-1) + F(n-2))',
        formula: 'F(n) = F(n-1) + F(n-2)'
      },
      {
        id: 'prime',
        name: 'Prime Numbers',
        description: 'Sequence: 2, 3, 5, 7, 11, 13, 17... (numbers divisible only by 1 and themselves)',
        formula: 'P(n) = nth prime number'
      },
      {
        id: 'serie',
        name: 'Combined Series Formula',
        description: 'Combines the three series with specific coefficients: -3×prime(n) - fibonacci(n) + 5×triangular(n+1)',
        formula: 'serie(n) = -3prime(n) - fibonacci(n) + 5triangular(n + 1)'
      }
    ]
  };

  const options = seriesOptions?.[currentLanguage] || seriesOptions?.es;

  return (
    <div className="bg-card rounded-lg border border-border p-6 mb-6">
      <h2 className="text-lg font-heading-semibold text-foreground mb-4">
        {currentLanguage === 'es' ? 'Seleccionar Serie Numerica' : 'Select Numerical Series'}
      </h2>
      <div className="space-y-4">
        {options?.map((option) => (
          <div key={option?.id} className="flex items-start space-x-3">
            <input
              type="radio"
              id={option?.id}
              name="series"
              value={option?.id}
              checked={selectedSeries === option?.id}
              onChange={(e) => onSeriesChange(e?.target?.value)}
              className="mt-1 w-4 h-4 text-primary border-border focus:ring-primary focus:ring-2"
            />
            <div className="flex-1">
              <label htmlFor={option?.id} className="cursor-pointer">
                <div className="font-body-medium text-foreground mb-1">
                  {option?.name}
                </div>
                <div className="text-sm text-muted-foreground mb-1">
                  {option?.description}
                </div>
                <div className="text-xs font-data text-accent bg-accent/10 px-2 py-1 rounded inline-block">
                  {option?.formula}
                </div>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeriesSelector;