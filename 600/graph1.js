const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    const [u, v] = input.shift().split(' ').map(num => Number(num));
    const visited = new Array(u + 1).fill(false);    
    const arr = [];
    let result = 0;

    for(let i = 0 ; i <= u; i++){
        arr.push([]);
    }

    for(let i = 0; i < input.length; i++){
        const [n1, n2] = input[i].split(' ').map(num => Number(num));
        arr[n1].push(n2);
        arr[n2].push(n1); 
    }

    for(let i = 1; i <= u; i++){
        if(!visited[i]){
            result++;
            dfs(i);
        }
    }
    console.log(result);

    function dfs(idx){
        if(visited[idx]){
            return;
        }
        visited[idx] = true;
        for(let i = 0; i < arr[idx].length; i++){
            const next = arr[idx][i];
            if(!visited[next]){
                dfs(next);
            }
        }
    }

    process.exit();
});