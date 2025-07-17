/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#ff6ec7',
        'neon-blue': '#00d4ff',
        'neon-purple': '#9d4edd',
        'cyber-black': '#0a0a0a',
        'cyber-gray': '#1a1a1a',
        'cyber-light': '#2a2a2a',
        'anime-pink': '#ff69b4',
        'anime-blue': '#87ceeb',
        'anime-purple': '#da70d6',
        'glow-pink': '#ff1493',
        'glow-blue': '#00bfff',
        'glow-purple': '#9370db'
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'anime': ['Comic Sans MS', 'cursive'],
        'tech': ['Courier New', 'monospace']
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'neon-flicker': 'neonFlicker 1.5s infinite alternate'
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #ff6ec7, 0 0 10px #ff6ec7, 0 0 15px #ff6ec7' },
          '100%': { boxShadow: '0 0 10px #ff6ec7, 0 0 20px #ff6ec7, 0 0 30px #ff6ec7' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        neonFlicker: {
          '0%': { textShadow: '0 0 4px #fff, 0 0 10px #fff, 0 0 20px #ff6ec7' },
          '100%': { textShadow: '0 0 4px #fff, 0 0 10px #ff6ec7, 0 0 20px #ff6ec7, 0 0 30px #ff6ec7' }
        }
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(45deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)',
        'neon-gradient': 'linear-gradient(45deg, #ff6ec7 0%, #00d4ff 50%, #9d4edd 100%)',
        'anime-gradient': 'linear-gradient(45deg, #ff69b4 0%, #87ceeb 50%, #da70d6 100%)'
      }
    },
  },
  plugins: [],
} 