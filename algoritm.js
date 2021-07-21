/** Functions **/

let checks = {
    'checkUp': checkUp,
    'checkDown': checkDown,
    'checkLeft': checkLeft,
    'checkRight': checkRight
}

function checkUp(grid, coord) { // coord format - [0,0]
    if(coord[0] === 0) return [];
    //console.log('checkup', coord, grid);
    if( stepIsNew([coord[0] - 1, coord[1]]) ) {
        return grid[coord[0] - 1][coord[1]] === 0 ? [coord[0] - 1, coord[1]] : [];
    } else return [];
}
function checkDown(grid, coord) { // coord format - [0,0]
    if(coord[0] === grid.length-1) return [];
    //console.log('checkdown', coord)
    if( stepIsNew([coord[0]+1, coord[1]]) ) {
        return grid[coord[0] + 1][coord[1]] === 0 ? [coord[0] + 1, coord[1]] : [];
    } else return [];
}
function checkLeft(grid, coord) { // coord format - [0,0]
    if(coord[1] === 0) return [];
    //console.log('checkleft', coord)
    if( stepIsNew([coord[0], coord[1] + 1]) ) {
        return grid[coord[0]][coord[1] - 1] === 0 ? [coord[0], coord[1] - 1] : [];
    } else return [];
}
function checkRight(grid, coord) { // coord format - [0,0]
    if(coord[1] === grid[coord[0]].length-1) return [];
    //console.log('checkrigt', coord);
    if( stepIsNew([coord[0], coord[1] + 1]) ) {
        return grid[coord[0]][coord[1] + 1] === 0 ? [coord[0], coord[1] + 1] : [];
    } else return [];
}

function stepIsNew(coord) {
    let stepNew = true;
    stepsHistory.forEach(step => {
        if(coord[0] === step[0] && coord[1] === step[1]) return stepNew = false;
    });
    return stepNew;
}

function step(grid, coord) {
    let keys = Object.keys(checks);
    for(let i = 0; i < 4; i++) {
        let newCoord = checks[keys[i]](grid, coord);
        console.log(newCoord);
        if(newCoord.length !== 0) {
            stepsHistory.push(newCoord);
            console.log('steps history', stepsHistory)
            step(grid, newCoord);
        }
    }
}

let arrTest = [
    [1,1,0,1,1],
    [1,0,0,0,1],
    [0,0,0,0,0],
    [1,0,0,0,1],
    [1,1,0,1,1]
];

let stepsHistory = []; // coord format - [0,0]

step(arrTest, [3,2]);