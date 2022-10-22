import styled from "styled-components";

export const StyledUpdateAndDeleteModal = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 101;

  .update-and-delete-layer {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-height: 100vh;

    background: var(--color-overlay-modal);
  }

  .update-and-delete-main {
    display: flex;
    flex-direction: column;

    height: 342px;
    width: 369px;

    background: var(--color-grey-3);

    border-radius: 4px;

    animation: showModal 2s;
  }

  .update-and-delete-main > form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    height: 85%;
    width: 100%;

    > label {
      width: 90%;

      color: var(--color-grey-0);

      font-weight: 400;
      font-size: 12px;
    }

    > input {
      width: 90%;
      height: 15%;

      background-color: var(--color-grey-2);
      color: var(--color-grey-0);

      font-weight: 400;
      font-size: 16px;

      border-radius: 4px;
    }

    > input:active {
      background-color: var(--color-grey-2);
    }

    > select {
      width: 90%;
      height: 15%;

      background-color: var(--color-grey-2);
      color: var(--color-grey-1);

      font-weight: 400;
      font-size: 16px;
      padding: 12px;

      border-radius: 4px;
    }

    > button {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 15%;
      width: 50%;

      color: var(--color-grey-0);
      background-color: var(--color-primary-negative);

      border-radius: 4px;

      transition: 0.25s;
    }

    > button:hover {
      background-color: var(--color-primary);

      transition: 0.25s;
    }
  }

  .update-and-delete-description {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 15%;
    padding: 12px 20px;

    color: var(--color-grey-0);
    background-color: var(--color-grey-2);

    border-radius: 4px 4px 0px 0px;

    > h2 {
      font-weight: 700;
      font-size: 14px;
    }

    > button {
      color: var(--color-grey-3);

      transition: 0.25s;
    }

    > button:hover {
      transition: 0.25s;

      color: var(--color-grey-1);
    }
  }

  .tech-name {
    display: flex;
    align-items: center;

    width: 90%;
    height: 15%;

    background-color: var(--color-grey-2);
    color: var(--color-grey-1);

    font-size: 12px;
    padding: 12px;

    border-radius: 4px;

    > h3 {
      font-weight: 400;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 15%;
    width: 90%;

    border-radius: 4px;

    transition: 0.25s;

    .update-button {
      display:flex;
      justify-content:center;
      align-items:center;

      height: 100%;
      width: 65%;

      color: var(--color-grey-0);
      background-color: var(--color-primary-negative);

      border-radius: 4px;

      font-weight: 500;
      font-size: 16px;

      cursor: pointer;
      transition: 0.25s;
    }

    .update-button:hover {
      transition: 0.25s;

      background-color: var(--color-primary);
    }

    .delete-button {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 100%;
      width: 25%;

      background-color: var(--color-grey-2);
      color:var(--color-grey-0);

      border-radius:4px;

      cursor:pointer;
      transition:0.25s
    }

    .delete-button:hover {
      transition:0.25s;

      background-color:var(--color-grey-1)
    }

  }

  @media (max-width: 400px) {
    .update-and-delete-main {
      width:90%;
    }
}

@keyframes showModal {
    0% {
      transform: translateX(-900px) translateY(250px);
      height: 1px;
      width: 1px;
    }

    100% {
      transform: translateX(0px) translateY(0px);
      height: 342px;
      width: 369px;
    }
  }
`;
