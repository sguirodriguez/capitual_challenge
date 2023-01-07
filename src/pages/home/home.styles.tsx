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
