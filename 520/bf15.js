const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
let result = 0;
rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{

    const [n, m] = input.shift().split(' ').map(num => Number(num));
    const graph = [];
    const visited = new Array(n).fill(false);

    // 인접 배열을 생성해준다.
    for(let i = 0; i < n; i ++){
        graph.push([]);
    }
    for(let i = 0; i < input.length; i++){        
        const [n1, n2] = input[i].split(' ').map(num => Number(num));
        graph[n1].push(n2);
        graph[n2].push(n1);
    }
    
    // 0 ~ n-1 시작 점으로 잡고 dfs알고리즘을 이용하여 
    // 관계를 확인한다.
    for(let i = 0; i < n; i++){
        if(result === 0){
            dfs(i, 1);
        }
    }
    console.log(result);


    function dfs(start, cnt){
        // 관계의 수가 5일때 결과값을 1로 재할당한다.
        if(cnt === 5){
            result = 1;
            return;
        }

        visited[start] = true;
        for(let i = 0; i < graph[start].length; i++){
            let next = graph[start][i];
            if(!visited[next]){
                dfs(next, cnt + 1);
            }
        }
        visited[start] = false;
    }
    process.exit();
});
