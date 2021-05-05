const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', (line)=>{
    input = Number(line);
}).on('close', ()=>{
    const dp = [];

    for(let i = 0; i < input; i++){
        let tmp = new Array(10).fill(1);
        dp.push(tmp);
    }

    for(let i = 1; i < input; i++){
        for(let j = 8; j >= 0; j--){
            dp[i][j] = (dp[i][j+1] + dp[i-1][j]) % 10007; 
        }    
    }

    let result = dp[input-1].reduce((arr, cur)=> {
        return arr + cur;
    });

    console.log(result % 10007);
    process.exit();
});