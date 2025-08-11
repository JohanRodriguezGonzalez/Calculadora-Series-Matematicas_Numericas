# Calculadora de Series Numericas.

Una aplicación web desarrollada en React que calcula diferentes series numericas incluyendo números triangulares, secuencia de Fibonacci, números primos y una fórmula de serie combinada.

##  Características

- **Calculadora de Series Múltiples**: Soporte para 4 tipos diferentes de series numericas
- **Interfaz Interactiva**: UI moderna y responsive construida con React 18 y Tailwind CSS
- **Validación en Tiempo Real**: Validación de entrada con manejo de errores
- **Visualización de Resultados**: Desglose detallado de cálculos paso a paso
- **Multiidioma**: Soporte para Español e Inglés
- **Testing Completo**: Suite de tests con Jest para todas las funciones numericas

## Series Matemáticas Soportadas

### 1. Números Triangulares
- **Fórmula**: `T(n) = n(n+1)/2`
- **Descripción**: Secuencia que representa números que pueden formar un triángulo equilátero
- **Ejemplos**: 1, 3, 6, 10, 15, 21...

### 2. Secuencia de Fibonacci
- **Fórmula**: `F(n) = F(n-1) + F(n-2)`
- **Descripción**: Cada número es la suma de los dos números anteriores
- **Ejemplos**: 1, 1, 2, 3, 5, 8, 13, 21...

### 3. Números Primos
- **Fórmula**: `P(n) = nth prime`
- **Descripción**: Números naturales mayores que 1 que solo son divisibles por 1 y por sí mismos
- **Ejemplos**: 2, 3, 5, 7, 11, 13, 17, 19...

### 4. Fórmula Serie Combinada
- **Fórmula**: `serie(n) = -3primo(n) - fibonacci(n) + 5triangular(n + 1)`
- **Descripción**: Combinación matemática de las tres series anteriores
- **Ejemplo para n=1**: `-3(2) - 1 + 5(3) = -6 - 1 + 15 = 8`

##  Tecnologías Utilizadas

- **React 18** - Biblioteca principal para construcción de interfaces
- **Vite** - Herramienta de construcción y servidor de desarrollo ultrarrápido
- **Tailwind CSS** - Framework CSS utility-first para diseño responsive
- **Redux Toolkit** - Manejo de estado global simplificado
- **React Router v6** - Enrutado declarativo para aplicaciones React
- **Jest** - Framework de testing para JavaScript
- **React Testing Library** - Utilidades de testing específicas para React
- **Framer Motion** - Biblioteca de animaciones para React

##  Requisitos Previos

- **Node.js** (v14.x)
- **npm** o **yarn**

##  Instalación y Configuración

### 1. Clonar el Repositorio
```bash
git clone <url-del-repositorio>
cd numeric-series-calculator
```

### 2. Instalar Dependencias
```bash
npm install
# o
yarn install
```

### 3. Ejecutar en Desarrollo
```bash
npm start
# o
yarn start
```

La aplicación se abrirá en `http://localhost:4028`

### 4. Ejecutar Tests
```bash
# Ejecutar tests una vez
npm test

# Ejecutar tests en modo watch
npm run test:watch

# Ejecutar tests con coverage
npm run test:coverage
```

### 5. Construir para Producción
```bash
npm run build
# o
yarn build
```

## Estructura del Proyecto

```
numeric-series-calculator/
├── public/                     # Archivos estáticos
│   ├── assets/images/         # Imágenes del proyecto
│   ├── favicon.ico            # Icono de la aplicación
│   └── manifest.json          # Configuración PWA
├── src/
│   ├── components/            # Componentes UI reutilizables
│   │   ├── ui/               # Componentes base (Button, Input, etc.)
│   │   ├── AppImage.jsx      # Componente de imágenes
│   │   ├── AppIcon.jsx       # Componente de iconos
│   │   └── ScrollToTop.jsx   # Utilidad de scroll
│   ├── pages/
│   │   └── mathematical-series-calculator/
│   │       ├── index.jsx     # Página principal del calculadora
│   │       └── components/   # Componentes específicos
│   │           ├── MathematicalSeries.jsx    # Lógica de cálculos
│   │           ├── SeriesSelector.jsx        # Selector de series
│   │           ├── CalculationInput.jsx      # Input de números
│   │           ├── ResultDisplay.jsx         # Visualización de resultados
│   │           ├── ErrorDisplay.jsx          # Manejo de errores
│   │           └── __tests__/               # Tests unitarios
│   │               └── MathematicalSeries.test.js
│   ├── styles/               # Estilos globales
│   │   ├── index.css        # Estilos personalizados
│   │   └── tailwind.css     # Configuración de Tailwind
│   ├── utils/               # Funciones utilitarias
│   ├── App.jsx              # Componente principal
│   ├── Routes.jsx           # Configuración de rutas
│   └── index.jsx            # Punto de entrada
├── .env                     # Variables de entorno
├── package.json            # Dependencias y scripts
├── tailwind.config.js      # Configuración de Tailwind CSS
├── babel.config.js         # Configuración de Babel para tests
└── README.md              # Documentación del proyecto
```


### Cobertura de Tests
Los tests cubren:
-  Cálculos correctos para todas las series
- Validación de entrada y manejo de errores
- Funciones de utilidad (fórmulas, nombres)
- Integración entre componentes
- Casos edge y valores límite

##  Uso de la Aplicación

1. **Seleccionar Serie**: Elige entre las 4 series matemáticas disponibles
2. **Ingresar Posición**: Introduce un número entero positivo (n)
3. **Ver Resultado**: Observa el cálculo y, para la serie combinada, el desglose paso a paso
4. **Validación Automática**: La aplicación valida la entrada y muestra mensajes de error si es necesario

### Ejemplos de Uso

#### Números Triangulares (n=5)
- **Resultado**: 15
- **Cálculo**: `T(5) = 5(5+1)/2 = 5×6/2 = 15`

#### Serie Combinada (n=2)
- **Resultado**: 20
- **Desglose**: `(-3×3) - 1 + (5×6) = -9 - 1 + 30 = 20`

##  Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run serve` - Sirve la versión de producción localmente
- `npm test` - Ejecuta los tests
- `npm run test:watch` - Ejecuta tests en modo watch
- `npm run test:coverage` - Genera reporte de cobertura de tests










