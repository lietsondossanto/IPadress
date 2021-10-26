import styled from 'styled-components'

export const Wrapper = styled.footer`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};

  ul {
    display: flex;

    li {
      list-style: none;

      a {
        color: ${({ theme }) => theme.colors.background};
        font-size: 1.3rem;
        transition: 1s;

        &:hover {
          color: ${({ theme }) => theme.colors.textSecond};
        }
      }
    }
  }

  .description {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-size: 1.4rem;
    }

    p {
      margin-top: 0.3rem;
      font-size: 1rem;
    }
  }

  button {
    border-style: none;
    width: 3rem;
    height: 2rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.3rem;
    transition: 1s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.textPrimary};
      color: ${({ theme }) => theme.colors.background};
    }
  }

  @media (max-width: 768px) {
    .description {
      h1 {
        font-size: 1rem;
      }

      p {
        margin-top: 0.3rem;
        font-size: 0.8rem;
      }
    }
  }

  @media (max-width: 425px) {
    width: 100%;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column-reverse;

    ul {
      display: flex;

      li {
        list-style: none;

        a {
          font-size: 1.3rem;
          transition: 1s;
        }
      }
    }

    .description {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h1 {
        font-size: 1rem;
      }

      p {
        margin-top: 0.3rem;
        font-size: 0.62rem;
      }
    }

    button {
      display: none;
    }
  }
`
