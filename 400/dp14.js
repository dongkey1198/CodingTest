const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(Number(line));
}).on('close', ()=>{
    
    input.shift();
    
    const dp = new Array(1000001).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;

    for(let i = 4; i < dp.length; i++){
        dp[i] = (dp[i-1] + dp[i-2] + dp[i-3]) % 1000000009;
    }

    let result = '';
    
    for(let i = 0; i < input.length; i++){
        result += `${dp[input[i]]}\n`;
    }
    console.log(result);
    process.exit();
});