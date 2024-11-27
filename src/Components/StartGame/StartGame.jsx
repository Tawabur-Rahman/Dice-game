import styled from 'styled-components'
import { Button } from '../../Stylde/Button';
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <img src="/imgs/Background.png" alt="" />
      <div className="text">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame
const Container = styled.div`
max-width: 1100px;
margin: auto;
padding-top:80px;
padding-left: 14px;
padding-right:14px;
img{
height: 400px;
width: 500px;
}
display: flex;
justify-content: space-between;
align-items: center;
.text{
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;

h1{
font-size: 6rem;
white-space: nowrap;
}
}

`;


