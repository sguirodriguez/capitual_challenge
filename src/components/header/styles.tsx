import styled from 'styled-components';
import { GeneralColors } from '../../typings';
import avatar from '../../assets/images/backgrounds/avatar.png';
import avatarSecond from '../../assets/images/backgrounds/avatar-second.png';

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

  @media (max-width: 576px) {
    padding: 0px 13px;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    .menu {
      display: block !important;
    }
    .input-search {
      display: none;
    }
    .logo {
      margin-right: 24px !important;
    }
  }

  @media (max-width: 576px) {
    .logo {
      display: none;
    }
  }

  .logo {
    margin-right: 32px;
  }

  .menu {
    display: none;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-left: 12px;
  background-image: url(${avatar});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 576px) {
    background-image: url(${avatarSecond}) !important;
  }
`;
