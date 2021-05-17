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
    const visited = [];
    let result = 0;
    for(let i = 0; i < input.length; i++){
        arr.push(input[i].split(' ').map(num => Number(num)));
    }


    let total_p = 0;

    dfs(0, 0);

    function dfs(idx, pay){
        if(idx >= n){
            result = Math.max(result, pay);
            return;
        }
        if(idx + arr[idx][0] <= n) dfs(idx + arr[idx][0], pay + arr[idx][1]);
        else dfs(idx + arr[idx][0], pay);

        dfs(idx + 1, pay);

    }
    console.log(result);
    process.exit();
});
