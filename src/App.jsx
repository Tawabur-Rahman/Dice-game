import { useState } from "react"
import StartGame from "./Components/StartGame/StartGame"
import GamePlay from "./Components/GamePlay/GamePlay";

const App = () => {
const [isGameStarted,setIsGameStarted]=useState(false);
const toggleGamePlay=()=>{
setIsGameStarted((pre)=>!pre)
}



  return (
    <div>
{isGameStarted?<GamePlay/>:<StartGame toggle={toggleGamePlay}/>}
    </div>
  )
}

export default App