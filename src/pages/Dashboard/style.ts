import styled from "styled-components";

export const StyledDivDashboard = styled.div`
  height: 100vh;
  width: 100vw;

  > header {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 15%;
    width: 100%;

    border-bottom: 2px solid var(--color-grey-2);

    background-color: var(--color-grey-3);
  }

  > header > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 70%;
    height: 100%;
  }

  > header > nav > button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 30%;

    padding: 0px 16px;
    gap: 10px;

    color: var(--color-grey-0);
    background-color: var(--color-grey-2);

    border-radius: 4px;
    transition: 0.25s;
  }

  > header > nav > button:hover {
    background-color: var(--color-grey-1);

    transition: 0.25s;
  }

  > section {
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 85%;
  }

  > section > div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 20%;

    border-bottom: 2px solid var(--color-grey-2);
  }

  > section > div > span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 70%;
    height: 100%;
  }

  > section > div > span > h2 {
    color: var(--color-grey-0);
  }

  > section > div > span > p {
    color: var(--color-grey-1);
  }

  > section > main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: 70%;
    height: 80%;
  }

  > section > main > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;
    height: 10%;

    margin-top:2rem;
  }

  > section > main > div > h2 {
    color: var(--color-grey-0);
  }

  > section > main > div > button {
    height: 100%;

    color: var(--color-grey-1);

    transition: 0.25s;
  }

  > section > main > div > button:hover {
    color: var(--color-grey-0);
  }

  > section > main > ul {
    display:flex;
    flex-direction:column;
    align-items:center;

    background-color:var(--color-grey-3);
    margin-top:2rem;

    width:100%;
    height:70%;

    overflow-y:scroll;
    border-radius:4px;
  }

  
  > section > main > ul::-webkit-scrollbar {
  width: 4px;     
}

> section > main > ul::-webkit-scrollbar-track {
  background: var(--color-grey-2);      
}

> section > main > ul::-webkit-scrollbar-thumb {
  background-color: var(--color-grey-1);    
  border-radius: 4px;      
}

  @media (max-width: 1300px) {
    > section > main {
    height: 90%;
  }
  }

  @media (max-width: 700px) {
    > section > main {
    height: 90%;
  }
}
`
