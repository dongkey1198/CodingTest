function solution(input){
    let a = input[0];
    let b = input[1];

    while(b !== 0){
        let r = a % b;
        a = b;
        b = r;
    }
    return a;

}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', (line)=>{
    input = line.split(' ').map(num => Number(num));
}).on('close', ()=>{
    let gcd = solution(input);
    console.log(solution(input));
    console.log(input[0] * (input[1]/gcd));
    console.log(18%24);
    process.exit();
});