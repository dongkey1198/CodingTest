const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    let N = parseInt(input[0]);
    let numbers = input[1].split(' ').map(num => parseInt(num));
    numbers.sort((a,b)=>{
        return a-b;
    });
    console.log(numbers);
    process.exit();
});