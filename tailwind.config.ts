import type { Config } from "tailwindcss";

const config: Config = {
    // darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		// borderRadius: {
  		// 	lg: 'var(--radius)',
  		// 	md: 'calc(var(--radius) - 2px)',
  		// 	sm: 'calc(var(--radius) - 4px)'
  		// },
  		// colors: {}
  	},
  	// maxWidth: {
  	// 	'1/4': '25%',
  	// 	'2/5': '40%',
  	// 	'4/5': '80%',
  	// 	'1/2': '50%',
  	// 	'3/4': '75%'
  	// },
  	// minWidth: {
  	// 	'1/4': '25%',
  	// 	'4/5': '80%',
  	// 	'2/5': '40%',
  	// 	'1/2': '50%',
  	// 	'3/4': '75%'
  	// }
  },
  plugins: [
    require('tailwind-scrollbar'),
      require("tailwindcss-animate")
],
};
export default config;
