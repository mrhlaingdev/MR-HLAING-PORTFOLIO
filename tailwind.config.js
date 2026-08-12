/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx,html}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: '#0a0d12',
        charcoal: '#111722',
        slateGlow: '#172033',
        violetAccent: '#8b5cf6',
        cyanAccent: '#22d3ee',
      },
      boxShadow: {
        cinematic: '0 24px 80px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255,255,255,0.04)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(34, 211, 238, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.12) 1px, transparent 1px)',
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
