const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', (line)=>{
    input = Number(line);
}).on('close', ()=>{
    
    let n_5 = parseInt(input/5);
    let n_25 = parseInt(input/25);
    let n_125 = parseInt(input/125);
    console.log(n_5 + n_25 + n_125);

    process.exit();
});

