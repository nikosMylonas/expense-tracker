/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkSlateGray: '#2f4f4f',
        dimGray: '#696969',
        darkGray: '#a9a9a9',
        slateGray: '#798090',
        chocolate: '#d2691e',
        sandyBrown: '#f4a460',
        royalBlue: '#4169e1',
        dodgerBlue: '#1e90ff'
      }
    },
  },
  plugins: [],
};
