// Based on https://leetcode.com/problems/design-tic-tac-toe/

// This problem gives you the code of a move function of the Tic-Tac-Toe
// where you plays a move and can immediately check if the player has won
// or not.

// Your exercise is to try to understand this code and then refactor it into
// smaller components and rename variables so that it's more readable and self-documenting

// There is also a bug here that prevents us from getting the correct answer
// that I want you to find :) 

class TicTacToe {
    private rowScores: number[];
    private colScores: number[];
    private diagScore: number;
    private reverseDiagScore: number;

    constructor(private boardSize: number) {
        this.rowScores = Array(this.boardSize).fill(0);
        this.colScores = Array(this.boardSize).fill(0);

        this.diagScore = 0;
        this.reverseDiagScore = 0;
    }

    // the player can be either 1 or 2
    // return 0 if no one win
    // return 1 if player 1 wins
    // return 2 if player 2 wins
    public moveAndGetWinner(row: number, col: number, player: number): number {
        let isPlayerOne: boolean = player == 1;

        this.move(row, col, isPlayerOne);

        if (this.isWinningMove(row, col)) {
                return player;
            }
        return 0;
    }

    // make a move in the tic-tac-toe
    // this method does not check if the player is making a duplicate move.
    // In order to do that check, you would want to keep track of the current
    // state of the board in addition to this the rowsScore and colsScore here
    public move(row: number, col: number, isPlayerOne: boolean) {
        let add: number = isPlayerOne ? 1 : -1;
        this.rowScores[row] += add;
        this.colScores[col] += add;

        if (row == col) {
            this.diagScore += add;
        }

        if (row + col == this.boardSize - 1) {
            this.reverseDiagScore += add;
        }
    }

    // check if the latest move results in a win in O(1)
    public isWinningMove(row: number, col: number): boolean {
        let size: number = this.boardSize;
        return  Math.abs(this.rowScores[row]) == size ||
                Math.abs(this.colScores[col]) == size ||
                Math.abs(this.diagScore) == size || 
                Math.abs(this.reverseDiagScore) == size;
    }

    // ideally in your tic-tac-toe assignment you would want to call move() repeatedly
    // and update the state of the board accordingly, and then check of if the last move
    // made is a winning move or not, and display to the player something if it is a winning move
}

/*
    Given n = 3, assume that player 1 is "X" and player 2 is "O" in the board.

    TicTacToe toe = new TicTacToe(3);

    toe.move(0, 0, 1); -> Returns 0 (no one wins)
    |X| | |
    | | | |    // Player 1 makes a move at (0, 0).
    | | | |

    toe.move(0, 2, 2); -> Returns 0 (no one wins)
    |X| |O|
    | | | |    // Player 2 makes a move at (0, 2).
    | | | |

    toe.move(2, 2, 1); -> Returns 0 (no one wins)
    |X| |O|
    | | | |    // Player 1 makes a move at (2, 2).
    | | |X|

    toe.move(1, 1, 2); -> Returns 0 (no one wins)
    |X| |O|
    | |O| |    // Player 2 makes a move at (1, 1).
    | | |X|

    toe.move(2, 0, 1); -> Returns 0 (no one wins)
    |X| |O|
    | |O| |    // Player 1 makes a move at (2, 0).
    |X| |X|

    toe.move(1, 0, 2); -> Returns 0 (no one wins)
    |X| |O|
    |O|O| |    // Player 2 makes a move at (1, 0).
    |X| |X|

    toe.move(2, 1, 1); -> Returns 1 (player 1 wins)
    |X| |O|
    |O|O| |    // Player 1 makes a move at (2, 1).
    |X|X|X|
*/

let game: TicTacToe = new TicTacToe(3);
console.log(game.moveAndGetWinner(0, 0, 1)); // should return 0
console.log(game.moveAndGetWinner(0, 2, 2)); // should return 0
console.log(game.moveAndGetWinner(2, 2, 1)); // should return 0
console.log(game.moveAndGetWinner(1, 1, 2)); // should return 0
console.log(game.moveAndGetWinner(2, 0, 1)); // should return 0
console.log(game.moveAndGetWinner(1, 0, 2)); // should return 0
console.log(game.moveAndGetWinner(2, 1, 1)); // should return 1