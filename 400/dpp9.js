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
    const array = input[0].split(' ').map(num => Number(num));
    const dp = new Array(n).fill(0);
    let result = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < i; j++){
            if(array[i] > array[j] && dp[i] < dp[j]){
                dp[i] = dp[j];
            }
        }
        dp[i] += 1;
        result = Math.max(dp[i], result);
    }
    console.log(dp);
    console.log(result);
    process.exit();
});