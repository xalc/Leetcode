var maximalSquare = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let maxArea = 0;
    const maxSquareArea = (i, j) => {
        let lastSquareArea = 0;
        const maxLevel = Math.min(m - i, n - j);
        let level = 0;
        while (level < maxLevel) {
            let stopLoop = false;
            for (let column = j; column <= j + level; column++) {
                if (matrix[i + level][column] === '0') {
                    stopLoop = true;
                    break;
                }
            }
            for (let row = i; row < i + level; row++) {
                if (matrix[row][j + level] === '0') {
                    stopLoop = true;
                    break;
                }
            }
            if (stopLoop) break;

            let dep = ++level;
            lastSquareArea = dep * dep


        }
        return lastSquareArea;


    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const squareArea = maxSquareArea(i, j);
            if (squareArea > maxArea) {
                maxArea = squareArea;
            }
        }
    }
    return maxArea;
};
let matrix = [["0"]];
console.log(maximalSquare(matrix))