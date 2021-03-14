const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    let count = parseInt(input.shift());
    input = input.map(el => parseInt(el));
    for(i = 0; i < count; i++){
        console.log(solution(input[2*i], input[2*i + 1]));
    }
    process.exit();
});

function solution(k, n){
    if(k === 0) return n;
    let sum = 0;
    for(let i = 0; i < n; i++){
        sum += solution(k-1, i+1);
    }
    return sum;
}