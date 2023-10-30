import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  safelist: [
    "p-1",
    "p-2",
    "p-3",
    "p-4",
    "p-5",
    "pb-1",
    "pb-2",
    "pb-3",
    "pb-4",
    "pb-5",
    "mb-1",
    "mb-2",
    "mb-3",
    "mb-4",
    "mb-5",
    "w-1",
    "w-2",
    "w-3",
    "w-4",
    "w-5",
    "h-1",
    "h-2",
    "h-3",
    "h-4",
    "h-5",
    "text-xs",
    "text-sm",
    "text-base",
    "text-lg",
    "text-xl",
    "text-2xl",
    "text-3xl",
    "bg-[#eef0f0]",
  ],
  plugins: [],
};
export default config;
