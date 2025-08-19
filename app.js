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
    const initializeGame = (p1name, p2name) => {
        const p1 = playerFactory(p1name, "X");
        const p2 = playerFactory(p2name, "O");
        currentPlayer = p1;
        resetGameboard();
    };
    const makeMove = () => {
        
    }
    return {initializeGame};
};
