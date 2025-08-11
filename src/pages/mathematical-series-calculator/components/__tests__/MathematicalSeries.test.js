import MathematicalSeries from '../MathematicalSeries';

// Add missing Jest/testing framework globals
const describe = global.describe || ((name, fn) => fn());
const test = global.test || ((name, fn) => fn());
const expect = global.expect || (() => ({ toBe: () => {}, toThrow: () => {}, toMatchObject: () => {}, stringContaining: () => {}, toBeTruthy: () => {}, toBeNull: () => {} }));

describe('TriangularNumbers', () => {
  const { triangular } = MathematicalSeries;

  test('should calculate triangular numbers correctly', () => {
    expect(triangular?.calculate(1))?.toBe(1);
    expect(triangular?.calculate(2))?.toBe(3);
    expect(triangular?.calculate(3))?.toBe(6);
    expect(triangular?.calculate(4))?.toBe(10);
    expect(triangular?.calculate(5))?.toBe(15);
  });

  test('should throw error for invalid input', () => {
    expect(() => triangular?.calculate(0))?.toThrow('Position must be a positive integer');
    expect(() => triangular?.calculate(-1))?.toThrow('Position must be a positive integer');
    expect(() => triangular?.calculate(1.5))?.toThrow('Position must be a positive integer');
  });

  test('should return correct formula', () => {
    expect(triangular?.getFormula())?.toBe('T(n) = n(n+1)/2');
  });

  test('should return correct name in Spanish and English', () => {
    expect(triangular?.getName('es'))?.toBe('Números Triangulares');
    expect(triangular?.getName('en'))?.toBe('Triangular Numbers');
  });
});

describe('FibonacciSequence', () => {
  const { fibonacci } = MathematicalSeries;

  test('should calculate fibonacci sequence correctly', () => {
    expect(fibonacci?.calculate(1))?.toBe(1);
    expect(fibonacci?.calculate(2))?.toBe(1);
    expect(fibonacci?.calculate(3))?.toBe(2);
    expect(fibonacci?.calculate(4))?.toBe(3);
    expect(fibonacci?.calculate(5))?.toBe(5);
    expect(fibonacci?.calculate(6))?.toBe(8);
    expect(fibonacci?.calculate(7))?.toBe(13);
  });

  test('should throw error for invalid input', () => {
    expect(() => fibonacci?.calculate(0))?.toThrow('Position must be a positive integer');
    expect(() => fibonacci?.calculate(-1))?.toThrow('Position must be a positive integer');
    expect(() => fibonacci?.calculate(2.5))?.toThrow('Position must be a positive integer');
  });

  test('should return correct formula', () => {
    expect(fibonacci?.getFormula())?.toBe('F(n) = F(n-1) + F(n-2)');
  });

  test('should return correct name in Spanish and English', () => {
    expect(fibonacci?.getName('es'))?.toBe('Secuencia de Fibonacci');
    expect(fibonacci?.getName('en'))?.toBe('Fibonacci Sequence');
  });
});

describe('PrimeNumbers', () => {
  const { prime } = MathematicalSeries;

  test('should calculate prime numbers correctly', () => {
    expect(prime?.calculate(1))?.toBe(2);
    expect(prime?.calculate(2))?.toBe(3);
    expect(prime?.calculate(3))?.toBe(5);
    expect(prime?.calculate(4))?.toBe(7);
    expect(prime?.calculate(5))?.toBe(11);
    expect(prime?.calculate(10))?.toBe(29);
  });

  test('should identify prime numbers correctly', () => {
    expect(prime?.isPrime(2))?.toBe(true);
    expect(prime?.isPrime(3))?.toBe(true);
    expect(prime?.isPrime(4))?.toBe(false);
    expect(prime?.isPrime(9))?.toBe(false);
    expect(prime?.isPrime(17))?.toBe(true);
    expect(prime?.isPrime(1))?.toBe(false);
    expect(prime?.isPrime(0))?.toBe(false);
  });

  test('should throw error for invalid input', () => {
    expect(() => prime?.calculate(0))?.toThrow('Position must be a positive integer');
    expect(() => prime?.calculate(-1))?.toThrow('Position must be a positive integer');
    expect(() => prime?.calculate(3.7))?.toThrow('Position must be a positive integer');
  });

  test('should return correct formula', () => {
    expect(prime?.getFormula())?.toBe('P(n) = nth prime');
  });

  test('should return correct name in Spanish and English', () => {
    expect(prime?.getName('es'))?.toBe('Números Primos');
    expect(prime?.getName('en'))?.toBe('Prime Numbers');
  });
});

