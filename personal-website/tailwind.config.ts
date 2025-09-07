import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ucalgary-red': '#D6001C',
        'ucalgary-gold': '#FFCD00',
        'ucalgary-black': '#000000',
        'ucalgary-white': '#FFFFFF',
        'ucalgary-grey': '#a7a9ac',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
