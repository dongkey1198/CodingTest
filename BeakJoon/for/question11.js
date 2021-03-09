const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    let N_X = input[0].split(' ').map(num => parseInt(num));
    let numbers = input[1].split(' ').map(num => parseInt(num));
    let answer = "";
    for(let i =0; i < N_X[0]; i++){
        if(numbers[i] < N_X[1]){
            answer += `${numbers[i]} `;
        }
    }
    console.log(answer);
    process.exit();
});