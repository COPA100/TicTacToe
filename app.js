// mark is either O or X
const playerFactory = (name, mark) => ({ name, mark });

const gameboardFactory = function () {
    const gameboard = ["", "", "", "", "", "", "", "", ""];
    const resetGameboard = () => {
        gameboard.fill("");
    };
    const setMarker = (index, mark) => {
        if (index >= 0 && index < 9 && gameboard[index] === "") {
            gameboard[index] = mark;
            return true;
        }
        return false;
    };
    const getGameboard = () => {
        // new array so gameboard stays safe from external hacks
        const result = [];
        for (let i = 0; i < gameboard.length; i++) {
            result.push(gameboard[i]);
        }
        return result;
    };
    return { resetGameboard, setMarker, getGameboard };
};

const gameRunner = function () {
    const board = gameboardFactory();
    let currentPlayer;
    let p1, p2;
    const initializeGame = (p1name, p2name) => {
        p1 = playerFactory(p1name, "X");
        p2 = playerFactory(p2name, "O");
        currentPlayer = p1;
        board.resetGameboard();
    };
    const checkWin = () => {
        const winArray = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        const curBoard = board.getGameboard();

        for (let i = 0; i < winArray.length; i++) {
            if (
                curBoard[winArray[i][0]] &&
                curBoard[winArray[i][0]] === curBoard[winArray[i][1]] &&
                curBoard[winArray[i][1]] === curBoard[winArray[i][2]]
            ) {
                return true;
            }
        }

        return false;
    };
    const makeMove = (index) => {
        board.setMarker(index, currentPlayer.mark());
        if (checkWin()) {
            return currentPlayer;
        }
        if (currentPlayer === p1) {
            currentPlayer = p2;
        } else {
            currentPlayer = p1;
        }
    };
    return { initializeGame, makeMove, checkWin };
};
