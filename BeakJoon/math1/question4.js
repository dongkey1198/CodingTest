const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input = line.split(' ').map(el => parseInt(el));
}).on('close', ()=>{
    let A = input[0];
    let B = input[1];
    let V = input[2];
    
    let cnt = parseInt((V-B)/(A-B));
    console.log((V-B)%(A-B) === 0 ? `${parseInt((V-B)/(A-B))}`:`${parseInt((V-B)/(A-B)) + 1}`);

    process.exit();
});