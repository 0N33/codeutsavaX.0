/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        comic: {
          orange: "#FF9820",
          "orange-dark": "#E67E00",
          "orange-pop": "#FF7A00",
          yellow: "#FFD028",
          "yellow-comic": "#FFE600",
          pink: "#FFA6C9",
          "pink-hot": "#FF2A7A",
          "pink-light": "#FFE5EF",
          blue: "#2958FF",
          "blue-sky": "#40A2FF",
          "blue-dark": "#0B1B54",
          cyan: "#00F0FF",
          green: "#26DE81",
          "green-neon": "#00FF88",
          purple: "#8854D0",
          "purple-neon": "#B800FF",
          cream: "#FFF6E5",
          paper: "#FF9D35",
          "paper-warm": "#FF8A18",
          dark: "#121214",
          border: "#18181B",
          gray: "#E2DDD5"
        },
        nit: {
          red: "#D63031",
          gold: "#F39C12",
          blue: "#0984E3"
        }
      },
      fontFamily: {
        comic: ['"Fredoka"', 'system-ui', 'sans-serif'],
        bangers: ['"Bangers"', 'cursive'],
        hand: ['"Patrick Hand"', 'cursive'],
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'comic-sm': '3px 3px 0px #18181B',
        'comic': '5px 5px 0px #18181B',
        'comic-lg': '8px 8px 0px #18181B',
        'comic-xl': '12px 12px 0px #18181B',
        'comic-pink': '6px 6px 0px #FF2A7A',
        'comic-blue': '6px 6px 0px #2958FF',
        'comic-yellow': '6px 6px 0px #FFE600',
        'comic-red': '5px 5px 0px #D63031',
        'spider-glitch': '4px 4px 0px #00F0FF, -3px -3px 0px #FF2A7A',
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3.5s ease-in-out 1.5s infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'cloud-drift': 'cloudDrift 25s linear infinite',
        'panel-pop': 'panelPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'spider-glitch': 'spiderGlitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        cloudDrift: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        panelPop: {
          '0%': { opacity: '0', transform: 'scale(0.92) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        spiderGlitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        }
      }
    },
  },
  plugins: [],
}
