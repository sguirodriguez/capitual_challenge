import styled from 'styled-components';
import { GeneralColors } from '../../typings';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  padding: 0px 20px;
  background-color: ${({ theme }: GeneralColors) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }: GeneralColors) => theme.colors.graySemiMedium};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .logo {
    margin-right: 32px;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: url({});
  margin-left: 12px;
`;
