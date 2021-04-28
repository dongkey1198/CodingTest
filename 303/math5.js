const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', (line)=>{
    input = parseInt(line);
}).on('close', ()=>{
    let DP = new Array(input + 1).fill(0);

    for(let i = 2; i <= input; i++){
        console.log(i);
        DP[i] = DP[i-1] + 1;
        console.log("-1: " + DP);
        if(i % 2 === 0){
            DP[i] = Math.min(DP[i], DP[i/2] + 1);
            console.log("/2: " + DP);
        }
        if(i % 3 === 0){
            DP[i] = Math.min(DP[i], DP[i/3] + 1);
            console.log("/3: " + DP);
        }
    }
    console.log(DP[input]);
    process.exit();
});