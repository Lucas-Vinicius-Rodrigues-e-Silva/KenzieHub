import styled from "styled-components";

export const StyledLi = styled.li`
display:flex;
align-items:center;
justify-content:space-between;

height:15%;
width:95%;

margin-top:0.5rem;
margin-bottom:0.5rem;
background-color:var(--color-grey-4);

border-radius:4px;
padding:12px;

transition:0.25s;
cursor: pointer;

  :hover {
    background-color:var(--color-grey-2);
    transition:0.25s;
 }

 > h4 {
    color:var(--color-grey-0);
    font-weight:400;
 }

 > span {
    color:var(--color-grey-1);
    font-weight:400;
 }
`