import styled from "styled-components"
const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dive game</h2>
      <div className="text">
        <p>Select Any Number</p>
        <p>Click on dice image</p>
        <p>afer click on dice if selected number is equal to dice number you will get same point as dice</p>
        <p>if you get wrong guess then 2 point will be dedcuted</p>


      </div>
    </RulesContainer>
  )
}

export default Rules
const RulesContainer = styled.div`
max-width: 800px;
border-radius: 10px;
margin: auto;
background-color: #fbf1f1;
padding: 20px;
h2{
font-size: 24px;
}
.text{
margin-top: 24px;

}
`;

