import Player from "./component/Player"
function App() {
  

  return (
   <main>
    <div id="game-container">
      <ol id="players">
        <Player name={"player 1"} symbol={"X"}/>
        <Player name={"player 2"} symbol={"O"}/>
        
      </ol>
      GAME BOARED
    </div>
   </main>
  )
}

export default App
