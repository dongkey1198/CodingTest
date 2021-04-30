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
    const Numbers = input[0].split(' ').map(num => Number(num));
    const dp = new Array(n).fill(0);

    for(let i = 0; i < n; i++){
        dp[i] = 1;
        for(let j = 0; j < i; j++){
            if(Numbers[i] < Numbers[j] && dp[i] < dp[j] + 1){
                dp[i] = dp[j] + 1;
            }
        }
    }
    let result = dp[0];
    for(let i = 1; i < n; i++){
        if(result < dp[i]){
            result = dp[i];
        }
    }
    console.log(result);
    process.exit();
});