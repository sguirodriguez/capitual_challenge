import styled from 'styled-components';
import { GeneralColors } from '../../typings';

export const ContainerHome = styled.div`
  background-color: ${({ theme }: GeneralColors) => theme.colors.gray};
  width: 100%;
  height: 100vh;
`;
