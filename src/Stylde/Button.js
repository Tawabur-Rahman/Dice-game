import styled from "styled-components";

export const Button=styled.button`
min-width: 220px;
background-color: black;
color: #fff;
font-size: 1rem;
cursor: pointer;
border: none;
padding: 5px;
border-radius: 5px;
border: 1px solid transparent;
&:hover{
background-color: #fff;
color: black;
border: 1px solid black;
transition: 0.3s background ease-in;
}
`;

export const OutlineButton=styled(Button)`
background-color: #fff;
border: 1px solid black;
color: black;
&:hover{
background-color: black;
border: 1px solid transparent;
color: #fff;
}

`;
