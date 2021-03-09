const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=> {
    input.push(line);
}).on('close', ()=>{
    let N = input[0];
    let answer = '';
    for(let i = 1; i <= N; i++){
        let numbers = input[i].split(' ');
        answer += `Case #${i}: ${parseInt(numbers[0]) + parseInt(numbers[1])}\n`
    }
    console.log(answer); 
    process.exit();
});