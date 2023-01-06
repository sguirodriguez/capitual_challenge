import styled from 'styled-components';
import { GeneralColors } from '../../typings';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }: GeneralColors) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }: GeneralColors) => theme.colors.graySemiMedium};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
