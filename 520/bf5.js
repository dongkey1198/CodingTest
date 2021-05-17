const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line)=> {
        input.push(line);
}).on('close', () =>{
    const visited = [];
    const visit= [];
    let arr;
    let result ='';

    for(let i = 0; i < input.length; i++){
        if(Number(input[i]) === 0) break;
        arr = input[i].split(' ').map(num => Number(num));
        dfs(0);
        result += `\n`;
    }

    function dfs(cnt){
        if(cnt === 6){
            result += `${visit.join(' ')}\n`;
            return;
        }
        for(let i = 1; i < arr.length; i++){
            if(visited[i]) continue;
            if((visit[visit.length-1] > arr[i])) continue;
            visited[i] = true;
            visit.push(arr[i]);
            dfs(cnt + 1);
            visit.pop();
            visited[i] = false;
        }
    }

    console.log(result);



    process.exit();
});