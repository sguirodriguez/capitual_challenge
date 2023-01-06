import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  .search {
    position: relative;
    margin-right: -35px;

    z-index: 1000;
  }
  .input {
    width: 402px;
  }
`;
