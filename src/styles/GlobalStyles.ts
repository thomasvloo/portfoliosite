import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: ${(props) => props.theme.colors.backgroundGradient};
    background-size: 400% 400%;
    animation: ${(props) => props.theme.animations.gradient} 50s ease infinite;
    font-family: ${(props) => props.theme.typography.fontFamily};
  }
`;

export default GlobalStyles;
