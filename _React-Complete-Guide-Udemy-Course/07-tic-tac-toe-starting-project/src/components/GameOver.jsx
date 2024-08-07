export default function GameOver({ onRestart, winner }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      <p>Winner is {winner}</p>;
      <p>
        <button onClick={onRestart}>Restart</button>
      </p>
    </div>
  );
}
