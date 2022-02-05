module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'media' /* "media" => default, "class" => personal */,
  plugins: [require('@tailwindcss/forms')],
};
