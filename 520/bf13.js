const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    const [n, s] = input.shift().split(' ').map(num => Number(num));
    const arr = input.shift().split(' ').map(num => Number(num));
    let count = 0;
    
    dfs(0, 0);
    console.log(s === 0 ? count-1 : count);

    function dfs(idx, num){
        if(idx === n){
            if(num === s) count++;
            return;
        }
        dfs(idx + 1, num + arr[idx]);
        dfs(idx + 1, num);
    }
    
    process.exit();
});
