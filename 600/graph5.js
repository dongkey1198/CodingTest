const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{

    const [n, m] = input.shift().split(' ').map(num => Number(num));
    const graph = [];
    const visited = [];

    const x_move = [1, -1, 0, 0];
    const y_move = [0, 0, -1, 1];

    for(let i = 0; i < n; i++){
        graph.push(input.shift().split('').map(num => Number(num)));
        visited.push(new Array(n).fill(0));
    }

    dfs(0, 0);

    console.log(visited[n-1][m-1]);
    
    function dfs(y, x){

        const queue = [];
        // 큐에 좌표를 담는다
        queue.push({y:y, x:x});

        // 해당 좌표의 값을 1로 재할당한다.
        visited[y][x] = 1;

        while(queue.length){
            const {y, x} = queue.shift();
            for(let i = 0; i < 4; i++){
                const y_next = y + y_move[i];
                const x_next = x + x_move[i];
    
                if(y_next >= 0 && y_next < n && x_next >= 0 && x_next < m){
                    // 다음 길이 지나가지 않은 길이라면
                    // 다음 길의 값은 현재까지온 길의 수 더하기 1이다.
                    if(!visited[y_next][x_next] && graph[y_next][x_next]){
                        visited[y_next][x_next] = visited[y][x] + 1;
                        queue.push({y:y_next, x:x_next});
                    }
                }
            }
        }
    }
    process.exit();
});