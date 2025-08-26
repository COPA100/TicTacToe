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
        while (!board.setMarker(index, currentPlayer.mark)) {
            // reprompt for a new index for the next move
        }
        if (checkWin()) {
            return currentPlayer;
        }
        if (currentPlayer === p1) {
            currentPlayer = p2;
        } else {
            currentPlayer = p1;
        }
    };
    return { initializeGame, makeMove, checkWin, getBoard: board.getGameboard };
};

// DOM CODE DOM CODE DOM CODE DOM CODE DOM CODE DOM CODE DOM CODE DOM CODE DOM CODE
const player1Name = document.getElementById("player1Name");
const player1Score = document.getElementById("player1Score");
const player2Name = document.getElementById("player2Name");
const player2Score = document.getElementById("player2Score");

const resetBtn = document.getElementById("resetBtn");
const submitBtn = document.getElementById("submitBtn");

const mainGrid = document.getElementById("mainGrid");

// event delegation for the boxes in the grid
mainGrid.addEventListener("click", (e) => {
    const item = e.target.closest("div");
    if (item) {
        const index = item.dataset.grid;
        game.makeMove(index);
    }
});

// reset button functionality
resetBtn.addEventListener("click", () => {
    game.resetGameboard;
});

submitBtn.addEventListener("click", () => {
    const p1Name = document.getElementById("inputP1").value;
    console.log(p1Name);
    const p2Name = document.getElementById("inputP2").value;
    const game = gameRunner();
    game.initializeGame(p1Name, p2Name);

    player1Name.innerHTML = p1Name;
    player2Name.innerHTML = p2Name;

    document.getElementById("hideInput").classList.remove("flex");
    document.getElementById("hideInput").classList.add("hidden");
    document.getElementById("hideMain").classList.remove("hidden");
});

function renderLibrary() {}
