const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=> {
    input = line.split(' ').map(num => Number(num));
}).on('close', ()=>{
    const[n, m] = input;
    
    const visitied = new Array(n);
    const output = [];
    let result = '';

    dfs(0);
    console.log(result);

    function dfs(cnt){
        if(cnt === m){
            result += `${output.join(' ')}\n`;
            return;
        }

        for(let i = 0; i < n; i++){
            if(visitied[i]) continue;
            visitied[i] = true;
            output.push(i + 1);
            dfs(cnt + 1);
            output.pop();
            visitied[i] = false;
        }
    }

    process.exit();
});