import styled from "styled-components";

export const StyledDivLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  height: 100vh;
  width: 100%;

  margin-top: 3rem;

  animation: show-info 2s;

  > form > p {
    color: var(--color-grey-0);
  }

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    height: 55%;
    width: 25%;

    background-color: var(--color-grey-3);

    border-radius: 4px;
  }

  > form > label {
    color: var(--color-grey-0);
    width: 80%;

    margin-top: 1rem;
  }

  .reveal-input {
    display: flex;
    flex-direction: row;

    height: 10%;
    width: 80%;

    background-color: var(--color-grey-2);

    border-radius: 4px;
  }

  .reveal-input > input {
    width: 90%;
    height: 100%;

    color: var(--color-grey-1);
  }

  .reveal-input > span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 10%;
    height: 100%;
  }

  .eye {
    display: flex;
    justify-content: center;

    width: 80%;

    color: var(--color-grey-1);

    cursor: pointer;
  }

  > form > input {
    width: 80%;
    height: 10%;

    border-radius: 4px;

    background-color: var(--color-grey-2);
    color: var(--color-grey-1);

    margin-top: 1rem;
  }

  > form > select {
    width: 80%;
    height: 10%;

    border-radius: 4px;

    background-color: var(--color-grey-2);
    color: var(--color-grey-1);

    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  > form > button {
    width: 80%;
    height: 10%;

    background-color: var(--color-primary-negative);
    color: var(--color-grey-0);

    margin-top: 1rem;
    margin-bottom: 2rem;

    border-radius: 4px;

    transition: 0.25s;
  }

  > form > button:hover {
    background-color: var(--color-primary);
    transition: 0.25s;
  }

  @keyframes show-info {
    0% {
      transform: translateY(-300px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media (max-width: 1300px) {
    > form {
      height: 60%;
      width: 60%;
    }
  }

  @media (max-width: 850px) {
    > form {
      height: 60%;
      width: 90%;
    }
  }
`;
