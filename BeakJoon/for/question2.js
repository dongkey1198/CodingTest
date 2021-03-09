const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=> {
    input.push(line);

}).on('close', ()=>{
    let N = parseInt(input[0]);
    let numbers = [];

    for(let i = 1; i <= N; i++){
        numbers.push(input[i].split(' ').map(num => parseInt(num)));
        console.log(numbers[i-1][0] + numbers[i-1][1]);
    }
    process.exit();
})