/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      "mainColour": "#4461F2",
      "secondaryColour": "#F0F4FC",
      "whiteColour": "#F9F9F9",
      "blackColour": "#0F0F0F",
      "error":"#f87171"
      /* "lightblueColour": "#EDEFF3"; */
    },
    
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    

    extend: {
      fontSize: {
        "5xl": "50px"
      },
    },
  },
  plugins: [],
}

