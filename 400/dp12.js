const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;
rl.on('line', (line)=>{
    input = Number(line);
}).on('close', ()=>{
    const dp = new Array(input + 1).fill(0);

    for(let i = 1; i <= input; i++){
        if(i === 1){
            dp[i] = input/i;
            continue;
        } else if(Math.pow(i, 2) > input){
            break;
        }
        let tmp = input;
        let a = i;
        let cnt = 0;
        while(tmp >= 1){
            if(tmp - Math.pow(a, 2) < 0){
                a--;
                continue;
            } else if(tmp - Math.pow(a, 2) >= 0){
                dp[i]++;
                tmp = tmp - Math.pow(a,2);
            }
        }
    }
    let min = dp[1];
    for(let i = 0; i < dp.length; i++){
        if(min > dp[i] && dp[i] !== 0){
            min = dp[i];
        }
    }
    console.log(min);
    process.exit();
});