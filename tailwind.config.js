/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        forest: "var(--smp-forest)",
        "forest-ink": "var(--smp-forest-ink)",
        brass: "var(--smp-brass)",
        "brass-light": "var(--smp-brass-light)",
        clay: "var(--smp-clay)",
        paper: "var(--smp-paper)",
        "paper-2": "var(--smp-paper-2)",
        ink: "var(--smp-ink)",
        "ink-soft": "var(--smp-ink-soft)",
        line: "var(--smp-line)",
      },
      fontFamily: {
        display: ["Lora", "serif"],
        body: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        sm: "var(--smp-radius-sm)",
        md: "var(--smp-radius-md)",
        lg: "var(--smp-radius-lg)",
      },
      maxWidth: {
        site: "var(--smp-max-width)",
      },
    },
  },
  plugins: [],
};
