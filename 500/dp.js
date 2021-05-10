const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input.push(Number(line));
}).on('close', ()=>{
    // 오름차순으로 정렬한다.
    input.sort((a, b) => {
        return a - b;
    });

    // 모든 난쟁이들의 키의 값을 합한다.
    let sum = input.reduce((acc, cur)=>{
        return acc + cur;
    });

    // 두 난쟁이의 키의 합을 구한다.
    let two_d = sum - 100;
    let a = 0;
    let b = 0;
    for(let i = 0; i < input.length - 1; i++){
        for(let j = i + 1; j < input.length; j++){
            if(input[i] + input[j] === two_d){
                a = input.indexOf(input[i]);
                b = input.indexOf(input[j]);   
            }
        }
    }
    let result = '';
    for(let i = 0; i < input.length; i++){
        if(i !== a && i !== b){
            result += `${input[i]}\n`;
        }
    }
    console.log(result);
    process.exit();
});
