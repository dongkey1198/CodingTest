const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input = line.split(' ').map(num => Number(num));
}).on('close', ()=>{

    const [m, n] = input;

    const output = [];
    let result = "";

    dfs(0);
    console.log(result);
    
    function dfs(cnt){
        
        if(cnt === n){
            result += `${output.join(' ')}\n`;
            return;
        }
        for(let i = 0; i < m; i++){
            if(output.length > 0 && output[output.length-1] > i+1) continue;
            output.push(i+1);
            dfs(cnt + 1);
            output.pop();
        }
    }

    process.exit();
});
