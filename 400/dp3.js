const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(parseInt(line));
}).on('close', ()=>{
    input = input.map(num => Number(num));
    input.shift();

    const dp = new Array(11).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    let result = '';
    input.map(n => {
        for(let i = 4; i <= n; i++){
            if(dp[n] !== 0) continue;
            dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
        }
        result += `${dp[n]}\n`;
    });
    console.log(result);
    process.exit();
});