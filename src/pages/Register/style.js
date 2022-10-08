import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 120vh;
  width: 100%;

  margin-top: 2rem;

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    height: 95%;
    width: 25%;

    background-color: var(--color-grey-3);

    border-radius: 4px;

    animation: show-info 2s;
  }

  > form > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 10%;

    margin-top: 1rem;
  }

  > form > div > h2 {
    color: var(--color-grey-0);
    margin-top: 1rem;
  }

  > form > div > p {
    color: var(--color-grey-1);
    margin-top: 1rem;
  }

  > form > label {
    color: var(--color-grey-0);
    width: 80%;

    margin-top: 1rem;
  }

  > form > input {
    width: 80%;
    height: 10%;

    border-radius: 4px;

    background-color: var(--color-grey-2);
    color: var(--color-grey-1);

    margin-top: 1rem;
  }

  .reveal-input {
    display: flex;
    flex-direction: row;

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

  .eye {
    display: flex;
    justify-content: center;

    width: 80%;

    color: var(--color-grey-1);

    cursor: pointer;
  }

  @keyframes show-info {
    0% {
      transform: translateY(-300px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  @media (max-width: 1700px) {
    height: 130vh;
    > form {
      width: 40%;
    }
  }

  @media (max-width: 1200px) {
    > form {
      width: 50%;
    }
  }

  @media (max-width: 950px) {
    > form {
      width: 90%;
    }
  }
`;
