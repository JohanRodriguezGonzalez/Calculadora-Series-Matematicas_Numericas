/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", 
        input: "var(--color-input)", 
        ring: "var(--color-ring)", 
        background: "var(--color-background)", 
        foreground: "var(--color-foreground)", 
        primary: {
          DEFAULT: "var(--color-primary)", 
          foreground: "var(--color-primary-foreground)", 
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", 
          foreground: "var(--color-secondary-foreground)", 
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", 
          foreground: "var(--color-destructive-foreground)", 
        },
        muted: {
          DEFAULT: "var(--color-muted)", 
          foreground: "var(--color-muted-foreground)", 
        },
        accent: {
          DEFAULT: "var(--color-accent)", 
          foreground: "var(--color-accent-foreground)", 
        },
        popover: {
          DEFAULT: "var(--color-popover)", 
          foreground: "var(--color-popover-foreground)", 
        },
        card: {
          DEFAULT: "var(--color-card)", 
          foreground: "var(--color-card-foreground)", 
        },
        success: {
          DEFAULT: "var(--color-success)", 
          foreground: "var(--color-success-foreground)", 
        },
        warning: {
          DEFAULT: "var(--color-warning)", 
          foreground: "var(--color-warning-foreground)", 
        },
        error: {
          DEFAULT: "var(--color-error)", 
          foreground: "var(--color-error-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'caption': ['Inter', 'sans-serif'],
        'data': ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'focus-ring': 'focusRing 200ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        focusRing: {
          '0%': { boxShadow: '0 0 0 0 var(--color-ring)' },
          '100%': { boxShadow: '0 0 0 2px var(--color-ring)' },
        },
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}