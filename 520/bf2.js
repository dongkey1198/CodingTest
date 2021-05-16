const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', (line)=>{
    input = Number(line);
}).on('close', ()=>{
    
    const visitied = [];
    const output = [];
    const result = [];

    dfs(0);
    
    function dfs(cnt){
        if(cnt === input){
            result.push(output.join(' '));
            return;
        }
        for(let i = 0; i < input; i++){
            if(visitied[i]) continue;
            visitied[i] = true;
            output.push(i + 1);
            dfs(cnt + 1);
            output.pop();
            visitied[i] = false;
        }
    }

    console.log(result.join('\n'));

    process.exit();
});

