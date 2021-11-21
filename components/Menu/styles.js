import styled from 'styled-components'

export const Wrapper = styled.header`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MenuMain = styled.div `
  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1px;
    height: 100%;
    width: 100%;

    .logo {
      color: ${({ theme }) => theme.colors.background};
      text-decoration: none;
      font-size: 1.90rem;
    }
  }

  @media (max-width: 650px) {
    height: 4rem;
  }
`

export const MenuInfo = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.textPrimary};
  color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    span {
      color: red;
    }
  }

  @media (max-width: 650px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .irrelevante {
      display: none;
    }

    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`
