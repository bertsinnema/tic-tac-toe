import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { useState } from "react";
import { WINNING_COMBINATIONS, PLAYERS, INITIAL_GAME_BOARD } from "./constants";

function deriveActivePlayer(turns) {
  if (turns.length === 0) {
    return "X";
  }
  return turns[0].player === "X" ? "O" : "X";
}

function deriveGameBoard(turns) {
  const gameBoard = [...INITIAL_GAME_BOARD.map((row) => [...row])];

  for (const turn of turns) {
    const { player, square } = turn;
    const { row, cell } = square;

    gameBoard[row][cell] = player;
  }

  return gameBoard;
}

function deriveWinner(gameBoard, playerNames) {
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].cell];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].cell];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].cell];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      return playerNames[firstSquareSymbol];
    }
  }
}

function App() {
  const [playerNames, setPlayerNames] = useState(PLAYERS);

  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, playerNames);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, cellIndex) {
    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, cell: cellIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestartGame() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayerNames((prevNames) => {
      return {
        ...prevNames,
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isActive={activePlayer === "X"}
            initialName={PLAYERS.X}
            symbol="X"
            onChangeName={handlePlayerNameChange}
          />
          <Player
            isActive={activePlayer === "O"}
            initialName={PLAYERS.O}
            symbol="O"
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestartGame} />
        )}
        <GameBoard
          activePlayerSymbol={activePlayer}
          onSelectSquare={handleSelectSquare}
          board={gameBoard}
        />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
