import { useState } from "react";
import styled from "styled-components"
const NumberSelector = ({ setErr, err, selectedNumber, setSelectedNumber }) => {
  const number = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value)
    setErr("")
  }



  return (
    <NumberSelectorContainer>
      <p className="err">{err}</p>
      <div className="flex">{
        number.map((value, i) => (<Box isSelected={value === selectedNumber} key={i} onClick={() => numberSelectorHandler(value)}>{value}</Box>))

      }</div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector
const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;

.flex{
display: flex;
gap: 24px;
}
p{
font-size: 24px;
font-weight: 700;
}
.err{
color: red;
}


`;



const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 26px;
font-weight: 700;
background-color: ${(props) => props.isSelected ? "black" : "white"};
color: ${(props) => !props.isSelected ? "black" : "white"};

`;


