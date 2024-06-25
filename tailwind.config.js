/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    screens: {
      md: "950px",
      lg: "1500px",
    },
    extend: {
      fontFamily: {
        // "...": "..."
      },
      colors: {
        primary: "var(--color-primary)",
        primary_transparent: "var(--color-primary-transparent)",
        text_primary: "var(--color-text_primary)",
        text_secondary: "var(--color-text_secondary)",
        input_primary: "var(--color-input_primary)",
        full_screen_shadow: "var(--color-full_screen_shadow)",
        secondary: "var(--color-secondary)",
        hover_secondary: "var(--color-hover_secondary)",
      },
    },
  },
  plugins: [],
};
