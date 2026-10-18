/** @type {import('tailwindcss').Config} */
export default {
  // Ensure dark mode is supported via a class on the html/body tag
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "text-slide": {
          // 0-30%: Show 1st "Health"
          "0%, 30%": { transform: "translateY(0%)" },
          // 35-65%: Show "Wealth"
          "35%, 65%": { transform: "translateY(-33.33%)" },
          // 70-95%: Show 2nd "Health" (looks like the 1st one)
          "70%, 95%": { transform: "translateY(-66.66%)" },
          // 100%: Reset instantly to top
          "100%": { transform: "translateY(-66.66%)" },
        },
      },
      animation: {
        "text-slide": "text-slide 8s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Archivo: ["Archivo", "sans-serif"],
      },
      colors: {
        // Shadcn UI color mappings
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};