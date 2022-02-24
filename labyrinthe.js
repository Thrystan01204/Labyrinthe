var mouseDown = 0;

function onLoad() {
    body = document.body;
    document.body.onmousedown = function() { 
        mouseDown = true;
      }
      document.body.onmouseup = function() {
        mouseDown = false;
      }
    
    var n = 30;
    var cellSize = Math.min(window.innerWidth, window.innerHeight)/n; 
    var maze = document.createElement("div");
    maze.classList.add("maze");
    maze.style.gridTemplateColumns = "repeat("+n+",1fr)";
    maze.style.gridTemplateRows = "repeat("+n+",1fr)";
    var cells = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.onmouseenter = (event) => {
                if(mouseDown){
                    cell.style.border = "0";
                }
            };
            cell.onmousedown = (event) => {
                cell.style.border = "0";
            };
            maze.appendChild(cell);
        }    
    }
    body.appendChild(maze);

}