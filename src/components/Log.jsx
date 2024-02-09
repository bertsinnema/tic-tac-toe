export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => {
        const { player, square } = turn;
        const { row, cell } = square;

        return (
          <li key={`${row}${cell}`}>
            {player} played row {row}, cell {cell}
          </li>
        );
      })}
    </ol>
  );
}
