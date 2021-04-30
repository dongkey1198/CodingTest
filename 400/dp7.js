const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', (line)=>{
    input = Number(line);
}).on('close', ()=>{
    const dp = [[0, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
    let t = input - 1;

    while(t--){
        let tmp = new Array(10).fill(0);
        dp.push(tmp);
    }

    for(let i = 1; i < input; i++){
        for(let j = 0; j <= 9; j++){
            if(j === 0){
                dp[i][j] = (dp[i-1][j+1]) % 1000000000;
            } else if(j === 9){
                dp[i][j] = (dp[i-1][j-1]) % 1000000000;
            } else{
                dp[i][j] = (dp[i-1][j-1] + dp[i-1][j+1]) % 1000000000;
            }
        }
    }
    const result = dp[input - 1].reduce((acc, cur) => {
        return (acc + cur)  % 1000000000;
    });
    console.log(result);
    
    process.exit();
});