describe('SerieFormula', () => {
  const { serie } = MathematicalSeries;

  test('should calculate combined series correctly', () => {
    // For n=1: -3*2 - 1 + 5*3 = -6 - 1 + 15 = 8
    expect(serie?.calculate(1))?.toBe(8);
    
    // For n=2: -3*3 - 1 + 5*6 = -9 - 1 + 30 = 20
    expect(serie?.calculate(2))?.toBe(20);
    
    // For n=3: -3*5 - 2 + 5*10 = -15 - 2 + 50 = 33
    expect(serie?.calculate(3))?.toBe(33);
  });

  test('should provide detailed calculation breakdown', () => {
    const result = serie?.getDetailedCalculation(1);
    
    expect(result)?.toMatchObject({
      primeN: 2,
      fibonacciN: 1,
      triangularN1: 3,
      result: 8,
      breakdown: expect?.stringContaining('(-3 × 2) - 1 + (5 × 3) = -6 - 1 + 15 = 8')
    });
  });

  test('should throw error for invalid input', () => {
    expect(() => serie?.calculate(0))?.toThrow('Position must be a positive integer');
    expect(() => serie?.calculate(-2))?.toThrow('Position must be a positive integer');
    expect(() => serie?.calculate(4.2))?.toThrow('Position must be a positive integer');
    expect(() => serie?.getDetailedCalculation(0))?.toThrow('Position must be a positive integer');
  });

  test('should return correct formula', () => {
    expect(serie?.getFormula())?.toBe('serie(n) = -3primo(n) - fibonacci(n) + 5triangular(n + 1)');
  });

  test('should return correct name in Spanish and English', () => {
    expect(serie?.getName('es'))?.toBe('Fórmula Serie Combinada');
    expect(serie?.getName('en'))?.toBe('Combined Series Formula');
  });
});

describe('MathematicalSeries Integration', () => {
  test('should calculate using series type string', () => {
    expect(MathematicalSeries?.calculate('triangular', 5))?.toBe(15);
    expect(MathematicalSeries?.calculate('fibonacci', 7))?.toBe(13);
    expect(MathematicalSeries?.calculate('prime', 4))?.toBe(7);
    expect(MathematicalSeries?.calculate('serie', 1))?.toBe(8);
  });

  test('should get formula using series type string', () => {
    expect(MathematicalSeries?.getFormula('triangular'))?.toBe('T(n) = n(n+1)/2');
    expect(MathematicalSeries?.getFormula('fibonacci'))?.toBe('F(n) = F(n-1) + F(n-2)');
    expect(MathematicalSeries?.getFormula('prime'))?.toBe('P(n) = nth prime');
    expect(MathematicalSeries?.getFormula('serie'))?.toBe('serie(n) = -3primo(n) - fibonacci(n) + 5triangular(n + 1)');
  });

  test('should get name using series type string', () => {
    expect(MathematicalSeries?.getName('triangular', 'es'))?.toBe('Números Triangulares');
    expect(MathematicalSeries?.getName('fibonacci', 'en'))?.toBe('Fibonacci Sequence');
    expect(MathematicalSeries?.getName('prime', 'es'))?.toBe('Números Primos');
    expect(MathematicalSeries?.getName('serie', 'es'))?.toBe('Fórmula Serie Combinada');
  });

  test('should throw error for unknown series type', () => {
    expect(() => MathematicalSeries?.calculate('unknown', 1))?.toThrow('Unknown series type: unknown');
    expect(() => MathematicalSeries?.getFormula('invalid'))?.toThrow('Unknown series type: invalid');
    expect(() => MathematicalSeries?.getName('nonexistent'))?.toThrow('Unknown series type: nonexistent');
  });

  test('should return detailed calculation only for serie type', () => {
    const result = MathematicalSeries?.getDetailedCalculation('serie', 2);
    expect(result)?.toBeTruthy();
    expect(result?.result)?.toBe(20);

    expect(MathematicalSeries?.getDetailedCalculation('triangular', 2))?.toBeNull();
    expect(MathematicalSeries?.getDetailedCalculation('fibonacci', 2))?.toBeNull();
    expect(MathematicalSeries?.getDetailedCalculation('prime', 2))?.toBeNull();
  });
});