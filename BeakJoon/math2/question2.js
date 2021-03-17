const realine = require('readline');
const rl = realine.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=> {
    input.push(parseInt(line));
}).on('close', ()=>{
    let M = input[0];
    let N = input[1];
    let numbers = N-M;
    
    let primeNumbers = [];
    let sum = 0;
    for(let i = 0; i <= numbers; i++){
        let isPrime = true;
        if(M === 1 || M === 0){
            M++;
            continue;
        }
        for(let j = 2; j <= Math.sqrt(M); j++){
            if(M%j === 0){
                isPrime =false;
                M++;
                break;
            }
        }
        if(isPrime){
            primeNumbers.push(M);
            sum += M;
            M++; 
        }
    }
    if(!primeNumbers.length){
        console.log(-1);
    }else{
        console.log(`${sum}\n${primeNumbers[0]}`);
    }
    
    process.exit();
});