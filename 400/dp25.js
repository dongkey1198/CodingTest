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
    dp[1] = 0;
    dp[2] = 3;

    for(let i = 3; i <= input; i++){
        if(i%2 !== 0){
            dp[i] = 0;
            continue;
        }
        dp[i] = dp[i-2] * 3;
        for(let j = 4; j <= i; j += 2){
            dp[i] += dp[i-j] * 2;
        }
    }
    console.log(dp[input]);
    process.exit();
});
