const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    input = input.map(num => parseInt(num));
    let max = input[0];
    for(let i = 1; i < input.length; i++){
        if(max < input[i]) max = input[i];
    }
    console.log(max);
    console.log(input.indexOf(max) + 1);
    process.exit();
});