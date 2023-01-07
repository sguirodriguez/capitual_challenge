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
    font-family: 'Inter', Sans-Serif;
  }

`;

export const TextDefault = styled.span`
  color: #111827;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
`;

export const TextLight = styled.span`
  color: #111827;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 300;
`;

export const TextMedium = styled.span`
  color: #111827;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 500;
`;

export const TextSemiBold = styled.span`
  color: #111827;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 600;
`;

export const TextBold = styled.span`
  color: #111827;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 700;
`;
