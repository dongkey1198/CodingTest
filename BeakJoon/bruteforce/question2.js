
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line)=>{
    let n = parseInt(line);
    let flag = false;
    for(let i  = 1; i <= n; i++){
        let sum = solution(i);
        if(sum + i === n){
            console.log(i);
            flag = true;
            break;
        }
    }

    if(!flag){
        console.log(0);
    }

    rl.close();
}).on('close', ()=>{
    process.exit();
});

function solution(i){
    let sum = 0;
    while(i > 0){
        sum += i%10;
        i = parseInt(i/10);
    }
    return sum;
}