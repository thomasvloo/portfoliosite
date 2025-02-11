import { keyframes } from 'styled-components';

export const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const theme = {
  colors: {
    primary: '#64ffda', // Turquoise accent
    secondary: '#ffffff', // White text
    backgroundGradient:
      'linear-gradient(-45deg, #001d3d, #004da3, #001d3d, #3f7c88)',
    backgroundGradientAlt:
      'linear-gradient(-45deg, #0f2027, #203a43, #2c5364, #3f7c88)',
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontSize: {
      small: '1rem',
      medium: '1.2rem',
      large: '1.3rem',
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
  },
  layout: {
    sidebarWidth: '25%',
    contentWidth: '75%',
    sectionHeight: '100vh',
  },
  animations: {
    gradient: gradientAnimation,
  },
} as const;

// Define a TypeScript type based on the theme object
export type ThemeType = typeof theme;
