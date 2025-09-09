import './App.css';
import TicTacToe from './TicTacToe';
import RockPaperScissors from './RockPaperScissors';
import { useState } from 'react';

function App() {
  const games = ["Tic Tac Toe", "Rock Paper Scissors"];
  const [currentGame, setCurrentGame] = useState(null);

  const renderGame = () => {
    switch (currentGame) {
      case "Tic Tac Toe":
        return <TicTacToe />;
      case "Rock Paper Scissors":
        return <RockPaperScissors />;
      default:
        return null;
    }
  }

  return (
    <div className="bg-slate-200 h-screen text-center text-teal-700">
      <div>
        <h1 className="text-4xl font-bold pt-4">Choose a Game</h1>
        {games.map((game) => (
          <button
            key={game}
            onClick={() => setCurrentGame(game)}
            className={`btn ${currentGame === game ? "bg-gradient-to-r from-purple-500 to-pink-500" : ""}`}
          >
            {game}
          </button>
        ))}
      </div>
      <div className="my-16">
        {renderGame()}
      </div>
    </div>
  );
}

export default App;
