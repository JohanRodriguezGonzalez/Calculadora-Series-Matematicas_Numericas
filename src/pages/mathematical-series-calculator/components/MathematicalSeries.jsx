class TriangularNumbers {
  static calculate(n) {
    if (n < 1 || !Number.isInteger(n)) {
      throw new Error('Position must be a positive integer');
    }
    return (n * (n + 1)) / 2;
  }

  static getFormula() {
    return 'T(n) = n(n+1)/2';
  }

  static getName(language = 'es') {
    return language === 'es' ? 'Números Triangulares' : 'Triangular Numbers';
  }
}

class FibonacciSequence {
  static calculate(n) {
    if (n < 1 || !Number.isInteger(n)) {
      throw new Error('Position must be a positive integer');
    }
    
    if (n <= 2) return 1;
    
    let a = 1, b = 1;
    for (let i = 3; i <= n; i++) {
      const temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }

  static getFormula() {
    return 'F(n) = F(n-1) + F(n-2)';
  }

  static getName(language = 'es') {
    return language === 'es' ? 'Secuencia de Fibonacci' : 'Fibonacci Sequence';
  }
}

class PrimeNumbers {
  static calculate(n) {
    if (n < 1 || !Number.isInteger(n)) {
      throw new Error('Position must be a positive integer');
    }

    const primes = [];
    let candidate = 2;
    
    while (primes?.length < n) {
      if (this.isPrime(candidate)) {
        primes?.push(candidate);
      }
      candidate++;
    }
    
    return primes?.[n - 1];
  }

  static isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  static getFormula() {
    return 'P(n) = nth prime';
  }

  static getName(language = 'es') {
    return language === 'es' ? 'Números Primos' : 'Prime Numbers';
  }
}

class SerieFormula {
  static calculate(n) {
    if (n < 1 || !Number.isInteger(n)) {
      throw new Error('Position must be a positive integer');
    }

   
    const primeN = PrimeNumbers?.calculate(n);
    const fibonacciN = FibonacciSequence?.calculate(n);
    const triangularN1 = TriangularNumbers?.calculate(n + 1);


    const result = (-3 * primeN) - fibonacciN + (5 * triangularN1);
    
    return result;
  }

  static getFormula() {
    return 'serie(n) = -3primo(n) - fibonacci(n) + 5triangular(n + 1)';
  }

  static getName(language = 'es') {
    return language === 'es' ? 'Fórmula Serie Combinada' : 'Combined Series Formula';
  }

  static getDetailedCalculation(n) {
    if (n < 1 || !Number.isInteger(n)) {
      throw new Error('Position must be a positive integer');
    }

    const primeN = PrimeNumbers?.calculate(n);
    const fibonacciN = FibonacciSequence?.calculate(n);
    const triangularN1 = TriangularNumbers?.calculate(n + 1);
    const result = (-3 * primeN) - fibonacciN + (5 * triangularN1);

    return {
      primeN,
      fibonacciN,
      triangularN1,
      result,
      breakdown: `(-3 × ${primeN}) - ${fibonacciN} + (5 × ${triangularN1}) = ${-3 * primeN} - ${fibonacciN} + ${5 * triangularN1} = ${result}`
    };
  }
}

const MathematicalSeries = {
  triangular: TriangularNumbers,
  fibonacci: FibonacciSequence,
  prime: PrimeNumbers,
  serie: SerieFormula,

  calculate(seriesType, position) {
    const series = this[seriesType];
    if (!series) {
      throw new Error(`Unknown series type: ${seriesType}`);
    }
    return series?.calculate(position);
  },

  getFormula(seriesType) {
    const series = this[seriesType];
    if (!series) {
      throw new Error(`Unknown series type: ${seriesType}`);
    }
    return series?.getFormula();
  },

  getName(seriesType, language = 'es') {
    const series = this[seriesType];
    if (!series) {
      throw new Error(`Unknown series type: ${seriesType}`);
    }
    return series?.getName(language);
  },

  getDetailedCalculation(seriesType, position) {
    if (seriesType === 'serie') {
      return SerieFormula?.getDetailedCalculation(position);
    }
    return null;
  }
};

export default MathematicalSeries;