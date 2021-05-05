const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

rl.on('line', (line)=>{
    numbers.push(Number(line));
}).on('close', ()=>{
    let n = numbers.shift();
    numbers.unshift(0);
    const dp = new Array(n + 1).fill(0);
    dp[1] = numbers[1];
    dp[2] = numbers[1] + numbers[2];
    for(let i = 3; i <= n; i++){
        dp[i] = Math.max(dp[i-1], numbers[i] + dp[i-2], numbers[i] + numbers[i-1] + dp[i-3])
    }

    console.log(dp[n]);

    process.exit();
});