const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', (line)=>{
    input = Number(line);
}).on('close', ()=>{
    let dp = new Array(input+1).fill(0);
    dp[0] = 1;
    dp[1] = 3;
    dp[2] = 7;

    for(let i = 3; i <= input; i++){
        dp[i] = dp[i-1]*2 + dp[i-2];
    }
    console.log(dp);
    process.exit();
});