const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(line);
}).on('close', ()=>{
    // 진수 A화 B변수 생성 
    const [A, B] = input[0].split(' ').map(num => Number(num));
    const numbers = input[2].split(' ').map(num => Number(num));
    let cnt = Number(input[1]) - 1;

    let b_num = 0;
    for(let i = 0; i < numbers.length; i++){
        b_num += Math.pow(A, cnt) * numbers[i];
        cnt-- ;
    }
    
    let result = "";
    while(b_num !== 0){
        result = parseInt(b_num % B)+ " " + result;
        b_num = parseInt(b_num/B);
    }
    console.log(result.trim());
    process.exit();
});