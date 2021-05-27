const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = []
let testCase = 0;

rl.on('line', (line)=> {
    // 입력의 첫번째 줄은 TextCase의 개수이다.
    if (!testCase) {
        testCase = Number(line);
    } else {
        input.push(line);
        if (input.length == Number(input[0].split(" ")[1]) + 1) {
            main();
            input = [];
        }
    }
});

const main = function(){
    // 연결 상태를 담을 배열
    const graph = [];
    // 정점의 개수와 간수의 개수를 담을 변수
    let v, e;

    input.forEach((el, i)=> {
        const nums = el.split(' ').map(num => Number(num));
        if(i === 0){
            [v, e] = nums;
            for(let i = 0; i <= v; i++){
                graph.push([]);
            }
        } else {
            const [n1, n2] = nums;
            graph[n1].push(n2);
            graph[n2].push(n1);
        }
    });
    
    const visited = new Array(v + 1).fill(0);

    const bfs = function(start) {
        const queue = [];
        queue.push(start);

        while(queue.length){
            const cur = queue.shift();

            for(let i = 0; i < graph[cur].length; i++){
                const next =graph[cur][i];
                if(!visited[next]){
                    if (visited[cur] === 1) {
                        visited[next] = 2;
                    } else {
                        visited[next] = 1;
                    }
                    queue.push(next);
                } else if (visited[cur] === visited[next]) {
                    return;
                }
            }
        }
    }

    for(let i = 1; i <= v; i++){
        if (!visited[i]) {
            visited[i] = 1;
            bfs(i);
        }
    }

    let flag = false;

    loop1: for (let i = 1; i <= v; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            if (visited[i] === visited[graph[i][j]]) {
                flag = true;
                break loop1;
            }
        }
    }

    console.log(flag === true ? 'NO':'YES');

}