const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input = line;
}).on('close', ()=>{
    console.log(parseInt(input, 2).toString(8));
    process.exit();
});

