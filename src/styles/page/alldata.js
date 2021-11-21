import styled from 'styled-components'

import world from './../../assets/img/world1.svg'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${world}) no-repeat;
  background-size: 1rem;

  header{
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 2rem;
    line-height: 4rem;
  }
`

export const Menu = styled.nav`
  width: 100%;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.primary };
  display: flex;
  align-items: center;
  font-size: 2rem;

  nav {
    width: 98%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: ${({ theme }) => theme.colors.background};
    }

    a {
      color: ${({ theme }) => theme.colors.background};
    }
  }
`

export const Table = styled.div`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 1.50rem;
  border-radius: 8px;

  table {
    margin-top: 5rem;
    background-color: #fff;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
    padding: 1rem;
    width: 50vw;
    border-radius: 8px;

    thead {
      div {
        width: 100%;
        margin-bottom: 1.30rem;
      }
    }

    tbody {
      margin-top: 1rem;

      span {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1.10rem;
      }

      tr {
        line-height: 1.60rem;
        th {
        }

        .link {
          display: flex;
          flex-direction: column;

          a {
            text-decoration: none;
            color: ${({ theme }) => theme.colors.textSecond};

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }

    &:last-child {
      margin-bottom: 5rem;
    }
  }
`
