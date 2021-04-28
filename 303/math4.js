const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', (line)=>{
    input = parseInt(line);
}).on('close', ()=>{
    let result = "";
    while(input !== 1){
        let isPrime = true;
        for(let i = 2; i <= Math.sqrt(input); i++){
            if(input%i === 0){
                result += `${i}\n`;
                input = parseInt(input/i);
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            result += `${input}\n`;
            break;
        }
    }
    console.log(result);
    process.exit();
});