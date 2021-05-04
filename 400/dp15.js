const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    let n = Number(input.shift());
    let dp = [];
    for(let i = 0; i < input.length; i++){
        let tmp = input[i].split(' ').map(num => Number(num));
        dp.push(tmp);
    }
    console.log(dp);
    for(let i = 1 ; i < dp.length; i++){
        dp[i][0] = Math.min(dp[i-1][1], dp[i-1][2]) + dp[i][0];
        dp[i][1] = Math.min(dp[i-1][0], dp[i-1][2]) + dp[i][1];
        dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1]) + dp[i][2];
    }

    console.log(Math.min(dp[n-1][0],dp[n-1][1], dp[n-1][2]));
    process.exit();
});