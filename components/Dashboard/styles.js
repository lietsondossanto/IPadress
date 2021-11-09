import styled from 'styled-components'

export const WrapperMain = styled.div`
  width: 100%;
  height: 80vh;
  background-color: ${({ theme }) => theme.colors.second};
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 100%;
  padding: 1rem;
  margin: 0 auto;

  .left-side {
    width: 40%;

    .top {
      font-size: 2.2rem;
    }

    .moreInformation {
      margin-top: 2rem;
      font-size: .88rem;
      color: ${({ theme }) => theme.colors.textSecond};
    }
  }

  .right-side {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .map {
      width: 100%;
      height: 70%;
      background-color: #000000;
      border-radius: 2%;
    }
  }

  @media (max-width: 1645px) {
    width: 70%;

    .left-side {
      width: 50%;

      .top {
        font-size: 1.6rem;
      }

      .moreInformation {
        margin-top: 2rem;
        font-size: 0.8rem;
      }
    }

    .right-side {
      width: 50%;
      height: 100%;

      .map {
        width: 90%;
        height: 60%;
      }
    }
  }

  @media (max-width: 1024px) {
    width: 80%;

    .left-side {
      width: 50%;

      .top {
        font-size: 1.6rem;
      }

      .moreInformation {
        margin-top: 2rem;
        font-size: 0.8rem;
      }
    }

    .right-side {
      width: 50%;
      height: 100%;

      .map {
        width: 90%;
        height: 60%;
      }
    }
  }

  @media (max-width: 874px) {
    width: 90%;

    .left-side {
      width: 50%;

      .top {
        font-size: 1.3rem;
      }

      .moreInformation {
        margin-top: 2rem;
        font-size: 0.7rem;
      }
    }

    .right-side {
      width: 50%;
      height: 100%;

      .map {
        width: 100%;
        height: 50%;
      }
    }
  }

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    padding: 0;

    .left-side {
      width: 100%;
      height: 60%;
      padding: 0.6rem;

      .top {
        width: 100%;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      .moreInformation {
        width: 100%;
        margin-top: 1rem;
        font-size: 0.5em;
        color: ${({ theme }) => theme.colors.textSecond};
        background-color: ${({ theme }) => theme.colors.background};
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        justify-content: center;

        h2 {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 0.6rem;

          span {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 0.8em;
          }
        }

        .irrelevante {
          display: none;
        }
      }
    }

    .right-side {
      width: 100%;
      height: 40%;

      .map {
        width: 100%;
        height: 100%;
        background-color: #000000;
        border-radius: 0;
      }
    }
  }
`
export const SearchIp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -2rem;

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
