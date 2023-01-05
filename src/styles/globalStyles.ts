import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
 } 
  html,body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  @font-face {
  font-family: "Inter"; 
  src: local("Inter-Regular"), url("../assets/fonts/Inter-Regular.ttf") format("truetype");
  }
`;

export const TextDefault = styled.span`
  color: #111827;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
`;

export const TextLight = styled(TextDefault)`
  font-weight: 300;
`;

export const TextMedium = styled(TextDefault)`
  font-weight: 500;
`;

export const TextSemiBold = styled(TextDefault)`
  font-weight: 600;
`;

export const TextBold = styled(TextDefault)`
  font-weight: 700;
`;

export const colors = {
  white: '#FFFFFF',
  black: '#000',

  grayLight: '#F3F4F6',
  gray: '#F9FAFB',
  graySemiMedium: '#E5E7EB',
  grayMedium: '#6B7280',
  grayDark: '#C6C6C6',

  primaryDefault: '#111827',
  secondaryDefault: '#0E9F6E',

  redLight: '#FBD5D5',
  red: '#E02424',
  redDark: '#9B1C1C',

  blueLight: '#E1EFFE',
  blue: '#1E429F',

  greenLight: '#DEF7EC',
  green: '#03543F',
};
