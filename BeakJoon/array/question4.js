const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    input = input.map(num => parseInt(num) % 42);
    let arr = [];
    for(let i = 0; i < input.length; i++){
        if(!arr.includes(input[i])){
            arr.push(input[i]);
        }
    }
    console.log(arr.length);
    process.exit();
});