var numSelcted = null;
var tileSelected = null;
var errors = 0;
var number = -1;

var board = [
    "  74916 5",
    "2   6 3 9",
    "     7 1 ",
    " 586    4",
    "  3    9 ",
    "  62  187",
    "9 4 7   2",
    "67 83    ",
    "81  45   "
]
var solution = [
    "387481625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]
setGame();

function setGame(){
    for(let i = 1;i<=9;i++){
        let number = document.createElement("div");
        number.id = i;
        number.textContent = i;
        number.classList = "number"
        number.addEventListener("click",clickNum);
        document.querySelector(".digits").appendChild(number)
    }

    for(let i = 0; i< 9;i++){
        for(let j = 0;j<9;j++){
            let tile = document.createElement("div");
            tile.id = i.toString() + j.toString();
            tile.textContent = board[i].charAt(j);
            tile.classList = "tile";
            tile.addEventListener("click",selectTile);
            document.querySelector("#board").appendChild(tile);
        }
    }
}

function clickNum(){
    if(numSelcted != null){
        numSelcted.classList.remove("clickedNum")
    }
    numSelcted = this;
    numSelcted.classList.add("clickedNum");
  number = numSelcted.textContent;
  var tileRow = tileSelected.id.charAt(0);
  var tileCol = tileSelected.id.charAt(1);
  if(number === solution[tileRow].charAt(tileCol) ){
    tileSelected.textContent = number;
  }else{
    var e = document.querySelector("#errors");
    errors++;
    if(errors > 3){
        alert("Game Over");
    }
    e.textContent = errors;
  }
 
}

function selectTile(){
    if(tileSelected != null){
        tileSelected.classList.remove("clickedTile")
    }
    tileSelected = this;
    tileSelected.classList.add("clickedTile");
   
}

