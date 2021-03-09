const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    let T = parseInt(input[0]);
    let answer = '';
    for(let i = 1; i <= T; i++){
        let numbers = input[i].split(' ');
        answer += `Case #${i}: ${parseInt(numbers[0])} + ${parseInt(numbers[1])} = ${parseInt(numbers[0]) + parseInt(numbers[1])}\n`
    }
    console.log(answer);
    process.exit();
});