import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
  	extend: {
  		colors: {
  			background: 'rgb(25,28,33)',
  			foreground: 'var(--foreground)',
  			black: 'rgba(0, 0, 0, 1)',
  			gray: 'rgba(130, 130, 130, 1)'
  		},
  		height: {
  			screen: ["100vh", "100dvh"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
