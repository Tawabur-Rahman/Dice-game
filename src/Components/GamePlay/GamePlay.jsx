import NumberSelector from "../NumberSelector/NumberSelector"
import RoleDice from "../RoleDice/RoleDice"
import TotalScore from "../TotalScore/TotalScore"
import styled from "styled-components"
import { useState } from "react"
import { Button, OutlineButton } from "../../Stylde/Button"
import Rules from "../../Rules/Rules"
const GamePlay = () => {
  const [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState()
  const [currentDice, setCurrentDice] = useState(1);
  const [err, setErr] = useState("")
  const [showRules, setShowRules] = useState(false)

  const generateRandomNum = (min, max) => { return Math.floor(Math.random() * (max - min) + min) };

  const roleDice = () => {
    const randomNumber = generateRandomNum(1, 7);
    if (!selectedNumber) {
      setErr("You Have Not Selected Any Number")
      return;
    };

    setCurrentDice((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((pre) => pre + randomNumber)
    } else {
      setScore((pre) => pre - 2)
    }
    setSelectedNumber(undefined)
  }

  const resetScore = () => {
    setScore(0);
  }





  return (
    < MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector err={err} setErr={setErr} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((pre) => !pre)}>{showRules ? "Hide" : "Show"}</Button>
      </div>
      {showRules && <Rules />}

    </ MainContainer>
  )
}

export default GamePlay
const MainContainer = styled.main`

padding-top: 70px;

.top_section{
display: flex;
justify-content: space-between;
align-items: end;
}
.btns{
margin-top: 40px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;


}



`;

