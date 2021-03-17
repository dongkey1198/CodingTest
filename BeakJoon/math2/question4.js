const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input = line.split(' ').map(num => parseInt(num));
    let M = input[0];
    let N = input[1];
    let numbers = N-M;
    for(let i = 0; i <= numbers)
}).on('close', ()=>{
    process.exit()
});