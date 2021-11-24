import styled from 'styled-components'

export const WrapperMain = styled.div`
  width: 100%;
  height: 70vh;
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
    min-height: 55%;
    max-height: 55%;
    display: flex;
    align-items: center;


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

  @media (max-width: 1660px) {
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

  @media (max-width: 1100px) {
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

  @media (max-width: 927px) {
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

  @media (max-width: 710px) {
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
