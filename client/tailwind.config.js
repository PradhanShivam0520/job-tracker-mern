/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {
    colors: {
        primary: {
            50: '#e0fcff',
            100: '#bef8fd',
            200: '#87eaf2',
            300: '#54d1db',
            400: '#38bec9',
            500: '#2cb1bc',
            600: '#14919b',
            700: '#0e7c86',
            800: '#0a6c74',
            900: '#044e54',
        },
        grey: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
        },
        black: '#222',
        white: '#fff',
        red: {
            light: '#f8d7da',
            dark: '#842029',
        },
        green: {
            light: '#d1e7dd',
            dark: '#0f5132',
        },
    },
    fontSize: {
        'small-text': '0.875rem',
        'extra-small-text': '0.7em',
    },
    borderRadius: {
        DEFAULT: '0.25rem',
    },
    letterSpacing: {
        DEFAULT: '1px',
    },
    transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
    },
    

    maxWidth: {
      'max-width': '1120px',
      'fixed-width': '600px',
    },
    width: {
      'fluid-width': '90vw',
     
    },
    height: {
        'nav-height': '6rem',
    },
    boxShadow: {
        'shadow-1': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'shadow-2': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'shadow-3': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'shadow-4': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
},
  plugins: [],
}