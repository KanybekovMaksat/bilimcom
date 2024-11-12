export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'profile-background': 'bgAnimation 20s linear infinite',
        'gradient-move': 'gradientMove 15s ease infinite',
        'slow-move': 'slowMove 12s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
        bgAnimation: {
          '0%': { backgroundPosition: 'top left' },
          '100%': { backgroundPosition: 'bottom right' },
        },
        gradientMove: {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
        slowMove: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundSize: {
        '200': '200%',
        '300': '300%',
      },
    },
  },
  plugins: [],
};
