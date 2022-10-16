import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80vh;
  width: 100vw;

  animation: showing 2s;

  .main-img {
    object-fit: scale-down;
    height: 80%;
    width: 60%;
  }

  @keyframes showing {
    0% {
      transform: translateY(-300px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media (max-width: 1300px) {
    .main-img {
      width: 70%;
      object-fit: scale-down;
    }
  }

  @media (max-width: 834px) {
    .main-img {
      margin: 0 auto;
      min-width: 100vw;
      object-fit: scale-down;
    }
  }
`;
