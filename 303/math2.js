const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input = line.split(' ');
}).on('close', ()=>{
    let N = input[0];
    let B = parseInt(input[1]);

    console.log(parseInt(N, B).toString(10));
    process.exit();
});