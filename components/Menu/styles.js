import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  height: 3.60rem;
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
`
