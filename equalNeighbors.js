function equal(matrix) {
    let counter = 0;
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            let col = row[j];
 
            if (i !== matrix.length - 1) {
                if (col === row[j + 1]) {
                    counter++;
                }
                if (col === matrix[i + 1][j]) {
                    counter++;
                }
            }
            else if (col === row[j + 1] || col === matrix[i][j + 1]) {
                counter++;
            }
        }
    }
    console.log(counter);
}
solve([['test', 'yes', 'yo', 'ho'], ['well', 'done', 'yo', '6'], ['not', 'done', 'yet', '5']])
