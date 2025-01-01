/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        eventCardDate: "#5669FF",
      },
      typography: {
        DEFAULT: {
          css: {
            fontSize: "1.45rem", // Increase the base font size for all prose content
            lineHeight: "1.75", // Adjust line height for better readability
            h1: {
              fontSize: "3rem", // Larger font size for h1 headings
            },
            h2: {
              fontSize: "2.5rem", // Larger font size for h2 headings
            },
            h3: {
              fontSize: "2rem", // Larger font size for h3 headings
            },
            p: {
              fontSize: "1.45rem", // Increase font size specifically for paragraphs
              marginBottom: "1.25em", // Space below paragraphs
            },
            // You can continue to add or adjust styles for other HTML elements
          },
        },
        custom: {
          // This is your custom typography class
          css: {
            margin: 0,
            padding: 0,
            maxWidth: "none", // Use 'none' to allow it to expand fully
            // other styles you want to apply only to `.prose-custom`...
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
