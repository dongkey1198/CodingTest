function solution(input){
    let result = [];
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    result.push((a+b)%c);
    result.push(((a%c)+(b%c))%c)
    result.push(((a*b)%c));
    result.push(((a%c)*(b%c))%c);

    return result;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', (line)=>{
    input = line.split(' ');
}).on('close', ()=>{
    let result = solution(input);
    for(let i = 0; i < result.length; i++){
        console.log(result[i]);
    }
    process.exit();
});

