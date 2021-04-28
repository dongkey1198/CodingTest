const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input = line.split(' ');
}).on('close', ()=>{
    
    let N = input[0];
    let B = parseInt(input[1]);
    let result = parseInt(N, 10).toString(B);
    for(let i = 0; i < result.length; i++){
        result[i] = result[i].charCodeAt(0) + 55;
    }
    console.log(result);
    process.exit();
});