const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    // TestCase 개수
    const k = Number(input.shift());

    while(input.length !== 0){
        //v == 정점의 개수
        //e == 간선의 개수
        const[v, e] = input.shift().split(' ').map(num => Number(num));
        
        // 방문 여부를 확인하기위해 배열을 생성한다.
        const visited = new Array(v + 1).fill(0);
        
    
        // 정점의 개수만큼 배열을 만들어준다.
        const graph = [];
        for(let i = 0; i <= v; i++){
            graph.push([]);
        }
        // 연결 리스트 생성
        for(let i = 0; i < e; i++){
            const[n1, n2] = input.shift().split(' ').map(num => Number(num));
            graph[n1].push(n2);
            graph[n2].push(n1);
        }
        
        for(let i = 1; i <= v; i++){
            if(!visited[i]){
                visited[i] = 1;
                bfs(i, graph, visited);
            }    
        }

         // 이분 그래프인지 결과를 확이하기위해
        let flag = false;
        loop1:for(let i = 1; i <= v; i++){
            for(let j = 0; j < graph[i].length; j++){
                if(visited[i] === visited[graph[i][j]]){
                    flag = true;
                    break loop1;
                }
            }
        }
 
        console.log(flag === true ? 'NO':'YES');
    }

    function bfs(start, graph, visited){
        const queue = [];
        queue.push(start);

        while(queue.length){
            const cur = queue.shift();
            for(let i = 0; i < graph[cur].length; i++){
                const next = graph[cur][i];
                if(!visited[next]){
                    if(visited[cur] === 1){
                        visited[next] = 2;
                    } else{
                        visited[next] = 1
                    }
                    queue.push(next);
                } else if(visited[cur] === visited[next]){
                    return;
                }
            } 
        }
    }


    process.exit();
});