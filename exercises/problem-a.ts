// Based on https://leetcode.com/problems/design-tic-tac-toe/

// This problem gives you the code of a move function of the Tic-Tac-Toe
// where you plays a move and can immediately check if the player has won
// or not.

// Your exercise is to try to understand this code and then refactor it into
// smaller components and rename variables so that it's more readable and self-documenting

// There is also a bug here that prevents us from getting the correct answer
// that I want you to find :) 

class TicTacToe {
    private r: number[];
    private c: number[];
    private d: number;
    private rd: number;

    constructor(private n: number) {
        this.r = [];
        this.c = [];

        this.d = 0;
        this.rd = 0;
    }

    // the player can be either 1 or 2
    // return 0 if no one win
    // return 1 if player 1 wins
    // return 2 if player 2 wins
    public move(i: number, j: number, p: number): number {
        let s: number = p == 1 ? 1 : -1;
        this.r[i] += s;
        this.c[j] += s;

        if (i == j) {
            this.d += s;
        }

        if (i + j == this.n - 1) {
            this.rd += s;
        }

        if (Math.abs(this.r[i]) == this.n ||
            Math.abs(this.c[j]) == this.n ||
            Math.abs(this.d) == this.n ||
            Math.abs(this.rd) == this.n) {
                return p;
            }
        return 0;

    }
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
console.log(game.move(0, 0, 1)); // should return 0
console.log(game.move(0, 2, 2)); // should return 0
console.log(game.move(2, 2, 1)); // should return 0
console.log(game.move(1, 1, 2)); // should return 0
console.log(game.move(2, 0, 1)); // should return 0
console.log(game.move(1, 0, 2)); // should return 0
console.log(game.move(2, 1, 1)); // should return 1