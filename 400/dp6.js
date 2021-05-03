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

    let dp = [];
    
    for(let i = 0; i < 100001; i++){
        let tmp = new Array(4).fill(0);
        dp.push(tmp);
    }

    dp[1][1] = 1;
    dp[2][2] = 1;
    dp[3][1] = dp[3][2] = dp[3][3] = 1;
    let cnt = 4;
    for(let i = 4; i < dp.length; i++){
        dp[i][1] = (dp[i-1][2] + dp[i-1][3]) % 1000000009;
        dp[i][2] = (dp[i-2][1] + dp[i-2][3]) % 1000000009;
        dp[i][3] = (dp[i-3][1] + dp[i-3][2]) % 1000000009; 
    }
    let result = '';
    input.map(num => {
        let tmp = (dp[num][1] + dp[num][2] + dp[num][3]) % 1000000009;
        result += `${tmp}\n`;
    });

    console.log(result);
    process.exit();
});