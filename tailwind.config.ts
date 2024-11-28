import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'wave-blue': '#25BCE1',
        'wave-dark': '#1A1A1A',
      },
      backgroundImage: {
        'gradient-wave': 'linear-gradient(45deg, #25BCE1, #1FB5DC)',
      }
    },
  },
  plugins: [],
});

export default config;
