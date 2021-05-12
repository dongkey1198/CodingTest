const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    const[m, n] = input.shift().split(' ').map(num => Number(num));
    const arr = input.shift().split(' ').map(num => Number(num));
    const visited = new Array(n);
    const output = [];
    let result = '';

    arr.sort((a,b) => a-b );
    
    dfs(0);
    console.log(result);

    function dfs(cnt){
        if(cnt === n){
            result += `${output.join(' ')}\n`;
        }
        for(let i = 0; i < m; i++){
            if(visited[i]) continue;
            visited[i] = true;
            output.push(arr[i]);
            dfs(cnt + 1);
            output.pop();
            visited[i] = false;
        }
    }
    

    process.exit();
});
