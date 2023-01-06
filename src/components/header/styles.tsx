import styled from 'styled-components';
import { GeneralColors } from '../../typings';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }: GeneralColors) => theme.colors.white};
  border-bottom: 1px solid #e5e7eb;
`;
