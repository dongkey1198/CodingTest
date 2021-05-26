const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    const [n, m, v] = input.shift().split(' ').map(num => Number(num));
    const visited = new Array(n + 1).fill(false);
    const dfs_result = [];
    const bfs_result = [];
    const graph = [];
    for(let i = 0; i <= n; i++){
        graph.push([]);
    }

    
    for(let i = 0; i < input.length; i++){
        const [n1, n2] = input[i].split(' ').map(num => Number(num));
        graph[n1].push(n2);
        graph[n2].push(n1);
    }

    for(let i = 1; i < graph.length; i++){
        graph[i].sort((a,b) => a-b);
    }
    console.log(graph);
    dfs(v);
    visited.fill(false);
    bfs(v);
    console.log(dfs_result.join(' '));
    console.log(bfs_result.join(' '));

    function bfs(start){
        const queue = [];
        // 시작점을 true
        visited[start] = true;
        // 시작점을 queue에 넣는다.
        queue.push(start);
        // 시작점을 결과값에 넣는다.
        bfs_result.push(start);

        // queue의 길이가 0이 될때까지 반복한다.
        while(queue.length){
            // queue 가장 앞에 있는 값을 가져온다.
            const cur = queue.shift();
            for(let i = 0; i < graph[cur].length; i++){
                const next = graph[cur][i];
                if(!visited[next]){
                    queue.push(next);
                    bfs_result.push(next);
                    visited[next] = true;
                }
            }
        }
    }

    function dfs(start){
        visited[start] = true;
        dfs_result.push(start);
        for(let i = 0; i < graph[start].length; i++){
            const next = graph[start][i];
            if(!visited[next]){
                dfs(next);
            } 
        }
    }
    process.exit();
});
