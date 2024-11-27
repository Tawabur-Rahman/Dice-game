import { useState } from "react"
import styled from "styled-components"
const RoleDice = ({ roleDice, currentDice }) => {




  return (
    <DiceContainer>

      <div className="dice" onClick={roleDice}><img src={`/imgs/pic${currentDice}.png`} alt="" /></div>
      <p>Click on Dice to roll</p>

    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
img{
height: 200px;
width: 200px;
}
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;
.dice{
cursor: pointer;
}

p{
font-size: 24px;

}




`;


