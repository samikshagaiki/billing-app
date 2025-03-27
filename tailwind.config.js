/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        primary: { DEFAULT: "#4f46e5", 100: "#e0e7ff", 600: "#4f46e5", 700: "#4338ca" },
        secondary: { DEFAULT: "#10b981", 100: "#d1fae5", 600: "#10b981", 700: "#059669" },
        muted: { DEFAULT: "#e5e7eb", foreground: "#6b7280" },
        destructive: { DEFAULT: "#ef4444" },
        accent: { DEFAULT: "#f59e0b" },
      },
      borderRadius: { md: "0.375rem" },
      boxShadow: {
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};