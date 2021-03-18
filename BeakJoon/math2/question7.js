const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input = line.split(' ').map(num => parseInt(num));
}).on('close', ()=>{
    
    input[2] = input[2] - input[0];
    input[3] = input[3] - input[1];
    
    input.sort((a,b)=> {return a-b});
    console.log(input[0]);
    
    process.exit();
});