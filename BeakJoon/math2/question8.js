const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line.split(' ').map(num => parseInt(num)));
}).on('close', ()=>{
    let x = 0;

    if(input[0][0] === input[1][0]){
        x = input[2][0];
    } else if(input[0][0] === input[2][0]){
        x = input[1][0];
    } else{
        x = input[0][0];
    }

    let y = 0;
    if(input[0][1] === input[1][1]){
        y = input[2][1];
    } else if(input[0][1] === input[2][1]){
        y = input[1][1];
    } else{
        y = input[0][1];
    }

    console.log(x , y);
});