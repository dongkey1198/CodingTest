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
    let dp = input[0].split(' ').map(num => Number(num));
    for(let i = 1; i < n; i++){
        if(dp[i] <  dp[i] + dp[i-1]){
            dp[i] = dp[i] + dp[i-1];
        }
    }
    let max = dp[0];
    for(let i = 1 ; i < dp.length; i++){
        if(max < dp[i]){
            max = dp[i];
        }
    }
    console.log(max);
    process.exit();
});