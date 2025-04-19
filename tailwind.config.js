module.exports = {
  content: ["./*.html", "./assets/**/*.js"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "540px",
      // => @media (min-width: 576px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "960px",
      // => @media (min-width: 992px) { ... }

      xl: "1140px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1400px) { ... }
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        black: "#1F2937",         // Text Primary - For main headings and text
        "dark-700": "#4B5563",    // Text Secondary - For subtitles and secondary text
        dark: {
          DEFAULT: "#111928",     // Keeping dark mode colors
          2: "#1F2A37",          // Keeping dark mode colors
          3: "#374151",          // Keeping dark mode colors
          4: "#4B5563",          // Keeping dark mode colors
          5: "#6B7280",          // Keeping dark mode colors
          6: "#9CA3AF",          // Keeping dark mode colors
          7: "#D1D5DB",          // Keeping dark mode colors
          8: "#E5E7EB",          // Keeping dark mode colors
        },
        primary: "#1D4ED8",       // Primary - Buttons, links, CTAs
        secondary: "#34D399",     // Secondary - Highlights, secondary buttons
        accent: "#1D4ED8",        // Accent - Callouts, icons, special elements
        highlight: "#FACC15",     // Highlight - Alerts, badges, notifications
        white: "#FFFFFF",
        lightblue: "#EFF6FF",
        
        // Background colors
        "gray-1": "#F9FAFB",      // Background - Main background
        "gray-2": "#FFFFFF",      // Surface - Cards, modals, headers
        
        // Utility colors
        "body-color": "#1F2937",      // Text Primary - Same as black
        "body-secondary": "#4B5563",   // Text Secondary - Same as dark-700
        stroke: "#E5E7EB",            // Border - Dividers, input borders
        
        // You can remove these if not needed
        "blue-dark": "#1e40af",       // Darker shade of primary for hover states
        "gray-7": "#9CA3AF",          // Additional gray if needed
      },
      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        form: "0px 1px 55px -11px rgba(0, 0, 0, 0.01)",
        pricing: "0px 0px 40px 0px rgba(0, 0, 0, 0.08)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 10px 20px 0px rgba(92, 115, 160, 0.07)",
        "testimonial-btn": "0px 8px 15px 0px rgba(72, 72, 138, 0.08)",
        1: "0px 1px 3px 0px rgba(166, 175, 195, 0.40)",
        2: "0px 5px 12px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
