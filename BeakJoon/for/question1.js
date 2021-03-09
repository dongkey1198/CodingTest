const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line)=>{
    let N = parseInt(line);
    for(let i = 1; i <= 9; i++){
        console.log(`${N} * ${i} = ${N*i}`);
    }
}).on('close', ()=>{
    process.exit();
});