import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'gray-table-bg': 'rgba(15, 23, 42, 0.03)',
        'modal-shadow-bg': 'rgba(15, 23, 42, 0.45)',
        'gray-main': '#CBD5E1'
      },
      fontSize: {
        '15': '15px',
        '13': '13px',
      }
    },
  },
  plugins: [],
};
export default config;
