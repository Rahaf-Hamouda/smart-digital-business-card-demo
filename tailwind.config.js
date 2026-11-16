/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tajawal', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 28px 90px -36px rgba(76, 29, 149, 0.45)',
        lift: '0 14px 30px -20px rgba(76, 29, 149, 0.45)',
      },
      maxWidth: {
        card: '28rem',
      },
    },
  },
  plugins: [],
};
