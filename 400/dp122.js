const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input;

rl.on("line", (line) => {
    input = Number(line);
}).on("close", () => {

    let dp = [0];

    for(let i = 1; i < input + 1 ; i++){
        
        dp[i] = dp[i-1] + 1;

        for(let j = 1; j <= Math.sqrt(i); j++){
            
            if(i - j**2 >= 0 && dp[i-j**2] + 1 < dp[i]){
                dp[i] = dp[i-j**2] + 1;
            }
        }
        console.log(dp);
    }
    console.log(dp[input]);

});