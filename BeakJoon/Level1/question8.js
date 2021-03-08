const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) =>{
    input = line.split(' ').map(num => parseInt(num));
}).on('close', () =>{
    console.log(input[0] + input[1]);
    console.log(input[0] - input[1]);
    console.log(input[0] * input[1]);
    console.log(parseInt(input[0] / input[1]));
    console.log(input[0] % input[1]);
    
    process.exit();
});