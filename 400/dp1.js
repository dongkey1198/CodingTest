const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', (line)=>{
    input = parseInt(line);
}).on('close', ()=>{
    const dp = new Array(input + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    for(let i = 3; i <= input; i++){
        dp[i] =  (dp[i-1] + dp[i-2]) % 10007;
    }
    console.log(dp[input]);
    process.exit();
});