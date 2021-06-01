const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let n = 0;
let m = 0;

const x_move = [-1, 1, 0, 0, -1, -1, 1, 1];
const y_move = [0, 0, 1, -1, -1, 1, 1, -1];



rl.on('line', (line)=>{
    if(n === 0){
        if(line === "0 0"){
            process.exit();
        }
        // 아래에서 2차원 배열을 만들때 햇갈리지 않기위해 m, n을 거꿀로 받아준다.
        [m, n] = line.split(' ').map(num => Number(num));
    } else{
        input.push(line);
        if(input.length === n){
            main();
            n = 0;
            m = 0;
            input = [];
        }
    }
});

function main(){
    const graph = [];
    const visited = [];
    
    for(let i = 0; i < n; i++){
        graph.push(input[i].split(' ').map(num => Number(num)));
        visited.push(new Array(m).fill(false));
    }

    let count = 0;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(graph[i][j] === 1 && !visited[i][j]){
                count++;
                dfs(i, j);
            }
        }
    }

    console.log(count);

    // m = y 이고 n = x 이기때문에 반대로 한다 생각하면된다.
    function dfs(y, x){
        visited[y][x] = true;
        for(let i = 0; i < 8; i++){
            const next_x = x + x_move[i];
            const next_y = y + y_move[i];

            if(next_x >= 0 && next_x < m && next_y >= 0 && next_y < n){
                if(graph[next_y][next_x] === 1 && !visited[next_y][next_x]){
                    dfs(next_y, next_x);
                }
            }
        }
    }
}
