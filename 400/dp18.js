const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    let t = Number(input.shift());
    let result = '';

    while(t--){
        let dp = [];
        let N = Number(input.shift());
        dp.push(input.shift().split(' ').map(num => Number(num)));
        dp.push(input.shift().split(' ').map(num => Number(num)));

        for(let i = 1; i < N; i++){
            if(i === 1){
                dp[0][i] += dp[1][i-1];
                dp[1][i] += dp[0][i-1];
            } else{
                dp[0][i] = Math.max(dp[1][i-1], dp[1][i-2]) + dp[0][i];
                dp[1][i] = Math.max(dp[0][i-1], dp[0][i-2]) + dp[1][i];
            }
        }
        result += `${Math.max(dp[0][N-1], dp[1][N-1])}\n`;
    }
    console.log(result);
    process.exit();
});