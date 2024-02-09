export const WINNING_COMBINATIONS = [
  [
    { row: 0, cell: 0 },
    { row: 0, cell: 1 },
    { row: 0, cell: 2 },
  ],
  [
    { row: 1, cell: 0 },
    { row: 1, cell: 1 },
    { row: 1, cell: 2 },
  ],
  [
    { row: 2, cell: 0 },
    { row: 2, cell: 1 },
    { row: 2, cell: 2 },
  ],
  [
    { row: 0, cell: 0 },
    { row: 1, cell: 0 },
    { row: 2, cell: 0 },
  ],
  [
    { row: 0, cell: 1 },
    { row: 1, cell: 1 },
    { row: 2, cell: 1 },
  ],
  [
    { row: 0, cell: 2 },
    { row: 1, cell: 2 },
    { row: 2, cell: 2 },
  ],
  [
    { row: 0, cell: 0 },
    { row: 1, cell: 1 },
    { row: 2, cell: 2 },
  ],
  [
    { row: 0, cell: 2 },
    { row: 1, cell: 1 },
    { row: 2, cell: 0 },
  ],
];

export const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

export const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
