const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    const n = Number(input.shift());
    const dp = [];
    const cost = [];
    for(let i = 0; i < n; i++){
        let tmp = input[i].split(' ').map(num => Number(num));
        cost.push(tmp);
        
        let tmp2 = new Array(3).fill(0);
        dp.push(tmp2);
    }
    cost.unshift([0]);
    dp.unshift([0]);
    
    let answer = 1000*1000 +1;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(i === j){
                dp[1][i] = cost[1][i];
            } else{
                dp[1][i] = 1000*1000+1;
            }
        }
        for(let j = 2; j <= n; j++){
            dp[j][0] = cost[j] + Math.min(dp[j-1][1], dp[j-1][2]);
            dp[j][1] = cost[j] + Math.min(dp[j-1][0], dp[j-1][2]);
            dp[j][2] = cost[j] + Math.min(dp[j-1][0], dp[j-1][1]);
        }

        for(let j = 0; j < n; j++){
            if(j === i){
                continue;
            }
            answer = Math.min(answer, dp[n][j]);
        }
        console.log(dp);
    }
    
    process.exit();
});
