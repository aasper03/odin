const board = (function () {
    let isO = true;
    let oWins = 0;
    let xWins = 0;
    let arr = Array.from({length: 3}, () => Array(3).fill(null));
    const placeMarker = (col, row) => {
        if (arr[row][col] == null) {
            if (isO) {
                arr[row][col] = 'O';
                isO = false;
            } else {
                arr[row][col] = 'X';
                isO = true;
            }
        }
        if (detectVictory()) {
            if (isO) {
                oWins++;
            } else {
                xWins++;
            }
            arr = Array.from({length: 3}, () => Array(3).fill(null));
        }
    };
    const detectVictory = () => {
        return (arr[0][0] == arr[0][1] && arr[0][1] == arr[0][2] && arr[0][0] != null)
            || (arr[1][0] == arr[1][1] && arr[1][1] == arr[1][2] && arr[1][0] != null)
            || (arr[2][0] == arr[2][1] && arr[2][1] == arr[2][2] && arr[2][0] != null)
            || (arr[0][0] == arr[1][0] && arr[1][0] == arr[2][0] && arr[0][0] != null)
            || (arr[0][1] == arr[1][1] && arr[1][1] == arr[2][1] && arr[0][1] != null)
            || (arr[0][2] == arr[1][2] && arr[1][2] == arr[2][2] && arr[0][2] != null)
            || (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2] && arr[0][0] != null)
    };
    return {placeMarker}
})();

board.placeMarker(0, 1);