/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
        screens: {
          "2xl": "1400px",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Consolas", "monospace"],
      },
      colors: {
        // Base layers - dark graphite/ink system
        base: {
          900: "#0a0a0a", // Deepest background
          800: "#111111", // Main background
          700: "#1a1a1a", // Elevated panel
          600: "#242424", // Inset panel
          500: "#2e2e2e", // Border/divider
        },
        // Terminal green accent (primary)
        terminal: {
          50: "#e6fff2",
          100: "#b3ffe0",
          200: "#80ffce",
          300: "#4dffbc",
          400: "#1affaa",
          500: "#00ff9f", // Main terminal green
          600: "#00cc7f",
          700: "#00995f",
          800: "#006640",
          900: "#003320",
        },
        // Amber warning/highlight
        amber: {
          50: "#fff9e6",
          100: "#ffecb3",
          200: "#ffe080",
          300: "#ffd34d",
          400: "#ffc61a",
          500: "#ffb800", // Main amber
          600: "#cc9300",
          700: "#996e00",
          800: "#664a00",
          900: "#332500",
        },
        // Red danger/alert
        danger: {
          50: "#ffe6e6",
          100: "#ffb3b3",
          200: "#ff8080",
          300: "#ff4d4d",
          400: "#ff1a1a",
          500: "#ff0000", // Main red
          600: "#cc0000",
          700: "#990000",
          800: "#660000",
          900: "#330000",
        },
        // Muted neutral for body text
        muted: {
          50: "#f5f5f5",
          100: "#e5e5e5",
          200: "#d4d4d4",
          300: "#a3a3a3",
          400: "#737373",
          500: "#525252", // Main muted
          600: "#404040",
          700: "#2e2e2e",
          800: "#1c1c1c",
          900: "#0a0a0a",
        },
        // Status colors
        status: {
          production: "#00ff9f",
          tinkering: "#ffb800",
          archived: "#737373",
          monitoring: "#00ccff",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
        terminal: "0.125rem", // Sharp terminal corners
      },
      boxShadow: {
        terminal: "0 0 20px rgba(0, 255, 159, 0.15)",
        "terminal-lg": "0 0 40px rgba(0, 255, 159, 0.2)",
        glow: "0 0 30px rgba(0, 255, 159, 0.3)",
        panel: "0 4px 6px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
        "scanline": "repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)",
        "terminal-gradient": "linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)",
      },
      backgroundSize: {
        "grid": "40px 40px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "scanline": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "terminal-blink": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 255, 159, 0.15)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 255, 159, 0.3)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scanline": "scanline 8s linear infinite",
        "terminal-blink": "terminal-blink 1s step-end infinite",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#d4d4d4",
            a: {
              color: "#00ff9f",
              "&:hover": {
                color: "#00cc7f",
              },
            },
            code: {
              color: "#ffb800",
              backgroundColor: "#1a1a1a",
              padding: "0.25rem 0.5rem",
              borderRadius: "0.25rem",
              fontWeight: "400",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
