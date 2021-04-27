const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', (line)=>{
    input = Number(line);
}).on('close', ()=>{
    
    if(input === 1 || input === 0){
        console.log(input.toString());
    } else{
        console.log(solution(input));
    }

    function solution(num){
        let binary = '';
        while(true){
            let tmp = num % -2;
            if(num === 0 || num === -0){
                break;
            }
            if(tmp === 0){
                binary = Math.abs(tmp) + binary;
                num = num/-2;
            } else{
                binary = Math.abs(tmp) + binary;
                num = (num-1)/-2;
            }
        }
        return binary;
    }
    
    process.exit();
});

