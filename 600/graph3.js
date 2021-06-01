const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line)=>{

    input.push(line);

}).on('close', ()=>{
    const n = Number(input.shift());
    const graph = [];
    const visited = [];

    // 완전 탐색을 위한 graph 이차원 배열과
    // 방문 여부를 확인할 boolean 이차원 배열을 생성한다.
    for(let i = 0; i < n; i++){
        graph.push(input.shift().split('').map(num => Number(num)));
        visited.push(new Array(n).fill(false));
    }

    // 각 단지의 집의 개수를 담을 배열
    const result = [];

    // 단지의 개수를 새기위한 변수
    let house_area = 0;
    // 해당 값의 주변을 탐색하기위한 x, y 좌표
    const x_move = [1, -1, 0, 0];
    const y_move = [0, 0, -1, 1];
    
    let cnt = 0;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(graph[i][j] === 1 && !visited[i][j]){
                cnt = 1;
                house_area++;
                result.push(dfs(i, j));
            }
        }
    }

    function dfs(x, y){
        
        visited[x][y] = true;

        for(let i = 0; i < 4; i++){
            const next_x = x + x_move[i];
            const next_y = y + y_move[i];

            if(next_x >= 0 && next_y >= 0 && next_x < n && next_y < n){
                if(graph[next_x][next_y] && !visited[next_x][next_y]){
                    dfs(next_x, next_y);
                    cnt++;
                }
            }

        }
        return cnt;
    }
    console.log(house_area);
    result.sort((a,b) => a-b).forEach(num => console.log(num));
    process.exit();
});