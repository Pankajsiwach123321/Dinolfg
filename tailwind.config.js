/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        "chewy": 'chewy',
        'BalsamiqSans': 'Balsamiq Sans',
        'lucky': 'lucky',
      },
      backgroundSize: {
        'fullsize': '100% 100%'
      },
      animation: {
        'movebike2': 'heroheart 20s linear  infinite',
        'movebike1': 'heroheart2 20s linear  infinite',
        'movebike3': 'heroheart3 20s linear  infinite',
        'herobounceanimnate': 'herobounce 1s linear  infinite alternate',
        'airopalneanimation': 'airopalne 5s linear  infinite alternate',
      },
      keyframes: {
        heroheart: {
          '0%': { transform: 'translateX(0) rotate3d(1, 1, 1, 0deg)' },
          '100%': { transform: 'translateX(-100vw) rotate3d(1, 1, 1, 45deg)' }
        },
        heroheart3: {
          '0%': { transform: 'translateX(0) ' },
          '100%': { transform: 'translateX(-100vw) ' }
        },
        heroheart2: {
          '0%': { transform: 'translateX(0)  ' },
          '100%': { transform: 'translateX(328px) ' }
        },
        herobounce: {
          '0%': { transform: 'translateY(0)  ' },
          '100%': { transform: 'translateY(-3%) ' }
        },
        airopalne: {
          '0%': { transform: 'rotateX(0)  ' },
          '100%': { transform: 'rotateX(40deg) ' }
        },
      }
    },
  },
  plugins: [],
}

