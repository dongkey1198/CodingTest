const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    const n = Number(input.shift());
    const arr = [];
    let max = 0;
    
    for(let i = 0; i < input.length; i++){
        arr.push(input[i].split(' ').map(num => Number(num)));
    }

    dfs(0, 0); //index, pay
  
    console.log(max);
    function dfs(idx, pay){
        if(idx >= n){
            max = Math.max(max, pay);
            return;
        }
        if(idx + arr[idx][0] <= n) dfs(idx + arr[idx][0], pay + arr[idx][1]);
        else dfs(idx + arr[idx][0], pay);
        //dfs(idx + 1, pay);
    }

    process.exit();
});

