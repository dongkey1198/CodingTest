const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input = line.split(' ');
}).on('close', ()=>{
    console.log(parseInt(input[0]+input[1]) + parseInt(input[2]+input[3]));
    process.exit();
});

