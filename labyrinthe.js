var body;

function onLoad() {
    body = document.body;
    

    var n = 25;
    var cellSize = Math.min(window.innerWidth, window.innerHeight)/n; 

    var maze = document.createElement("div");
    maze.classList.add("maze");
    //maze.style.width = cellSize*n+"px";
    //maze.style.height = cellSize*n+"px";
    //maze.style.gridTemplateColumns = "repeat("+n+","+cellSize+"px)";
    //maze.style.gridTemplateRows = "repeat("+n+","+cellSize+"px)";
    maze.style.gridTemplateColumns = "repeat("+n+",1fr)";
    maze.style.gridTemplateRows = "repeat("+n+",1fr)";

    var cells = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.onclick = () => {
                cell.style.backgroundColor="grey";
            };
            maze.appendChild(cell);
        }    
    }

    body.appendChild(maze);

}