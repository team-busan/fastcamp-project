/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0AC7CE",
        secondary: "#268AFF",
        tertiary: "#0C4B75",
        darkGray: "#505050",
        mediumGray: "#A0A0A0",
        lightGray: "#E5E5E5",
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
};
