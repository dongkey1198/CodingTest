const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', (line)=>{
    input = line.split(' ').map(num => Number(num));
}).on('close', ()=>{
    const k = input[1];
    const num = input[0];
    const dp = new Array(k).fill(0);
    for(let i = 0; i < k; i++){
        dp[i] = [i + 1];
    }
    
    for(let i = 1;  i < num; i++){
        dp[0][i] = 1;
    }
    
    for(let i = 1; i < k; i++){
        for(let j = 1; j < num; j++){
            dp[i][j] = (dp[i-1][j] + dp[i][j-1]) % 1000000000;
        }
    }
    console.log(dp[k-1][num-1] % 1000000000);
    process.exit();

});