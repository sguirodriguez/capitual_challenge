import styled from 'styled-components';
import { GeneralColors } from '../../typings';

export const ContainerHome = styled.div`
  background-color: ${({ theme }: GeneralColors) => theme.colors.gray};
  width: 100%;
  height: 100vh;
`;

export const MenuAndMain = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: row;
`;

export const Main = styled.div`
  flex: 1;
  min-height: 100%;
  background-color: ${({ theme }: GeneralColors) => theme.colors.graySemiMedium};
  padding: 16px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  margin-top: 16px;

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
  }

  .left {
    width: auto;
    margin-right: 16px !important;

    @media (max-width: 1120px) {
      margin-right: 0px !important;
    }
  }

  .right {
    width: auto;

    @media (max-width: 1120px) {
      margin-top: 16px !important;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  min-height: 120px;
  background-color: ${({ theme }: GeneralColors) => theme.colors.white};
  border-radius: 16px;
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  .footer-text {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;
    color: ${({ theme }: GeneralColors) => theme.colors.grayDarker};
    text-align: center;
  }
`;
