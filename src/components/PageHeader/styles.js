import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 24px;

  a {
    width: fit-content;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-bottom: 8px;

    img {
      margin-right: 8px;
      transform: rotate(-90deg);
    }

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }
  }

  h1 {
    font-size: 24px;
  }
`;
