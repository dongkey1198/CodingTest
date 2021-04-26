const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

let input;

rl.on('line', (line)=>{
    input = Number(line);
}).on('close', ()=>{
    console.log(solution(input));

    function solution(input){
        if(input <= 1){
            return 1;
        }
        return input * solution(input - 1);
    }
    process.exit();
})