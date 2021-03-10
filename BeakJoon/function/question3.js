const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line)=>{
    let N = parseInt(line);

    if(N === 1000) N = 999;

    if(N < 100){
        console.log(N);
    } else{
        let count = 99;
        for(let i = 100; i <= N; i++){
            let isCorrect = solution(i);
            if(isCorrect) {count++;}
        }
        console.log(count);
    }
    rl.close();
}).on('close', ()=>{
    process.exit();
});

function solution(num){
    let arr = [];
    while(num > 0){
        arr.push(num%10);
        num = parseInt(num/10);
    }
    if((arr[0] - arr[1]) !== (arr[1]-arr[2])){
        return false;
    }
    return true;
}