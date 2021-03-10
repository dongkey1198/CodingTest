const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    input.shift();
    let sum = 0;
    for(let i in input[0]){
        sum += parseInt(input[0][i]);
    }
    console.log(sum);
    process.exit();
});