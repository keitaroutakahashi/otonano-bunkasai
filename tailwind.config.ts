import type { Config } from "tailwindcss";

export default {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
      height: {
        "110": "28rem",
        "152": "38rem",
      },
      colors: {
        background: "rgb(25,28,33)",
        foreground: "var(--foreground)",
        black: "rgba(0, 0, 0, 1)",
        gray: "rgba(130, 130, 130, 1)",
        primary: "#48CFCB",
        secondary: "#FF7000",
        tertiary: "rgba(158,55,130,1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
