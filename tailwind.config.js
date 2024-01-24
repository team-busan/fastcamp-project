/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9B28",
        secondary: "#FF6F0F",
        tertiary: "#FFFAE0",
        darkGray: "#505050",
        mediumGray: "#A0A0A0",
        lightGray: "#E5E5E5",
        darkblue: "#1A6CBD",
        mint: "#FF9B28",
        mintlight: "#F2F8FF",
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
};
