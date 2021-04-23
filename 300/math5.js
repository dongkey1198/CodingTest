const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', (line)=>{
   input = line.split(' ').map(num => Number(num));
}).on('close', ()=>{
    
    for(let i = input[0]; i <= input[1]; i++){
        let isPrime = true;
        if(i === 0 || i === 1){
            isPrime = false;
            continue;   
        }
        for(let j = 2; j <= Math.sqrt(i); j++){
            if(i%j === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            console.log(i);
        }
    }
    process.exit();
});