import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;
  margin: 7rem auto;

  .first_post {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-top: 6rem;
      font-size: 2.4rem;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
      width: 80%;

      .texts {
        width: 50%;
        margin-right: 5rem;

        p {
          margin-top: 1rem;
          color: ${({ theme }) => theme.colors.textSecond};
          font-size: 1.3rem;
        }
      }

      .images {
        width: 30%;
      }
    }
  }

  .second_post {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 12rem;
    background-color: #fff;
    width: 100%;
    height: 90vh;

    h1 {
      font-size: 2.4rem;
      margin-top: 2rem;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row-reverse;
      width: 80%;

      .texts {
        width: 50%;
        margin-left: 5rem;
        margin-top: 2rem;

        p:first-child {
          margin-top: 1rem;
        }

        p {
          margin-top: 1rem;
          color: ${({ theme }) => theme.colors.textSecond};
          font-size: 1.3rem;
        }
      }

      .images {
        width: 30%;
        margin-top: 2rem;
      }
    }
  }

  .third_post {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    width: 100%;

    h1 {
      font-size: 2.4rem;
      margin-top: 2rem;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;

      .texts {
        width: 50%;
        margin-right: 5rem;

        p {
          margin-top: 1rem;
          color: ${({ theme }) => theme.colors.textSecond};
          font-size: 1.3rem;
        }
      }

      .images {
        width: 30%;
        margin-top: 2rem;
      }
    }
  }

  @media (max-width: 1024px) {
    .first_post {
      h1 {
        font-size: 2rem;
      }

      .container {
        .texts {
          width: 50%;
          margin-right: 5rem;

          p {
            margin-top: 1rem;
            color: ${({ theme }) => theme.colors.textSecond};
            font-size: 1rem;
          }
        }

        .images {
          width: 30%;
        }
      }
    }

    .second_post {
      h1 {
        font-size: 2rem;
        margin-top: 2rem;
      }

      .container {
        .texts {
          width: 50%;
          margin-left: 5rem;
          margin-top: 2rem;

          p:first-child {
            margin-top: 1rem;
          }

          p {
            margin-top: 1rem;
            color: ${({ theme }) => theme.colors.textSecond};
            font-size: 1rem;
          }
        }

        .images {
          width: 30%;
          margin-top: 2rem;
        }
      }
    }

    .third_post {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 4rem;
      width: 100%;

      h1 {
        font-size: 2rem;
        margin-top: 2rem;
      }

      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;

        .texts {
          width: 50%;
          margin-right: 5rem;

          p {
            margin-top: 1rem;
            color: ${({ theme }) => theme.colors.textSecond};
            font-size: 1rem;

            span {
            }
          }
        }

        .images {
          width: 30%;
          margin-top: 2rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .first_post {
      h1 {
        font-size: 1.6rem;
      }

      .container {
        .texts {
          width: 50%;

          p {
            font-size: 0.85rem;
          }
        }

        .images {
          width: 50%;
        }
      }
    }

    .second_post {
      h1 {
        font-size: 1.6rem;
      }

      .container {
        .texts {
          width: 50%;
          margin-left: 5rem;
          margin-top: 2rem;

          p {
            font-size: 0.85rem;
          }
        }

        .images {
          width: 50%;
          margin-top: 2rem;
        }
      }
    }

    .third_post {
      h1 {
        font-size: 1.6rem;
      }

      .container {
        .texts {
          width: 50%;
          margin-right: 5rem;

          p {
            font-size: 0.85rem;

            span {
            }
          }
        }

        .images {
          width: 50%;
        }
      }
    }
  }

  @media (max-width: 425px) {
    width: 100%;
    margin: 7rem auto;

    .first_post {
      h1 {
        font-size: 1.3rem;
      }

      .container {
        margin-top: 0;
        width: 100%;

        .texts {
          width: 90%;
          margin: 0 auto;

          p {
            margin-top: 1rem;
            font-size: 1rem;
          }
        }

        .images {
          display: none;
        }
      }
    }

    .second_post {
      margin-top: 0rem;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.background};

      h1 {
        font-size: 1.3rem;
        margin-top: 2rem;
      }

      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row-reverse;
        width: 100%;

        .texts {
          width: 90%;
          margin-left: 0;
          margin-top: 0rem;

          p {
            margin-top: 1rem;
            font-size: 1rem;
          }
        }

        .images {
          display: none;
        }
      }
    }

    .third_post {
      margin-top: 0;
      width: 100%;

      h1 {
        font-size: 1.3rem;
        margin-top: 2rem;
      }

      .container {
        width: 100%;

        .texts {
          width: 90%;
          margin-right: 0;

          p {
            margin-top: 1rem;
            font-size: 1rem;
          }
        }

        .images {
          display: none;
        }
      }
    }
  }
`
