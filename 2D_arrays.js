// 2D array = multi-dimentsional array that stores a matrix
//            of data in rows and columns
//            useful for games, spreadsheets, or representing images

//            [X, O, X]
//            [O, X, O]
//            [X, O, X]

// each array in the matrix represents a row
// each index in the array represents a column
const matrix = [[1, 2, 3], 
                [4, 5, 6], 
                [7, 8, 9]];

matrix[0][0] = 'X'; // changes value at row 0, column 0
matrix[0][1] = 'O'; // changes value at row 0, column 1
matrix[0][2] = 'X'; // changes value at row 0, column 2

matrix[1][0] = 'O'; // changes value at row 1, column 0
matrix[1][1] = 'X'; // changes value at row 1, column 1
matrix[1][2] = 'O'; // changes value at row 1, column 2

matrix[2][0] = 'X'; // changes value at row 2, column 0
matrix[2][1] = 'O'; // changes value at row 2, column 1
matrix[2][2] = 'X'; // changes value at row 2, column 2

for(let row of matrix) {
    // cleaner look
    const rowString = row.join(' ');
    console.log(rowString);
}