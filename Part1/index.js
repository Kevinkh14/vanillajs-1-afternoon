const board = []

function play (clickedId){
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId) 

    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId] ='x'
    }else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId] = 'O'
    }
    console.log(board);

const topLeft = board[0]
const topCenter = board [1]
const topRight = board [2]
const centerLeft = board[3]
const centerCenter = board[4]
const centerRight = board [5]
const bottomLeft = board [6]
const bottomCenter = board [7]
const bottomRight = board [8]

if (topLeft !== undefined &&  topLeft === topCenter && topCenter === topRight){
    alert (topLeft + ` is the winner`)
    return
}
if (centerLeft !== undefined && centerLeft === centerCenter && centerCenter === centerRight){
    alert (centerLeft +  ` is the winner`)
}
if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomCenter === bottomRight){
    alert(bottomLeft + ` is the winner`)
    return
}
if (topLeft !== undefined && topLeft === centerLeft && centerLeft === bottomLeft){
    alert(topLeft + ` is the winner`)
    return
}
if (topCenter !== undefined && topCenter === centerCenter && centerCenter === bottomCenter){
    alert(topCenter + ` is the winner`)
    return
}
if (topRight !== undefined && topRight === centerRight && centerRight == bottomRight){
    alert(topRight + ` is the winner`)
    return    
}
if (topLeft !== undefined && topLeft === centerCenter && centerCenter === bottomRight){
    alert (topLeft + ` is the winner`)
    return
}
if (topRight !== undefined && topRight === centerCenter && centerCenter === bottomLeft){
    alert (topRight + ` is the winner`)
    return
}
let boardFull = true;
for (let i = 0; i <= 8; i++) {
  if (board[i] === undefined) {
    boardFull = false;
  }
}
if (boardFull === true) {
  alert("no winner");
}
}

