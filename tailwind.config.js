module.exports = {
  purge: [],
  darkMode: false,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "Inter",
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      ],
      mono: ["Consolas", "ui-monospace", "monospace"],
    },
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      md: ["14px", "20px"],
      l: ["16px", "24px"],
      xl: ["18px", "24px"],
      "2xl": ["24px", "32px"],
      "3xl": ["30px", "36px"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      mattorget: {
        green: "#769F89",
      },
      primary: {
        DEFAULT: " #5F9C7F",
        50: "#E6F1F7",
        100: "#BFDBE9",
        200: "#9AC3D8",
        300: "#78AAC6",
        500: "#39749B",
        600: "#1D5883",
        700: "#1E4968",
      },
      gray: {
        DEFAULT: "#F3F4F6",
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },
      white: "#FFF",
      error: {
        DEFAULT: "#EF4444",
      },
      purple: {
        100: "#EDE9FE",
        800: "#5B21B6",
      },
      blue: {
        100: "#DBEAFE",
        300: "#0000EE",
        500: "#3B82F6",
        800: "#1E40AF",
      },
      yellow: {
        50: "#FFFBEB",
        100: "#FEF3C7",
        400: "#FBBF24",
        500: "#F59E0B",
        800: "#92400E",
      },
      green: {
        DEFAULT: "#5F9C7F",
        50: "#ECFDF5",
        100: "#D1FAE5",
        400: "#34D399",
        500: "#769F89",
        600: "#059669",
        800: "#065F46",
      },
      red: {
        100: "#FEE2E2",
        500: "#EF4444",
        600: "#DC2626",
        700: "#C77777",
        800: "#991B1B",
        900: "#7F1D1D",
      },
    },
    spacing: {
      px: "1px",
      0: "0px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
    },
    extend: {
      borderWidth: {
        DEFAULT: "1px",
        2: "1.5px",
        3: "2px",
      },
      borderColor: {
        DEFAULT: "#D1D5DB",
      },
      // fontSize: {
      //   'xxs': '.5rem',
      // },
      // width: {
      //   'fit': 'fit-content'
      // },
      // transformOrigin: {
      //   "0": "0%",
      // },
      // zIndex: {
      //   "-1": "-1",
      //   "10000": "10000"
      // },
      // height: {
      //   headerHeight: '80px',
      //   'fit': 'fit-content'
      // },
      width: {
        256: "256px",
      },
      maxWidth: {
        448: "448px",
        1920: "1920px",
        5: "5rem",
        10: "10rem",
        15: "15rem",
      },
      minWidth: {
        400: "400px",
      },
      flexBasis: {
        10: "10%",
      },

      // borderRadius: {
      //   '1/2': '50%'
      // },
      // spacing: {
      //   headerHeight: '80px',

      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
