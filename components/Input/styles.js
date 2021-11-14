import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -2rem;

  form {
    display: flex;
  }

  .searchInput {
    width: 28rem;
    height: 4rem;
    border-style: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-top-left-radius: 0.6rem;
    border-bottom-left-radius: 0.6rem;
    padding: 1rem;
    font-size: 1.3rem;
  }

  .searchBtn {
    width: 5rem;
    height: 4rem;
    border-style: none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    border-top-right-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;
    padding: 1rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 1440px) {
    .searchInput {
      width: 20rem;
      height: 3.6rem;
      font-size: 1.2rem;
    }

    .searchBtn {
      height: 3.6rem;
    }
  }

  @media (max-width: 1024px) {
    .searchInput {
      width: 20rem;
      font-size: 1.3rem;
    }
  }

  @media (max-width: 768px) {
    .searchInput {
      width: 17rem;
      height: 3.3rem;
      font-size: 1rem;
    }

    .searchBtn {
      height: 3.3rem;
    }
  }

  @media (max-width: 425px) {
    .searchInput {
      width: 12rem;
      height: 3rem;
      font-size: 0.7rem;
    }

    .searchBtn {
      width: 4rem;
      height: 3rem;
    }
  }
`
