const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line)=>{
    let input = [];
    input = line.split(' ').map(el => BigInt(el));
    console.log((input[0]+input[1]).toString());
}).on('close', ()=>{
    process.exit();
});