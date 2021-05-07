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
    const a = input[0].split(' ').map(num => Number(num));
    const dp  = new Array(n).fill(0);
    max = 0;
    
    for(let i = 0 ; i < n; i++){
        dp[i] = a[i];
        for(let j = 0; j < i; j++){
            if(a[i] > a[j] && dp[i] < dp[j] + a[i]){
                dp[i] = dp[j] + a[i];
            }
        }
        max = Math.max(dp[i], max);
    }
    console.log(max);
    process.exit();
});
