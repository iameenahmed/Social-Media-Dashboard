/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        LimeGreen: "hsl(163, 72%, 41%)",
        BrightRed: "hsl(356, 69%, 56%)",

        Toggle: "hsl(230, 22%, 74%)",
        pattern: "var(--bg-pattern-color)",

        "primary-text": "var(--primary-text-color)",
        "primary-bg": "var(--primary-bg-color)",
        "secondary-bg": "var(--secondary-bg-color)",
        "secondary-text": "var(--secondary-text-color)",
      },
      backgroundImage: {
        ToggleGradient:
          "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
        Instagram:
          "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
        Facebook:
          "linear-gradient(to right, hsl(208, 92%, 53%), hsl(208, 92%, 53%))",
        Twitter:
          "linear-gradient(to right, hsl(203, 89%, 53%), hsl(203, 89%, 53%))",
        YouTube:
          "linear-gradient(to right, hsl(348, 97%, 39%), hsl(348, 97%, 39%))",
      },
    },
  },

  plugins: [],
};
