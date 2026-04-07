// Professional Enterprise Theme - Base UI + Fluent UI
export const theme = {
  // ===== COLOR PALETTE =====
  colors: {
    // Primary Brand Colors
    primary: {
      main: '#0078d4', // Professional Microsoft Blue
      light: '#50e6ff',
      lighter: '#c7e0f4',
      dark: '#005a9e',
      contrast: '#ffffff',
    },
    // Secondary Accent
    secondary: {
      main: '#107c10', // Professional Green
      light: '#4caf50',
      dark: '#004b1c',
      contrast: '#ffffff',
    },
    // Status Colors
    success: {
      main: '#107c10',
      light: '#4caf50',
      dark: '#004b1c',
      bg: '#dffcf0',
      contrast: '#ffffff',
    },
    warning: {
      main: '#ffb900',
      light: '#fff4ce',
      dark: '#d98100',
      bg: '#fff4ce',
      contrast: '#323130',
    },
    danger: {
      main: '#d13438',
      light: '#fab6b6',
      dark: '#8b0c00',
      bg: '#fed9cc',
      contrast: '#ffffff',
    },
    info: {
      main: '#0078d4',
      light: '#c7e0f4',
      dark: '#005a9e',
      bg: '#eaf3f5',
      contrast: '#ffffff',
    },
    // Neutral/Gray Scale
    neutral: {
      0: '#ffffff',
      10: '#faf9f8',
      20: '#f3f2f1',
      30: '#edebe9',
      40: '#e1dfdd',
      50: '#d2d0ce',
      60: '#c8c6c4',
      70: '#bbb9b8',
      80: '#a19f9d',
      90: '#848382',
      100: '#6d6b69',
      110: '#4a4844',
      120: '#323130',
      130: '#27262c',
      140: '#000000',
    },
    // Text Colors
    text: {
      primary: '#323130',
      secondary: '#605e5c',
      tertiary: '#797775',
      light: '#a19f9d',
      lightest: '#d2d0ce',
      inverse: '#ffffff',
      disabled: '#c8c6c4',
    },
    // Background Colors
    bg: {
      primary: '#ffffff',
      secondary: '#f3f2f1',
      tertiary: '#edebe9',
      quaternary: '#e1dfdd',
      dark: '#323130',
      overlay: 'rgba(0, 0, 0, 0.3)',
      disabled: '#f3f2f1',
    },
    // Border Colors
    border: {
      light: '#e1dfdd',
      medium: '#c8c6c4',
      dark: '#605e5c',
    },
  },

  // ===== SHADOWS =====
  shadows: {
    none: 'none',
    xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
    sm: '0 2px 4px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.10)',
    md: '0 4px 8px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.12)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.10), 0 4px 8px rgba(0, 0, 0, 0.14)',
    xl: '0 16px 32px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.16)',
    '2xl': '0 20px 40px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.20)',
    // Elevation Shadows (Material Design inspired)
    elevation1: '0 2px 4px rgba(0, 0, 0, 0.08)',
    elevation2: '0 4px 8px rgba(0, 0, 0, 0.12)',
    elevation3: '0 8px 16px rgba(0, 0, 0, 0.15)',
    elevation4: '0 12px 24px rgba(0, 0, 0, 0.18)',
  },

  // ===== SPACING =====
  spacing: {
    0: '0',
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    '2xl': '3rem', // 48px
    '3xl': '4rem', // 64px
    '4xl': '5rem', // 80px
  },

  // ===== BORDER RADIUS =====
  borderRadius: {
    none: '0',
    xs: '2px',
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    circle: '50%',
  },

  // ===== TYPOGRAPHY =====
  typography: {
    fontFamily: {
      base: "'Segoe UI', 'Helvetica Neue', sans-serif",
      mono: "'Courier New', 'Courier', monospace",
      display: "'Segoe UI', 'Helvetica Neue', sans-serif",
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
    },
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeight: {
      xs: 1.2,
      sm: 1.4,
      base: 1.5,
      lg: 1.6,
      xl: 1.8,
      '2xl': 2,
    },
    letterSpacing: {
      tight: '-0.02em',
      normal: '0',
      loose: '0.02em',
    },
  },

  // ===== TRANSITIONS / ANIMATIONS =====
  transition: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
    veryslow: '800ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // ===== BREAKPOINTS =====
  breakpoints: {
    xs: '0px',
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // ===== Z-INDEX SCALE =====
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    backdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
    notification: 1080,
  },

  // ===== COMPONENT DEFAULTS =====
  components: {
    button: {
      height: {
        sm: '24px',
        md: '32px',
        lg: '40px',
        xl: '48px',
      },
      padding: {
        sm: '4px 12px',
        md: '8px 16px',
        lg: '12px 24px',
        xl: '16px 32px',
      },
      borderRadius: '4px',
      fontWeight: 500,
      fontSize: '14px',
      transition: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    input: {
      height: '32px',
      borderRadius: '4px',
      borderWidth: '1px',
      padding: '8px 12px',
      fontSize: '14px',
      transition: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    card: {
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.06)',
    },
    modal: {
      borderRadius: '8px',
      boxShadow: '0 16px 32px rgba(0, 0, 0, 0.15)',
    },
  },
};

export default theme;

