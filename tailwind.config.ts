import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          '500': '#ef6f12',
        },
        yellow: {
          '400': '#fbac2a',
        },
        cream: {
          '100': '#fdd9a6',
        }
      }
    },
  },
  plugins: [],
};
export default config;
