/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        bg2: '#0A0A0A',
        bg3: '#141414',
        bg4: '#1E1E1E',
        accent: '#FACC15', // Yellow
        violet: '#EAB308', // Secondary Yellow
        amber: '#CA8A04', // Tertiary Yellow
        textLight: '#FFFFFF',
        muted: '#A3A3A3',
        dim: '#737373',
        borderC: 'rgba(250, 204, 21, 0.2)', // based on yellow
        borderW: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
