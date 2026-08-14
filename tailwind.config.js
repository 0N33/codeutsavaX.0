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
          yellow: "#FFD028",
          pink: "#FFA6C9",
          "pink-hot": "#FF528F",
          "pink-light": "#FFE5EF",
          blue: "#2958FF",
          "blue-sky": "#75B4FF",
          "blue-dark": "#0B1B54",
          green: "#48D17E",
          purple: "#9D4EDD",
          cream: "#FFFBF2",
          paper: "#FDF9EE",
          dark: "#141416",
          border: "#18181B",
          gray: "#E2DDD5"
        },
        nit: {
          red: "#C0392B",
          gold: "#F39C12",
          blue: "#1E3799"
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
        'comic-pink': '6px 6px 0px #FF528F',
        'comic-blue': '6px 6px 0px #2958FF',
        'comic-yellow': '6px 6px 0px #FFD028',
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
        }
      }
    },
  },
  plugins: [],
}
