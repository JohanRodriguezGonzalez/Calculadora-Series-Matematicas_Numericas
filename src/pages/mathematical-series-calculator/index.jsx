import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import SeriesSelector from './components/SeriesSelector';
import CalculationInput from './components/CalculationInput';
import MathematicalSeries from './components/MathematicalSeries';
import ResultDisplay from './components/ResultDisplay';
import ErrorDisplay from './components/ErrorDisplay';

const MathematicalSeriesCalculator = () => {
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const [selectedSeries, setSelectedSeries] = useState('');
  const [termPosition, setTermPosition] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);

  // Cargar la preferencia de idioma al montar el componente
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Escucha los cambios de idioma en localStorage
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e?.key === 'preferred-language' && e?.newValue) {
        setCurrentLanguage(e?.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleSeriesChange = (seriesType) => {
    setSelectedSeries(seriesType);
    setResult(null);
    setError('');
  };

  const handleTermPositionChange = (value) => {
    setTermPosition(value);
    setError('');
    setResult(null);
  };

  const handleCalculate = async () => {
    if (!selectedSeries) {
      setError(currentLanguage === 'es' ?'Por favor, seleccione una serie numerica' :'Please select a Numerical series'
      );
      return;
    }

    const position = parseInt(termPosition);
    if (!position || position < 1 || position > 100) {
      setError(currentLanguage === 'es' ?'La posición debe ser un número entero entre 1 y 100' :'Position must be an integer between 1 and 100'
      );
      return;
    }

    setIsCalculating(true);
    setError('');
    setResult(null);

    try {
      // Simular el tiempo de cálculo para una mejor experiencia de usuario
      const startTime = performance.now();
      
      // Agregue un retraso artificial para la demostración
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const calculatedValue = MathematicalSeries?.calculate(selectedSeries, position);
      const endTime = performance.now();
      const calculationTime = Math.round(endTime - startTime);

      const calculationResult = {
        seriesType: selectedSeries,
        position: position,
        value: calculatedValue,
        formula: MathematicalSeries?.getFormula(selectedSeries),
        seriesName: MathematicalSeries?.getName(selectedSeries, currentLanguage),
        calculationTime: calculationTime
      };

      setResult(calculationResult);
    } catch (err) {
      setError(err?.message);
    } finally {
      setIsCalculating(false);
    }
  };

  const handleRetry = () => {
    setError('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-heading-semibold text-foreground mb-4">
              {currentLanguage === 'es' ?'Calculadora de Series Numericas' :'Calculator of Numerical Series'
              }
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {currentLanguage === 'es' ?'Calcula el término n-ésimo de secuencias numericas: Números Triangulares, Fibonacci, Números Primos y Fórmula Serie Combinada' :'Calculate the nth term of Numerical sequences: Triangular Numbers, Fibonacci, Prime Numbers and Combined Series Formula'
              }
            </p>
          </div>

          {/* Interfaz Principal de la Calculadora */}
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Selecciona la serie */}
            <SeriesSelector
              selectedSeries={selectedSeries}
              onSeriesChange={handleSeriesChange}
              currentLanguage={currentLanguage}
            />

            {/* Entrada y Cálculo */}
            <CalculationInput
              termPosition={termPosition}
              onTermPositionChange={handleTermPositionChange}
              onCalculate={handleCalculate}
              isCalculating={isCalculating}
              error={error}
              currentLanguage={currentLanguage}
              selectedSeries={selectedSeries}
            />

            {/* Error  */}
            <ErrorDisplay
              error={error}
              currentLanguage={currentLanguage}
              onRetry={handleRetry}
            />

            {/* Resultado  */}
            <ResultDisplay
              result={result}
              currentLanguage={currentLanguage}
            />
          </div>

          {/* Educational Information */}
          <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-heading-semibold text-foreground mb-3">
                {currentLanguage === 'es' ? 'Números Triangulares' : 'Triangular Numbers'}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {currentLanguage === 'es' ?'Representan la suma de los primeros n números naturales. Forman triángulos cuando se representan gráficamente.' :'Represent the sum of the first n natural numbers. They form triangles when represented graphically.'
                }
              </p>
              <div className="text-xs font-data bg-muted/50 px-3 py-2 rounded">
                1, 3, 6, 10, 15, 21, 28...
              </div>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-heading-semibold text-foreground mb-3">
                {currentLanguage === 'es' ? 'Fibonacci' : 'Fibonacci'}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {currentLanguage === 'es' ?'Cada término es la suma de los dos anteriores. Aparece frecuentemente en la naturaleza.' :'Each term is the sum of the two preceding ones. Appears frequently in nature.'
                }
              </p>
              <div className="text-xs font-data bg-muted/50 px-3 py-2 rounded">
                1, 1, 2, 3, 5, 8, 13, 21...
              </div>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-heading-semibold text-foreground mb-3">
                {currentLanguage === 'es' ? 'Números Primos' : 'Prime Numbers'}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {currentLanguage === 'es' ?'Números mayores que 1 divisibles solo por 1 y por sí mismos. Fundamentales en criptografía.' :'Numbers greater than 1 divisible only by 1 and themselves. Fundamental in cryptography.'
                }
              </p>
              <div className="text-xs font-data bg-muted/50 px-3 py-2 rounded">
                2, 3, 5, 7, 11, 13, 17, 19...
              </div>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-heading-semibold text-foreground mb-3">
                {currentLanguage === 'es' ? 'Serie Combinada' : 'Combined Series'}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {currentLanguage === 'es' ?'Combina las tres series con coeficientes específicos para crear una nueva secuencia matemática.' :'Combines the three series with specific coefficients to create a new mathematical sequence.'
                }
              </p>
              <div className="text-xs font-data bg-muted/50 px-3 py-2 rounded">
                -3P(n) - F(n) + 5T(n+1)
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MathematicalSeriesCalculator;